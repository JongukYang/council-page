import React, {useEffect, useState} from 'react'
import "../../../App.css";
import "./office.css";
import chongdae_logo_img from "./images/chongdae_logo_img.png";
import facebook_img from "./images/Facebook.png";
import instagram_img from "./images/Instagram.png";

function Body_office(props) {
    const humanitesart = "하루";
    const socialscience = "BY";

    function humanites_arts_fabook() {
        document.location.href = "https://www.facebook.com/hsucoh";
    }
    function humanites_arts_insta() {
        document.location.href = "https://instagram.com/hsu_haru?igshid=YmMyMTA2M2Y=";
    }
    function social_science_fabook() {
        document.location.href = "https://www.facebook.com/ss1057";
    }
    function social_science_insta() {
        document.location.href = "https://instagram.com/hsu_bloomingyouth?igshid=YmMyMTA2M2Y=";
    }
    function design_fabook() {
        document.location.href = "https://www.facebook.com/HansungDesignCollege";
    }
    function design_insta() {
        document.location.href = "https://instagram.com/hsu_college_of_design?igshid=YmMyMTA2M2Y=";
    }
    function it_fabook() {
        document.location.href = "https://www.facebook.com/Hansung.engineering19";
    }
    function it_insta() {
        document.location.href = "https://instagram.com/hsu_reunion?igshid=YmMyMTA2M2Y=";
    }
    function creative_fusion_fabook() {
        document.location.href = "https://www.facebook.com/%ED%95%9C%EC%84%B1%EB%8C%80%ED%95%99%EA%B5%90-%EC%B0%BD%EC%9D%98%EC%9C%B5%ED%95%A9%EB%8C%80%ED%95%99-%F0%9D%90%98%F0%9D%90%8E%F0%9D%90%94%F0%9D%90%94%F0%9D%90%92-107093025321187/";
    }
    function creative_fusion_insta() {
        document.location.href = "https://instagram.com/hsu_you.us?igshid=YmMyMTA2M2Y=";
    }
    function future_plus_fabook() {
        document.location.href = "https://instagram.com/hsu_you.us?igshid=YmMyMTA2M2Y=";
    }
    function future_plus_insta() {
        document.location.href = "https://instagram.com/hsu_futureplus_student?igshid=YmMyMTA2M2Y=";
    }


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
            <div className='dandae_item dandae_border humanites_arts'>
                인문예술대학 학생회 '{humanitesart}'
                <img className='instagram_img' src={instagram_img} onClick={humanites_arts_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={humanites_arts_fabook}/>
            </div>
            
            <div className='dandae_item dandae_border social_science'>
                사회과학대학 학생회 '{socialscience}'
                <img className='instagram_img' src={instagram_img} onClick={social_science_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={social_science_fabook}/>
            </div>
            <div className='dandae_item dandae_border design'>
                디자인대학 학생회 '{humanitesart}'
                <img className='instagram_img' src={instagram_img} onClick={design_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={design_fabook}/>
            </div>
            <div className='dandae_item dandae_border it'>
                IT공과대학 학생회 '{humanitesart}'
                <img className='instagram_img' src={instagram_img} onClick={it_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={it_fabook}/>
            </div>
            <div className='dandae_item dandae_border creative_fusion'>
                창의융합대학 학생회 '{humanitesart}'
                <img className='instagram_img' src={instagram_img} onClick={creative_fusion_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={creative_fusion_fabook}/>
            </div>
            <div className='dandae_item dandae_border future_plus'>
                미래플러스대학 학생회 '{humanitesart}'
                <img className='instagram_img' src={instagram_img} onClick={future_plus_insta}/>
                <img className='facebook_img' src={facebook_img} onClick={future_plus_fabook}/>
            </div>
        </div>
        </>
    }
</>
  )
}

export default Body_office