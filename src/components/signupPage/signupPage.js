import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./signupPage.css"
import axios from "axios"



class Signup extends React.Component{
  state={
    email: "",
    password: "",
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    // console.log(user)
    axios.post("/api/user", user)
    .then(res=>{
      console.log(res);
      // console.log(res.data);
      // window.location = "/"
    })
  }

  emailChange = event =>{
    // console.log(event)
    this.setState({
      email: event.target.value,
    })
  }
  passwordChange = event =>{
    // console.log(event)
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return(
      <Jumbotron className="signupJumbotron">
        <Form className="signupForm" onSubmit = { this.handleSubmit}>
          <Form.Group controlID="formBasicEmail">
            <Form.Label><h2 className="label">Email Address</h2></Form.Label>
            <Form.Control type="email" placeholder="Please enter email"  onChange={this.emailChange}/>
          </Form.Group>
          <Form.Group controlID="formBasicPassword">
            <Form.Label><h2 className="label">Password</h2></Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlID="formBasicPasswordConfirm">
            <Form.Label><h2 className="label"> Confirm Password</h2></Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.passwordChange}/>
          </Form.Group>
          <Row className="buttonRow">
            <Button className="btn-success" type="submit">Sign Up</Button>
          </Row>
        </Form>
      </Jumbotron>
    )
  }
}
export default Signup