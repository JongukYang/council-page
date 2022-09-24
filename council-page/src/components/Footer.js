import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer(){
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-text'>
                    한성대학교 총학생회<br/>
                    서울특별시 성북구 삼선교로 16길 116 (진리관 206호)<br/>
                    02)-760-4182<br/>
                    Copyright © hansung_student. All rights reserved.
                </p>
            </section>
        </div>
    )
}

export default Footer;