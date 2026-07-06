import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* <div className="max-w-7xl mx-auto mt-5 px-6"> */}
      <div className="w-full px-12 mt-5">
        <nav className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-pink-300 tracking-wide"
          >
            💍 WedAI
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-blue-50 font-medium">
            <li>
              <a href="#home" className="hover:text-pink-300 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#features" className="hover:text-pink-300 duration-300">
                Features
              </a>
            </li>

            <li>
              <a href="#workflow" className="hover:text-pink-300 duration-300">
                Workflow
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-pink-300 duration-300">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-pink-300 duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="text-blue-50 hover:text-pink-300"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="px-7 py-2 full rounded  bg-gradient-to-r from-pink-500 to-violet-600 text-black font-semibold hover:scale-105 duration-300"
            >
              Register
            </Link>

          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden text-white">
            <Menu size={30} />
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;