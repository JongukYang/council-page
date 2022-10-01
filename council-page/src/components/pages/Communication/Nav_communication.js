import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav_communication(props) {
  return (
    <>
    <Navbar>
        <Container >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav id='Nav_bar' className="me-auto">
            <Nav.Link className='Nav_item' href="#chongdae" onClick={()=>{props.setHrefState('chongdae')}}>청원 게시판</Nav.Link>
            <Nav.Link className='Nav_item' href="#bockji" onClick={()=>{props.setHrefState('bockji')}}>질문 및 건의</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Nav_communication