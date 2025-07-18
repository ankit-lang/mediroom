import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import RoomShowcase from './components/Room';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import FacilitiesSection from './components/FacilityPage';
import TwoRoom from './components/TwoBedroom';
import Presidential from './components/Presidential';
import Premium from './components/premiumsuite';
import Jacuzzi from './components/Jacuzi';
import Executive from './components/Executive';
import BookingModal from './components/Overlay';
import Loader from './Loader';
import Villa from './components/Villa';
import Aboutpage from './components/Aboutpage';


function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(popupTimer);
    };
  }, []);

  // Simple popup form
  const [popupForm, setPopupForm] = useState({ name: '', email: '', phone: '' });
  const [popupSubmitted, setPopupSubmitted] = useState(false);

  const handlePopupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPopupForm({ ...popupForm, [e.target.name]: e.target.value });
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupSubmitted(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
        <Route path="/rooms" element={<RoomShowcase />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/facilities" element={<FacilitiesSection />} />
        <Route path="/rooms/villa-4bhk" element={<Villa />} />
        <Route path="/rooms/apartment-3bhk-2bhk" element={<Executive/>} />
        <Route path="/rooms/studio-terrace-apartments" element={<Presidential />} />
        <Route path="/rooms/party-apartments" element={<Jacuzzi />} />
        <Route path="/rooms/independent-rooms" element={<TwoRoom />} />
        <Route path="/about" element={<Aboutpage />} />
        {/* <Route path="/rooms/executive-rooms-in-moydom" element={<Executive />} /> */}
        {/* <Route path="/rooms/presidential-family-suite" element={<Presidential />} /> */}
        {/* <Route path="/rooms/premium-suite-with-bathtub." element={<Premium />} /> */}
        {/* <Route path="/rooms/premium-suite-with-balcony." element={<TwoRoom />} /> */}
        {/* <Route path="/rooms/sierra-jacuzzi-room" element={<Jacuzzi />} /> */}
        {/* <Route path="/rooms/two-bedroom-villa-with-private-pool" element={<TwoRoom />} /> */}
        {/* <Route path='*' element={<BookingModal />} /> */}
      </Routes>
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-[#784420]"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            {!popupSubmitted ? (
              <form onSubmit={handlePopupSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#784420] mb-2 text-center">Stay Connected</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={popupForm.name}
                  onChange={handlePopupChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={popupForm.email}
                  onChange={handlePopupChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={popupForm.phone}
                  onChange={handlePopupChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
                <button
                  type="submit"
                  className="w-full bg-[#784420] text-white py-2 rounded font-semibold"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center text-[#784420] text-lg py-8">Thank you! We'll be in touch.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;