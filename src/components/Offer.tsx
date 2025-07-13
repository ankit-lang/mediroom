import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const hotelDeals = [
      {
            title: "Special discounted rates for long-term stays.",
            discount: "15%",
            description:
                  "",
            image: "/banner/5.jpg",
      },
      {
            title: "Flexible booking and extension options for ongoing medical treatments",
            discount: "10%",
            description:
                  "Get 10% off on your 4th night! Stay for 4 nights and enjoy extra savings for a more rewarding getaway.",
            image: "/masonary/4.JPEG",
      },
      {
                  
            title:"Complimentary transport services to hospitals like AIIMS, Apollo, and Fortis",
            discount: "40%",
            description:"",
            image: "/banner/54.jpg",
      },
      {
            title: "Assistance with appointments, medical consultations, and documentation",
            discount: "40%",
            description:
                  "",
            image: "/masonary/3.JPEG",
      },
];

export default function Offer() {
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };
      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className=" py-12 px-4 sm:px-8 lg:px-16 pt-32">
                        <h2 className="md:text-4xl text-3xl font-semibold text-center text-[#073937] italic mb-2">
                             Special Offers for Embassy-Referred Guests

                        </h2>
                        <p className="text-center mb-5 " >   
                              We value our long-standing association with foreign embassies and international guests.
                        </p>
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
                                                <h3 className="text-xl font-serif font-semibold !text-[#073937] mb-2">
                                                      {deal.title}
                                                </h3>
                                                <p className="text-black text-sm  md:text-[16px] mb-4"></p>
                                                {/* <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"> */}
                                                {/* MORE INFO */}
                                                {/* </button> */}
                                          </div>
                                    </div>
                              ))}
                        </div>
                         <div className="bg-green-700 mt-4 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between rounded-2xl shadow-lg">
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold">Get personalized offers — call us today!</h2>
      </div>
      <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
        <a href="tel:+919810000051" className="hover:underline">
          +91 9810000051
        </a>
        <a href="tel:+919333333767" className="hover:underline">
          +91 9333333767
        </a>
      </div>
    </div>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
