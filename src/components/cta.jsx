import React from "react";
import { motion } from "framer-motion";
import ctc from "../assets/ctc.png";

const Cta = () => {
  return (
    <motion.section id="cta"
      className="mt-24 mx-6 md:mx-12 rounded-3xl overflow-hidden relative bg-cover bg-center py-16 px-6 md:py-24 md:px-12 text-center"
      style={{
        backgroundImage: `url(${ctc})`,
        backgroundPosition: "right bottom",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Glow + Border */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        
        <motion.h2
          className="text-3xl md:text-5xl leading-tight font-semibold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to experience the perfect coffee?
        </motion.h2>

        <motion.p
          className="mt-4 text-white/80 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Visit us today or explore our menu online.
        </motion.p>

       <motion.a
            href="https://wa.me/918945950843"
            target="_blank"
            rel="noopener noreferrer"
            
            className="inline-block mt-6 px-8 py-3 bg-white text-[#6f4e37] md:rounded-full rounded-full font-semibold 
            shadow-lg hover:shadow-2xl active:scale-95 transition duration-300 hover:text-green-600"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
                Order Now →
</motion.a>

        <motion.p
          className="text-sm text-white/70 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Loved by 500+ coffee lovers daily ☕
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Cta;