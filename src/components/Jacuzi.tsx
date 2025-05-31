import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import { Link } from "react-router-dom";
const amenities = [
      "Air-conditioning", "Wi-Fi Internet Access", "Refrigerator", "Hot Water",
      "Television", "Telephone", "Tea & Coffee Maker", "Complimentary Breakfast",
      "Minibar", "Mineral Water Bottle", "Work Desk & Chair", "Hair Dryer",
      "Wardrobe", "Iron & Ironing Board", "Bathrobe & Bath Slippers",
      "Room Service", "Laundry Service", "In room dining", "Private Pool",
      "Separate Living Room"
];
const images = [
      "/assests/28.jpg",
      "/assests/82.jpg",
      "/assests/27.jpeg",
];


const rooms = [
      {
            title: "Executive Rooms in Moydom",
            description:
                  "The Executive Rooms offer a generous space of 281 sq. ft., ensuring ample room to relax and unwind for up to 4 guests.",
            image: "/assests/1.jpg",
      },
      {
            title: "Elite Room With Private Balcony",
            description:
                  "The Elite Room with Balcony offers an expansive space of 440 sq. ft. to unwind for up to 4 guests.",
            image: "/assests/35.jpeg",
      },
      {
            title: "Moydom Jacuzzi Room",
            description:
                  "The Sierra Jacuzzi Room at The Sierra - By The Lake is a 365 sq. ft. space, perfect for a group of 4 people.",
            image: "/assests/about.jpg",
      },
      {
            title: "Moydom Jacuzzi Room",
            description:
                  "The Sierra Jacuzzi Room at The Sierra - By The Lake is a 365 sq. ft. space, perfect for a group of 4 people.",
            image: "/assests/about.jpg",
      },
];

export default function Jacuzzi() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
      const [index, setIndex] = useState(0);

      const prevSlide = () => {
            setIndex((index - 1 + images.length) % images.length);
      };

      const nextSlide = () => {
            setIndex((index + 1) % images.length);
      };
      const links = [
            { name: "Executive Rooms in MoyDom", url: "/rooms/executive-rooms-in-moydom" },
            // { name: "Elite Room With Private Balcony", url: "/rooms/elite-room-with-private-balcony" },
            { name: "Sierra Jacuzzi Room", url: "/rooms/sierra-jacuzzi-room" },
            // { name: "Premium Suite With Balcony", url: "/rooms/premium-suite-with-balcony" },
            // { name: "Premium Suite With Bathtub", url: "/rooms/premium-suite-with-bathtub" },
            { name: "Presidential Family Suite", url: "/rooms/presidential-family-suite" },
            { name: "Two Bedroom Villa With Private Pool", url: "/rooms/two-bedroom-villa-with-private-pool" },
      ];
      const mid = Math.ceil(amenities.length / 2);
      const left = amenities.slice(0, mid);
      const right = amenities.slice(mid);
      return (
            <>
                  <div className="">
                        <Navbar language={language} toggleLanguage={toggleLanguage} />
                  </div>

                  <div className="py-12 px-4 bg-blue-50 pt-32">
                        <div className="bg-gray-300  mb-5 py-6 mt-[-48px]">
                              <div className="flex flex-wrap  justify-center gap-4 md:gap-12 md:flex-row flex-col text-center">
                                    {links.map((text, index) => (
                                          <Link
                                                key={index}
                                                to={text.url}
                                                style={{}}
                                                className=" !text-[20px] md:text-base text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-full hover:after:bg-blue-900 transition-all duration-300"
                                          >
                                                {text.name}
                                          </Link>
                                    ))}
                              </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic text-blue-900 mb-10">
                              jacuzzi room.
                        </h2>
                        <div className="relative w-full m-auto mb-12 lg:w-[60vw] h-[400px] overflow-hidden">
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
                        <div className="m-auto text-center ">
                              <button className="bg-blue-800 hover:bg-blue-900 text-white !py-3 !px-10 rounded">
                                    Book Now
                              </button>
                        </div>
                        <div className="text-[14px] md:text-lg mt-5 text-center   md:px-20 ">
                              Step into the epitome of luxury with our Two Bedroom Villa With Private Pool, spanning an impressive 1560 sq. ft. Designed to comfortably accommodate 8 guests, this exclusive private pool villa in Udaipur, features a plush king size bed, state-of-the-art amenities including a tea & coffee maker, minibar, and round-the-clock room service. Experience ultimate convenience with our on-site laundry service. The villa's elegant interior design complements the serene private pool, making it an ideal choice for families or groups seeking both luxury and relaxation.
                        </div>
                        <div className="bg-gray-200 py-8 mt-5 mx-10">
                              <h2 className="text-center md:!text-5xl text-xl font-semibold italic mb-6">Amenities</h2>
                              <div className="flex flex-col md:flex-row md:justify-center gap-12">
                                    <ul className="list-disc list-inside px-5 space-y-2 md:w-1/2">
                                          {left.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                          ))}
                                    </ul>
                                    <ul className="list-disc px-5 list-inside space-y-2 md:w-1/2">
                                          {right.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                          ))}
                                    </ul>
                              </div>
                        </div>



                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
