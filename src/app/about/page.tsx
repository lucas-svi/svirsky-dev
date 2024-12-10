"use client";
import { useState, useEffect } from 'react';
import Typist from 'react-typist-component';
import Image from 'next/image';

export default function About() {
  const paragraphs = [
    "Hi, I’m Lucas Svirsky — a software engineer with a passion for crafting innovative and functional backend systems. My journey into tech started when I was just 14 years old, where I founded my very own software company, **Novoline Solutions**. What started as a small project for Minecraft mods quickly grew into a community of thousands of users and became one of the most recognized client-side modifications in the Minecraft space.",
    "A year later, I started working part-time as a developer for my brother's company, **Safeway Moving Systems**. Over the years, I’ve contributed to the company's technological growth, and Safeway eventually became the **#1 moving company in the USA** (according to moveBuddha). From developing backend systems to optimizing logistics, I learned the value of building scalable, real-world applications that make a tangible impact.",
    "In my free time, I love taking on side projects that challenge my skills and fuel my creativity. I’ve had the opportunity to work on **OurCampus**, a general-purpose app for my university, and I’ve also participated in hackathons like **WesHack 2024**, where I led the development of **Classify** — a custom course scheduler built in under 24 hours. I’m also the creator of **FileZero**, a decentralized file-sharing system, and I’ve contributed to **USMPO**, a consumer protection platform for the moving industry, by creating a national database of every safe and unsafe moving company.",
    "Outside of coding, I’m all about enjoying life with friends, family, and my girlfriend. I love exploring different states, tasting new foods, and I’m also a bit of a puzzle enthusiast — in fact, I’m in the **top 1% of Sudoku players**. I approach both work and life with curiosity, creativity, and a relentless desire to grow.",
    "Every project I take on is an opportunity to learn, challenge myself, and make something meaningful. If you’re interested in collaborating, learning more about my journey, or just want to say hi, drop me a message. I’m always open to connecting with curious minds."
  ];

  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    if (currentParagraph < paragraphs.length) {
      const timer = setTimeout(() => {
        setCurrentParagraph(currentParagraph + 1);
      }, paragraphs[currentParagraph].length * 50 + 1000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph]);

  const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => 
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <section className="relative min-h-screen text-white px-8 py-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-wide">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          {paragraphs.slice(0, currentParagraph + 1).map((text, index) => (
            <p key={index} className="text-lg leading-relaxed mb-6">
              <Typist typingDelay={20} cursor={'|'} hideCursorWhenDone={true} onTypingDone={() => {
                if (index === currentParagraph) {
                  setCurrentParagraph(currentParagraph + 1);
                }
              }}>
                {renderTextWithBold(text)}
              </Typist>
            </p>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'].map((src, idx) => (
            <div key={idx} className="relative w-full h-56 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={src}
                alt={`Image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}