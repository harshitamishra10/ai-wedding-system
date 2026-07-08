// // import { Link } from "react-router-dom";
// // import { Menu } from "lucide-react";

// // const Navbar = () => {
// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50">
// //       {/* <div className="max-w-7xl mx-auto mt-5 px-6"> */}
// //       <div className="w-full px-12 mt-5">
// //         <nav className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">

// //           {/* Logo */}
// //           <Link
// //             to="/"
// //             className="text-3xl font-bold text-pink-300 tracking-wide"
// //           >
// //             💍 WedAI
// //           </Link>

// //           {/* Menu */}
// //           <ul className="hidden lg:flex items-center gap-10 text-blue-50 font-medium">
// //             <li>
// //               <a href="#home" className="hover:text-pink-300 duration-300">
// //                 Home
// //               </a>
// //             </li>

// //             <li>
// //               <a href="#features" className="hover:text-pink-300 duration-300">
// //                 Features
// //               </a>
// //             </li>

// //             <li>
// //               <a href="#workflow" className="hover:text-pink-300 duration-300">
// //                 Workflow
// //               </a>
// //             </li>

// //             <li>
// //               <a href="#gallery" className="hover:text-pink-300 duration-300">
// //                 Gallery
// //               </a>
// //             </li>

// //             <li>
// //               <a href="#contact" className="hover:text-pink-300 duration-300">
// //                 Contact
// //               </a>
// //             </li>
// //           </ul>

// //           {/* Buttons */}
// //           <div className="hidden lg:flex items-center gap-4">

// //             <Link
// //               to="/login"
// //               className="text-blue-50 hover:text-pink-300"
// //             >
// //               Sign In
// //             </Link>

// //             <Link
// //               to="/register"
// //               className="px-7 py-2 full rounded  bg-gradient-to-r from-pink-500 to-violet-600 text-black font-semibold hover:scale-105 duration-300"
// //             >
// //               Register
// //             </Link>

// //           </div>

// //           {/* Mobile Menu */}
// //           <button className="lg:hidden text-white">
// //             <Menu size={30} />
// //           </button>

// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;
// import { ChevronDown, ShoppingBag } from "lucide-react";
// import logo from "../../assets/logo/WEDAI.jpg";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#F7F3EC] border-b border-[#e7dfd2]">
//       <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

//         {/* Left Menu */}
//         <nav className="hidden items-center gap-10 lg:flex">
//           <a
//             href="#home"
//             className="flex items-center gap-1 text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Home
//             <ChevronDown size={15} />
//           </a>

//           <a
//             href="#portfolio"
//             className="text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Portfolio
//           </a>

//           <a
//             href="#gallery"
//             className="flex items-center gap-1 text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Pages
//             <ChevronDown size={15} />
//           </a>
//         </nav>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2">
//           <img
//   src={logo}
//   alt="WedAI"
//   className="h-24 w-auto object-contain"
// />

//         </div>

//         {/* Right Menu */}
//         <nav className="hidden items-center gap-10 lg:flex">

//           <a
//             href="#journal"
//             className="text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Journal
//           </a>

//           <a
//             href="#services"
//             className="flex items-center gap-1 text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Services
//             <ChevronDown size={15} />
//           </a>

//           <a
//             href="#shop"
//             className="text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]"
//           >
//             Shop
//           </a>

//           <button className="flex items-center gap-2 text-[15px] uppercase tracking-[3px] text-[#444] hover:text-[#B88A44]">
//             Cart
//             <ShoppingBag size={18} />
//           </button>

//         </nav>

//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
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

          <a
            href="#home"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Dashboard
          </a>

          <a
            href="#gallery"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
          >
            Contact
          </a>

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