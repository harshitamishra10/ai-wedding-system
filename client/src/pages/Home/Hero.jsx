import { motion } from "framer-motion";
import heroBg from "../../assets/images/Hero/weddingVenue.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">

        {/* <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-white" */}
          <motion.div
  initial={{
    opacity: 0,
    x: -100,
    filter: "blur(15px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.5,
    ease: "easeOut",
  }}
  className="max-w-2xl text-white"
>
{/*         
          <h1 className="text-6xl font-bold leading-tight">
            Plan Your Dream Wedding
            <span className="text-pink-400"> with AI</span>
          </h1> */}
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
  Plan Your Dream
  <br />
  Wedding with{" "}
  <span className="text-pink-400">
    AI
  </span>
</h1>

          <p className="mt-6 text-xl text-gray-200">
            Plan your perfect wedding with the power of AI. Get personalized timelines, stunning album layouts, intelligent video planning, and smart recommendations—all designed to match your style. Save time, reduce stress, and enjoy a seamless wedding planning experience from start to finish.
          </p>


          <div className="mt-10 flex gap-5">
            <button className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;