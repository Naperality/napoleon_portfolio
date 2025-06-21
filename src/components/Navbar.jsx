
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
