import React, { useEffect, useState } from 'react';
import translations from '../translations';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import RoomsSection from './RoomSectionAbout';
import RoomsSection2 from './Roomsection2';
import Facilities from './Facilities';
import Highlight from './Highlight';
import BookingFormnew from './bookform.jsx';
import ScatterText from './Scatter.js';
import FadeInFromBottom from './FadeFromBottom.js';
import { ContainerScroll } from './ui/container-scroll-animation.js';


interface AboutUsProps {
  language: 'en' | 'ar';
}

const images = [
  "/assests/28.jpg",
  "/assests/82.jpg",
  "/assests/11.jpg",



];
const image2 = [
  "/assests/35.jpeg",
  "/assests/82.jpg",
  "/assests/27.jpeg",



];
const images3 = [
  "/assests/35.jpeg",
  "/assests/82.jpg",
  "/assests/27.jpeg",



];
const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div className=" block md:hidden mb-72"> */}

      {/* <BookingFormnew /> */}
      {/* </div> */}
      <FadeInFromBottom>
        <footer className="bg-amber-800 text-white py-8 text-center">
          <motion.div


            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >

            <div className="max-w-4xl mx-auto px-4">
              <div className="text-2xl text-white md:text-3xl font-semibold italic mb-2">
                MoyDom Rooms
              </div>
              <p className="mb-6 text-sm md:text-base">

              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 9810000051 </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 9333333767</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>info@moydom.in</span>
                </div>
              </div>
            </div>
          </motion.div>

        </footer>
      </FadeInFromBottom>

      <section className="bg-gradient-to-b  tracking-wide from-[#white] to-white py-12 text-center px-4">
        {/* Logo */}
        <FadeInFromBottom>
          <div className="flex justify-center ">
            <img
              src="/assests/logo.jpg"
              alt="Sierra Udaipur Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        </FadeInFromBottom>

        {/* Heading */}
        <motion.div


          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold italic text-[#1a2b5c] mb-8">
            <span className="font-bold font-serif flex items-center justify-center ">
              Moy Dom
            </span>
          </h2>
        </motion.div>

        {/* Paragraphs */}
        <div className="max-w-6xl font-serif mx-auto text-gray-800 space-y-6 text- text-center leading-relaxed">
          <p className='text-sm md:text-[16px]' >
            <motion.p

              className=" text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Where Healing Begins with Hospitality
            </motion.p>
          </p>
          <p className='text-sm md:text-[16px]' >
            <motion.p

              className=" text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              At Moydom Bed & Breakfast, we understand that medical travel can be a journey filled with both hope and uncertainty. That’s why we’ve built more than just a place to stay — we’ve created a home of care in the heart of Delhi.
            </motion.p>
          </p>
          <p className='text-center text-sm md:text-[16px] hidden md:block' >
            <motion.p

              className=" text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              viewport={{ once: true }}
            >
              Strategically located in Central South Delhi, Moydom is just minutes away from Delhi’s top hospitals like Max, Apollo, Fortis, and AIIMS — ensuring you’re never far from the treatment and support you need. But what truly sets us apart is our focus on emotional comfort, cultural sensitivity, and personalized service — especially for guests traveling from the Middle East and Gulf countries.
            </motion.p>
          </p>
          <p className="text-center  font-medium text-sm md:text-[16px]">
            <motion.p

              className=" text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether you’re here for advanced treatment, post-surgery rest, or supporting a loved one through recovery, Moydom welcomes you with open arms, warm smiles, and a peaceful stay that feels just like home.
            </motion.p>  </p>
        </div>
      </section>
      <motion.div


        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col mt-[-70vw] mb-[-70vw] md:mt-[-15vw] md:mb-[-10vw] ">
          <ContainerScroll
            titleComponent={
              <>

              </>
            }

          >
            <div className="relative w-screen h-screen overflow-hidden">
              <AnimatePresence>
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-0 w-full h-full object-fit  overflow-hidden"
                />
              </AnimatePresence>
            </div>
          </ContainerScroll>
        </div>
      </motion.div>
      <div className="mt-5"></div>

      <RoomsSection />

      <RoomsSection2 />
      <Facilities language={language} />
      <Highlight />

    </>
  );
};

