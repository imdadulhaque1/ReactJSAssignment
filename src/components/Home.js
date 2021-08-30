import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import TFP from "../images/tfp.png";
import Footer from "./Footer.jsx";
export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: "20rem",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Img variant="top" src={TFP} />
          <Card.Body>
            <Card.Title>TFP Solutions Ltd</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Submit</Button>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    );
  }
}
