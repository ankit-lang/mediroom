import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaTrain, FaUtensils, FaConciergeBell, FaUserMd, FaCar, FaShieldAlt, FaWifi, FaHome, FaBuilding, FaCity, FaGlassCheers, FaBed } from 'react-icons/fa';
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
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F57E5F]">
         <SplitText text={ "About Us"} />
        </h2>
        <section className="bg-white text-gray-800 px-6 py-12 md:px-16 md:py-20">
          <div className="max-w-5xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F57E5F] mb-12">
              Welcome to Moydom
            </h2>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
                At <span className="font-semibold text-[#F57E5F]">Moydom</span>, we take pride in being one of the most trusted and reliable accommodation providers in the Delhi-NCR region. Catering primarily to <span className="font-semibold text-[#F57E5F]">medical guests</span>, <span className="font-semibold text-[#F57E5F]">embassy-referred travellers</span>, and <span className="font-semibold text-[#F57E5F]">official delegations</span>, we understand the unique needs of our clientele and are committed to offering a seamless and secure living experience.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-[#F57E5F] mb-6 text-center">
                  Our Premium Accommodations
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg max-w-3xl mx-auto">
                  <li className="flex items-center space-x-2">
                    <FaHome className="text-[#F57E5F] text-xl" />
                    <span>Premium Villas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaBuilding className="text-[#F57E5F] text-xl" />
                    <span>Spacious 3BHK & 2BHK Apartments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCity className="text-[#F57E5F] text-xl" />
                    <span>Studio & Terrace Apartments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaGlassCheers className="text-[#F57E5F] text-xl" />
                    <span>Party Apartments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaBed className="text-[#F57E5F] text-xl" />
                    <span>Fully-Furnished Independent Rooms</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
                Every Moydom property is strategically located for easy access to hospitals, embassies, and commercial hubs. We prioritize <span className="italic font-medium text-[#F57E5F]">hygiene, comfort, and convenience</span>, offering <span className="font-semibold text-[#F57E5F]">modern amenities</span>, dedicated support, and a welcoming environment that makes guests feel at home—whether they're here for a short visit or a longer stay.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
                From extended stays to short-term visits, Moydom offers the perfect blend of <span className="italic font-medium text-[#F57E5F]">privacy, style, and functionality</span>, making us the preferred choice for discerning travellers.
              </p>
            </div>
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
 
