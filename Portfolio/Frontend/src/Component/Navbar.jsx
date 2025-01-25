import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-300 shadow-lg px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <a href="/" className="text-2xl font-bold text-gray-300">YourName</a>

      {/* Middle - Navigation Menu (Desktop) */}
      <ul className="hidden md:flex gap-x-6">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li className="relative group">
          <button className="hover:text-white">Project</button>
          <ul className="absolute left-0 hidden group-hover:block bg-black text-gray-300 py-2">
            <li><a href="/projects/web" className="block px-4 py-2 hover:bg-gray-700">Web</a></li>
            <li><a href="/projects/mobile" className="block px-4 py-2 hover:bg-gray-700">Mobile</a></li>
          </ul>
        </li>
        <li><a href="/services" className="hover:text-white">Service</a></li>
        <li><a href="/resume" className="hover:text-white">Resume</a></li>
      </ul>

      {/* Right - Contact Button */}
      <a href="/contact" className="hidden md:block btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl">
        Contact Us
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-gray-300 flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Project</a>
          <a href="/services" className="hover:text-white" onClick={() => setIsOpen(false)}>Service</a>
          <a href="/resume" className="hover:text-white" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="/contact" className="btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
