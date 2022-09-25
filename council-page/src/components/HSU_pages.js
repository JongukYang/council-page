import React from 'react'
import './HSU_pages.css';
import Page_img from './../images/start_img.png'
import info_img from './../images/info_img.png'
import Card from 'react-bootstrap/Card';

function HSU_pages() {
  function hansung() {
    document.location.href = "https://www.hansung.ac.kr/"
  }
  function eclass() {
    document.location.href = "https://learn.hansung.ac.kr/"
  }
  function infoservice() {
    document.location.href = "https://info.hansung.ac.kr/"
  }
  function hsportal() {
    document.location.href = "https://hsportal.hansung.ac.kr/"
  }
  function hsel() {
    document.location.href = "https://hsel.hansung.ac.kr/"
  }
  function cncschool() {
    document.location.href = "https://hansung.ac.kr/cncschool/index.do"
  }
  return (
    <div className='HSU-pages'>
      <div className='HSU-pages-container'>
        <div className='HSU-pages-wrapper'>

          <Card id='HSU-pages-item' onClick={hansung} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>한성대학교<br />공식 웹사이트</Card.Text>
            </Card.Body>
          </Card>

          <Card id='HSU-pages-item' onClick={eclass} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>E-class</Card.Text>
            </Card.Body>
          </Card>
          <Card id='HSU-pages-item' onClick={infoservice} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>종합정보시스템</Card.Text>
            </Card.Body>
          </Card>
          <Card id='HSU-pages-item' onClick={hsportal} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>스마트<br />자기관리시스템</Card.Text>
            </Card.Body>
          </Card>
          <Card id='HSU-pages-item' onClick={hsel} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>학술정보관</Card.Text>
            </Card.Body>
          </Card>
          <Card id='HSU-pages-item' onClick={cncschool} className='border-white' style={{ width: '10vw' }}>
            <Card.Img className='HSU-pages-img' variant="top" src={info_img} />
            <Card.Body className='HSU-pages-body'>
              <Card.Text className='HSU-pages-text'>창의융합<br />교육지원센터</Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default HSU_pages