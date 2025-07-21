// components/Gallery.js
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const roomImages = [
      "/1bhk/1.jpg",
      "/1bhk/2.jpg",
      "/1bhk/3.jpg",
      '/1bhk/4.jpg',
      '/1bhk/5.jpg','/1bhk/6.jpg',
      '/1bhk/7.jpg',
      '/1bhk/8.jpg', '/1bhk/9.jpg',
      '/1bhk/10.jpg', '/1bhk/11.jpg',
      '/1bhk/12.jpg', '/1bhk/13.jpg','/1bhk/14.jpg','/1bhk/15.jpg','/1bhk/16.jpg',
      '/1bhk/17.jpg', '/1bhk/18.jpg',
      '/1bhk/19.jpg', '/1bhk/20.jpg',
      '/1bhk/21.jpg', '/1bhk/22.jpg',
      '/1bhk/23.jpg',
      '2bhk/1.jpg','/2bhk/2.jpg','/2bhk/3.jpg',
      '/2bhk/4.jpg','/2bhk/5.jpg',
      '/2bhk/6.jpg','/2bhk/7.jpg',
      '/2bhk/8.jpg','/2bhk/9.jpg',
      '/2bhk/10.jpg','/2bhk/11.jpg',
      '/2bhk/12.jpg','/2bhk/13.jpg',
      '/2bhk/14.jpg','/2bhk/15.jpg',
      '/2bhk/16.jpg','/2bhk/17.jpg',
      '/2bhk/18.jpg','/2bhk/19.jpg',
      '/2bhk/20.jpg','/2bhk/21.jpg',
      '/2bhk/22.jpg','/2bhk/23.jpg',
      '/2bhk/24.jpg','/2bhk/25.jpg',
      '/2bhk/26.jpg','/2bhk/27.jpg',
      '/2bhk/28.jpg','/2bhk/29.jpg',
      '3bhk/1.jpg','/3bhk/2.jpg',
      '/3bhk/3.jpg','/3bhk/4.jpg',
      '/3bhk/5.jpg','/3bhk/6.jpg',
      '/3bhk/7.jpg','/3bhk/8.jpg',
      '/3bhk/9.jpg','/3bhk/10.jpg',
      '/3bhk/11.jpg','/3bhk/12.jpg',
      '/3bhk/13.jpg','/3bhk/14.jpg',
      '/3bhk/15.jpg','/3bhk/16.jpg',
      '/3bhk/17.jpg','/3bhk/18.jpg',
      '/3bhk/19.jpg','/3bhk/20.jpg',
      '/3bhk/21.jpg',
      '/4bhk/1.jpg','/4bhk/2.jpg',
      '/4bhk/3.jpg','/4bhk/4.jpg',
      '/4bhk/5.jpg','/4bhk/6.jpg',
      '/4bhk/7.jpg','/4bhk/8.jpg',
      '/4bhk/9.jpg','/4bhk/10.jpg',
      '/4bhk/11.jpg','/4bhk/12.jpg',
      '/4bhk/13.jpg','/4bhk/14.jpg',
      '/4bhk/15.jpg','/4bhk/16.jpg',
      '/4bhk/17.jpg','/4bhk/18.jpg',
      '/4bhk/19.jpg','/4bhk/20.jpg',
      '/4bhk/21.jpg','/4bhk/22.jpg',
      '/4bhk/23.jpg','/4bhk/24.jpg',
      '/4bhk/26.jpg',
      '/4bhk/27.jpg','/4bhk/28.jpg',
      '/4bhk/29.jpg','/4bhk/30.jpg',
      '/4bhk/31.jpg','/4bhk/32.jpg',
      '/4bhk/33.jpg','/4bhk/34.jpg',
      '/4bhk/35.jpg','/4bhk/36.jpg',
      '/4bhk/37.jpg',
      '/4bhk/39.jpg','/4bhk/40.jpg',
      '/4bhk/41.jpg','/4bhk/42.jpg',
      '/4bhk/43.jpg','/4bhk/44.jpg',
      '/4bhk/45.jpg','/4bhk/46.jpg',
      '/4bhk/47.jpg','/4bhk/48.jpg',
      '/4bhk/49.jpg','/4bhk/50.jpg',
      '/4bhk/51.jpg'

   
];

const apartmentImages = [
      "/studio/1.png",'/studio/2.png',
      '/studio/3.png','/studio/4.png',
      '/studio/5.png','/studio/6.png',
      '/studio/7.png','/studio/8.png',
      '/studio/9.png','/studio/10.png',
      '/studio/11.png',
      '/terace/1.png','/terace/2.png',
      '/terace/3.png','/terace/4.png',
      '/terace/5.png','/terace/6.png',
      '/terace/7.png','/terace/8.png',
      '/terace/9.png','/terace/10.png',
      '/terace/11.png','/terace/12.png',
      
     
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
                                                <div key={i} className="aspect-[4/3] h-[300px] w-full">
                                                      <img
                                                            src={src}
                                                            alt={`Room ${i}`}
                                                            className="cursor-pointer rounded shadow hover:scale-105 transition-transform w-full h-full object-cover"
                                                            onClick={() => openModal(roomImages, i)}
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </>
                        )}
                        {section === 'apartments' && (
                              <>
                                    <h2 className="text-3xl font-bold text-center mb-6 italic text-[#784420] font-serif">Apartments</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                                          {apartmentImages.map((src, i) => (
                                                <div key={i} className="aspect-[4/3] h-[300px] w-full">
                                                      <img
                                                            src={src}
                                                            alt={`Apartment ${i}`}
                                                            className="cursor-pointer rounded shadow hover:scale-105 transition-transform w-full h-full object-cover"
                                                            onClick={() => openModal(apartmentImages, i)}
                                                      />
                                                </div>
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
