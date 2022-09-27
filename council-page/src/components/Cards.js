import React from 'react'
import './Cards.css';
import Cardimg from './../images/card1.png'
import test from '../styles.js';

function Card() {
  function Insta() {
    document.location.href = "https://www.hansung.ac.kr/"
  }
  return (
    <div className='cards'>
      <p>SNS Card News</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <div className='cards__img' onClick={Insta}><img src={Cardimg}/></div>
        <div className='cards__img' onClick={Insta}><img src={Cardimg}/></div>
        <div className='cards__img' onClick={Insta}><img src={Cardimg}/></div>
        <div className='cards__img' onClick={Insta}><img src={Cardimg}/></div>
        <div className='cards__img' onClick={Insta}><img src={Cardimg}/></div>
        </div>
      </div>
    </div>
  )
}

export default Card