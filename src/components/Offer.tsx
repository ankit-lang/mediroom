import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const hotelDeals = [
      {
            title: "Extended Stay Savings",
            discount: "15%",
            description:
                  "Get 15% off when you book for at least 5 nights! Stay longer and enjoy exclusive savings on your booking.",
            image: "/assests/1.jpg",
      },
      {
            title: "Stay Longer, Save More",
            discount: "10%",
            description:
                  "Get 10% off on your 4th night! Stay for 4 nights and enjoy extra savings for a more rewarding getaway.",
            image: "/assests/82.jpg",
      },
      {
            title: "Early Bird Deal",
            discount: "40%",
            description:
                  "Enjoy up to 40% off by booking your stay at The Sierra - By The Lake 60 days in advance.",
            image: "/assests/28.jpg",
      },
      {
            title: "Early Bird Deal",
            discount: "40%",
            description:
                  "Enjoy up to 40% off by booking your stay at The Sierra - By The Lake 60 days in advance.",
            image: "/assests/28.jpg",
      },
];

export default function Offer() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className="bg-blue-50 py-12 px-4 sm:px-8 lg:px-16 pt-32">
                        <h2 className="text-3xl font-semibold text-center text-blue-900 italic mb-10">
                              MoyDom Hotel Deals
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {hotelDeals.map((deal, idx) => (
                                    <div
                                          key={idx}
                                          className="bg-white rounded-2xl text-center shadow-lg overflow-hidden"
                                    >
                                          <img
                                                src={deal.image}
                                                alt={deal.title}
                                                className="w-full h-56 object-cover"
                                          />
                                          <div className="p-6">
                                                <h3 className="text-xl font-serif font-semibold text-black mb-2">
                                                      {deal.title}
                                                </h3>
                                                <p className="text-black text-sm  md:text-[16px] mb-4">{deal.description}</p>
                                                {/* <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"> */}
                                                {/* MORE INFO */}
                                                {/* </button> */}
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
