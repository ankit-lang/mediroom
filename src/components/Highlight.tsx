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
import { FaCar, FaHospital, FaShieldAlt, FaShoppingCart, FaWifi } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
const highlights = [
      { icon: <Bed className="w-10 h-10" />, label: "Modern & Hygienic Rooms" },
      { icon: <Map className="w-10 h-10" />, label: "Prime Delhi Locations" },
      { icon: <FaHospital className="w-10 h-10" />, label: "Near Hospitals & Embassies" },
      { icon: <UtensilsCrossed className="w-10 h-10" />, label: "Meal Services Available" },
      { icon: <Bath className="w-10 h-10" />, label: "Bathtub in Rooms" },
      { icon: <MdOutlineCleaningServices className="w-10 h-10" />, label: "Daily Housekeeping" },
      { icon: <FaWifi className="w-10 h-10" />, label: "High-Speed Wi-Fi" },
      { icon: <FaCar className="w-10 h-10" />, label: "Airport Pick-up & Travel Desk" },
      { icon: <FaShieldAlt className="w-10 h-10" />, label: "Private Parking" },
      { icon: <FaShoppingCart className="w-10 h-10" />, label: "Nearby Medical Stores" },
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
                        <h2 className="text-3xl font-semibold font-serif italic text-[#784420] mb-10">Highlights</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                              {highlights.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 text-[#784420]">
                                          <div className="bg-white rounded-full border-2 border-[#784420] shadow-lg shadow-[#784420]/30 p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 6px 24px 0 #784420, 0 1.5px 6px 0 #784420' }}>
                                                {React.cloneElement(item.icon, { className: 'w-10 h-10 text-[#784420] drop-shadow-[0_2px_6px_rgba(120,68,32,0.5)]' })}
                                          </div>
                                          <p className="text-sm font-serif md:text-base">{item.label}</p>
                                    </div>
                              ))}
                        </div>
                  </motion.div>
            </section>
      );
}
