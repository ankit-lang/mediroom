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
        <h2 className="section-title text-center">{t.about.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              {t.about.description1}
            </p>
            <p className="text-lg">
              {t.about.description2}
            </p>
            <div className="bg-beige p-6 rounded-lg border-l-4 border-olive">
              <h3 className="text-xl font-semibold mb-2">{t.about.highlightTitle}</h3>
              <p>{t.about.highlightText}</p>
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