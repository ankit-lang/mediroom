import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon library
import { Link } from "react-router-dom";
import FlowingMenu from "./Flowingmenu";
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
  { link: '/rooms/independent-rooms', text: 'Independent Rooms', image: '/rooms/d826.jpg' }
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
      return (
            <>
                  <div className="">
                        <Navbar language={language} toggleLanguage={toggleLanguage} />
                  </div>
                  <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
                  <div className="py-12 px-4  pt-32  mt-[-70vh] bg-white">
                        <div className="  mb-5 py-6 mt-[-56vh] hidden">
                              <div className="flex flex-wrap   justify-center gap-4 md:gap-12 md:flex-row flex-col text-center">
                                    {links.map((text, index) => (
                                         <Link
                                                                                         key={index}
                                                                                         to={text.url}
                                                                                         style={{}}
                                                                                         className=" !text-[20px] md:text-base text-[#073937] tracking-normal font-bold relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-full hover:after:bg-orange-900 transition-all duration-300"
                                                                                   >
                                                                                         {text.name}
                                                                                   </Link>
                                    ))}
                              </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl text-center font-semibold italic text-[#073937] underline mb-10">
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
                        <div className="bg-green-100 py-8 mt-5 mx-2 md:mx-10">
                              <h2 className="text-center md:!text-5xl text-xl font-semibold text-[#073937] italic mb-6">Amenities</h2>
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
                              <div className="mt-8">
        <h3 className="pl-4 text-2xl font-semibold text-[#073937] mb-4">Special Guest Services</h3>
        <ul className="list-disc list-inside px-5 space-y-2 max-w-2xl ">
          {specialGuestServices.map((item, idx) => (
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

