import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import translations from '../translations';

interface NavbarProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.rooms, href: '#rooms' },
    { name: t.nav.hospitals, href: '#hospitals' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.facilities, href: '#facilities' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-olive">
            {t.branding.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-dark hover:text-olive transition-custom"
              >
                {link.name}
              </a>
            ))}
            {/* <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-olive hover:text-gold transition-custom"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button> */}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            {/* <button
              onClick={toggleLanguage}
              className="mr-4 text-olive hover:text-gold transition-custom"
            >
              <Globe size={24} />
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-olive hover:text-gold transition-custom"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-dark hover:text-olive transition-custom"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;