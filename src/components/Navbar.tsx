import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import translations from '../translations';
import { Link } from 'react-router-dom';
import { useBookingModal } from './useBookingModal';
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

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${true ? '  bg-white shadow-md py-4' : 'bg-transparent py-4'
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
                  className="text-amber-900 font-semibold   hover:underline  hover:decoration-2  transition-custom"
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
            <div className="bg-[#ff8706] hover:bg-orange-600 text-white py-2 px-4 rounded md:mr-14">

              {/* <button onClick={() => setIsOpen(true)} >Book Now</button> */}

              <button onClick={() => setIsOpen(true)} className="relative  bg-[#ff8706]  text-white text-lg font-medium rounded-lg animate-pulse-grow focus:outline-none">
                Book Now
              </button>


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
                    className="text-amber-800  transition-custom"
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
      {isOpen && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 z-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Check In</label>
                <input
                  type="date"
                  className="w-full border rounded p-2"
                  required
                  onChange={(e) => setCheckIn(new Date(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Check Out</label>
                <input
                  type="date"
                  className="w-full border rounded p-2"
                  required
                  onChange={(e) => setCheckOut(new Date(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Adults</label>
                <select className="w-full border rounded p-2"
                  onChange={(e) => setAdults(Number(e.target.value))}>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Children</label>
                <select className="w-full border rounded p-2"
                  onChange={(e) => setChildren(Number(e.target.value))}
                >
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Promo Code</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>

              <div className="md:col-span-2 text-right">

                <button
                  type="submit"
                  onClick={submitHandler}
                  className="bg-[#ff8706] text-white px-4 py-2 rounded hover:bg-oragane-600"
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