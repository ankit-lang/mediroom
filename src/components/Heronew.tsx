import React, { useState, useEffect } from 'react';
import { CalendarIcon, SearchIcon, UsersIcon } from "@heroicons/react/outline";

const images = [
   'https://imgs.search.brave.com/mXlG21SIO7A_8Ny8J6-feOxcxa0aGRqN79wDHlnwlXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waF5Y2Ru/LmNvbS9waG90b3Mv/aG91c2UtaW4tdHJl/ZXMuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA',
   'https://imgs.search.brave.com/VUVjz4O9huadOGlYhAUIximfpgFaA5cEWShETMBEeJk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waF5Y2Ru/LmNvbS9waG90b3Mv/bW9kZXJuLWhvdXNl/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA',

   'https://imgs.search.brave.com/mXlG21SIO7A_8Ny8J6-feOxcxa0aGRqN79wDHlnwlXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waF5Y2Ru/LmNvbS9waG90b3Mv/aG91c2UtaW4tdHJl/ZXMuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA',

   'https://imgs.search.brave.com/mXlG21SIO7A_8Ny8J6-feOxcxa0aGRqN79wDHlnwlXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waF5Y2Ru/LmNvbS9waG90b3Mv/aG91c2UtaW4tdHJl/ZXMuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA',

];

export default function Heronew() {
  const [current, setCurrent] = useState(0);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          <h1 className="text-5xl hidden md:block font-serif text-green-900 mb-6">
            A Better Way<br />To Stay
          </h1>
          <p className="text-lg hidden md:block text-green-800">
            A choice of stays in the cities you love, powered by an app that puts you in control. Now part of Moydom.
          </p>
        </div>

        {/* Location Tag */}
        <div className="md:mt-8 flex items-center text relative top-[-220px] md:top-0 text-green-900 font-bold text-xl bg-white/20 md:bg-inherit backdrop:blur-3xl md:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10-3.582-8-8-8-8 3.582-8 8 8 10 8 10z" />
          </svg>
          <span>123 Medical District</span>
          <span className="mx-2">|</span>
          <span className="font-semibold text-xl"> Saket, New Delhi</span>
        </div>

        {/* Carousel Dots */}
        <div className=" absolute md:bottom-[100px] md:left-[50%] left-[45%] bottom-[100px] mt-6 flex justify-center space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-green-900' : 'bg-green-200'
              }`}
            />
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block font-semibold mb-10 z-30" style={{ position: 'absolute', left: 0, right: 0, bottom: '-30px' }}>
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-full shadow-lg p-4 flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}>
            <div className="flex-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Select a city"
                className="w-full bg-transparent placeholder-green-800 focus:outline-none"
              />
            </div>
            <div className="h-6 border-l border-green-200 hidden md:block" />
            <div className="flex-1 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {/* Check-in input */}
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckIn(e.target.value)}
                  className="bg-transparent focus:outline-none text-green-800"
                  style={{ width: '110px' }}
                />
              </div>
              <span>→</span>
              <div className="flex items-center gap-1">
                {/* Check-out input */}
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckOut(e.target.value)}
                  className="bg-transparent focus:outline-none text-green-800"
                  style={{ width: '110px' }}
                />
              </div>
            </div>
            <div className="h-6 border-l border-green-200 hidden md:block" />
            <div className="flex-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.131 0 4.153.53 5.879 1.464M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {/* Guests input */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="text-lg text-green-800 px-2"
                  type="button"
                >
                  &minus;
                </button>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={e => setGuests(Math.max(1, Number(e.target.value)))}
                  className="w-12 text-center bg-transparent focus:outline-none text-green-800 font-medium"
                />
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="text-lg text-green-800 px-2"
                  type="button"
                >
                  &#43;
                </button>
              </div>
            </div>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full ml-auto whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
       
      </div>
         </section>
        {/* //frt  */}
         <div className="  block md:hidden realtive z-[1000] bg-green-50 mt-[-3rem] rounded-t-[5rem] p-6 !text-[#09342c] shadow-md space-y-6">
      <h1 className="text-4xl !font-poppins text-green-900  font-medium leading-tight">
        A better way <br /> to stay
      </h1>
      <p className="text-sm text-[#09342cb3]">
        A choice of stays in the cities you love, powered by an app that puts you in
        control. Now part of Marriott Bonvoy.
      </p>

      <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-3 bg-white">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Select a city"
          className="w-full bg-transparent focus:outline-none"
        />
      </div>

      <div className="flex relative items-center text-green-900 justify-between border border-gray-300 rounded-full px-4 py-3 bg-white text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          {/* <CalendarIcon className="w-5 h-5" /> */}
          <input
            type="date"
            value={checkIn}
            min={new Date().toISOString().split('T')[0]}
            onChange={e => setCheckIn(e.target.value)}
            className="bg-transparent focus:outline-none text-gray-600"
            style={{ width: '110px' }}
          />
        </div>
        <span className="text-gray-400">→</span>
        <div className="text-gray-600">
          <input
            type="date"
            value={checkOut}
            min={checkIn || new Date().toISOString().split('T')[0]}
            onChange={e => setCheckOut(e.target.value)}
            className="bg-transparent focus:outline-none text-gray-600"
            style={{ width: '110px' }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-3 bg-white text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          {/* <UsersIcon className="w-5 h-5" /> */}
          <span>Guests</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="text-xl text-gray-600"
          >
            &minus;
          </button>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(Math.max(1, Number(e.target.value)))}
            className="w-12 text-center bg-transparent focus:outline-none text-gray-800 font-medium"
          />
          <button
            onClick={() => setGuests(guests + 1)}
            className="text-xl text-gray-600"
          >
            &#43;
          </button>
        </div>
      </div>

      <button className="w-full bg-[#09342c] text-white py-3 rounded-full font-medium">
        Search
      </button>
    </div>

      </>
  );
}
