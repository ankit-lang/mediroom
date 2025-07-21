import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SplitText from "./SplitText";
import { FaUserTie, FaCar, FaLanguage, FaRegHospital, FaConciergeBell, FaUserMd } from "react-icons/fa";

const facilities = [
      {
            image: "/faci/driverandcook.jpg",
            title: "Personal Cook & Driver",
            icon: <FaUserTie className="text-[#784420] mr-2" style={{ width: '0.5in', height: '0.5in' }} />,
      },
      {
            image: "/faci/trans.png",
            title: "Translator Services",
            icon: <FaLanguage className="text-[#784420] mr-2" style={{ width: '0.4in', height: '0.5in' }} />,
      },
      {
            image: "/faci/frro.jpg",
            title: "FRRO Registration Assistance",
            icon: <FaRegHospital className="text-[#784420] mr-2" style={{ width: '0.4in', height: '0.5in' }} />,
      },
      {
            image: "/faci/medi.jpg",
            title: "Medical Assistance & On-Call Support",
            icon: <FaUserMd className="text-[#784420] mr-2" style={{ width: '0.4in', height: '0.5in' }} />,
      },
      {
            image: "/faci/airport.png",
            title: "Car Hire & Airport Transfers",
            icon: <FaCar className="text-[#784420] mr-2" style={{ width: '0.4in', height: '0.5in' }} />,
      },
      {
            image: "/faci/247.jpg", // You can update image if needed
            title: "Concierge & 24×7 Support Team",
            icon: <FaConciergeBell className="text-[#784420] mr-2" style={{ width: '0.4in', height: '0.5in' }} />,
      },
];

export default function FacilitiesSection() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />

                  <section className="py-12 px-4 text-center pt-32">
                        
                        <h2 className="text-3xl font-semibold italic text-[#13274F] mb-10">
                              
                        <SplitText
  text="Facilities at The Moydom"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
        
/>
                              
                        </h2>

                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
                              {facilities.map((facility, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                          <img
                                                src={facility.image}
                                                alt={facility.title}
                                                className="w-80 h-72 object-cover rounded-lg shadow-md"
                                          />
                                          <div className="mt-4 flex items-center">
                                                {facility.icon}
                                                <p className="text-xl font-semibold text-gray-800">{facility.title}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </section>
                  <Footer language={language} />
            </>
      );
}
