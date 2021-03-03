import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./navbar.css"

function Navigation(){
  return(
    <Container fluid className="noPad">
      <Navbar className="navbar">
        <Navbar.Brand className="title">Text Based DND 5e</Navbar.Brand>
        <Col className="buttonsCol">
        <Button rel="noreferrer" className="navButton Button" href="/">Login</Button>
        <Button rel="noreferrer" className="navButton Button" href="/signup">Sign Up</Button>
        </Col>
      </Navbar >
    </Container>
  )
}

export default Navigation