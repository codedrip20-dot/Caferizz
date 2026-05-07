import React from "react";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Cta from "./components/cta";
import NavBar from "./components/navBar";
import Reservation from "./components/reservation";

const App = () => {
  return (
   <div className="min-h-screen bg-[#f8f5f2] relative text-gray-900">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e6dccf,_transparent_60%)]"></div>
      <div className="relative z-10">
      {/* NAVBAR (we'll improve later) */}
      <NavBar />

      {/* HERO */}
   <Hero />

{/* Menu section */}
    <Menu/>
{/**Reservation */}
<Reservation />

{/** ctc section */}
<Cta />

    </div>
    </div>
  );
};

export default App;