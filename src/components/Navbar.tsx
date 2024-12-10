import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-15 fixed top-0 w-full z-50 p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <Link href="/">Lucas Svirsky</Link>
        </h1>
        <ul className="flex gap-6">
          <li>
            <a href="/about" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-300">Projects</a>
          </li>
          <li>
            <a href="/resume" className="hover:text-gray-300">Resume</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
