import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/pages/Main";
import Signin from "./components/pages/Signin";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-in" element={<Signin />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
