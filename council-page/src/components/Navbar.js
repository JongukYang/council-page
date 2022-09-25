import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
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
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
    <>
    <nav className='navbar'>
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
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/introduce' className='nav-links' onClick = {closeMobileMenu}>
                            총학생회 소개
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/office' className='nav-links' onClick = {closeMobileMenu}>
                            중앙기구
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/notice' className='nav-links' onClick = {closeMobileMenu}>
                            공지사항
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/communication' className='nav-links' onClick = {closeMobileMenu}>
                            소통하다
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/information' className='nav-links' onClick = {closeMobileMenu}>
                            편의정보
                        </Link>
                    </li>
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
    </>
    )
}

export default Navbar