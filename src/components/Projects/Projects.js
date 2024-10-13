import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import ELMS from "../../Assets/Projects/ELMS.png";
import NRS from "../../Assets/Projects/NRS.png";
import MMG from "../../Assets/Projects/MMG.png";
import BTD from "../../Assets/Projects/BTD.png";
import PAI from "../../Assets/Projects/PAI.jpeg";
import AMB from "../../Assets/Projects/AMB.png";
import HP from "https://github.com/singhshashank08/portfolio/blob/main/src/Assets/Projects/HP.jpg";

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
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="The Spotify Clone project is a web application that replicates the core features and aesthetics of the popular music streaming platform.
              • Spotify. Built using a technology stack comprising HTML, CSS, JavaScript, React.js, and Tailwind CSS.
              • This project offers a hands-on experience in front-end development and modern web technologies"
              ghLink="https://github.com/singhshashank08/Spotify-Clone"
              demoLink="https://spotify-clone-git-main-singhshashank08s-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NRS}
              isBlog={false}
              title="Recommender System"
              description="Developed a machine learning-based recommender system for Netflix to enhance content recommendations and user engagement.
              • Utilized Python, scikit-learn, and TensorFlow to build and train collaborative filtering models.
              • Collected and pre-processed user interaction data to create training datasets for the models.
              • Implemented state-of-the-art evaluation metrics like precision and recall to measure the performance of the recommender system."
              ghLink="https://github.com/singhshashank08/netflix-recommender-system"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BTD}
              isBlog={false}
              title="Brain Tumor Detection"
              description="Brain Tumor Detection using Machine Learning is a cutting-edge medical approach that leverages advanced algorithms to analyze medical imaging data, such as MRI scans. This innovative method enables early and accurate identification of brain tumors by training machine learning models to recognize patterns indicative of tumor presence. By automating this process, healthcare professionals can expedite diagnosis, improve treatment planning, and enhance overall patient outcomes, ushering in a new era of precision medicine for neurological conditions"
              ghLink="https://github.com/singhshashank08/Brain-Tumor-Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PAI}
              isBlog={false}
              title="Parkinson's AI"
              description="In the Parkinson's disease detection project, I developed an iOS application using SwiftUI, CoreML, and PencilKit. The app allows users to track their symptoms and perform tests to assess their condition. It integrates machine learning models to analyze handwriting samples, detecting patterns indicative of Parkinson's disease."
              ghLink="https://github.com/singhshashank08"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MMG}
              isBlog={false}
              title="Memory Matching Game"
              description="Interactive game created using HTML, CSS, and JavaScript! Unveil the magic behind the virtual realm as you code and design your way through exciting challenges. From crafting stunning user interfaces with HTML and CSS to adding dynamic functionalities using JavaScript, this game offers a hands-on experience in a playful and educational environment. Unleash your creativity, sharpen your coding skills, and witness your web creations come to life, all while having a blast in this unique and engaging web development adventure"
              ghLink="https://github.com/singhshashank08/Memory-Mattching-Game"
              demoLink="https://memory-mattching-game.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ELMS}
              isBlog={false}
              title="Library Management System"
              description="The Library Management System is a comprehensive software solution designed to streamline and enhance the efficiency of library operations. library staff with a powerful tool to manage various aspects of a library, from cataloging and organizing books to user interactions and generating insightful reports."
              ghLink="https://github.com/singhshashank08/ELMS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AMB}
              isBlog={false}
              title="Ambrosia"
              description="Discover the nutritional value of fruits with our comprehensive Fruit Encyclopedia app! Explore a wide variety of fruits, from familiar favorites to exotic finds, and learn about their health benefits. Each fruit profile includes a detailed description, vibrant images, and a breakdown of its nutritional content per 100g. Whether you're looking to boost your vitamin intake or simply curious about the fruits you eat, our app provides all the information you need in one convenient place. Stay healthy and informed with the Fruit Encyclopedia app!"
              ghLink="https://github.com/singhshashank08/Ambrosia"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HP}
              isBlog={false}
              title="HarryPotter"
              description="An Basic Harry Potter based fun application shows the all students and the graduates from the different houses of Hogwarts.!"
              ghLink="https://github.com/singhshashank08/HarryPotter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
