import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Introduce.css";

function Introduce_Navbar() {
  return (
    <Navbar>
        <Container >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav id='Nav_bar' className="me-auto">
            <Nav.Link className='Nav_item' href="#hello">당선사례 & 인사말</Nav.Link>
            <Nav.Link className='Nav_item' href="#organization">조직도</Nav.Link>
            <Nav.Link className='Nav_item' href="#rule">학생회칙</Nav.Link>
            <Nav.Link className='Nav_item' href="#policy">정책자료집</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Introduce_Navbar