import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library

const images = [
      "/assests/28.jpg",
      "/assests/82.jpg",
      "/assests/27.jpeg",
];

const RoomsSection2 = () => {
      const [index, setIndex] = useState(0);

      const prevSlide = () => {
            setIndex((index - 1 + images.length) % images.length);
      };

      const nextSlide = () => {
            setIndex((index + 1) % images.length);
      };

      return (
            <div className=" flex-col lg:flex-row items-center justify-center p-8 hidden md:flex bg-white">
                  {/* Carousel */}
                  <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-center ">
                        <h2 className="text-3xl  text-center font-serif font-semibold text-[#1e3a8a] italic mb-4">
                              Rooms & Suites
                        </h2>
                        <p className="text-gray-700 font-serif text-center md:text-lg leading-relaxed mr-5   mb-6">
                              With five categories of rooms, ranging from budget-friendly Executive
                              rooms to the lavish Presidential Suite, our luxury boutique hotel in
                              Udaipur caters to every traveller’s preferences. Each room boasts a
                              private balcony, minibar and jacuzzi, providing an unparalleled level
                              of comfort and luxury.
                        </p>
                        <button className="px-6 py-2 text-center bg-[#ff8706] text-white rounded hover:bg-orange-600">
                              View Rooms
                        </button>
                  </div>
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

            </div>
      );
};

export default RoomsSection2;
