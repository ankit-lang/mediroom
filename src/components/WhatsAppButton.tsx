import React from 'react';
import { MessageCircle } from 'lucide-react';
import translations from '../translations';

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
        className="fixed bottom-8 right-8 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-600  z-50 flex items-center justify-center"
        aria-label={t.whatsapp.ariaLabel}
      >
        <MessageCircle size={36} />
      </a>
    </div>
  );
};

export default WhatsAppButton;