import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import reactMeals from "../../Assets/Projects/reactMeals.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import exerciseDb from "../../Assets/Projects/exercise.jpg";

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
              imgPath={reactMeals}
              isBlog={false}
              title="ReactMeals"
              description="It is a react web application with google firebase serving as backend and user can order and his orders are all stored in google firebase."
              ghLink="https://github.com/sainti845/ReactMeals"
              demoLink="https://react-deployment-demo-f33cb.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exerciseDb}
              isBlog={false}
              title="ExerciseDb"
              description="My personal responsive web application page build with HTML, css and javascript where user can choose from a list of 3000 exercise and each exercise has separate youtube videos recomendations."
              ghLink="https://github.com/sainti845/ExerciseDb"
              demoLink="https://sainti845.github.io/ExerciseDb/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Database"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/sainti845/Student-database"
              demoLink="https://sainti845.github.io/Student-database/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Suvernada Foundation website"
              description="Built a responsive website of an NGO, in which reactjs serving as frontend and google firebase serving as backend, with realtime notifications system and journal system."
              ghLink="https://github.com/sainti845/"
              demoLink="https://suvernadafoundation.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CRUD Application "
              description="Implemented a database system with CRUD (Create, Read, Update and Delete) functionality in it using Nodejs, Expressjs and Reactjs."
              ghLink="https://github.com/sainti845/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
