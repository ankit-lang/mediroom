
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

function App() {


  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<RoomShowcase />} />
      <Route path="/offers" element={<Offer />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/facilities" element={<FacilitiesSection />} />
      <Route path="/rooms/executive-rooms-in-moydom" element={<Executive />} />
      <Route path="/rooms/presidential-family-suite" element={<Presidential />} />
      <Route path="/rooms/premium-suite-with-bathtub." element={<Premium />} />
      {/* <Route path="/rooms/premium-suite-with-balcony." element={<TwoRoom />} /> */}
      <Route path="rooms/sierra-jacuzzi-room" element={<Jacuzzi />} />
      <Route path="/" element={<TwoRoom />} />
      <Route path="/rooms/two-bedroom-villa-with-private-pool" element={<TwoRoom />} />
      {/* <Route path='*' element={<BookingModal />} /> */}
    </Routes>
  );
}

export default App;