import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, HeartHandshake, Stethoscope, Calendar, UserCheck, Home } from 'lucide-react';

export default function WhyMoydomSection() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-[#784420]" />, 
      title: 'Strategic Prime Location',
      description: 'Located in Central South Delhi, minutes away from AIIMS, Apollo, Fortis, and Max Hospital.'
    },
    {
      icon: <Home className="w-8 h-8 text-[#784420]" />, 
      title: 'Proximity to Essentials',
      description: 'Walk to pharmacies, supermarkets, cafés, ATMs, and metro stations for total peace of mind.'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-[#784420]" />, 
      title: 'Tailor-Made Medical Services',
      description: 'On-call medical assistance, hospital transport, appointment booking, translators & more.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#784420]" />, 
      title: 'Exclusive Embassy & Long-Stay Benefits',
      description: 'Special rates, flexible bookings, and bespoke services for embassy referrals and extended stays.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#784420]" />, 
      title: 'Flexible Booking Options',
      description: 'Short or long-term stays with easy modification or extension based on your schedule.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#784420]" />, 
      title: 'Premium Accommodations',
      description: 'Villas, 3BHK & 2BHK apartments, studios, terraces, party apartments & private rooms.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-[#784420]">Why Moydom is the Preferred Choice</h2>
        <p className="text-center text-lg text-[#784420] mb-12">
          At Moydom, we don’t just provide rooms — we create an environment of care, comfort, and convenience tailored for medical and official travellers in Delhi.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-[#784420]">{item.title}</h3>
              </div>
              <CardContent className="text-[#784420]">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
