import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import translations from '../translations';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-olive text-white ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.about.title}</h3>
            <p className="mb-4">{t.footer.about.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-custom">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-custom">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/1234567890" className="text-white hover:text-gold transition-custom">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {t.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-gold transition-custom">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1" />
                <span>{t.footer.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+911234567890" className="hover:text-gold transition-custom">
                  {t.footer.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@medistay.com" className="hover:text-gold transition-custom">
                  {t.footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.newsletter.title}</h3>
            <p className="mb-4">{t.footer.newsletter.description}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-text-dark"
              />
              <button
                type="submit"
                className="bg-gold px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-custom"
              >
                {t.footer.newsletter.button}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p>
            © {currentYear} {t.footer.copyright}
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {t.footer.bottomLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-white hover:text-gold transition-custom"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;