import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const facilities = [
      {
            image: "/assests/1.jpg", // Replace with your image paths
            title: "All-weather Swimming Pool",
      },
      {
            image: "/assests/28.jpg",
            title: "Bathtub",
      },
      {
            image: "/assests/82.jpg",
            title: "Rooftop Restaurant & Bar",
      },
      {
            image: "/assests/1.jpg", // Replace with your image paths
            title: "All-weather Swimming Pool",
      },
      {
            image: "/assests/28.jpg",
            title: "Bathtub",
      },
      {
            image: "/assests/82.jpg",
            title: "Rooftop Restaurant & Bar",
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
                              Facilities at The Moydom
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
