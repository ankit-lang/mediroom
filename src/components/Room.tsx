import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";
import { TabsDemo } from "./Animatedtab";
import FlowingMenu from './Flowingmenu'


const rooms = [
  {
    title: "Villa 4BHK",
    description:
      "Luxury villa offering four elegantly furnished bedrooms, modern bathrooms, a large living area, and a private terrace. Ideal for families and embassy delegations.",
    image: "/rooms/201.JPG",
    url: "/rooms/executive-rooms-in-moydom"
  },
  {
    title: "Apartment 3BHK & 2BHK",
    description:
      "Spacious service apartments with modern amenities, kitchenettes, and balconies. Perfect for long medical stays or corporate visits.",
    image: "/rooms/202.JPG",
    url: "/rooms/two-bedroom-villa-with-private-pool"
  },
  {
    title: "Studio & Terrace Apartments",
    description:
      "Cozy, fully-equipped studio units and terrace apartments for solo travelers, couples, or short-term official assignments.",
    image: "/rooms/d826.jpg",
    url: "/rooms/sierra-jacuzzi-room"
  },
  {
    title: "Party Apartments",
    description:
      "Specially designed apartments to host small gatherings and celebrations, featuring open terraces and ample living space.",
    image: "/rooms/diptee.JPG",
    url: "/rooms/presidential-family-suite"
  },
  {
    title: "Independent Rooms",
    description:
      "Budget-friendly options for single travelers, featuring all essential comforts and daily housekeeping services.",
    image: "/rooms/independent.jpg",
    url: "/rooms/independent-room"
  },
];

export default function RoomShowcase() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
          const demoItems = [
  { link: '/rooms/villa-4bhk', text: 'Villa 4BHK', image: '/rooms/3bhkd851leftside.jpg' },
  { link: '/rooms/apartment-3bhk-2bhk', text: 'Apartment 3BHK & 2BHK', image: '/rooms/201.JPG' },
  { link: '/rooms/studio-terrace-apartments', text: 'Studio & Terrace Apartments', image: '/rooms/202.JPG' },
  { link: '/rooms/party-apartments', text: 'Party Apartments', image: '/rooms/d826.jpg' },
  { link: '/rooms/independent-rooms', text: 'Independent Rooms', image: '/rooms/d826.jpg' }
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
