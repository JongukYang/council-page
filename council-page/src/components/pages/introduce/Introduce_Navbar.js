import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Introduce.css";

function Introduce_Navbar(props) {
  const[nav, setNav] = useState('hello');

  const nav_hover = () => {
    if (props.href == '#'+{ }){

    }
  }
  return (
    <Navbar>
        <Container >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav id='Nav_bar' className="me-auto">
            <Nav.Link className='Nav_item' href="#hello" onClick={()=>{props.setHrefState('hello')}}>당선사례 & 인사말</Nav.Link>
            <Nav.Link className='Nav_item' href="#organization" onClick={()=>{props.setHrefState('organization')}}>조직도</Nav.Link>
            <Nav.Link className='Nav_item' href="#rule" onClick={()=>{props.setHrefState('rule')}}>학생회칙</Nav.Link>
            <Nav.Link className='Nav_item' href="#policy" onClick={()=>{props.setHrefState('policy')}}>정책자료집</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Introduce_Navbar