{/* <section id="about" className={` font-serif section-padding bg-white ${dir === 'rtl' ? 'rtl' : ''}`}> */ }
// <div className="container mx-auto">
{/* <h2 className="section-title text-center  font-serif "></h2> */ }

// <div className="grid grid-cols-1 tracking-wider md:grid-cols-2 gap-20 items-center">
// <div className="space-y-6">
// <div className="rounded-lg relative overflow-hidden flex justify-center transform transition-transform hover:scale-105">
// <img
// src="/assests/82.jpg"
// alt="Comfortable accommodation "
// className=" h-[45vh]"
//   />
//   <AnimatePresence>
//     <motion.img
//       key={image2[index]}
//       src={image2[index]}
//       initial={{ scale: 1.2, opacity: 0, rotate: -3 }}
//       animate={{ scale: 1, opacity: 1, rotate: 0 }}
//       exit={{ scale: 1.1, opacity: 0, rotate: 3 }}
//       transition={{ duration: 1 }}
//       className="absolute w-full h-full object-cover opacity-25"
//     />
//   </AnimatePresence>
// </div>
// <p className=" text-sm  md:text-md">
//   At Moydom Bed & Breakfast, we understand that medical travel can be a journey filled with both hope and uncertainty. That’s why we’ve built more than just a place to stay — we’ve created a home of care in the heart of Delhi.
// </p>

{/* <p className="text-sm md:text-md">
        Strategically located in Central South Delhi, Moydom is just minutes away from Delhi’s top hospitals like Max, Apollo, Fortis, and AIIMS — ensuring you’re never far from the treatment and support you need. But what truly sets us apart is our focus on emotional comfort, cultural sensitivity, and personalized service — especially for guests traveling from the Middle East and Gulf countries.
      </p> */}



// </div>
// <div className="">
//   <div className="">
//     <p className="md:mt-10 mb-10 text-sm md:text-md">
//       Our rooms, villas, and apartments are designed with patients and families in mind — combining medical-stay functionality with the warmth of home. With Arabic food available on request, assistance in appointment scheduling, and concierge services like translators, drivers, and even FRRO support, we ensure you can focus entirely on what matters most: healing and recovery.
//     </p>


//   </div>
//   <div className="rounded-lg mb-10  flex justify-center  overflow-hidden   transform transition-transform hover:scale-105">
//     <img
//       src="/assests/28.jpg"
//       alt="Comfortable accommodation "
//       className=" min-w-[30vw]  md:max-w-[30vw] "
//     />
//     <AnimatePresence>
//       <motion.img
//         key={images[index]}
//         src={images[index]}
//         initial={{ scale: 1.2, opacity: 0, rotate: -3 }}
//         animate={{ scale: 1, opacity: 1, rotate: 0 }}
//         exit={{ scale: 1.1, opacity: 0, rotate: 3 }}
//         transition={{ duration: 1 }}
//         className="absolute w-full h-full object-cover opacity-25"
//       />
//     </AnimatePresence>

//   </div>

// </div>


//     </div>
//     <div className="bg-beige mt-5  p-6 rounded-lg border-l-4 border-olive">
//       <h3 className=" text-lg  md:text-xl font-semibold mb-2">{t.about.highlightTitle}</h3>
//       <p> While other accommodations like Airbnb or hotels may provide a roof and a bed, Moydom delivers a medically-aligned environment where comfort, nutrition, communication, and logistics are all tailored for patient convenience.</p>
//     </div>

//     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {t.about.features.map((feature, index) => (
//         <div key={index} className="bg-beige p-6 rounded-lg text-center hover:shadow-md transition-custom">
//           <div className="bg-olive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//             <span className="text-white text-2xl">{index + 1}</span>
//           </div>
//           <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//           <p>{feature.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

export default AboutUs;