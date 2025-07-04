import React from 'react';
import { Utensils, Wifi, Armchair as Wheelchair, Plane, Clock, Heart } from 'lucide-react';
import translations from '../translations';
import RoomsSection from './RoomSectionAbout';
import { AnimatePresence, motion } from 'framer-motion';
interface FacilitiesProps {
  language: 'en' | 'ar';
}

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import FadeInFromBottom from './FadeFromBottom';

const images = [
  "/assests/28.jpg",
  "/assests/82.jpg",
  "/assests/27.jpeg",
];
const Facilities: React.FC<FacilitiesProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const facilitiesList = [
    {
      id: 1,
      name: t.facilities.feature1.name,
      description: t.facilities.feature1.description,
      icon: <Utensils size={40} className="text-olive" />,
    },
    {
      id: 2,
      name: t.facilities.feature2.name,
      description: t.facilities.feature2.description,
      icon: <Wifi size={40} className="text-olive" />,
    },
    {
      id: 3,
      name: t.facilities.feature3.name,
      description: t.facilities.feature3.description,
      icon: <Wheelchair size={40} className="text-olive" />,
    },
    {
      id: 4,
      name: t.facilities.feature4.name,
      description: t.facilities.feature4.description,
      icon: <Plane size={40} className="text-olive" />,
    },
    {
      id: 5,
      name: t.facilities.feature5.name,
      description: t.facilities.feature5.description,
      icon: <Clock size={40} className="text-olive" />,
    },
    {
      id: 6,
      name: t.facilities.feature6.name,
      description: t.facilities.feature6.description,
      icon: <Heart size={40} className="text-olive" />,
    },
  ];
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
        {/* Orange Circle Indicators */}
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
            Facilites
          </h2>
          <p className="text-gray-700 font-serif text-center md:text-lg leading-relaxed mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur voluptate obcaecati quaerat, ad vel praesentium aspernatur magni fugiat quam minima reprehenderit expedita, incidunt, optio quisquam voluptates? Cum, dolores consectetur?
          </p>
          <button className="px-6 py-2 text-center bg-[#073937] text-white rounded hover:bg-[#4e7977]">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;


// {
// <section id="facilities" className={` font-serif section-padding bg-white ${dir === 'rtl' ? 'rtl' : ''}`}>
//   <div className="container mx-auto">
//     <h2 className="section-title text-center">{t.facilities.title}</h2>
//     <p className="section-subtitle text-sm md:text-lg text-center mb-12">{t.facilities.subtitle}</p>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {facilitiesList.map((facility) => (
//         <div
//           key={facility.id}
//           className="bg-beige rounded-lg p-6 text-center hover:shadow-lg transition-custom group"
//         >
//           <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full mx-auto mb-4 group-hover:bg-[#455f87]">
//             <div className="group-hover:text-white transition-custom">
//               {facility.icon}
//             </div>
//           </div>
//           <div className="text-lg font-medium  mb-2">{facility.name}</div>
//           <p className="text-text-light">{facility.description}</p>
//         </div>
//       ))}
//     </div>

{/* <div className="mt-16 bg-olive text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t.facilities.specialNoticeTitle}</h3>
              <p className="mb-4">{t.facilities.specialNoticeText1}</p>
              <p>{t.facilities.specialNoticeText2}</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Special accommodations"
                className="rounded-lg shadow-lg inline-block max-w-full h-auto"
              />
            </div>
          </div>
        </div> */}
//   </div>
// </section>
// }