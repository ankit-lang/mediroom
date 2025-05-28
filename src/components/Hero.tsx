import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import translations from '../translations';
import { motion, AnimatePresence } from "framer-motion";
import { PiWhatsappLogoDuotone } from 'react-icons/pi';
import { BsWhatsapp } from 'react-icons/bs';
import BookingFormnew from './bookform.jsx';
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
      <div id="home" className="absoulte h-screen">

        {/* Background image with overlay */}
        <div
          className="absolute inset-0  bg-cover bg-center  "
          style={{ backgroundImage: "url('/assests/2.jpg')" }}
        >

        </div>
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ scale: 1, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1, opacity: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            className=" absolute w-full h-full object-cover opacity-25"
          />
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl ${dir === 'rtl' ? 'rtl' : ''}`}>
            <h1 className="text-4xl md:text-5xl [text-shadow:6px_1px_2px_rgba(0,0,0,1)]  lg:text-6xl text-opacity-100 font-extrabold shadow-black font-serif bg-transparent   text-white mb-6 animate-fadeIn">
              Welcome to Moydom Bed & Breakfast

            </h1>
            {/* <p className="text-lg md:text-1xl font-semibold font-serif   text-white mb-8">
            Your Healing Home in Delhi – Trusted by Guests from the Middle East.
            A quiet corner of comfort in the heart of Delhi – just minutes away from Max, Fortis, Apollo, and AIIMS.
          </p> */}
            <div className="flex flex-col mt-20 sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center md:gap-2 gap-1 "
              >
                <BsWhatsapp />
                {t.hero.whatsappButton}
              </a>
              <a
                href="#booking"
                className="btn-secondary"
              >
                {t.hero.bookButton}
              </a>
            </div>
            <div className="mt-5 hidden md:block">
              <BookingFormnew />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> */}
        {/* <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"> */}
        {/* <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Hero;