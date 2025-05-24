import React from 'react';
import translations from '../translations';

interface AboutUsProps {
  language: 'en' | 'ar';
}

const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="about" className={`section-padding bg-white ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Moydom</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              At Moydom Bed & Breakfast, we understand that medical travel can be a journey filled with both hope and uncertainty. That’s why we’ve built more than just a place to stay — we’ve created a home of care in the heart of Delhi.
            </p>
            <p className="text-lg">
              Strategically located in Central South Delhi, Moydom is just minutes away from Delhi’s top hospitals like Max, Apollo, Fortis, and AIIMS — ensuring you’re never far from the treatment and support you need. But what truly sets us apart is our focus on emotional comfort, cultural sensitivity, and personalized service — especially for guests traveling from the Middle East and Gulf countries.
            </p>
            <p className="text-lg">
              Our rooms, villas, and apartments are designed with patients and families in mind — combining medical-stay functionality with the warmth of home. With Arabic food available on request, assistance in appointment scheduling, and concierge services like translators, drivers, and even FRRO support, we ensure you can focus entirely on what matters most: healing and recovery.
            </p>

            <p className='text-lg' >
              Whether you’re here for advanced treatment, post-surgery rest, or supporting a loved one through recovery, Moydom welcomes you with open arms, warm smiles, and a peaceful stay that feels just like home.
            </p>
            <div className="bg-beige p-6 rounded-lg border-l-4 border-olive">
              <h3 className="text-xl font-semibold mb-2">{t.about.highlightTitle}</h3>
              <p> While other accommodations like Airbnb or hotels may provide a roof and a bed, Moydom delivers a medically-aligned environment where comfort, nutrition, communication, and logistics are all tailored for patient convenience.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Comfortable accommodation for medical travelers"
              className="w-full h-auto"
            />
          </div>
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