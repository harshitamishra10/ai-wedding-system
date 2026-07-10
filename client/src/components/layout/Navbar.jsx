// 

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";
import logo from "../../assets/logo/WEDAI.jpg";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#ece5d8]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="WedAI"
            className="h-16 w-auto object-contain"
          />

          <span className="text-3xl font-serif tracking-wide text-[#444]">
            WedAI
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">

          <HashLink
            smooth
            to="/#home"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#features"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Features
          </HashLink>

          <HashLink
            smooth
            to="/#workflow"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Dashboard
          </HashLink>

          <HashLink
            smooth
            to="/#gallery"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Gallery
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Contact Us
          </HashLink>

        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/login"
            className="text-[#444] uppercase tracking-[2px] hover:text-[#C8A96A] transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-full border border-[#C8A96A] px-6 py-3 uppercase tracking-[2px] text-[#444] hover:bg-[#C8A96A] hover:text-white transition"
          >
            Register
          </Link>

        </div>

        {/* Mobile Icon */}
        <button className="lg:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
