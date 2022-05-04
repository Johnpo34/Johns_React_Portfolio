import React from "react";
import Container from "react-bootstrap/Container";
// import resume
import Button from "react-bootstrap/Button";

const styles = {
  fontSize: "28px",
  textAlign: "center",
  background: "blue",
};

export default function Resume() {
  return (
    <div style={styles}>
      <Container>
        <p>
          I'm currently in the University of Penn LPS full-stack Web Developer bootcamp.
        </p>
        <p>
          I am eager to build upon the skills that I have gained from the school and learn more from other individuals
        </p>
        <p>
          My experience and skills include: ReactJS, JavaScript(ES6+), CSS,
          HTML5, Bootstrap, Node, MySQL, NoSQL, Express, and more.
        </p>
        <p>
          Download my resume
          <Button variant="warning" href={} download={true}>
            here.
          </Button>
        </p>
      </Container>
    </div>
  );
}