import React from 'react';
import { Utensils, Wifi, Armchair as Wheelchair, Plane, Clock, Heart } from 'lucide-react';
import translations from '../translations';
import RoomsSection from './RoomSectionAbout';

interface FacilitiesProps {
  language: 'en' | 'ar';
}

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library

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

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-white">
      {/* Carousel */}
      <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden">
        <img
          src={images[index]}
          alt="Room"
          className="w-full h-full object-cover rounded shadow-lg"
        />
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-center ">
        <h2 className="text-3xl  text-center font-serif font-semibold text-[#1e3a8a] italic mb-4">
          Facilites
        </h2>
        <p className="text-gray-700 font-serif text-center md:text-lg leading-relaxed mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur voluptate obcaecati quaerat, ad vel praesentium aspernatur magni fugiat quam minima reprehenderit expedita, incidunt, optio quisquam voluptates? Cum, dolores consectetur?
        </p>
        <button className="px-6 py-2 text-center bg-[#ff8706] text-white rounded hover:bg-orange-600">
          Learn More
        </button>
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