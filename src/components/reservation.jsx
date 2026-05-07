import { useState } from "react";
import { motion } from "framer-motion";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Reservation request submitted!");

    setFormData({
      name: "",
      guests: "",
      date: "",
      time: "",
    });
  };

  return (
    <section id='reservation' className="relative px-6 md:px-20 py-28 overflow-hidden bg-[#f8f5f2]">
      
      {/* ambient glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#c08b5c15] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
              Reserve Your Spot
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#2d1f14] mb-6">
              Experience coffee
              <br />
              beyond the ordinary.
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              Reserve your table and enjoy handcrafted coffee,
              warm ambience, and unforgettable moments curated
              for true coffee lovers.
            </p>

            {/* opening hours */}
            <div className="mt-10 space-y-4">
              
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <span className="text-gray-600">Mon - Fri</span>
                <span className="font-medium">8:00 AM - 10:00 PM</span>
              </div>

              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">9:00 AM - 11:30 PM</span>
              </div>

              <div className="flex items-center justify-between pb-3">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border border-black/5
              rounded-[2rem]
              p-8 md:p-10
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            "
          >
            
            <div className="space-y-6">

              {/* name */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border border-gray-200
                    outline-none
                    focus:border-black
                    transition
                    bg-white/70
                  "
                />
              </div>

              {/* guests */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Guests
                </label>

                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border border-gray-200
                    outline-none
                    focus:border-black
                    transition
                    bg-white/70
                  "
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6+ People</option>
                </select>
              </div>

              {/* date */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border border-gray-200
                    outline-none
                    focus:border-black
                    transition
                    bg-white/70
                  "
                />
              </div>

              {/* time */}
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border border-gray-200
                    outline-none
                    focus:border-black
                    transition
                    bg-white/70
                  "
                />
              </div>

              {/* submit */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-2xl
                  font-medium
                  hover:bg-[#2d1f14]
                  transition
                  shadow-lg
                "
              >
                Reserve Table
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;