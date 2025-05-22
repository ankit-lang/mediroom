import React from 'react';
import { Building2, Clock, MapPin, Stethoscope } from 'lucide-react';
import translations from '../translations';

interface NearbyHospitalsProps {
  language: 'en' | 'ar';
}

const NearbyHospitals: React.FC<NearbyHospitalsProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const hospitals = [
    {
      id: 1,
      name: 'Max Super Speciality Hospital',
      distance: t.hospitals.max.distance,
      specialties: t.hospitals.max.specialties,
      icon: <Building2 size={36} className="text-olive" />,
    },
    {
      id: 2,
      name: 'Fortis Hospital',
      distance: t.hospitals.fortis.distance,
      specialties: t.hospitals.fortis.specialties,
      icon: <Stethoscope size={36} className="text-olive" />,
    },
    {
      id: 3,
      name: 'Apollo Hospital',
      distance: t.hospitals.apollo.distance,
      specialties: t.hospitals.apollo.specialties,
      icon: <Building2 size={36} className="text-olive" />,
    },
  ];

  const facilities = [
    {
      id: 1,
      name: t.hospitals.facilities.pharmacy.name,
      description: t.hospitals.facilities.pharmacy.description,
      icon: <Clock size={36} className="text-olive" />,
    },
    {
      id: 2,
      name: t.hospitals.facilities.lab.name,
      description: t.hospitals.facilities.lab.description,
      icon: <MapPin size={36} className="text-olive" />,
    },
  ];

  return (
    <section id="hospitals" className={`section-padding bg-white ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center">{t.hospitals.title}</h2>
        <p className="section-subtitle text-center mb-12">{t.hospitals.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <div 
              key={hospital.id} 
              className="bg-beige rounded-lg p-6 shadow-md hover:shadow-lg transition-custom"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto">
                {hospital.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{hospital.name}</h3>
              <p className="text-center text-text-light mb-4">{hospital.distance}</p>
              <div className="text-center">
                <h4 className="font-medium mb-2">{t.hospitals.specialtiesTitle}</h4>
                <p>{hospital.specialties}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">{t.hospitals.nearbyFacilitiesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <div 
                key={facility.id} 
                className="flex items-start p-6 bg-beige rounded-lg shadow-md"
              >
                <div className="mr-4">
                  {facility.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{facility.name}</h4>
                  <p className="text-text-light">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyHospitals;