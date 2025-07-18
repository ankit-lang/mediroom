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
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [adults, setAdults] = React.useState("1");
  const [children, setChildren] = React.useState("0");
  const [promoCode, setPromoCode] = React.useState("");

  // Captcha state
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setCaptcha(Math.random().toString(36).substring(2, 8));
  }, [isOpen]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      setCaptchaError('Captcha does not match.');
      return;
    }
    setCaptchaError('');
    setLoading(true);
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
    } catch (error) {
      alert("Error submitting form", error)
    } finally {
      setLoading(false);
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
     { name: "About", href: '/about' },

    { name: t.nav.rooms, href: '/rooms' },
    // { name: "Offers", href: '/offers' },

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
          <a href="/" className="flex items-center gap-2 text-3xl font-bold text-[#2d2a22]">
            <img src="/assests/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full shadow border-2 border-gold" />
            <span className="hidden sm:inline !font-poppins tracking-wide">Moydom</span>
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
                    ${isActive ? 'bg-[#784420] text-white shadow-lg' : 'text-[#784420] hover:bg-[#e5ddb8] hover:text-[#784420]'}
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
              <Button className=" text-white  px-6 py-2 rounded-full shadow  !hover:bg-[#784420] transition-all duration-200 font-semibold" />
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
                  className="w-11/12 text-center text-lg font-medium text-[#784420] py-2 rounded-full hover:bg-[#e5ddb8] hover:text-[#784420] transition-all duration-200"
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
              className="absolute top-2 right-2 text-[#784420] hover:text-[#784420] text-4xl transition-colors duration-300"
            >
              &times;
            </button>
            {/* Captcha state */}
            {/*
              Add these at the top of the component if not already present:
              const [captcha, setCaptcha] = useState('');
              const [captchaInput, setCaptchaInput] = useState('');
              const [captchaError, setCaptchaError] = useState('');
              React.useEffect(() => { setCaptcha(Math.random().toString(36).substring(2, 8)); }, []);
            */}
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (captchaInput !== captcha) {
                  setCaptchaError('Captcha does not match.');
                  return;
                }
                setCaptchaError('');
                submitHandler(e);
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Check In <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border rounded p-2 focus:border-[#784420] focus:ring-[#784420]/30 transition-colors duration-300"
                  required
                  onChange={(e) => setCheckIn(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Check Out <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border rounded p-2  focus:ring-[#784420]/30 transition-colors duration-300"
                  required
                  onChange={(e) => setCheckOut(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Adults <span className="text-red-600">*</span>
                </label>
                <select className="w-full border rounded p-2  focus:ring-[#784420]/30 transition-colors duration-300"
                  required
                  onChange={(e) => setAdults(Number(e.target.value))}>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Children <span className="text-red-600">*</span>
                </label>
                <select className="w-full border rounded p-2  focus:ring-[#784420]/30 transition-colors duration-300"
                  required
                  onChange={(e) => setChildren(Number(e.target.value))}
                >
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Promo Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2  focus:ring-[#784420]/30 transition-colors duration-300"
                  required
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
              {/* Captcha */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-[#784420]">
                  Captcha <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 bg-gray-100 rounded font-mono tracking-widest text-lg select-none">{captcha}</span>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter captcha"
                    value={captchaInput}
                    onChange={e => setCaptchaInput(e.target.value)}
                    className="border rounded px-4 py-2 w-full"
                    required
                  />
                </div>
                {captchaError && (
                  <div className="text-red-600 text-center mt-2">{captchaError}</div>
                )}
              </div>
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-[#784420] text-white px-4 py-2 rounded hover:bg-[#784420] transition-colors duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Book Now"
                  )}
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