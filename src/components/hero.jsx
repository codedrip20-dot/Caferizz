import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/banana leaves.PNG";

const Hero = () => {
  return (
    <section id="hero"
      className="relative min-h-[85vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
        
        {/* LEFT */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mt-0.8 text-sm tracking-widest text-gray-200 md:text-gray-300">
            Welcome to caffe Rizz 
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            witness the <br />
            <span className="text-[#8B5E3C]">art</span> of coffee.
          </h1>

          <p className="mt-4 text-gray-200 md:text-gray-300 max-w-md mx-auto md:mx-0">
            Where every cup is a masterpiece and every moment is yours.
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full hover:shadow-lg transition"
            >
              View Menu
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Watch Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="coffee"
              className="rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] w-[220px] md:w-[360px] md:rotate-[-2deg]"
              
              // floating animation
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              // keep your hover effects
              whileHover={{ scale: 1.05, rotate: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;