
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import RoomShowcase from './components/Room';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import FacilitiesSection from './components/FacilityPage';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<RoomShowcase />} />
      <Route path="/offers" element={<Offer />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/facilities" element={<FacilitiesSection />} />
    </Routes>
  );
}

export default App;