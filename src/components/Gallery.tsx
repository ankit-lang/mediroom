// components/Gallery.js
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const roomImages = [
      "/assests/1.jpg",
      "/assests/2 2.jpg",
      "/assests/2.jpg",
      "/assests/27.jpeg",
      "/assests/28.jpg",
];

const apartmentImages = [
      "/assests/35.jpeg",
      "/assests/27.jpeg",
      "/assests/28.jpg",
      "/assests/35.jpeg",
];

export default function Gallery() {
      const [isOpen, setIsOpen] = useState(false);
      const [startIndex, setStartIndex] = useState(0);
      const [modalImages, setModalImages] = useState<string[]>([]);
      const [language, setLanguage] = useState<'en' | 'ar'>('en');
      const [section, setSection] = useState<'rooms' | 'apartments'>('rooms');

      const toggleLanguage = () => {};

      const openModal = (images: string[], index: number) => {
            setModalImages(images);
            setStartIndex(index);
            setIsOpen(true);
      };

      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className="p-6 pt-32">
                        {/* Section Navigation Dropdown */}
                        <div className="flex justify-center mb-8">
                              <select
                                    value={section}
                                    onChange={e => setSection(e.target.value as 'rooms' | 'apartments')}
                                    className="px-4 py-2 rounded border border-[#784420] text-[#784420] font-semibold"
                              >
                                    <option value="rooms">Rooms</option>
                                    <option value="apartments">Apartments</option>
                              </select>
                        </div>
                        {/* Section Content */}
                        {section === 'rooms' && (
                              <>
                                    <h2 className="text-3xl font-bold text-center mb-6 italic text-[#784420] font-serif">Rooms</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
                                          {roomImages.map((src, i) => (
                                                <img
                                                      key={i}
                                                      src={src}
                                                      alt={`Room ${i}`}
                                                      className="cursor-pointer rounded shadow hover:scale-105 transition-transform"
                                                      onClick={() => openModal(roomImages, i)}
                                                />
                                          ))}
                                    </div>
                              </>
                        )}
                        {section === 'apartments' && (
                              <>
                                    <h2 className="text-3xl font-bold text-center mb-6 italic text-[#784420] font-serif">Apartments</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                                          {apartmentImages.map((src, i) => (
                                                <img
                                                      key={i}
                                                      src={src}
                                                      alt={`Apartment ${i}`}
                                                      className="cursor-pointer rounded shadow hover:scale-105 transition-transform"
                                                      onClick={() => openModal(apartmentImages, i)}
                                                />
                                          ))}
                                    </div>
                              </>
                        )}
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
                                                {modalImages.map((src, i) => (
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
