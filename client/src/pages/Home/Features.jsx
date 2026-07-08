// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   Images,
//   Video,
//   Wallet,
//   MapPinned,
//   Users,
//   Heart,
//   Sparkles,
//   Clock,
// } from "lucide-react";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
//   },
// };

// const headingVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const cardGridVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const features = [
//   {
//     icon: CalendarDays,
//     title: "AI Wedding Timeline",
//     description:
//       "Automatically generates a complete wedding schedule based on your events and preferences.",
//   },
//   {
//     icon: Images,
//     title: "Smart Album Layout",
//     description:
//       "AI designs elegant album layouts with beautiful memories arranged automatically.",
//   },
//   {
//     icon: Video,
//     title: "AI Video Planning",
//     description:
//       "Generate cinematic wedding video timelines and smart editing suggestions.",
//   },
//   {
//     icon: Wallet,
//     title: "Budget Planner",
//     description:
//       "Track wedding expenses and receive AI-powered budget recommendations.",
//   },
//   {
//     icon: MapPinned,
//     title: "Venue Recommendations",
//     description:
//       "Receive personalized venue suggestions based on budget, location and guest count.",
//   },
//   {
//     icon: Users,
//     title: "Guest Management",
//     description:
//       "Manage invitations, RSVP tracking and guest lists effortlessly.",
//   },
// ];

// const stats = [
//   { icon: Heart, value: "500+", label: "Happy Couples" },
//   { icon: Images, value: "1000+", label: "Albums Generated" },
//   { icon: Sparkles, value: "98%", label: "Client Satisfaction" },
//   { icon: Clock, value: "24/7", label: "AI Assistance" },
// ];

// export default function Features() {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={sectionVariants}
//       className="relative w-full overflow-hidden bg-linear-to-b from-[#0F172A] via-[#1E1B4B] to-[#312E81] py-28"
//     >
//       {/* Ambient glow orbs — consistent with Hero/Footer */}
//       <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#7C3AED]/25 blur-[120px]" />
//       <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#EC4899]/20 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FACC15]/10 blur-[110px]" />

//       {/* Centered content wrapper */}
//       <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:px-8 lg:px-10">
//         {/* Heading */}
//         <motion.div
//           variants={headingVariants}
//           className="mx-auto mb-20 flex max-w-4xl flex-col items-center justify-center text-center"
//         >
//           <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
//             Everything You Need
//             <br />
//             to Plan Your{" "}
//             <span className="bg-linear-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
//               Perfect Wedding
//             </span>
//           </h2>
//           <motion.p
//             variants={headingVariants}
//             className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-gray-400 sm:text-lg"
//           >
//             Powered by Artificial Intelligence to simplify planning, automate
//             wedding management, and create unforgettable memories.
//           </motion.p>
//         </motion.div>

//         {/* Feature Cards Grid — centered, equal sizing, consistent style */}
//         <motion.div
//           variants={cardGridVariants}
//           className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {features.map(({ icon: Icon, title, description }) => (
//             <motion.div
//               key={title}
//               variants={cardVariants}
//               whileHover={{ y: -10, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className="group relative flex h-full w-full max-w-90 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-black/20 backdrop-blur-md transition-colors duration-300 hover:border-white/20"
//             >
//               {/* soft glow that grows on hover — behind content, same stacking context */}
//               <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-r from-[#7C3AED]/0 to-[#EC4899]/0 opacity-0 blur-xl transition-all duration-300 group-hover:from-[#7C3AED]/30 group-hover:to-[#EC4899]/30 group-hover:opacity-100" />

//               {/* card content sits above the glow */}
//               <div className="relative z-10 flex flex-1 flex-col">
//                 <motion.div
//                   whileHover={{ rotate: 8, scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                   className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#7C3AED] to-[#EC4899] shadow-lg shadow-purple-900/30"
//                 >
//                   <Icon className="h-7 w-7 text-white" />
//                 </motion.div>

