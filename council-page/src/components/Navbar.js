import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [showSummaryBar, setShowSummaryBar] = useState(false);
    const [button, setButton] = useState(true);
    const generation = 37;
    const name_of_council = "BASE";
    
    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
            setShowSummaryBar(false);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', ()=> {showButton()});


    return (
    <>
    <nav className='navibar' >
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                BASE
            </Link>
            {/* <Link to="/" className='navbar-logo-sub' onClick={closeMobileMenu}>
                한성대학교 {generation}대 총학생회 {name_of_council}
            </Link> */}
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                    <li className='nav-item'>
                        <Link to='/introduce' className='nav-links' onClick = {closeMobileMenu} onMouseOver={()=>setShowSummaryBar(true)}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                            총학생회
                            {/* <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    총학생회 소개
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/office' className='nav-links' onClick = {closeMobileMenu} onMouseOver={()=>setShowSummaryBar(true)}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                            중앙기구
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/notice' className='nav-links' onClick = {closeMobileMenu} onMouseOver={()=>setShowSummaryBar(true)}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                            공지사항
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/communication' className='nav-links' onClick = {closeMobileMenu} onMouseOver={()=>setShowSummaryBar(true)}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                            소통하다
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/information' className='nav-links' onClick = {closeMobileMenu} onMouseOver={()=>setShowSummaryBar(true)}  onMouseLeave={()=>{setShowSummaryBar(false)}}>
                            편의정보
                        </Link>
                    </li>
                   
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu-sign'}>
                    
                <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-sign' onClick = {closeMobileMenu}>
                            회원가입
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links-sign' onClick = {closeMobileMenu}>
                            로그인
                        </Link>
                    </li>
                </ul>
            </div>
    </nav>
    <div className={showSummaryBar === true ? 'summaryBar' : 'summaryBarHidden'} onMouseOver={()=>setShowSummaryBar(true)} onMouseLeave={()=>{setShowSummaryBar(false)}}>
         <div className="summaryInfoSection">
             <div className="contents">당선사례 & 인사말</div>
             <div className="contents" >조직도</div>
             <div className="contents" >학생회칙</div> 
             <div className="contents" >정책 자료집</div>
         </div>
         <div className="summaryInfoSection"
             style={{
                 paddingRight: '2%'
             }}
         >
             <div className="contents" >총대의원회 소개</div>
             <div className="contents">학생복지위원회 소개</div>
             <div className="contents">각 단대별 학생회 소개</div>
         </div>
         <div className="summaryInfoSection"
             style={{
                 paddingRight: '2%'
             }}
         >
             <div className="contents">주요 공지사항</div>
             <div className="contents">주요 학사일정</div>
         </div>
         <div className="summaryInfoSection">
             <div className="contents">청원게시판</div>
             <div className="contents">질문 및 건의 게시판</div>
         </div>
         <div className="summaryInfoSection">
             <div className="contents">캠퍼스맵(찾아오시는 길)</div>
             <div className="contents">복지사업(제휴 업체)</div>
             <div className="contents">학내주요연락처</div>
         </div>  
    </div>
    </>
    )
}

export default Navbar