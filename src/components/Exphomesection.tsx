import React from 'react';
import { Card, CardContent } from './ui/card';
import { Home, Users, Globe, Stethoscope, Briefcase } from 'lucide-react';

export default function ExperienceHomeSection() {
  const highlights = [
    {
      icon: <Home className="w-8 h-8 text-primary" />, 
      title: 'Spacious & Comfortable',
      description: 'Enjoy spacious living areas, private terraces, and well-equipped kitchens.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />, 
      title: 'Personalized Services',
      description: 'Tailored support from check-in to check-out for stays of any length.'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />, 
      title: 'Ideal for Medical Guests',
      description: 'Proximity to hospitals and dedicated services for patients and families.'
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />, 
      title: 'International & Embassy Stays',
      description: 'Special rates and culturally sensitive hospitality for global guests.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />, 
      title: 'Corporate & Long-Term',
      description: 'Extended stays for executives and project-based assignments.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-green-800 px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center !text-green-800 mb-4">Experience A Home Away From Home</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Our properties are designed to provide a holistic experience with personalized services — whether you stay for a week or several months.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-xl text-green-700 font-semibold">{item.title}</h3>
              </div>
              <CardContent className="">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Moydom is ideal for:</h3>
          <ul className="bg-green-50 rounded-xl p-6 space-y-3">
            {[
              "Medical tourists seeking proximity to hospitals",
              "Embassy staff and foreign nationals on official stays",
              "International patients requiring long-term accommodation",
              "Families accompanying patients for medical procedures",
              "Corporate executives on project-based assignments"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-green-800 text-lg">
                <svg className="w-5 h-5 mt-1 flex-shrink-0 text-green-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-green-800 p-2 rounded-s-2xl pl-4 text-white">
          <h3 className="text-2xl text-center font-semibold mb-4">Guest-Centric Hospitality You Can Rely On</h3>
          <p className=" text-center leading-relaxed">
            With our 24×7 guest support team, scheduling appointments, arranging transport, and ensuring impeccable housekeeping are all just a call away.
          </p>
        </div>

        <div className="mt-16  bg-green-900 p-2 rounded-e-2xl text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Plan Your Stay With Confidence</h3>
          <p className=" leading-relaxed">
            Having welcomed guests from the Middle East, Africa, Southeast Asia, Europe, and beyond, our multilingual team offers culturally sensitive services — with over 10% of regular traffic from the Middle East alone.
          </p>
        </div>
      </div>
    </section>
  );
}
