import React from 'react';
import { MessageCircle } from 'lucide-react';
import translations from '../translations';
import { BsWhatsapp } from 'react-icons/bs';

interface WhatsAppButtonProps {
  language: 'en' | 'ar';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="">


      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#ff8706] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105  z-50 flex items-center justify-center"
        aria-label={t.whatsapp.ariaLabel}
      >
        <BsWhatsapp size={36} />

      </a>
    </div>
  );
};

export default WhatsAppButton;