import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdelmageed seif </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I am currently Searching for an oppurtunity for an internship or a full time job as a Frontend Developer or a software Engineer .
            <br />
            I have completed a year of intensive training in software development fundamentals, including C, Python, JavaScript, React, Linux systems administration, and DevOps principles at ALX_Egypt.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Books & Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Maged</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
