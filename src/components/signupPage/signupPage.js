import React from "react"
import { render } from "react-dom"
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import "./signupPage.css"

function Signup(){
  return(
    <Jumbotron className="jumbotron">
      <h1>Please log in below</h1>
      <Form className="loginForm">
        <Form.Group controlID="formBasicEmail">
          <Form.Label><h2 className="label">Email Address</h2></Form.Label>
          <Form.Control type="email" placeholder="Please enter email" />
        </Form.Group>
        <Form.Group controlID="formBasicPassword">
          <Form.Label><h2 className="label">Password</h2></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlID="formBasicPasswordConfirm">
          <Form.Label><h2 className="label"> Confirm Password</h2></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Row className="buttonRow">
          <Button className="btn-success" type="submit">Sign Up</Button>
        </Row>
      </Form>
    </Jumbotron>
  )
}

export default Signup