import { Route, Routes } from 'react-router-dom';
import './Style.css'
import NavBar from './Component/NavBar';
import ContactUs from './Component/ContactUs';
import About from './Component/About';
import Home from './Component/Home';
import User from './Component/User';
import TwoWheeler from './Component/TwoWheeler';
import FourWheeler from './Component/FourWheeler';
import Admin from './Component/Admin';
import Booking from './Component/Booking';

function App() {
  return (
    <div className="App">
     <NavBar/>
    
     <Routes>
      <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/twowheeler' element={<TwoWheeler/>}/>
        <Route path='/fourwheeler' element={<FourWheeler/>}/>
        <Route path='/booking' element={<Booking/>}/>
     </Routes>
    </div>
  );
}

export default App;
