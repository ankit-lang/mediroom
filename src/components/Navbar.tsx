import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import translations from '../translations';
import { Link, useLocation } from 'react-router-dom';
import { useBookingModal } from './useBookingModal';
import Button from './shared/Button';
interface NavbarProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];
  const [checkIn, setCheckIn] = React.useState(new Date());
  const [checkOut, setCheckOut] = React.useState(new Date(Date.now() + 86400000));
  const [adults, setAdults] = React.useState(1);
  const [children, setChildren] = React.useState(0);

  const [promoCode, setPromoCode] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);

    const formData = new URLSearchParams();
    formData.append("checkIn", checkIn);
    formData.append("checkOut", checkOut);
    formData.append("adults", adults);
    formData.append("children", children);
    formData.append("promoCode", promoCode);

    try {

      // https://script.google.com/macros/s/AKfycbyLU5PYiBmiP2hnWv-Eoj4lQMu1eDq9g6vKVrkAEp5yB8_e00DQuvyOXYBR8dS5w4o/exec
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx4AqZj-upxMSp9umUjhf3l9YBe_bg2j4SyiSoeNdSnp7mikKd5QUzRPj91-mUvJBw/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData

        }
      );

      const result = await response.json();
      alert("form Submitted Successfully")
      // setMessage(result);
    } catch (error) {
      // setMessage('Error submitting form');
      alert("Error submitting form", error)
    }
  };


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

  const { openModal } = useBookingModal();
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md py-3 border-b border-olive/10 text-[#2d2a22]`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-2xl font-bold text-[#2d2a22]">
            <img src="/assests/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full shadow border-2 border-gold" />
            <span className="hidden sm:inline font-serif tracking-wide">Moydom</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isHovered = hovered === link.href;
              return (
                <Link
                  to={link.href}
                  key={link.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-200
                    ${isActive ? 'bg-[#19735A] text-white shadow-lg' : 'text-[#2d2a22] hover:bg-gray-200 hover:text-black'}
                  `}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(link.href)}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full border border-olive/20 bg-white shadow hover:bg-gold/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Book Now Button */}
          <div className="ml-4">
            <div onClick={() => setIsOpen(true)}>
              <Button className=" text-white  px-6 py-2 rounded-full shadow  !hover:bg-green-700 transition-all duration-200 font-semibold" />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 shadow-lg border-b border-olive/10 animate-fadeIn z-40">
            <div className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.href}
                  className="w-11/12 text-center text-lg font-medium text-green-900 py-2 rounded-full hover:bg-green/10 hover:text-green-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Booking Modal (unchanged) */}
      {isOpen && (
        <div className="fixed inset-0 bg-green-100/30 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gold text-4xl transition-colors duration-300"
            >
              &times;
            </button>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">Check In</label>
                <input
                  type="date"
                  className="w-full border rounded p-2 focus:border-[#073937] focus:ring-green-800/30 transition-colors duration-300"
                  required
                  onChange={(e) => setCheckIn(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#073937]">Check Out</label>
                <input
                  type="date"
                  className="w-full border rounded p-2  focus:ring-olive/30 transition-colors duration-300"
                  required
                  onChange={(e) => setCheckOut(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#073937]">Adults</label>
                <select className="w-full border rounded p-2  focus:ring-olive/30 transition-colors duration-300"
                  onChange={(e) => setAdults(Number(e.target.value))}>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#073937]">Children</label>
                <select className="w-full border rounded p-2  focus:ring-olive/30 transition-colors duration-300"
                  onChange={(e) => setChildren(Number(e.target.value))}
                >
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-[#073937]">Promo Code</label>
                <input
                  type="text"
                  className="w-full border rounded p-2  focus:ring-olive/30 transition-colors duration-300"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="bg-[#073937] text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;