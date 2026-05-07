import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Coffee", "Bakery", "Experience"];

const menuItems = [
  {
    title: "Signature Brews",
    desc: "Rich, bold, and perfectly balanced flavors in every cup.",
    icon: "☕",
    category: "Coffee",
  },

  {
    title: "Cold Brew Classics",
    desc: "Smooth handcrafted cold brews made for slow mornings.",
    icon: "🧋",
    category: "Coffee",
  },

  {
    title: "Fresh Bakes",
    desc: "Daily baked delights that pair perfectly with your coffee.",
    icon: "🥐",
    category: "Bakery",
  },

  {
    title: "Dessert Specials",
    desc: "Soft, sweet and beautifully plated signature desserts.",
    icon: "🍰",
    category: "Bakery",
  },

  {
    title: "Warm Ambience",
    desc: "A cozy space designed for comfort, creativity, and connection.",
    icon: "🪑",
    category: "Experience",
  },

  {
    title: "Live Music Nights",
    desc: "Curated evenings with coffee, jazz and late-night conversations.",
    icon: "🎷",
    category: "Experience",
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id='menu' className="relative px-6 md:px-20 pt-24 pb-32 bg-gradient-to-b from-transparent via-white to-white overflow-hidden">
      
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c08b5c12] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm tracking-[0.25em] text-gray-500 uppercase mb-4">
            What We Offer
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <h2 className="text-4xl md:text-5xl font-semibold text-[#2d1f14] leading-tight max-w-2xl">
              Crafted for coffee lovers.
            </h2>

            {/* filter pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-5 py-2 rounded-full text-sm transition-all duration-300

                    ${
                      activeCategory === category
                        ? "bg-black text-white shadow-lg"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* cards */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white/80
                  backdrop-blur-xl
                  p-8
                  border border-[#00000008]

                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  transition-all
                  duration-300
                "
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#c08b5c10] via-transparent to-[#2d1f1410]" />

                {/* category badge */}
                <div className="absolute top-5 right-5 text-[11px] uppercase tracking-widest text-gray-400">
                  {item.category}
                </div>

                {/* icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-4xl mb-6 relative z-10"
                >
                  {item.icon}
                </motion.div>

                {/* title */}
                <h3 className="text-xl font-semibold text-gray-900 relative z-10">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* bottom line */}
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                {/* subtle ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;