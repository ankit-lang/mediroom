import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import { Link, NavLink } from "react-router-dom";
import FlowingMenu from "./Flowingmenu";
import { FaBed, FaSnowflake, FaTv, FaDoorOpen, FaBath, FaCoffee, FaWineBottle, FaWifi, FaWater, FaToiletPaper, FaShieldAlt, FaBolt, FaBroom, FaUtensils, FaUserTie, FaLanguage, FaRegHospital, FaUserMd, FaCar, FaConciergeBell, FaPhone, FaEnvelope, FaSwimmingPool, FaChair, FaTshirt, FaUserFriends, FaKey, FaLaptop, FaGlassMartiniAlt, FaHotTub, FaUserClock, FaUserSecret, FaUserCheck } from "react-icons/fa";
import { MdBalcony, MdOutlineSecurity, MdOutlineCleaningServices, MdRoomService, MdLocalLaundryService, MdOutlineDining, MdOutlinePool } from "react-icons/md";

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

export default function Presidential() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');
      const [imageType, setImageType] = useState<'studio' | 'terrace'>('studio');

      const studioImages = [
            "/studio/1.png",
            "/studio/2.png",
            "/studio/3.png",
            "/studio/4.png",
            '/studio/5.png',
            '/studio/6.png',
            "/studio/7.png",
            "/studio/8.png",
            "/studio/9.png",
            "/studio/10.png",
            "/studio/11.png",


      ];

      const terraceImages = [
            "/terace/1.png",
            "/terace/2.png",
            "/terace/3.png",
            "/terace/4.png",
            '/terace/5.png',
            '/terace/6.png',
            "/terace/7.png",
            "/terace/8.png",
            "/terace/9.png",
            "/terace/10.png",
            "/terace/11.png",
            "/terace/12.png",
            
      ];

      const images = imageType === 'studio' ? studioImages : terraceImages;

      const toggleLanguage = () => {

      };
      const [index, setIndex] = useState(0);

      const goToSlide = (slideIndex: number) => {
            setIndex(slideIndex);
      };

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
        const demoItems = [
  { link: '/rooms/villa-4bhk', text: 'Villa 4BHK', image: '/4bhk/1.jpg' },
  { link: '/rooms/apartment-3bhk-2bhk', text: 'Apartment 3BHK & 2BHK', image: '/2bhk/9.jpg' },
  { link: '/rooms/studio-terrace-apartments', text: 'Studio & Terrace Apartments', image: '/studio/6.png' },
  { link: '/rooms/party-apartments', text: 'Party Apartments', image: '/terace/8.png' },
//   { link: '/rooms/independent-rooms', text: 'Independent Rooms', image: '/rooms/d826.jpg' }
];
      const mid = Math.ceil(amenities.length / 2);
      const left = amenities.slice(0, mid);
      const right = amenities.slice(mid);
      const amenityIcons: { [key: string]: JSX.Element } = {
            "Air-conditioning": <FaSnowflake className="text-[#784420] mr-2" />,
            "Wi-Fi Internet Access": <FaWifi className="text-[#784420] mr-2" />,
            "Refrigerator": <FaWineBottle className="text-[#784420] mr-2" />,
            "Hot Water": <FaBath className="text-[#784420] mr-2" />,
            "Television": <FaTv className="text-[#784420] mr-2" />,
            "Telephone": <FaPhone className="text-[#784420] mr-2" />,
            "Tea & Coffee Maker": <FaCoffee className="text-[#784420] mr-2" />,
            "Complimentary Breakfast": <FaUtensils className="text-[#784420] mr-2" />,
            "Minibar": <FaGlassMartiniAlt className="text-[#784420] mr-2" />,
            "Mineral Water Bottle": <FaWater className="text-[#784420] mr-2" />,
            "Work Desk & Chair": <FaChair className="text-[#784420] mr-2" />,
            "Hair Dryer": <FaTshirt className="text-[#784420] mr-2" />,
            "Wardrobe": <FaDoorOpen className="text-[#784420] mr-2" />,
            "Iron & Ironing Board": <FaUtensils className="text-[#784420] mr-2" />,
            "Bathrobe & Bath Slippers": <FaHotTub className="text-[#784420] mr-2" />,
            "Room Service": <MdRoomService className="text-[#784420] mr-2" />,
            "Laundry Service": <MdLocalLaundryService className="text-[#784420] mr-2" />,
            "In room dining": <MdOutlineDining className="text-[#784420] mr-2" />,
            "Private Pool": <MdOutlinePool className="text-[#784420] mr-2" />,
            "Separate Living Room": <FaUserFriends className="text-[#784420] mr-2" />,
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
                 
                  <div style={{  position: 'relative' }}>
                                     <FlowingMenu items={demoItems} />
                                   </div>

                        <div className="py-12 px-4 bg-white  ">
                        {/* <div className="  mb-5  ">
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
                                                       </div> */}
                                                   
                                               {/* </div> */}
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic underline  text-[#073937] mb-10">
                              Studio & Terrace Apartments
                        </h2>
                        <div className="flex justify-center mb-4">
                              <select
                                    value={imageType}
                                    onChange={(e) => setImageType(e.target.value as 'studio' | 'terrace')}
                                    className="p-2 border rounded"
                              >
                                    <option value="studio">Studio</option>
                                    <option value="terrace">Terrace</option>
                              </select>
                        </div>
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
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-4 flex-wrap max-w-[80vw] mx-auto mb-4">
                              {images.map((_, idx) => (
                                    <button
                                          key={idx}
                                          onClick={() => goToSlide(idx)}
                                          className={`h-2 w-2 rounded-full transition-all ${
                                                idx === index 
                                                ? "bg-[#784420] w-4" 
                                                : "bg-[#784420]/40"
                                          }`}
                                          aria-label={`Go to slide ${idx + 1}`}
                                    />
                              ))}
                        </div>
                        <div className="m-auto text-center">
                              {/* Book Now button commented out for now */}
                        </div>
                        <div className="text-[14px] md:text-lg mt-5 text-center md:px-20">
                              <p>
                                    Cozy, fully-equipped studio units and terrace apartments for solo travelers, couples, or short-term official assignments.
                              </p>
                        </div>
                        <div className="py-8 mt-5 mx-10">
                              <h2 className="text-center md:!text-5xl text-xl font-semibold italic mb-6">
                                    Amenities
                              </h2>
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
                        </div>
                        {/* Special Guest Services */}
                        <div className="mt-8 ml-4">
                          <h3 className="pl-4 text-2xl font-semibold mb-4">Special Guest Services</h3>
                          <ul className="list-disc list-inside px-5 space-y-2 max-w-2xl">
                            {[
                              "Personal Cook & Driver",
                              "Translator Services",
                              "FRRO Registration Assistance",
                              "Medical Assistance & On-Call Support",
                              "Car Hire & Airport Transfers",
                              "Concierge & 24×7 Support Team"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center">
                                {specialGuestServiceIcons[item] || null}
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
