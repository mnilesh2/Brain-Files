import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navabar/Navbar';
import Login from './components/Login/Login';
import Contact from './components/Contact Us/Contact';
import Pyq from './components/Pyq/Pyq';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path = 'Resources' element={<Pyq/>}/>

      </Route>
    </Routes>
  );
}

export default App;
