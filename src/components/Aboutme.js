import React from "react";
import ProfilePicture from "./Assets/images/ProfilePicture.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutMe() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <p>
              Hi there, my name is John Pohl and I am currently a full stack student at University of Pennsyvania LPS coding bootcamp.
            </p>
          </Col>
          <Col sm={4}>
            <img src={ProfilePicture} alt="John" className="profile-picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}