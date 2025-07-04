import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import FadeInFromBottom from "./FadeFromBottom";
import { AnimatePresence, motion } from 'framer-motion';

const images = [
      "/assests/28.jpg",
      "/assests/82.jpg",
      "/assests/27.jpeg",
];

const RoomsSection = () => {
      const [index, setIndex] = useState(0);
      const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

      React.useEffect(() => {
            const interval = setInterval(() => {
                  setDirection(1);
                  setIndex((prev) => (prev + 1) % images.length);
            }, 3500); // 3.5 seconds
            return () => clearInterval(interval);
      }, [images.length]);

      const prevSlide = () => {
            setDirection(-1);
            setIndex((index - 1 + images.length) % images.length);
      };

      const nextSlide = () => {
            setDirection(1);
            setIndex((index + 1) % images.length);
      };

      return (
            <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-white">
                  {/* Carousel */}
                  <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden flex flex-col items-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                              <AnimatePresence initial={false} custom={direction}>
                                    <motion.img
                                          key={index}
                                          src={images[index]}
                                          alt="Room"
                                          className="w-full h-full object-cover rounded shadow-lg absolute"
                                          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    />
                              </AnimatePresence>
                              {/* Left Arrow */}
                              <button
                                    onClick={prevSlide}
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-100 z-10"
                              >
                                    <ChevronLeft className="w-5 h-5" />
                              </button>
                              {/* Right Arrow */}
                              <button
                                    onClick={nextSlide}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-100 z-10"
                              >
                                    <ChevronRight className="w-5 h-5" />
                              </button>
                        </div>
                        {/* Circle Indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                              {images.map((_, i) => (
                                    <button
                                          key={i}
                                          onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                                          className={`w-3 h-3 rounded-full border-2 border-[#ff8706] transition-all duration-300 ${index === i ? 'bg-[#ff8706]' : 'bg-white'}`}
                                          aria-label={`Go to slide ${i + 1}`}
                                    />
                              ))}
                        </div>
                  </div>

                  {/* Text Content */}
                  <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-center ">
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                        >
                              <h2 className="text-3xl  text-center font-serif font-semibold text-[#073937] italic mb-4">
                                    Rooms & Suites
                              </h2>
                              <p className="text-gray-700 font-serif text-center md:text-lg leading-relaxed mb-6">
                                    With five categories of rooms, ranging from budget-friendly Executive
                                    rooms to the lavish Presidential Suite, our luxury boutique hotel in
                                    Udaipur caters to every traveller’s preferences. Each room boasts a
                                    private balcony, minibar and jacuzzi, providing an unparalleled level
                                    of comfort and luxury.
                              </p>
                              <button className="px-6 py-2 text-center bg-[#073937] text-white rounded hover:bg-[#4e7977]">
                                    View Rooms
                              </button>
                        </motion.div>
                  </div>
            </div>
      );
};

export default RoomsSection;
