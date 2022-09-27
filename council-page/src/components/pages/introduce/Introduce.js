import React, {useState, useEffect} from 'react'
// import "../../../App.css";
import Introduce_Banner from "./Introduce_Banner";
import Introduce_Navbar from "./Introduce_Navbar";
import Introduce_body from "./Introduce_body";
import "./Introduce.css";

function Introduce() {
  const [hrefState, setHrefState] = useState('hello');
  return (
    <>
      <Introduce_Banner />
      <Introduce_Navbar setHrefState={setHrefState}/>
      <Introduce_body hrefState={hrefState} />
    </>
  )
}

export default Introduce