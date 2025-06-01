import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";

const rooms = [
      {
            title: "Executive Rooms in Moydom",
            description:
                  "The Executive Rooms offer a generous space of 281 sq. ft., ensuring ample room to relax and unwind for up to 4 guests.",
            image: "/assests/1.jpg",
            url: "/rooms/executive-rooms-in-moydom"
      },
      {
            title: "Two Bedroom  Room With Private pool",
            description:
                  "The Elite Room with Balcony offers an expansive space of 440 sq. ft. to unwind for up to 4 guests.",
            image: "/assests/35.jpeg",
            url: "/rooms/two-bedroom-villa-with-private-pool"
      },
      {
            title: "Moydom Jacuzzi Room",
            description:
                  "The Sierra Jacuzzi Room at The Sierra - By The Lake is a 365 sq. ft. space, perfect for a group of 4 people.",
            image: "/assests/about.jpg",
            url: "/rooms/sierra-jacuzzi-room"
      },
      {
            title: "Presidential Family Suite rooms",
            description:
                  "The Sierra Jacuzzi Room at The Sierra - By The Lake is a 365 sq. ft. space, perfect for a group of 4 people.",
            image: "/assests/about.jpg",
            url: "/rooms/presidential-family-suite"
      },
];

export default function RoomShowcase() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

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
                              Rooms In MoyDom
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                              {rooms.map((room, index) => (
                                    <div
                                          key={index}
                                          className="bg-white rounded shadow overflow-hidden flex flex-col"
                                    >
                                          <img
                                                src={room.image}
                                                alt={room.title}
                                                className="h-64 object-cover w-full"
                                          />
                                          <div className="p-4 flex-1 flex flex-col items-center justify-between">
                                                <div>
                                                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                                                            {room.title}
                                                      </h3>
                                                      <p className="text-gray-700 text-sm">{room.description}</p>
                                                </div>
                                                <div className="mt-4">
                                                      <Link to={room.url}>
                                                            <button className="bg-blue-900 rounded-sm text-white  text-sm px-4 py-2 hover:bg-blue-800">
                                                                  MORE INFO
                                                            </button>
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
