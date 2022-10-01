import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav_Notice(props) {
  return (
    <>
    <Navbar>
        <Container >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav id='Nav_bar' className="me-auto">
            <Nav.Link className='Nav_item' href="#chongdae" onClick={()=>{props.setHrefState('chongdae')}}>공지사항</Nav.Link>
            <Nav.Link className='Nav_item' href="#bockji" onClick={()=>{props.setHrefState('bockji')}}>학사일정</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Nav_Notice