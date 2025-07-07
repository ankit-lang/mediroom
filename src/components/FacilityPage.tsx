import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SplitText from "./SplitText";

const facilities = [
      {
            image: "/rooms/maharaja1floor1097.jpg", // Replace with your image paths
            title: "Comfortable",
      },
      {
            image: "/rooms/202.JPG",
            title: "4bhk",
      },
      {
            image: "/rooms/diptee.JPG",
            title: "Premium",
      },
      {
            image: "/rooms/5bhkduplex.jpg", // Replace with your image paths
            title: "Rooftop Lounge",
      },
      {
            image: "/rooms/room101.jpg",
            title: "Luxury Bedroom",
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
                                                className="w-80 h-64 object-cover rounded-lg shadow-md"
                                          />
                                          <p className="mt-4 text-lg font-semibold text-gray-800">{facility.title}</p>
                                    </div>
                              ))}
                        </div>
                  </section>
                  <Footer language={language} />
            </>
      );
}
