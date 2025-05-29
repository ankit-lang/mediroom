import React from 'react';
import translations from '../translations';

interface MapLocationProps {
  language: 'en' | 'ar';
}

const MapLocation: React.FC<MapLocationProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="location" className={`${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h2 className="section-title text-center font-serif  ">{t.location.title}</h2>
        <p className="section-subtitle text-center font-serif mb-6">{t.location.subtitle}</p>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9489390980607!2d77.2062605!3d28.635454699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sMax%20Super%20Speciality%20Hospital%2C%20Saket!5e0!3m2!1sen!2sin!4v1654567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-beige p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-olive font-serif">{t.location.fromAirport.title}</h3>
            <p className="mb-2 text-sm">{t.location.fromAirport.description}</p>
            <ul className="list-disc text-sm list-inside text-text-black">
              <li>{t.location.fromAirport.option1}</li>
              <li>{t.location.fromAirport.option2}</li>
            </ul>
          </div>

          <div className="bg-beige p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-olive font-serif">{t.location.publicTransport.title}</h3>
            <p className="mb-2 text-sm ">{t.location.publicTransport.description}</p>
            <ul className="list-disc text-sm list-inside text-black">
              <li>{t.location.publicTransport.option1}</li>
              <li>{t.location.publicTransport.option2}</li>
            </ul>
          </div>

          <div className="bg-beige p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-olive font-serif">{t.location.parking.title}</h3>
            <p className="mb-2 text-sm  ">{t.location.parking.description}</p>
            <ul className="list-disc text-sm list-inside text-black">
              <li>{t.location.parking.option1}</li>
              <li>{t.location.parking.option2}</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MapLocation;