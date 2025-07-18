import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import { Link, NavLink } from "react-router-dom";
import FlowingMenu from "./Flowingmenu";
import { FaBed, FaSnowflake, FaTv, FaDoorOpen, FaBath, FaCoffee, FaWineBottle, FaWifi, FaWater, FaToiletPaper, FaShieldAlt, FaBolt, FaBroom, FaUtensils, FaUserTie, FaLanguage, FaRegHospital, FaUserMd, FaCar, FaConciergeBell } from "react-icons/fa";
import { MdBalcony, MdOutlineSecurity, MdOutlineCleaningServices } from "react-icons/md";
import { GiPowerGenerator, GiMineralPearl } from "react-icons/gi";

const amenities = [
  "King Size Bed",
  "Air Conditioning",
  "Private Balcony & Terrace (in select units)",
  "Smart T.V.",
  "Wardrobe & Storage",
  "Bathroom with Water Heater",
  "Electric Kettle, Coffee & Tea Maker",
  "Mini Refrigerator",
  "Iron with Board",
  "Free High-Speed WiFi",
  "Complimentary Mineral & 24×7 RO Water",
  "Toiletries & Daily Housekeeping",
  "24/7 Security & CCTV Surveillance",
  "Power Backup",
  "Daily Sanitization",
  "Breakfast Included"
];

const specialGuestServices = [
  "Personal Cook & Driver",
  "Translator Services",
  "FRRO Registration Assistance",
  "Medical Assistance & On-Call Support",
  "Car Hire & Airport Transfers",
  "Concierge & 24×7 Support Team"
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

export default function Villa() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const demoItems = [
  { link: '/rooms/villa-4bhk', text: 'Villa 4BHK', image: '/rooms/3bhkd851leftside.jpg' },
  { link: '/rooms/apartment-3bhk-2bhk', text: 'Apartment 3BHK & 2BHK', image: '/rooms/201.JPG' },
  { link: '/rooms/studio-terrace-apartments', text: 'Studio & Terrace Apartments', image: '/rooms/202.JPG' },
  { link: '/rooms/party-apartments', text: 'Party Apartments', image: '/rooms/d826.jpg' },
//   { link: '/rooms/independent-rooms', text: 'Independent Rooms', image: '/rooms/d826.jpg' }
];
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
            { name: "Executive Rooms in Udaipur", url: "/rooms/executive-rooms-in-moydom" },
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

      const amenityIcons: { [key: string]: JSX.Element } = {
        "King Size Bed": <FaBed className="text-[#784420] mr-2" />,
        "Air Conditioning": <FaSnowflake className="text-[#784420] mr-2" />,
        "Private Balcony & Terrace (in select units)": <MdBalcony className="text-[#784420] mr-2" />,
        "Smart T.V.": <FaTv className="text-[#784420] mr-2" />,
        "Wardrobe & Storage": <FaDoorOpen className="text-[#784420] mr-2" />,
        "Bathroom with Water Heater": <FaBath className="text-[#784420] mr-2" />,
        "Electric Kettle, Coffee & Tea Maker": <FaCoffee className="text-[#784420] mr-2" />,
        "Mini Refrigerator": <FaWineBottle className="text-[#784420] mr-2" />,
        "Iron with Board": <FaUtensils className="text-[#784420] mr-2" />,
        "Free High-Speed WiFi": <FaWifi className="text-[#784420] mr-2" />,
        "Complimentary Mineral & 24×7 RO Water": <FaWater className="text-[#784420] mr-2" />,
        "Toiletries & Daily Housekeeping": <FaToiletPaper className="text-[#784420] mr-2" />,
        "24/7 Security & CCTV Surveillance": <MdOutlineSecurity className="text-[#784420] mr-2" />,
        "Power Backup": <FaBolt className="text-[#784420] mr-2" />,
        "Daily Sanitization": <MdOutlineCleaningServices className="text-[#784420] mr-2" />,
        "Breakfast Included": <FaUtensils className="text-[#784420] mr-2" />,
      };

      const specialGuestServiceIcons: { [key: string]: JSX.Element } = {
        "Personal Cook & Driver": <FaUserTie className="text-[#784420] mr-2" />,
        "Translator Services": <FaLanguage className="text-[#784420] mr-2" />,
        "FRRO Registration Assistance": <FaRegHospital className="text-[#784420] mr-2" />,
        "Medical Assistance & On-Call Support": <FaUserMd className="text-[#784420] mr-2" />,
        "Car Hire & Airport Transfers": <FaCar className="text-[#784420] mr-2" />,
        "Concierge & 24×7 Support Team": <FaConciergeBell className="text-[#784420] mr-2" />,
      };

      return (
            <>
                  <div className="">
                        <Navbar language={language} toggleLanguage={toggleLanguage} />
                  </div>
                
                  <div className="py-12 px-4  pt-32   bg-white">
                        <div className="  mb-5  ">
                                                     <div className="flex flex-wrap justify-center gap-4 md:gap-12 md:flex-row flex-col text-center">
                                                           
                                                         {demoItems.map((item, idx) => (
                                                           <NavLink
                                                             key={idx}
                                                             to={item.link}
                                                             className={({ isActive }) =>
                                                               [
                                                                 "md:!text-[22px] text-[18px] md:text-base tracking-normal font-semibold relative transition-all duration-300",
                                                                 isActive
                                                                   ? "bg-[#784420] text-white rounded-xl font-semibold  p-2"
                                                                   : "text-[#784420] p-2 hover:rounded-2xl hover:bg-[#e5ddb8] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-full "
                                                               ].join(" ")
                                                             }
                                                           >
                                                             {item.text}
                                                           </NavLink>
                                                         ))}
                                                       </div>
                                                   
                                               </div>
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic  underline mb-10">
                            Villa 4BHK



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
                              {/* <button className="bg-[#073937] hover:bg-green-600 text-white !py-3 !px-10 rounded">
                                    Book Now
                              </button> */}
                        </div>
                        <div className="text-[14px] md:text-lg mt-5 text-center   md:px-20 ">
   
Luxury villa offering four elegantly furnished bedrooms, modern bathrooms, a large living area, and a private terrace. Ideal for families and embassy delegations.


                        </div>
                        <div className=" py-8 mt-5 mx-2 md:mx-10">
                              <h2 className="text-center md:!text-5xl text-xl font-semibold  italic mb-6">Amenities</h2>
                              <div className="flex flex-col md:flex-row md:justify-center gap-12">
                                    <ul className="list-disc list-inside px-5 space-y-2 md:w-1/2">
                                          {left.map((item, idx) => (
                                                <li key={idx} className="flex items-center">
                                                  {amenityIcons[item] || null}
                                                  <span>{item}</span>
                                                </li>
                                          ))}
                                    </ul>
                                    <ul className="list-disc px-5 list-inside space-y-2 md:w-1/2">
                                          {right.map((item, idx) => (
                                                <li key={idx} className="flex items-center">
                                                  {amenityIcons[item] || null}
                                                  <span>{item}</span>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                              <div className="mt-8">
        <h3 className="pl-4 text-2xl font-semibold  mb-4">Special Guest Services</h3>
        <ul className="list-disc list-inside px-5 space-y-2 max-w-2xl ">
          {specialGuestServices.map((item, idx) => (
            <li key={idx} className="flex items-center">
              {specialGuestServiceIcons[item] || null}
              <span>{item}</span>
            </li>
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

