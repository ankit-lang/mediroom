import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaTrain, FaUtensils, FaConciergeBell, FaUserMd, FaCar, FaShieldAlt, FaWifi, FaHome } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import SplitText from './SplitText';

const features = [
  {
    icon: <FaHospital size={28} />, 
    title: 'Prime Locations',
    description: 'Close to AIIMS, Apollo, Fortis, Max & more',
  },
  {
    icon: <FaTrain size={28} />,
    title: 'Seamless Connectivity',
    description: 'Metro, pharmacies, supermarkets & ATMs nearby',
  },
  {
    icon: <FaUtensils size={28} />,
    title: 'Personalized Services',
    description: 'Multilingual staff, personal chefs & car hire',
  },
  {
    icon: <FaConciergeBell size={28} />,
    title: 'Dedicated Support',
    description: 'On-call medical help & FRRO registration assistance',
  },
  {
    icon: <FaUserMd size={28} />,
    title: 'Medical Assistance',
    description: 'Doctor on call and health support for guests.',
  },
  {
    icon: <FaCar size={28} />,
    title: 'Airport Transfers',
    description: 'Convenient airport pickup and drop-off services.',
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: '24/7 Security',
    description: 'CCTV surveillance and secure premises.',
  },
  {
    icon: <FaWifi size={28} />,
    title: 'High-Speed WiFi',
    description: 'Free high-speed internet in all rooms.',
  },
  // {
  //   icon: <FaHome size={28} />,
  //   title: 'Spacious Apartments',
  //   description: '2BHK, 3BHK, and studio options for every need.',
  // },
];

export default function Aboutpage() {
  return (
      <>
      <Navbar language="en" toggleLanguage={() => {}} />
    <section className="max-w-6xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 mt-5"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#784420]">
         <SplitText text={ "About Us"} />
        </h2>
         <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-orange-700 italic">Moydom</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          One of the most <strong>trusted and reliable accommodation providers</strong> in the Delhi-NCR region.
          We specialize in hosting <span className="font-semibold text-orange-700">medical guests</span>, <span className="font-semibold text-orange-700">embassy-referred travellers</span>, and <span className="font-semibold text-orange-700">official delegations</span> with a seamless and secure living experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Our Presence
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Located across <strong>Central and South Delhi</strong>, our properties offer the perfect mix of location, comfort, and access.
        </p>
        <ul className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center text-gray-700">
          {[
            "Premium Villas",
            "Spacious 3BHK & 2BHK Apartments",
            "Studio & Terrace Apartments",
            "Party Apartments",
            "Fully-Furnished Independent Rooms",
          ].map((item, index) => (
            <li key={index} className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <p className="text-lg font-medium">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-4xl p-10 rounded-lg bg-[#784420] mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white  mb-4">
          Why Choose Moydom?
        </h2>
        <p className="text-white text-lg mb-6">
          Every property is located with easy access to major <span className="font-semibold">hospitals</span>, <span className="font-semibold">embassies</span>, and <span className="font-semibold">commercial hubs</span>.
        </p>
        <p className="text-white">
          We focus on <strong>hygiene, comfort, and convenience</strong>, with <span className="text-white-700 font-medium">modern amenities</span>, dedicated guest support, and a warm, welcoming environment—perfect for both short and extended stays.
        </p>
      </div>

      <div className="mt-12 p-10 rounded-xl bg-[#784420] text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          Privacy. Style. Functionality.
        </h3>
        <p className="text-white max-w-3xl mx-auto">
          Whether you're here for a few days or several weeks, Moydom provides a home-like experience tailored for <strong>discerning travellers</strong>.
        </p>
      </div>
    </section>
        {/* <p className="mt-4 text-[#784420] max-w-2xl mx-auto">
          At Moydom, we’re Delhi-NCR’s most trusted accommodation provider for medical guests,
          embassy-referred travelers, and official stays. Our diverse portfolio includes Premium
          Villas, Spacious Apartments (2BHK & 3BHK), Studio & Terrace Apartments, Party
          Spaces, and Independent Rooms—all designed for comfort and convenience.
        </p> */}
      </motion.div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-[#784420] mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#784420] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#784420]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div> */}
    </section>
    <Footer language="en" />
    </>
  );
}
