import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./office.css";


function Nav_office(props) {
    const[nav, setNav] = useState('chongdae');

  const nav_hover = () => {
    if (props.href == '#'+{ }){

    }
  }
  return (
    <>
    <Navbar>
        <Container >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav id='Nav_bar' className="me-auto">
            <Nav.Link className='Nav_item' href="#chongdae" onClick={()=>{props.setHrefState('chongdae')}}>총대의원회</Nav.Link>
            <Nav.Link className='Nav_item' href="#bockji" onClick={()=>{props.setHrefState('bockji')}}>학생복지위원회</Nav.Link>
            <Nav.Link className='Nav_item' href="#dandae" onClick={()=>{props.setHrefState('dandae')}}>단대별 학생회</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Nav_office