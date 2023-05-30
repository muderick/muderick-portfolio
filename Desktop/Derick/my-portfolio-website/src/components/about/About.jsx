import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <a href="#experience">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
              </article>
            </a>
            <a href="#testimonials">
              <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
              </article>
            </a>
            <a href="#portfolio">
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </a>
          </div>
          <p>
          A highly motivated and adaptive Computer Science major from Maasai Mara University, Narok-Kenya. Versed to define tasks clearly and commit to task completion in accordance with client objectives and best practices. Knowledgeable in Software programming, Progressive Web Applications and Web Development.
          </p>

          <a href="#contacts" className="btn btn-primary about_btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
