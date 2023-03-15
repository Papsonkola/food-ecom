import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './Componets/Navbarr/Navbarr';
import Home from './Componets/Home/Home';
import Contact from './Componets/Contact/Conact';
import About from './Componets/About/About';
import Menu from './Componets/Menu/Menu';
import Menu3 from './Componets/Menu3/Menu3';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
   <Navbarr/>

   <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = 'Contact' element = {<Contact/>}/>
    <Route path = 'About' element = {<About/>}/>
    <Route path = 'Menu' element = {<Menu/>}/>
    <Route path = 'Menu3' element = {<Menu3/>}/>
   </Routes>
   </Router>
   </div>
  );
}

export default App;
