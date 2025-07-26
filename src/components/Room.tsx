import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { NavLink, Link } from "react-router-dom";
import { TabsDemo } from "./Animatedtab";
import FlowingMenu from './Flowingmenu'


const rooms = [
  {
    title: "Villa 4BHK",
    description:
      "Luxury villa offering four elegantly furnished bedrooms, modern bathrooms, a large living area, and a private terrace. Ideal for families and embassy delegations.",
    image: "/4bhk/1.jpg",
    url: "/rooms/executive-rooms-in-moydom"
  },
  {
    title: "Apartment 3BHK & 2BHK",
    description:
      "Spacious service apartments with modern amenities, kitchenettes, and balconies. Perfect for long medical stays or corporate visits.",
    image: "/3bhk/1.jpg",
    url: "/rooms/two-bedroom-villa-with-private-pool"
  },
  {
    title: "Studio & Terrace Apartments",
    description:
      "Cozy, fully-equipped studio units and terrace apartments for solo travelers, couples, or short-term official assignments.",
    image: "/studio/1.jpg",
    url: "/rooms/sierra-jacuzzi-room"
  },
  {
    title: "Party Apartments",
    description:
      "Specially designed apartments to host small gatherings and celebrations, featuring open terraces and ample living space.",
    image: "/terace/1.png",
    url: "/rooms/presidential-family-suite"
  },
//   {
//     title: "Independent Rooms",
//     description:
//       "Budget-friendly options for single travelers, featuring all essential comforts and daily housekeeping services.",
//     image: "/rooms/independent.jpg",
//     url: "/rooms/independent-room"
//   },
];

export default function RoomShowcase() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
          const demoItems = [
  { link: '/rooms/villa-4bhk', text: 'Villa 4BHK', image: '/4bhk/1.jpg' },
  { link: '/rooms/apartment-3bhk-2bhk', text: 'Apartment 3BHK & 2BHK', image: '/2bhk/9.jpg' },
  { link: '/rooms/studio-terrace-apartments', text: 'Studio & Terrace Apartments', image: '/studio/6.png' },
  { link: '/rooms/party-apartments', text: 'Party Apartments', image: '/terace/8.png' },
//   { link: '/rooms/independent-rooms', text: 'Independent Rooms', image: '/rooms/d826.jpg' }
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
                  
                        
                 <div style={{  position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>

                  <div className="py-12 px-4 bg-white " style={{ fontFamily: "'Times New Roman', serif" }}>
                        {/* <div className="  mb-5 py-6   "> */}
                              {/* <div className="flex flex-wrap justify-center gap-4 md:gap-12 md:flex-row flex-col text-center">
    {demoItems.map((item, idx) => (
      <NavLink
        key={idx}
        to={item.link}
        className={({ isActive }) =>
          [
            "md:!text-[22px] text-[18px] md:text-base tracking-normal font-semibold relative transition-all duration-300",
            isActive
              ? "text-[#784420]"
              : "text-[#784420] p-2 hover:rounded-2xl hover:bg-[#e5ddb8] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-full "
          ].join(" ")
        }
      >
        {item.text}
      </NavLink>
    ))}
  </div> */}
                              {/* </div> */}
                        
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic text-[#784420] underline mb-10">
                              Rooms In MoyDom
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                              {demoItems.map((room, index) => (
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
                                                      <h3 className="text-lg font-semibold !text-[#784420] mb-2">
                                                            {room.text}
                                                      </h3>
                                                      <p className="text-[#784420] text-sm">{room.description}</p>
                                                </div>
                                                <div className="mt-4">
                                                      <Link to={room.link}>
                                                            <button className="bg-[#784420] rounded-sm text-white  text-sm px-4 py-2 hover:bg-[#784420]">
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

