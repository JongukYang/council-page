import React from 'react'
import './Cards.css';
import Cardimg from './../images/card1.png'

function Card() {
  function Insta() {
    document.location.href = "https://www.hansung.ac.kr/"
  }
  return (
    <div className='cards'>
      <p>SNS Card News</p>
      <div className='cards__container'>
        {/* <div className='cards__wrapper'> */}
          {/* <ul className='cards__items'>
            <CardItem src = {Cardimg} path='https://github.com/HSU-Council-FE/council-page' />

            <CardItem src = {Cardimg} path='https://github.com/HSU-Council-FE/council-page' />
          </ul> */}
        {/* </div> */}
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