//                 <h3 className="mt-8 text-xl font-semibold text-white">
//                   {title}
//                 </h3>
//                 <p className="mt-4 text-base leading-relaxed text-gray-400">
//                   {description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Row */}
//         <motion.div
//           variants={cardGridVariants}
//           className="mt-28 grid w-full grid-cols-2 gap-6 sm:mt-32 sm:grid-cols-4 sm:gap-8"
//         >
//           {stats.map(({ icon: Icon, value, label }) => (
//             <motion.div
//               key={label}
//               variants={cardVariants}
//               whileHover={{ y: -6, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#7C3AED] to-[#EC4899]">
//                 <Icon className="h-4 w-4 text-white" />
//               </div>
//               <p className="mt-4 bg-linear-to-br from-white to-pink-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
//                 {value}
//               </p>
//               <p className="mt-1 text-xs text-gray-400 sm:text-sm">{label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }
import { motion } from "framer-motion";
import {
  CalendarDays,
  Images,
  Video,
  Wallet,
  MapPinned,
  Users,
  Heart,
  Sparkles,
  Clock,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: CalendarDays,
    title: "AI Wedding Timeline",
    description:
      "Automatically generates a complete wedding schedule based on your events and preferences.",
  },
  {
    icon: Images,
    title: "Smart Album Layout",
    description:
      "AI designs elegant album layouts with beautiful memories arranged automatically.",
  },
  {
    icon: Video,
    title: "AI Video Planning",
    description:
      "Generate cinematic wedding video timelines and smart editing suggestions.",
  },
  {
    icon: Wallet,
    title: "Budget Planner",
    description:
      "Track wedding expenses and receive AI-powered budget recommendations.",
  },
  {
    icon: MapPinned,
    title: "Venue Recommendations",
    description:
      "Receive personalized venue suggestions based on budget, location and guest count.",
  },
  {
    icon: Users,
    title: "Guest Management",
    description:
      "Manage invitations, RSVP tracking and guest lists effortlessly.",
  },
];

const stats = [
  { icon: Heart, value: "500+", label: "Happy Couples" },
  { icon: Images, value: "1000+", label: "Albums Generated" },
  { icon: Sparkles, value: "98%", label: "Client Satisfaction" },
  { icon: Clock, value: "24/7", label: "AI Assistance" },
];

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden bg-linear-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
    >
      {/* Ambient soft gold/cream glows — consistent with Hero */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      {/* Centered content wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-20 flex max-w-4xl flex-col items-center justify-center text-center"
        >
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Everything You Need
            <br />
            to Plan Your{" "}
            <span className="text-[#C8A96A]">
              Perfect Wedding
            </span>
          </h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-[#6B665E] sm:text-lg"
          >
            Powered by Artificial Intelligence to simplify planning, automate
            wedding management, and create unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid — centered, equal sizing, consistent style */}
        <motion.div
          variants={cardGridVariants}
          className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex h-full w-full max-w-90 flex-col overflow-hidden rounded-[28px] border border-[#E7DFD2] bg-white p-10 shadow-lg shadow-[#3B342C]/5 transition-colors duration-300 hover:border-[#C8A96A]/40"
            >
              {/* soft gold glow that grows on hover — behind content, same stacking context */}
              <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-[#C8A96A]/0 opacity-0 blur-xl transition-all duration-300 group-hover:bg-[#C8A96A]/10 group-hover:opacity-100" />

              {/* card content sits above the glow */}
              <div className="relative z-10 flex flex-1 flex-col">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30"
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="mt-8 font-serif text-xl font-semibold text-[#3B342C]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6B665E]">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={cardGridVariants}
          className="mt-28 grid w-full grid-cols-2 gap-6 sm:mt-32 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-[28px] border border-[#E7DFD2] bg-white px-6 py-10 text-center shadow-lg shadow-[#3B342C]/5 transition-all duration-300 hover:border-[#C8A96A]/40 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96A]">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <p className="mt-4 font-serif text-2xl font-bold text-[#3B342C] sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-[#6B665E] sm:text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

