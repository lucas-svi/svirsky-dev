"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationSpeedRef = useRef(0.001);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');
  let timeoutId: number | null = null;

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
    let width = window.innerWidth;
    let height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(85, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    containerRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(2, 2, 1).normalize();
    scene.add(directionalLight);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    let mesh: THREE.Mesh | null = null;

    dracoLoader.load("bubblegum_david.drc", (geometry) => {
      geometry.computeVertexNormals();
      geometry.center();
      const material = new THREE.MeshStandardMaterial({
        color: 0xffc0cb,
        metalness: 0.4,
        roughness: 0.6
      });
      mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.set(-1.5, 0, -2);
      scene.add(mesh);

      // Model fully loaded
      setIsModelLoaded(true);

      const boundingBox = new THREE.Box3().setFromObject(mesh);
      const size = boundingBox.getSize(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const distance = maxDimension / (2 * Math.tan(fov / 2));
      camera.position.set(0, 0, distance * 1.5);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.z += rotationSpeedRef.current;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      rotationSpeedRef.current = 0.01;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        rotationSpeedRef.current = 0.001;
      }, 200);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        {!isModelLoaded ? (
          <div className="text-2xl font-bold text-white-300">
            {loadingDots}
          </div>
        ) : (
          <div className="flex flex-col items-center fade-in-up pointer-events-auto">
            <h1 className="typing text-7xl font-bold text-white drop-shadow-lg">Hi, my name is Lucas.</h1>
            <p className="text-2xl mt-4 text-gray-300 tracking-wide">Innovating with Code, Building with Passion</p>
            <p className="text-2xl mt-4 text-gray-300 tracking-wide">Fullstack Developer</p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <a href="/projects" className="btn-primary">Explore My Projects</a>
                <a href="/resume" className="btn-secondary">Download Resume</a>
              </div>
              <div className="flex gap-4 mt-4 text-white text-2xl">
                  <a 
                  href="https://www.github.com/lucas-svi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white text-4xl hover:text-pink-400 transition-all"
                >
                  <FaGithub />
                </a>

                <a 
                  href="https://www.linkedin.com/in/lucas-svirsky-00a96922b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white text-4xl hover:text-blue-400 transition-all"
                >
                  <FaLinkedin />
                </a>

                <a 
                  href="mailto:lsvirsky@wesleyan.edu" 
                  className="text-white text-4xl hover:text-red-400 transition-all"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
