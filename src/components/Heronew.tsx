import React, { useState, useEffect } from 'react';
import { CalendarIcon, SearchIcon, UsersIcon } from "@heroicons/react/outline";

import img1 from "/banner/49.jpg";
import img2 from "/banner/54.jpg";
import img3 from "/banner/5.jpg";
import BlurText from './Blurredtext';
import SplitText from './SplitText';
const images = [
   img1,
   img2,
    img3


];

export default function Heronew() {
  const [current, setCurrent] = useState(0);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!city || !checkIn || !checkOut || !guests || isNaN(Number(guests)) || Number(guests) < 1) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);
    const formData = new URLSearchParams();
    formData.append('checkIn', checkIn);
    formData.append('checkOut', checkOut);
    formData.append('adults', String(guests));
    formData.append('promoCode', city);
    
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx4AqZj-upxMSp9umUjhf3l9YBe_bg2j4SyiSoeNdSnp7mikKd5QUzRPj91-mUvJBw/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );
      if (response.ok) {
        setSuccess(true);
        setCity('');
        setCheckIn('');
        setCheckOut('');
        setGuests(1);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="relative w-full md:h-screen h-[60vh] mt-14 md:mt-5 overflow-hidden">
      {/* Carousel Background Images */}
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 h-[50vh] md:h-full bg-cover bg-center transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-white/10 md:bg-gradient-to-r md:from-white/70 md:via-white/0" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl font-bold mx-auto px-6 lg:px-8 flex flex-col justify-center h-full">
        {/* Text Section */}
        <div className="max-w-xl">
          <h1 className="text-5xl hidden md:block font-serif text-[#866b1a] mb-6">
          


<BlurText
  text="A Better Way To Stay"
  delay={150}
  animateBy="letters"
  direction="top"

  className="  mb-8"
/>
 
            
          </h1>
          <p className="text-lg hidden text-left md:block text-[#866b1a]">
            
<SplitText
  text=" Premium Serviced Apartments for Medical Tourists, Embassy Guests, and Official Visitors in Delhi-NCR"
  className="text-left "
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin=""
  textAlign='left'
  
 
/>
           
          </p>
        </div>

        {/* Location Tag */}
        <div className="md:mt-8 flex items-center text relative top-[-220px] md:top-0 text-[#866b1a] font-bold text-xl bg-white/40 md:bg-inherit backdrop:blur-3xl md:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10-3.582-8-8-8-8 3.582-8 8 8 10 8 10z" />
          </svg>
          <span>New friends Colony </span>
          <span className="mx-2">|</span>
          <span className="font-semibold text-xl"> Delhi, 110025</span>
        </div>

        {/* Carousel Dots */}
        <div className=" absolute md:bottom-[120px] md:left-[50%] left-[45%] bottom-[100px] mt-6 flex justify-center space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-[#866b1a]' : 'bg-[#e5ddb8]'
              }`}
            />
          ))}
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="relative hidden md:block font-semibold mb-10 z-30"
          style={{ position: 'absolute', left: 0, right: 0, bottom: '-30px' }}
        >
          <div
            className="bg-white/95 backdrop-blur-2xl border border-[#e5ddb8] rounded-full shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto transition-all duration-300 hover:shadow-green-200"
            style={{ boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.18)' }}
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-full bg-[#e5ddb8]/60 border border-[#e5ddb8] focus-within:ring-2 focus-within:ring-[#866b1a] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#866b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Select a city"
                className="w-full bg-transparent placeholder-[#866b1a] focus:outline-none text-[#866b1a]"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
              />
            </div>
            <div className="h-8 border-l border-[#e5ddb8] hidden md:block" />
            <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-full bg-[#e5ddb8]/60 border border-[#e5ddb8] focus-within:ring-2 focus-within:ring-[#866b1a] transition">
              <div className="flex items-center gap-1">
                {/* Check-in input */}
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckIn(e.target.value)}
                  className="bg-transparent focus:outline-none text-[#866b1a]"
                  style={{ width: '110px' }}
                  required
                />
              </div>
              <span className="text-[#866b1a] font-bold text-lg">→</span>
              <div className="flex items-center gap-1">
                {/* Check-out input */}
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckOut(e.target.value)}
                  className="bg-transparent focus:outline-none text-[#866b1a]"
                  style={{ width: '110px' }}
                  required
                />
              </div>
            </div>
            <div className="h-8 border-l border-[#e5ddb8] hidden md:block" />
            <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-full bg-[#e5ddb8]/60 border border-[#e5ddb8] focus-within:ring-2 focus-within:ring-[#866b1a] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#866b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.131 0 4.153.53 5.879 1.464M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {/* Guests input */}
              <div className="flex items-center gap-2">
                <button
                  onClick={e => { e.preventDefault(); setGuests(Math.max(1, guests - 1)); }}
                  className="text-lg text-[#866b1a] px-3 rounded-full bg-[#e5ddb8] hover:bg-[#e5ddb8] transition"
                  type="button"
                  aria-label="Decrease guests"
                >
                  &minus;
                </button>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={e => setGuests(Math.max(1, Number(e.target.value)))}
                  className="w-12 text-center bg-transparent focus:outline-none text-[#866b1a] font-medium"
                  required
                />
                <button
                  onClick={e => { e.preventDefault(); setGuests(guests + 1); }}
                  className="text-lg text-[#866b1a] px-3 rounded-full bg-[#e5ddb8] hover:bg-[#e5ddb8] transition"
                  type="button"
                  aria-label="Increase guests"
                >
                  &#43;
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#866b1a] to-[#866b1a] text-white px-8 py-3 rounded-full ml-auto whitespace-nowrap shadow-lg hover:from-[#866b1a] hover:to-[#866b1a] transition-all font-bold tracking-wide"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Book'}
            </button>
          </div>
          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          {success && <div className="text-[#866b1a] text-sm mt-2">Booking request sent!</div>}
        </form>
       
      </div>
         </section>
        {/* //frt  */}
         <form onSubmit={handleSubmit} className="block md:hidden realtive z-[1000] bg-[#e5ddb8] mt-[-2rem] rounded-t-[5rem] p-3 !text-[#866b1a] shadow-md space-y-6">
      <h1 className="text-4xl !font-poppins non-italic text-[#866b1a]  text-center  font-medium leading-tight">
        A better way <br /> to stay
      </h1>
      <p className="text-sm text-[#866b1ab3]">
        Premium Serviced Apartments for Medical Tourists, Embassy Guests, and Official Visitors in Delhi-NCR
      </p>

      <div className="flex items-center gap-3 border border-[#e5ddb8] rounded-full px-4 py-3 bg-white">
        <SearchIcon className="w-5 h-5 text-[#866b1a]" />
        <input
          type="text"
          placeholder="Select a city"
          className="w-full bg-transparent focus:outline-none"
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
      </div>

      <div className="flex relative items-center text-[#866b1a] justify-between border border-[#e5ddb8] rounded-full px-4 py-3 bg-white text-sm">
        <div className="flex items-center gap-2 text-[#866b1a]">
          {/* <CalendarIcon className="w-5 h-5" /> */}
          <input
            type="date"
            value={checkIn}
            min={new Date().toISOString().split('T')[0]}
            onChange={e => setCheckIn(e.target.value)}
            className="bg-transparent focus:outline-none text-[#866b1a]"
            style={{ width: '110px' }}
            required
          />
        </div>
        <span className="text-[#866b1a]">→</span>
        <div className="text-[#866b1a]">
          <input
            type="date"
            value={checkOut}
            min={checkIn || new Date().toISOString().split('T')[0]}
            onChange={e => setCheckOut(e.target.value)}
            className="bg-transparent focus:outline-none text-[#866b1a]"
            style={{ width: '110px' }}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between border border-[#e5ddb8] rounded-full px-4 py-3 bg-white text-sm">
        <div className="flex items-center gap-2 text-[#866b1a]">
          {/* <UsersIcon className="w-5 h-5" /> */}
          <span>Guests</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={e => { e.preventDefault(); setGuests(Math.max(1, guests - 1)); }}
            className="text-xl text-[#866b1a]"
            type="button"
          >
            &minus;
          </button>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(Math.max(1, Number(e.target.value)))}
            className="w-12 text-center bg-transparent focus:outline-none text-[#866b1a] font-medium"
            required
          />
          <button
            onClick={e => { e.preventDefault(); setGuests(guests + 1); }}
            className="text-xl text-[#866b1a]"
            type="button"
          >
            &#43;
          </button>
        </div>
      </div>

      <button type="submit" className="w-full bg-[#866b1a] text-white py-3 rounded-full font-medium" disabled={loading}>
        {loading ? 'Booking...' : 'Book'}
      </button>
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
      {success && <div className="text-[#866b1a] text-sm mt-2">Booking request sent!</div>}
    </form>

      </>
  );
}
