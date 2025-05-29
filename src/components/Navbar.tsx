import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import translations from '../translations';
import { Link } from 'react-router-dom';

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
    { name: t.nav.home, href: '/' },

    { name: t.nav.rooms, href: '/rooms' },
    { name: "Offers", href: '/offers' },

    { name: t.nav.facilities, href: '/facilities' },
    { name: "Gallery", href: '/gallery' },

    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${true ? '  bg-[#f4f9ff] shadow-md py-4' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-olive">
            {/* MoyDom */}
            <div className=" w-[60px]"><img src="/assests/logo.jpg" alt="" /></div>

          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link

                to={link.href}
                className="text-text-dark  hover:text-[#0753c5] hover:underline  hover:decoration-2  transition-custom"
              >
                {link.name}
              </Link>
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
          <div className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded md:mr-14">
            <a href="#booking">
              <button>Book Now</button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  // key={link.name}
                  to={link.href}
                  className="text-text-dark hover:text-olive transition-custom"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;