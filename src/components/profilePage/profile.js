import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"

function Profile(){
  return(
    <Container fluid>
      <Row className="headerRow">
        <Card className="headerCard">
          <Card.Title>YOUR PROFILE</Card.Title>
        </Card>
      </Row>
    </Container>
  )
}

export default Profile