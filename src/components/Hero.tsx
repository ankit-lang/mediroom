import React from 'react';
import { MessageCircle } from 'lucide-react';
import translations from '../translations';

interface HeroProps {
  language: 'en' | 'ar';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div id="home" className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center container mx-auto px-4 md:px-8">
        <div className={`text-center max-w-3xl ${dir === 'rtl' ? 'rtl' : ''}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {t.hero.whatsappButton}
            </a>
            <a 
              href="#booking" 
              className="btn-secondary"
            >
              {t.hero.bookButton}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;