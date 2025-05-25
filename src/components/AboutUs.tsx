import React, { useEffect, useState } from 'react';
import translations from '../translations';
import { AnimatePresence, motion } from 'framer-motion';

interface AboutUsProps {
  language: 'en' | 'ar';
}

const images = [
  "/assests/28.jpg",
  "/assests/82.jpg",
  "/assests/11.jpg",



];
const image2 = [
  "/assests/35.jpg",
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
    <section id="about" className={` font-serif section-padding bg-white ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center  font-serif ">About Moydom</h2>

        <div className="grid grid-cols-1 tracking-wider md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="rounded-lg relative overflow-hidden flex justify-center transform transition-transform hover:scale-105">
              <img
                src="/assests/82.jpg"
                alt="Comfortable accommodation "
                className=" h-[45vh]"
              />
              <AnimatePresence>
                <motion.img
                  key={image2[index]}
                  src={image2[index]}
                  initial={{ scale: 1.2, opacity: 0, rotate: -3 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotate: 3 }}
                  transition={{ duration: 1 }}
                  className="absolute w-full h-full object-cover opacity-25"
                />
              </AnimatePresence>
            </div>
            <p className=" text-sm  md:text-md">
              At Moydom Bed & Breakfast, we understand that medical travel can be a journey filled with both hope and uncertainty. That’s why we’ve built more than just a place to stay — we’ve created a home of care in the heart of Delhi.
            </p>

            {/* <p className="text-sm md:text-md">
                Strategically located in Central South Delhi, Moydom is just minutes away from Delhi’s top hospitals like Max, Apollo, Fortis, and AIIMS — ensuring you’re never far from the treatment and support you need. But what truly sets us apart is our focus on emotional comfort, cultural sensitivity, and personalized service — especially for guests traveling from the Middle East and Gulf countries.
              </p> */}



          </div>
          <div className="">
            <div className="">
              <p className="md:mt-10 mb-10 text-sm md:text-md">
                Our rooms, villas, and apartments are designed with patients and families in mind — combining medical-stay functionality with the warmth of home. With Arabic food available on request, assistance in appointment scheduling, and concierge services like translators, drivers, and even FRRO support, we ensure you can focus entirely on what matters most: healing and recovery.
              </p>


            </div>
            <div className="rounded-lg mb-10  flex justify-center  overflow-hidden   transform transition-transform hover:scale-105">
              <img
                src="/assests/28.jpg"
                alt="Comfortable accommodation "
                className=" min-w-[30vw]  md:max-w-[30vw] "
              />
              <AnimatePresence>
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  initial={{ scale: 1.2, opacity: 0, rotate: -3 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotate: 3 }}
                  transition={{ duration: 1 }}
                  className="absolute w-full h-full object-cover opacity-25"
                />
              </AnimatePresence>

            </div>

          </div>


        </div>
        <div className="bg-beige mt-5  p-6 rounded-lg border-l-4 border-olive">
          <h3 className=" text-lg  md:text-xl font-semibold mb-2">{t.about.highlightTitle}</h3>
          <p> While other accommodations like Airbnb or hotels may provide a roof and a bed, Moydom delivers a medically-aligned environment where comfort, nutrition, communication, and logistics are all tailored for patient convenience.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.about.features.map((feature, index) => (
            <div key={index} className="bg-beige p-6 rounded-lg text-center hover:shadow-md transition-custom">
              <div className="bg-olive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;