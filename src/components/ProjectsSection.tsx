"use client";
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Founder",
      description: "One of Minecraft's most popular and powerful Utility Modifications, with over one million total views on YouTube, 15,000 users, and $300,000 in revenue.",
      name: "Novoline Solutions",
      demo: "https://www.novoline.lol",
      code: "https://www.github.com/lucas-svi/Novoline",
      startDate: "2018-05-01",
      tech: ["Java", "Kotlin", "MongoDB", "Lua", "Jenkins"],
      category: "personal",
    },
    {
      title: "Group Lead / Lead Developer",
      description: "Decentralized, secure, and encrypted blockchain-based file sharing.",
      name: "FileZero",
      demo: "https://svirsky.dev/apps/filezero/",
      code: "https://github.com/lucas-svi/FileZero",
      startDate: "2024-10-01",
      endDate: "2024-12-06",
      tech: ["Node.js", "Solidity", "IPFS"],
      category: "school",
    },
    {
      title: "Lead Developer",
      description: "#1 Moving Company in the USA according to moveBuddha.",
      name: "Safeway Moving Systems",
      demo: "https://www.safewaymovinginc.com",
      code: "https://github.com/lucas-svi/Safeway-Recording-Assistant",
      startDate: "2019-06-01",
      tech: ["Python", "Java", "JavaScript", "Kubernetes", "Django", "AWS"],
      category: "work",
    },
  ];

  return (
    <section className="relative min-h-screen text-white px-8 py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-12 tracking-wide">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            name={project.name}
            demo={project.demo}
            code={project.code}
            startDate={project.startDate}
            endDate={project.endDate}
            tech={project.tech}
          />
        ))}
      </div>

      <div className="mt-12">
        <Link 
          href="/projects" 
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
        >
          View All My Projects
        </Link>
      </div>
    </section>
  );
}
