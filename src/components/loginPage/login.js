import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./login.css"
import axios from "axios"
import bcrypt, { hash } from "bcryptjs"




class Login extends React.Component{
  state={
    email: "",
    password: ""
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

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email : this.state.email,
      password: this.state.password
    }
      axios.get("/api/user/" + user.email)
      .then(res=>{
        console.log(res)
        if(res.data == ""){
          alert("This account doesn't exist!")
        }else{
         const retrievedPass =  res.data[0].password
         const hashedPasscheck = bcrypt.compareSync(this.state.password, retrievedPass)
         console.log(hashedPasscheck)
         if(hashedPasscheck === true){
           console.log("LOGIN SUCCESS")
         }else{
           alert("Password or email incorrect")
         }
        }
      })
  }


  render() {
  return(
    <Jumbotron className="loginJumbotron">
      <Form className="loginForm" onSubmit = {this.handleSubmit}>
        <Form.Group controlID="formBasicEmail">
          <Form.Label><h2 className="label">Email Address</h2></Form.Label>
          <Form.Control type="email" placeholder="Please enter email" onChange={this.emailChange} />
        </Form.Group>
        <Form.Group controlID="formBasicPassword">
          <Form.Label><h2 className="label">Password</h2></Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.passwordChange} />
        </Form.Group>
        <Row className="buttonRow">
          <Button className="btn-success" type="submit">Login</Button>
        </Row>
      </Form>
    </Jumbotron>
  )
}
}

export default Login