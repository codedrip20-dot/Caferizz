import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#cta" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold tracking-wide cursor-pointer"
          >
            Caffe<span className="text-[#8B5E3C]">Rizz</span>
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                }}
                className="
                  relative
                  hover:text-black
                  transition
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[1.5px]
                  after:w-0
                  after:bg-black
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Desktop Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}

              className="
                hidden md:block
                bg-black
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                hover:bg-gray-800
                transition
                shadow-lg
              "
            ><a  href="https://wa.me/918945950843">Order Now</a>
              
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                p-2
                rounded-full
                hover:bg-black/5
                transition
              "
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[75%]
                bg-white
                z-50
                shadow-2xl
                p-8
                md:hidden
              "
            >
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    className="
                      text-lg
                      text-gray-700
                      hover:text-black
                      transition
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="
                    mt-6
                    bg-black
                    text-white
                    py-3
                    rounded-full
                    text-sm
                    shadow-lg
                  "
                >
                <a  href="https://wa.me/918945950843">Order Now</a>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;