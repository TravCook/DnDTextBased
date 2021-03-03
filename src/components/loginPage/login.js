import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./login.css"

function Login(){
  return(
    <Jumbotron className="loginJumbotron">
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
        <Row className="buttonRow">
          <Button className="btn-success" type="submit">Login</Button>
        </Row>
      </Form>
    </Jumbotron>
  )
}

export default Login