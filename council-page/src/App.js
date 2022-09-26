import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/pages/Main";
import Signin from "./components/pages/signin/Signin";
import Communication from "./components/pages/Communication/Communication";
import Information from "./components/pages/Information";
import Introduce from "./components/pages/introduce/Introduce";
import Office from "./components/pages/Office";
import Notice from "./components/pages/Notice";
import ComQuestion from "./components/pages/Communication/Communication_question";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/introduce" element={<Introduce />} />
                    <Route path="/office" element={<Office />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/communication" element={<Communication />} />
                    <Route
                        path="/communication/question"
                        element={<ComQuestion />}
                    />
                    <Route path="/information" element={<Information />} />
                    <Route path="/sign-in" element={<Signin />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
