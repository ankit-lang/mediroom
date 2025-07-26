import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import { Link, NavLink } from "react-router-dom";
import FlowingMenu from "./Flowingmenu";
import { FaBed, FaSnowflake, FaTv, FaDoorOpen, FaBath, FaCoffee, FaWineBottle, FaWifi, FaWater, FaToiletPaper, FaShieldAlt, FaBolt, FaBroom, FaUtensils, FaUserTie, FaLanguage, FaRegHospital, FaUserMd, FaCar, FaConciergeBell, FaPhone, FaEnvelope, FaSwimmingPool, FaChair, FaTshirt, FaUserFriends, FaKey, FaLaptop, FaGlassMartiniAlt, FaHotTub } from "react-icons/fa";
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

export default function Executive() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');
      const [apartmentType, setApartmentType] = useState<'1bhk' | '2bhk' | '3bhk'>('2bhk');

      const oneBhkImages = [
            "/1bhk/1.jpg",
            "/1bhk/2.jpg",
            "/1bhk/3.jpg",
            "/1bhk/4.jpg",
            "/1bhk/5.jpg",
            "/1bhk/6.jpg",
            '1bhk/7.jpg',
            '1bhk/8.jpg',
            '1bhk/9.jpg',
            '1bhk/10.jpg',
            '1bhk/11.jpg',
            '1bhk/12.jpg',
            '1bhk/13.jpg',
            '1bhk/14.jpg',
            '1bhk/15.jpg',
            '1bhk/16.jpg',
            '1bhk/17.jpg',
            '1bhk/18.jpg',
            '1bhk/19.jpg',
            '1bhk/20.jpg',
            '1bhk/21.jpg',
            '1bhk/22.jpg',
            '1bhk/23.jpg',
           
      ];

      const twoBhkImages = [
            // "/2bhk/1.jpg",
            "/2bhk/2.jpg",
            "/2bhk/3.jpg",
            "/2bhk/4.jpg",
            "/2bhk/5.jpg",
            "/2bhk/6.jpg",
            "/2bhk/7.jpg",
            "/2bhk/8.jpg",
            "/2bhk/9.jpg",
            "/2bhk/10.jpg",
            "/2bhk/11.jpg",
            "/2bhk/12.jpg",
            "/2bhk/13.jpg",
            "/2bhk/14.jpg",
            "/2bhk/15.jpg",
            "/2bhk/16.jpg",
            "/2bhk/17.jpg",
            "/2bhk/18.jpg",
            "/2bhk/19.jpg",
            "/2bhk/20.jpg",
            "/2bhk/21.jpg",
            '/2bhk/22.jpg',
            '/2bhk/23.jpg',
            '/2bhk/24.jpg',
            '/2bhk/25.jpg',
            '/2bhk/26.jpg',
            '/2bhk/27.jpg',
            '/2bhk/28.jpg',
            '/2bhk/29.jpg',
           
      ];

      const threeBhkImages = [
            "/3bhk/1.jpg",
            '/3bhk/2.jpg',
            '/3bhk/3.jpg',
            '/3bhk/4.jpg',
            '/3bhk/5.jpg',
            '/3bhk/6.jpg',
            '/3bhk/7.jpg',
            '/3bhk/8.jpg',
            '/3bhk/9.jpg',
            '/3bhk/10.jpg',
            '/3bhk/11.jpg',
            '/3bhk/12.jpg',
            '/3bhk/13.jpg',
            '/3bhk/14.jpg',
            '/3bhk/15.jpg',
            '/3bhk/16.jpg',
            '/3bhk/17.jpg',
            '/3bhk/18.jpg',
            '/3bhk/19.jpg',
            '/3bhk/20.jpg',
            '/3bhk/21.jpg',
            
      ];

      const images = 
            apartmentType === '1bhk' ? oneBhkImages :
            apartmentType === '2bhk' ? twoBhkImages :
            threeBhkImages;

      const toggleLanguage = () => {

      };
      const [index, setIndex] = useState(0);

      const prevSlide = () => {
            setIndex((index - 1 + images.length) % images.length);
      };

      const nextSlide = () => {
            setIndex((index + 1) % images.length);
      };
      const goToSlide = (slideIndex: number) => {
            setIndex(slideIndex);
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

                  <div className="py-12 px-4   bg-white">
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
                                </div>
                            
                        </div> */}
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic underline text-[#073937] mb-10">
                           Apartment 3BHK & 2BHK 
                        </h2>
                        <div className="flex justify-center mb-4">
                              <select
                                    value={apartmentType}
                                    onChange={(e) => setApartmentType(e.target.value as '1bhk' | '2bhk' | '3bhk')}
                                    className="p-2 border rounded bg-white text-[#784420]"
                              >
                                    <option value="1bhk">1 BHK</option>
                                    <option value="2bhk">2 BHK</option>
                                    <option value="3bhk">3 BHK</option>
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
                        <div className="flex justify-center gap-2 mt-4 flex-wrap max-w-[80vw] mx-auto">
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
                        <div className="m-auto text-center ">
                              {/* <button className="bg-[#073937] hover:bg-green-600 text-white !py-3 !px-10 rounded">
                                    Book Now
                              </button> */}
                        </div>
                        <div className="text-[14px] md:text-lg mt-5 text-center   md:px-20 ">

Spacious service apartments with modern amenities, kitchenettes, and balconies. Perfect for long medical stays or corporate visits.

                        </div>
                        <div className=" py-8 mt-5 mx-10">
                              <h2 className="text-center md:!text-5xl text-xl font-semibold   italic mb-6">Amenities</h2>
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
                        {/* Special Guest Services (add if needed) */}
                        <div className="mt-8 md:ml-4">
                          <h3 className="pl-4 text-2xl font-semibold  mb-4">Special Guest Services</h3>
                          <ul className="list-disc list-inside px-5 space-y-2 max-w-2xl ">
                            { [
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
