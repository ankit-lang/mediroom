import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import RoomGallery from './components/RoomGallery';
import NearbyHospitals from './components/NearbyHospitals';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import BookingForm from './components/BookingForm';
import MapLocation from './components/MapLocation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EarlyBookingDiscount from './components/EarlyBookingDiscount';

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-amiri text-right' : 'font-poppins text-left'}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <AboutUs language={language} />
      <RoomGallery language={language} />
      <NearbyHospitals language={language} />
      <Testimonials language={language} />
      <Facilities language={language} />
      <EarlyBookingDiscount language={language} />
      <BookingForm language={language} />
      <MapLocation language={language} />
      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  );
}

export default App;