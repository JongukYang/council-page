import React from 'react'
import "../../../App.css";
import Intro_Banner_img from "../../../images/Intro_Banner_img.png";
import "./Introduce.css";


function Introduce_Banner() {
  return (
    <div className="Banner-container">
    <img src={Intro_Banner_img} />
    </div>
  )
}

export default Introduce_Banner