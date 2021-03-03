import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./characterCreate.css"

class CharacterCreate extends React.Component{
  
  constructor(){
    super();
    this.state={
      abilityOne: 0,
      abilityTwo: 0,
      abilityThree: 0,
      abilityFour: 0,
      abilityFive: 0,
      abilitySix: 0,
      alignment: "",
      alignmentDesc: "",
      racesList: ""
    }
    
  }
  

  //Random number logic for character creation. Roll 3 d6 Add them up
  GenerateRandomNumberOne=()=>
  {
    var rollOneNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollOneNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollOneNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumber = rollOneNumOne + rollOneNumTwo + rollOneNumThree
 
    this.setState({
 
      abilityOne : RandomNumber
 
    })
  }
  GenerateRandomNumberTwo=()=>
  {
 
    var rollTwoNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollTwoNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollTwoNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumberTwo = rollTwoNumOne + rollTwoNumTwo + rollTwoNumThree
 
    this.setState({
 
      abilityTwo : RandomNumberTwo
 
    })
  }
  GenerateRandomNumberThree=()=>
  {
 
    var rollThreeNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollThreeNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollThreeNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumberThree = rollThreeNumOne + rollThreeNumTwo + rollThreeNumThree
 
    this.setState({
 
      abilityThree : RandomNumberThree
 
    })
  }
  GenerateRandomNumberFour=()=>
  {
 
    var rollFourNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollFourNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollFourNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumberFour = rollFourNumOne + rollFourNumTwo + rollFourNumThree
 
    this.setState({
 
      abilityFour : RandomNumberFour
 
    })
  }
  GenerateRandomNumberFive=()=>
  {
 
    var rollFiveNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollFiveNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollFiveNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumberFive = rollFiveNumOne + rollFiveNumTwo + rollFiveNumThree
 
    this.setState({
 
      abilityFive : RandomNumberFive
 
    })
  }
  GenerateRandomNumberSix=()=>
  {
 
    var rollSixNumOne = Math.floor(Math.random() * 6) + 1 ;
    var rollSixNumTwo = Math.floor(Math.random() * 6) + 1 ;
    var rollSixNumThree = Math.floor(Math.random() * 6) + 1 ;
    var RandomNumberSix = rollSixNumOne + rollSixNumTwo + rollSixNumThree
 
    this.setState({
 
      abilitySix : RandomNumberSix
 
    })
  }
  //Alignment Selection Logic
  alignSelectLG=()=>{
    this.setState({
      alignment: "Lawful Good",
      alignmentDesc: "Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good."
    })
  }
  alignSelectNG=()=>{
    this.setState({
      alignment: "Neutral Good",
      alignmentDesc: "Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good."
    })
  }
  alignSelectCG=()=>{
    this.setState({
      alignment: "Chaotic Good",
      alignmentDesc: "Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good."
    })
  }
  alignSelectLN=()=>{
    this.setState({
      alignment: "Lawful Neutral",
      alignmentDesc: "Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral."
    })
  }
  alignSelectTN=()=>{
    this.setState({
      alignment: "True Neutral",
      alignmentDesc: "Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral."
    })
  }
  alignSelectCN=()=>{
    this.setState({
      alignment: "Chaotic Neutral",
      alignmentDesc: "Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral."
    })
  }
  alignSelectLE=()=>{
    this.setState({
      alignment: "Lawful Evil",
      alignmentDesc: "Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil."
    })
  }
  alignSelectNE=()=>{
    this.setState({
      alignment: "Neutral Evil",
      alignmentDesc: "Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil."
    })
  }
  alignSelectCE=()=>{
    this.setState({
      alignment: "Chaotic Evil",
      alignmentDesc: "Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil."
    })
  }

  // API call for Races descriptions
  componentDidMount() {
    fetch("https://www.dnd5eapi.co/api/races/")
    .then(res => res.json())
    .then(data =>
      console.log(data)
    )
  
  //Classes

    fetch("https://www.dnd5eapi.co/api/classes/")
    .then(res => res.json())
    .then(data =>
      console.log(data)
    )
  
  //Backgrounds

    fetch("https://www.dnd5eapi.co/api/backgrounds/")
    .then(res => res.json())
    .then(data =>
      console.log(data)
    )
  }


  render(){
    return(
      <Form className="charCreation container-fluid">
        <Row className="abilityRollRow">
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilityOne}</Card.Text>
              <Button onClick={this.GenerateRandomNumberOne}>Roll!</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilityTwo}</Card.Text>
              <Button onClick={this.GenerateRandomNumberTwo}>Roll!</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilityThree}</Card.Text>
              <Button onClick={this.GenerateRandomNumberThree}>Roll!</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilityFour}</Card.Text>
              <Button onClick={this.GenerateRandomNumberFour}>Roll!</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilityFive}</Card.Text>
              <Button onClick={this.GenerateRandomNumberFive}>Roll!</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Ability Roll</Card.Title>
              <Card.Text>{this.state.abilitySix}</Card.Text>
              <Button onClick={this.GenerateRandomNumberSix}>Roll!</Button>
            </Card>
          </Col>
        </Row>
        <Row className="raceClassBackground">
          <Col>
            <Row className="dropdownRow">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-race">
                  Pick a Race
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Human</Dropdown.Item>
                  <Dropdown.Item>Dwarf</Dropdown.Item>
                  <Dropdown.Item>Elf</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className="dropdownRow">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-class">
                  Pick a Class
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Cleric</Dropdown.Item>
                  <Dropdown.Item>Ranger</Dropdown.Item>
                  <Dropdown.Item>Warlock</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className="dropdownRow">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-background">
                  Pick a Background
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Acolyte</Dropdown.Item>
                  <Dropdown.Item>Charlatan</Dropdown.Item>
                  <Dropdown.Item>Soldier</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className="dropdownRow">
              <Dropdown>
                <Dropdown.Toggle  variant="primary" id="dropdown-alignment">Pick an Alignment</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onSelect={this.alignSelectLG}>Lawful Good</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectNG}>Neutral Good</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectCG}>Chaotic Good</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectLN}>Lawful Neutral</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectTN}>True Neutral</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectCN}>Chaotic Neutral</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectLE}>Lawful Evil</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectNE}>Neutral Evil</Dropdown.Item>
                  <Dropdown.Item onSelect={this.alignSelectCE}>Chaotic Evil</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
          <Col>
            <Card className="alignCard">
                <Card.Title>Alignment</Card.Title>
                <Card.Text>{this.state.alignment}</Card.Text>
                <Card.Text>{this.state.alignmentDesc}</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Text>RACE DESCRIPTION</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Text>CLASS DESCRIPTION</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Text>BACKGROUND DESCRIPTION</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col>
            <Card className="ability">
              <Card.Title>Strength</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
                <Button>+</Button>
                <Button>-</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Dexterity</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Constitution</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Intelligence</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Wisdom</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card>
          </Col>
          <Col>
            <Card className="abilityRoll">
              <Card.Title>Charisma</Card.Title>
              <Card.Text>
                <Form.Control className="abilityNum" type="strength" placeholder="0"></Form.Control>
              </Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card>
          </Col>
        </Row>
        <Row className="bottomRow">
          <Col>
            <Jumbotron className="creationTron">
              <h5>Starting Equipment</h5>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron className="creationTron">
              <h5>Character Description</h5>
              <Form.Control type="description" placeholder="Please describe your character here"></Form.Control>
            </Jumbotron>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default CharacterCreate