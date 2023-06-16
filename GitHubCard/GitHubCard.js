import React from "react"
import Card from "react-bootstrap/Card"
import myPic from './myPic.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={myPic} />
        <Card.Body>
            <Card.Title>Green Ape</Card.Title>
            <Card.Text>
            im a gamer dreaming of being a creater
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard