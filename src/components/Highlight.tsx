import {
      Waves,
      UtensilsCrossed,
      Bath,
      Bed,
      TrainFront,
      Martini,
      Map,
      Droplets
} from "lucide-react"; // Optional icon set
import React from "react";
import FadeInFromBottom from "./FadeFromBottom";
import { AnimatePresence, motion } from 'framer-motion';
const highlights = [
      { icon: <Waves className="w-10 h-10" />, label: "Lake Pichola Views" },
      { icon: <UtensilsCrossed className="w-10 h-10" />, label: "Udaipur's Top Restaurant" },
      { icon: <Droplets className="w-10 h-10" />, label: "Heated Swimming Pool" },
      { icon: <Bath className="w-10 h-10" />, label: "Bathtub in Rooms" },
      { icon: <Bed className="w-10 h-10" />, label: "Modern Themed Rooms" },
      { icon: <TrainFront className="w-10 h-10" />, label: "7 km From Railway Station" },
      { icon: <Martini className="w-10 h-10" />, label: "Bar" },
      { icon: <Map className="w-10 h-10" />, label: "Travel Desk" },
];

export default function Highlight() {
      return (
            <section id="highlight" className="bg-[white] py-12 text-center">
                  <motion.div


                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                  >
                        <h2 className="text-3xl font-semibold font-serif italic text-[#1e3a8a] mb-10">Highlights</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                              {highlights.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 text-gray-800">
                                          <div className="bg-white rounded-full border-2 border-[#ff8706] shadow-lg shadow-orange-300/60 p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 6px 24px 0 #ff8706a0, 0 1.5px 6px 0 #ff8706a0' }}>
                                                {React.cloneElement(item.icon, { className: 'w-10 h-10 text-[#ff8706] drop-shadow-[0_2px_6px_rgba(255,135,6,0.5)]' })}
                                          </div>
                                          <p className="text-sm font-serif md:text-base">{item.label}</p>
                                    </div>
                              ))}
                        </div>
                  </motion.div>
            </section>
      );
}
