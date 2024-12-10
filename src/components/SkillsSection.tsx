"use client";
export default function SkillsSection() {
  const programmingLanguages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Kotlin',
    'Solidity',
    'Java',
    'C++',
    'HTML',
    'CSS',
    'Lua',
    'PHP',
    'SML',
    'C',
    'C#',
  ];

  const toolsAndMethodologies = [
    'Google Firebase',
    'GitHub Actions',
    'TensorFlow',
    'Kubernetes',
    'PyTorch',
    'Jenkins',
    'MongoDB',
    'NoSQL',
    'DevOps',
    'Docker',
    'Flask',
    'Redis',
    'Linux',
    'Unix',
    'MySQL',
    'Pandas',
    'Azure',
    'Agile',
    'AWS',
    'Git',
  ];

  const sortedLanguages = [...programmingLanguages].sort((a, b) => b.length - a.length);
  const sortedTools = [...toolsAndMethodologies].sort((a, b) => b.length - a.length);

  return (
    <section className="relative min-h-screen text-white px-8 py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-12 tracking-wide">Skills</h2>
      <div className="flex flex-col gap-12 max-w-6xl w-full">
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {sortedLanguages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-lg"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center">Tools & Methodologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {sortedTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
