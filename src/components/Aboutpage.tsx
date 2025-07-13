import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaTrain, FaUtensils, FaConciergeBell } from 'react-icons/fa';
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
];

export default function Aboutpage() {
  return (
      <>
      <Navbar language="en" toggleLanguage={() => {}} />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 mt-5"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
         <SplitText text={ "About Us"} />
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Moydom, we’re Delhi-NCR’s most trusted accommodation provider for medical guests,
          embassy-referred travelers, and official stays. Our diverse portfolio includes Premium
          Villas, Spacious Apartments (2BHK & 3BHK), Studio & Terrace Apartments, Party
          Spaces, and Independent Rooms—all designed for comfort and convenience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-green-700 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer language="en" />
    </>
  );
}
