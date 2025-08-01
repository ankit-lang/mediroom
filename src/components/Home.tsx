import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import RoomGallery from './RoomGallery';
import NearbyHospitals from './NearbyHospitals';
import Testimonials from './Testimonials';
import Facilities from './Facilities';
import BookingForm from './BookingForm';
import MapLocation from './MapLocation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import EarlyBookingDiscount from './EarlyBookingDiscount';
import { Routes } from 'react-router-dom';
import FadeInFromBottom from './FadeFromBottom';
import { BackgroundBeams } from './ui/background-beams';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Heronew from './Heronew';

import Masonry from './shared/Mansory';



const Home = () => {
    
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {
            setLanguage(language === 'en' ? 'ar' : 'en');
      };

      return (

            <div className="">

                  <div className={`min-h-screen  tracking-wide ${language === 'ar' ? 'font-amiri text-right' : 'font-poppins text-left'}`}>

                        <div className='z-10'>
                              <Navbar language={language} toggleLanguage={toggleLanguage} />
                              <FadeInFromBottom>
                                    {/* <Hero language={language} /> */}
                                    <Heronew/>
                              </FadeInFromBottom>
                          
                              <AboutUs language={language} />
                              {/* <RoomGallery language={language} /> */}
                              {/* <NearbyHospitals language={language} /> */}
                              {/* <Testimonials language={language} /> */}
                              {/* <Facilities language={language} /> */}
                              {/* <EarlyBookingDiscount language={language} /> */}
                              <BookingForm language={language} />
                              <MapLocation language={language} />
                              <Footer language={language} />
                              <WhatsAppButton language={language} />





                        </div>
                  </div>
            </div>


      );
}

export default Home;