import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-md shadow-lg z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-sky-400 hover:text-yellow-400 transition">
          Naperality
        </Link>
        <div className="space-x-6 hidden sm:flex text-slate-300 text-sm">
          <Link href="/project" className="hover:text-sky-400 transition">Projects</Link>
          <Link href="/about" className="hover:text-sky-400 transition">About</Link>
          <Link href="/resume" className="hover:text-sky-400 transition">Resume</Link>
          <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
