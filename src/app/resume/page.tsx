"use client";

export default function ResumePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-8 py-20">
      <h1 className="text-5xl font-bold mb-8">My Resume</h1>
      <div className="w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>
      <a
        href="/resume.pdf"
        download
        className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
      >
        Download Resume
      </a>
    </section>
  );
}
