
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import RoomShowcase from './components/Room';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<RoomShowcase />} />
    </Routes>
  );
}

export default App;