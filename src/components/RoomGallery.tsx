import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import translations from '../translations';

interface RoomGalleryProps {
  language: 'en' | 'ar';
}

const RoomGallery: React.FC<RoomGalleryProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  // Room gallery data
  const rooms = [
    {
      id: 1,
      name: t.rooms.room1.name,
      description: t.rooms.room1.description,
      image: "/assests/banner1.jpg",
      features: t.rooms.room1.features,
    },
    {
      id: 2,
      name: t.rooms.room2.name,
      description: t.rooms.room2.description,
      image: "/assests/roombanner2.jpg",
      features: t.rooms.room2.features,
    },
    {
      id: 3,
      name: t.rooms.room3.name,
      description: t.rooms.room3.description,
      image: "/assests/roombanner3.jpg",
      features: t.rooms.room3.features,
    },
  ];

  const [activeRoom, setActiveRoom] = useState(0);

  const nextRoom = () => {
    setActiveRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const prevRoom = () => {
    setActiveRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  return (
    <section id="rooms" className={`section-padding   mb-[4rem] bg-beige ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center">Our Rooms</h2>
        <p className="section-subtitle text-center ">Comfort Meets Convenience

        </p>
        <p className='section-subtitle text-center mb-12 text-sm' > From elegant villas to modern studio apartments, our stays are thoughtfully designed with patients in mind.</p>

        <div className="relative">
          <div className=" rounded-lg">
            <div className="relative  h-[100vh] md:h-[100vh]">
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === activeRoom ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="h-full">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white p-8 flex flex-col justify-center mb-12">
                      <h3 className="text-3xl font-bold mb-4 text-olive">{room.name}</h3>
                      <p className="mb-6 text-text-light">{room.description}</p>
                      <div className="space-y-4">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Navigation buttons */}
          <button
            onClick={prevRoom}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-0 md:p-2 rounded-full shadow-md hover:bg-beige transition-custom"
            aria-label="Previous room"
          >
            <ChevronLeft size={20} className="text-olive" />
          </button>
          <button
            onClick={nextRoom}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-0 md:p-2 rounded-full shadow-md hover:bg-beige transition-custom"
            aria-label="Next room"
          >
            <ChevronRight size={20} className="text-olive" />
          </button>

          {/* Room indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveRoom(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeRoom ? 'bg-olive w-6' : 'bg-gold opacity-50'
                  }`}
                aria-label={`Go to room ${index + 1}`}
              ></button>
            ))}
          </div>
          <a
            href="#booking"
            className="btn-primary   inline-block   relative  text-center align-center mt-8 left-[37%] md:left-[48%]"

          >
            BOOk
          </a>
        </div>
      </div>
    </section >
  );
};

export default RoomGallery;