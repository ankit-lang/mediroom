// components/Gallery.js
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const images = [
      "/assests/1.jpg",
      "/assests/2 2.jpg",
      "/assests/2.jpg",
      // "/assests/11.jpg",
      "/assests/27.jpeg",
      "/assests/28.jpg",
      "/assests/35.jpeg",
      // "/assests/11.jpg",
      "/assests/27.jpeg",
      "/assests/28.jpg",
      "/assests/35.jpeg",

];

export default function Gallery() {
      const [isOpen, setIsOpen] = useState(false);
      const [startIndex, setStartIndex] = useState(0);

      const openModal = (index) => {
            setStartIndex(index);
            setIsOpen(true);
      };
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };

      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className="p-6  pt-32 ">
                        <h2 className="text-3xl font-bold text-center mb-6 italic text-blue-900 font-serif ">All Photos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                              {images.map((src, i) => (
                                    <img
                                          key={i}
                                          src={src}
                                          alt={`Gallery ${i}`}
                                          className="cursor-pointer rounded shadow hover:scale-105 transition-transform"
                                          onClick={() => openModal(i)}
                                    />
                              ))}
                        </div>

                        {/* Modal */}
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0">
                              <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
                              <div className="fixed inset-0 flex items-center justify-center p-4">
                                    <Dialog.Panel className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
                                          <Swiper
                                                modules={[Navigation]}
                                                navigation
                                                initialSlide={startIndex}
                                                className="w-full h-[500px]"
                                          >
                                                {images.map((src, i) => (
                                                      <SwiperSlide key={i}>
                                                            <img src={src} alt={`Slide ${i}`} className="w-full h-full object-contain" />
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                          <button
                                                className="absolute top-2 right-4 text-white text-2xl"
                                                onClick={() => setIsOpen(false)}
                                          >
                                                &times;
                                          </button>
                                    </Dialog.Panel>
                              </div>
                        </Dialog>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
