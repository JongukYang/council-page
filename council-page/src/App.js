import logo from './logo.svg';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      </Routes>
    </Router>
    </>
      
    
  );
}

export default App;
