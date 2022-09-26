import React from 'react'
// import "../../../App.css";
import Introduce_Banner from "./Introduce_Banner";
import Introduce_Navbar from "./Introduce_Navbar";
import Introduce_body from "./Introduce_body";
import "./Introduce.css";

function Introduce() {
  return (
    <>
      <Introduce_Banner />
      <Introduce_Navbar />
      <Introduce_body />
    </>
  )
}

export default Introduce