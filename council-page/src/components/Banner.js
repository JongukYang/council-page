import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Banner.css';
import Bannerimg from './../images/Banner_img.png'

function Banner() {
  return (
    <div className='Banner-container'>
      <img src={Bannerimg} />
    </div>
  )
}

export default Banner