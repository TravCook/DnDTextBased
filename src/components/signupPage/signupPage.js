import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./signupPage.css"
import axios from "axios"
import bcrypt from "bcryptjs"



class Signup extends React.Component{
  state={
    email: "",
    password: "",
    passwordConfirm: ""
  }

  //This function handles the form submit, it confirms that the two PW fields match, then hashes the password and posts the user to the database
  //TODO: add functionality to confirm the account does not already exist
  handleSubmit = event => {
    event.preventDefault();
    const passwordChecks = {
      password: this.state.password,
      confirmPassword: this.state.passwordConfirm
    }
    if(passwordChecks.password !== passwordChecks.confirmPassword) {
      alert("Passwords dont match!")
    }else{
      const hashedPassword = bcrypt.hashSync(this.state.password, bcrypt.genSaltSync())
      const user = {
        email: this.state.email,
        password: hashedPassword
      }
      axios.get("/api/user/" + user.email)
      .then(res=>{
        console.log(res)
        if(res.data != ""){
          alert("This account already exists!")
        }else{
          axios.post("/api/user", user)
          .then(res=>{
            console.log(res)
            window.location.href = "/"
          })
        }
      })

    }
  }

  //These functions handle setting state to what is entered into the form
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
  passwordConfirmChange = event =>{
    this.setState({
      passwordConfirm: event.target.value
    })
  }


  render() {
    return(
      <Jumbotron className="signupJumbotron">
        <Form className="signupForm" onSubmit = {this.handleSubmit}>
          <Form.Group controlID="formBasicEmail">
            <Form.Label><h2 className="label">Email Address</h2></Form.Label>
            <Form.Control type="email" placeholder="Please enter email"  onChange={this.emailChange}/>
          </Form.Group>
          <Form.Group controlID="formBasicPassword">
            <Form.Label><h2 className="label">Password</h2></Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.passwordChange}/>
          </Form.Group>
          <Form.Group controlID="formBasicPasswordConfirm">
            <Form.Label><h2 className="label"> Confirm Password</h2></Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.passwordConfirmChange}/>
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