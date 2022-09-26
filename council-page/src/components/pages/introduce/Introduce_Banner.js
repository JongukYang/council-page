import React from 'react'
import "../../../App.css";
import "./Introduce_Banner.css";
import Intro_Banner_img from "../../../images/Intro_Banner_img.png";

function Introduce_Banner() {
  return (
    <div className="Banner-container">
    <img src={Intro_Banner_img} />
    </div>
  )
}

export default Introduce_Banner