import React, {useEffect, useState} from 'react'
import "../../../App.css";
import "./office.css";
import chongdae_logo_img from "./images/chongdae_logo_img.png";

function Body_office(props) {
    const humanitesart = "하루";
    const socialscience = "BY";

  return (
    <>
    {
        props.hrefState === 'chongdae' &&
              <>
                  <div className="Body-container">
                      <div className='Body-img'>
                          <img className='logo_img' src={chongdae_logo_img} />
                      </div>
                      <div className='Body-text'>
                        <div className='title'>
                        안녕하세요. 한성대학교 총대의원회 ‘순백’ 입니다.
                        </div>
                        <div className='text'>
                        상임위원과 대의원들을 운영하는 기구로써 상임위원과 대의원분들의 학생자치기구의 총학생회비 인준과<br></br>
한성대학교 학생회칙 개정 등 다양한 역할을 진행하고 있습니다.<br></br>
한성대학교의 학생자치기구의 투명하고 공정한 활동을 위해 대의원 & 상임위원분들의 운영을 하고 있습니다.
                        </div>
                      </div>
                  </div>
              </>
    }
    {
        props.hrefState === 'bockji' &&
        <>
                  <div className="Body-container">
                      <div className='Body-img'>
                          <img className='logo_img' src={chongdae_logo_img} />
                      </div>
                      <div className='Body-text'>
                        <div className='title'>
                        안녕하세요. 한성대학교 학생복지위원회 ‘하늘’ 입니다.                        </div>
                        <div className='text'>
                        학우들이 더 편하고 알찬 대학생활을 하기 위하여 운영되고 있는 공개기구로서<br></br>
학내의 복지 전반에 관해서 함께 고민하고 실천하는 곳입니다.<br></br>
대학의 자율성을 충분히 활용하여 학우들의 편의시설 및 양과 질적인 면에서 발전할 수 있도록<br></br>
항상 눈과 귀를 열어 놓고 있습니다.
                        </div>
                      </div>
                  </div>
              </>
    }
    {
        props.hrefState  === 'dandae' &&
        <>
        <div className='dandae'>
            <div className='dandae_item'>
                인문예술대학 학생회 '{humanitesart}'
            </div>
            <div className='dandae_item'>
                사회과학대학 학생회 '{socialscience}'
            </div>
            <div className='dandae_item'>
                디자인대학 학생회 '{humanitesart}'
            </div>
            <div className='dandae_item'>
                IT공과대학 학생회 '{humanitesart}'
            </div>
            <div className='dandae_item'>
                창의융합대학 학생회 '{humanitesart}'
            </div>
            <div className='dandae_item'>
                미래플러스대학 학생회 '{humanitesart}'
            </div>
        </div>
        </>
    }
</>
  )
}

export default Body_office