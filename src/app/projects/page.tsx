import ProjectCard from '@/components/ProjectCard';
import {Timeline} from '@/components/Timeline';

export default function Projects() {
  
  type Category = 'personal' | 'school' | 'work';

  type Project = {
    title: string;
    description: string;
    name: string;
    code?: string;
    startDate: string;
    endDate?: string;
    tech: string[];
    category: Category;
    demo?: string;
  };

  type Milestone = {
    date: string;
    title: string;
    category?: Category;
  }

  const projects: Project[] = [
    {
      title: "Group Lead / Lead Developer",
      description: "Custom course scheduler based on your interests for WesHack 2024",
      name: "Classify",
      code: "https://github.com/lucas-svi/Classify",
      startDate: "2024-11-17",
      endDate: "2024-11-18",
      tech: ["Python", "Flask", "SQLite", "HTML, CSS", "JavaScript"],
      category: "school"
    },
    {
      title: "Lead Developer",
      description: "#1 Moving Company in the USA according to moveBuddha",
      name: "Safeway Moving Systems",
      demo: "https://www.safewaymovinginc.com",
      code: "https://github.com/lucas-svi/Safeway-Recording-Assistant",
      startDate: "2019-06-01",
      tech: ["Python", "Java", "JavaScript", "Kubernetes", "Django", "AWS"],
      category: "work"
    },
    {
      title: "Founder",
      description: "One of Minecraft's most popular and powerful Utility Modifications, with over one million total views on YouTube",
      name: "Novoline Solutions",
      demo: "https://www.novoline.lol",
      code: "https://www.github.com/lucas-svi/Novoline",
      startDate: "2018-05-01",
      tech: ["Java", "Kotlin", "MongoDB", "Lua", "Jenkins"],
      category: "personal"
    },
    {
      title: "Group Lead / Lead Developer",
      description: "Decentralized, secure, and encrypted blockchain-based file sharing",
      name: "FileZero",
      demo: "https://svirsky.dev/filezero",
      code: "https://github.com/lucas-svi/FileZero",
      startDate: "2024-10-01",
      endDate: "2024-12-06",
      tech: ["Node.js", "Solidity", "IPFS"],
      category: "school"
    },
    {
      title: "Fullstack Developer",
      description: "Created a database of every moving company in the USA to protect people from scam moving companies",
      name: "USMPO",
      demo: "https://usmpo.org",
      startDate: "2024-09-10",
      endDate: "2024-12-02",
      tech: ["Python", "JavaScript", "PHP"],
      category: "work"
    },
    {
      title: "Backend Developer",
      description: "Created a seat-notification system for Wesleyan's student app",
      name: "OurCampus",
      demo: "https://www.instagram.com/ourcampus_wes/",
      code: "https://github.com/OurCampusWes",
      startDate: "2022-10-01",
      endDate: "2023-01-01",
      tech: ["Python", "JavaScript", "Firebase"],
      category: "school"
    },
  ];

  const milestones: Milestone[] = [
    {
      date: '2022-06-01',
      title: 'Scaled Novoline to 15,000 active users and surpassed $300k in annual revenue',
    },
    {
      date: '2022-08-31',
      title: 'Began studies at Wesleyan University, majoring in Computer Science',
      category: "school"
    },
    {
      date: '2024-12-03',
      title: 'Secured approval for my custom-designed major — "Artificial Business" — blending technology, AI, and business strategy',
      category: "school"
    }
  ];

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <Timeline projects={projects} milestones={milestones}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
