import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import Cardimg from './../images/card1.png'

function Card() {
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
        <div className=''><img src={Cardimg}/></div>
        <div className=''><img src={Cardimg}/></div>
        <div className=''><img src={Cardimg}/></div>
        <div className=''><img src={Cardimg}/></div>
        <div className=''><img src={Cardimg}/></div>
        </div>
      </div>
    </div>
  )
}

export default Card