import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import translations from '../translations';
import { motion, AnimatePresence } from "framer-motion";
import { PiWhatsappLogoDuotone } from 'react-icons/pi';
import { BsWhatsapp } from 'react-icons/bs';
import BookingFormnew from './bookform.jsx';
import HeroButton from './shared/HeroButton.js';
import HeroButton2 from './shared/HeroButton2.js';
import { PulsatingButton } from './magicui/pulsating-button.js';
interface HeroProps {
  language: 'en' | 'ar';
}

const images = [
  "/assests/1.jpg",
  "/assests/2.jpg",
  "/assests/hero.jpg",


];
const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="relative w-full max-w-xl  mx-auto overflow-hidden rounded-xl shadow-lg">

      </div>

      <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            {images.map((img, i) => (
              index === i && (
                <motion.img
                  key={i}
                  src={img}
                  initial={{ scale: 1.18, opacity: 0, position: 'absolute' }}
                  animate={{ scale: 1, opacity: 1, position: 'absolute' }}
                  exit={{ scale: 1, opacity: 0.2, position: 'absolute' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  style={{ zIndex: 0 }}
                />
              )
            ))}
          </AnimatePresence>
          {/* Carousel Circles */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full border-2 border-[#ff8706] transition-all duration-300 ${index === i ? 'bg-[#ff8706]' : 'bg-white'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center max-w-3xl w-full px-4 md:px-8 ${dir === 'rtl' ? 'rtl' : ''}`}>
            <h1 className="text-4xl md:text-5xl [text-shadow:6px_1px_2px_rgba(0,0,0,1)] lg:text-6xl text-opacity-100 font-extrabold shadow-black font-serif bg-transparent text-white mb-6 animate-fadeIn">
              {/* Add your headline here */}
           
            </h1>
            <div className="flex flex-col mb-10 sm:flex-row justify-center gap-12">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <PulsatingButton>
                  Whatsapp
                </PulsatingButton>
              </a>
              <a
                href="#booking"
                className="w-full sm:w-auto"
              >
                <PulsatingButton>
                  Book Now
                </PulsatingButton>
              </a>
            </div>
           
              <BookingFormnew />
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;