import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";
import { TabsDemo } from "./Animatedtab";
import FlowingMenu from './Flowingmenu'


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
      const demoItems = [
            { link: '/rooms/executive-rooms-in-moydom', text: 'Room1', image: '/rooms/3bhkd851leftside.jpg' },
            { link: '/rooms/presidential-family-suite', text: 'Room2', image: '/rooms/201.JPG' },
            { link: '/rooms/sierra-jacuzzi-room', text: 'Room3', image: '/rooms/202.JPG' },
            { link: '/rooms/two-bedroom-villa-with-private-pool', text: 'Room4', image: '/rooms/d826.jpg' }
          ];
      const links = [
            { name: "Executive Rooms in MoyDom", url: "/rooms/executive-rooms-in-moydom" },
            // { name: "Elite Room With Private Balcony", url: "/rooms/elite-room-with-private-balcony" },
            { name: "Sierra Jacuzzi Room", url: "" },
            // { name: "Premium Suite With Balcony", url: "/rooms/premium-suite-with-balcony" },
            // { name: "Premium Suite With Bathtub", url: "/rooms/premium-suite-with-bathtub" },
            { name: "Presidential Family Suite", url: "/rooms/presidential-family-suite" },
            { name: "Two Bedroom Villa With Private Pool", url: "/rooms/two-bedroom-villa-with-private-pool" },
      ];
      return (
            <>
                  <div className="relative">
                        <Navbar language={language} toggleLanguage={toggleLanguage} />
                  </div>
                  {/* <div className="absoulte  top-20 ">
                  <TabsDemo />
                  </div> */}
                  
                        
                 

<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
                  <div className="py-12 px-4 bg-white pt-32 md:mt-[-70vh] mt-[-70vh]">
                        <div className="  mb-5 py-6 mt-[-48px] hidden ">
                              <div className="flex flex-wrap  justify-center gap-4 md:gap-12 md:flex-row flex-col text-center">
                                    {links.map((text, index) => (
                                          <Link
                                                key={index}
                                                to={text.url}
                                                style={{}}
                                                className=" md:!text-[20px]  text-[15px] md:text-base text-[#073937] tracking-normal font-bold relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-full hover:after:bg-orange-900 transition-all duration-300"
                                          >
                                                {text.name}
                                          </Link>
                                    ))}
                              </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic text-[#073937] underline mb-10">
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
                                                      <h3 className="text-lg font-semibold !text-[#073937] mb-2">
                                                            {room.title}
                                                      </h3>
                                                      <p className="text-gray-700 text-sm">{room.description}</p>
                                                </div>
                                                <div className="mt-4">
                                                      <Link to={room.url}>
                                                            <button className="bg-[#073937] rounded-sm text-white  text-sm px-4 py-2 hover:bg-green-600">
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
