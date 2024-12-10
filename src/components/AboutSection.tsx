"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');
  let mixer = null;

  useEffect(() => {
    const dots = ['.', '..', '...'];
    let index = 0;
    const interval = setInterval(() => {
      setLoadingDots(dots[index]);
      index = (index + 1) % dots.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let width = containerRef.current?.clientWidth || window.innerWidth;
    let height = containerRef.current?.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.set(0, 2, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    let loadedModel = null;

    const loader = new FBXLoader();
    loader.load(
      '/dance.fbx',
      (object) => {
        object.scale.set(1, 1, 1);
        object.position.set(0, 0, 0);
        scene.add(object);
        loadedModel = object;
        setIsModelLoaded(true);

        mixer = new THREE.AnimationMixer(object);
        
        if (object.animations && object.animations.length > 0) {
          object.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
        }

        const box = new THREE.Box3().setFromObject(object);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());

        object.position.x += (object.position.x - center.x);
        object.position.y += (object.position.y - center.y);
        object.position.z += (object.position.z - center.z);

        camera.position.z = size * 2;
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('An error occurred while loading the FBX model:', error);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      
      if (mixer) mixer.update(delta);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = containerRef.current?.clientWidth || window.innerWidth;
      height = containerRef.current?.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center min-h-screen text-white px-8 py-20">
      <div className="w-full md:w-1/2 h-64 md:h-full relative mb-12 md:mb-0">
        <div ref={containerRef} className="w-full h-full"></div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        {!isModelLoaded ? (
          <div className="text-2xl text-gray-300">
            Loading{loadingDots}
          </div>
        ) : (
            <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Who I Am
                </h2>
                <p className="text-xl md:text-2xl text-white-300 leading-relaxed mb-4">
                    I’m a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradientTestStart to-gradientTestEnd animate-gradient bg-200%">
                Fullstack Developer
                </span> with a passion for crafting functional, scalable, and efficient backend systems. My work is driven by a commitment to problem-solving, clean architecture, and thoughtful design.
                </p>
                <p className="text-lg md:text-xl text-white-300 leading-relaxed">
                    I’m constantly exploring new, innovative technologies and have an insatiable drive to learn and expand my technical knowledge. From embracing emerging tools to mastering established frameworks, I strive to stay at the forefront of software development.
                </p>
                </div>
        )}
      </div>
    </section>
  );
}