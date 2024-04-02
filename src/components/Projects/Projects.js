import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bankist from "../../Assets/Projects/Bankist.JPG";
import forkify from "../../Assets/Projects/forkify.JPG";
import mapty from "../../Assets/Projects/mapty.JPG";
import usePopcorn from "../../Assets/Projects/usePopcorn.JPG";
import worldwise from "../../Assets/Projects/worldwise.JPG";
import airbnb_clone from "../../Assets/Projects/airbnb_clone.png";
import simple_shell from "../../Assets/Projects/simple_shell.JPG";
import printf from "../../Assets/Projects/printf.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              isBlog={false}
              title="worldwise"
              description="A react app to track your travels utilizes React Router, context API, memo, useMemo, useCallback"
              ghLink="https://github.com/Magedsaif/The-Ultimate-React-Course-2024-Jonas-Udemy/tree/master/11-worldwise/final"
              demoLink="https://worldwise-jonas.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usePopcorn}
              isBlog={false}
              title="UsePopcorn"
              description="A React Movies application utilizes hooks, custom components, state management, event handling, and async data fetching to create dynamic UI experiences."
              ghLink="https://github.com/Magedsaif/The-Ultimate-React-Course-2024-Jonas-Udemy/tree/master/07-usepopcorn/usepopcorn/final"
              demoLink="https://usepopcorn.netlify.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forkify}
              isBlog={false}
              title="Forkify"
              description="A web application that fetches and displays food recipes using an external API, featuring OOP concepts, dynamic rendering, and error handling."
              ghLink="https://github.com/Magedsaif/Complete-Javascript-Cource-Udemy/tree/main/18-forkify/final"
              demoLink="https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcb34"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapty}
              isBlog={false}
              title="Mapty"
              description="Demonstrates OOP concepts, DOM manipulation,, Geolocation API and event handling to track and visualize running and cycling workouts."
              ghLink="https://mapty.netlify.app/"
              demoLink="https://mapty.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bankist}
              isBlog={false}
              title="Bankist"
              description="Demonstrates concepts like working with arrays, objects, DOM manipulation, event handling, and functional programming techniques,
              use the user js with pin 1111 & jd with pin 2222 to try it out "
              ghLink="https://github.com/Magedsaif/Complete-Javascript-Cource-Udemy/tree/main/11-Arrays-Bankist/final"
              demoLink="https://bankist.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb_clone}
              isBlog={false}
              title="AirBnB clone"
              description="Implementing a command interpreter, a dynamic website, database storage, and a RESTful API."
              ghLink="https://github.com/ahmedwalid98/AirBnB_clone_v4"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simple_shell}
              isBlog={false}
              title="Simple Shell"
              description="Create UNIX interpreter, focus on teamwork, efficient system call usage."
              ghLink="https://github.com/Magedsaif/simple_shell"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printf}
              isBlog={false}
              title="Printf"
              description="Implemented a custom _printf function in C that mimics the behavior of the standard printf function."
              ghLink="https://github.com/Magedsaif/printf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
