import React, { useEffect, useRef } from "react";
import "./header.css";
import Cta from "./Cta";
import Headersocials from "./Headersocials";
import { AiFillCaretRight } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import logo from "../../assets/Drick__Logo.png";
import desktopBg from "../../assets/tech-desktop.jpg";
import mobileBg from "../../assets/tech-mobile.jpg";

const Header = () => {
  // Add refs for animation of tech stack items
  const techStackRef = useRef(null);
  const statsRef = useRef(null);
  const backgroundShapesRef = useRef(null);

  // Add staggered animation effect to tech stack items
  useEffect(() => {
    if (techStackRef.current) {
      const items = techStackRef.current.querySelectorAll("span");

      items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(20px)";

        setTimeout(() => {
          item.style.transition = "all 0.4s ease";
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, index * 150); // Staggered delay
      });
    }

    // Animate stats items
    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll(".stat-item");

      items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";

        setTimeout(() => {
          item.style.transition = "all 0.5s ease";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 300 + index * 200); // Staggered delay starting after intro text
      });
    }

    // Animate background shapes
    if (backgroundShapesRef.current) {
      const shapes = backgroundShapesRef.current.querySelectorAll(".shape");

      shapes.forEach((shape, index) => {
        shape.style.opacity = "0";

        setTimeout(() => {
          shape.style.transition = "opacity 1s ease";
          shape.style.opacity = "0.2";
        }, index * 200);
      });
    }
  }, []);

  return (
    <header>
      <div className="header-bg-desktop">
        <img src={desktopBg} alt="Background" />
      </div>

      <div className="header-bg-mobile">
        <img src={mobileBg} alt="Background" />
      </div>

      {/* Dark overlay */}
      <div className="header-overlay"></div>

      <div className="top"></div>
      <div className="container header_container">
        <div className="container-info">
          <div className="container-info_names">
            <div className="greeting-badge">Welcome to my portfolio</div>
            <h5>Hi, I'm</h5>
            <h1>Mumia Derick</h1>
            <h4 className="text-light">Front-End Developer</h4>
            <p className="intro-text">
              I craft responsive websites where technologies meet creativity.
              Building user-friendly interfaces is my passion.
            </p>
            <Cta />
          </div>

          <Headersocials />
        </div>

        <div className="mine">
          <div className="expertise-header">
            <h4 className="expertise-title">
              Expertise
              <AiFillCaretRight className="arrow-icon" />
            </h4>
          </div>

          <div className="tech-stack">
            {["Vanilla JS", "CSS3", "HTML5", "React", "Vue", "Next.js"].map(
              (tech) => (
                <div key={tech} className="tech-item">
                  <div className="tech-icon-wrapper">
                    <FaLaptopCode className="tech-icon" />
                  </div>
                  <span className="tech-name">{tech}</span>
                  <div className="tech-hover-line"></div>
                </div>
              )
            )}
          </div>

          <div className="current-project">
            <div className="pulse-indicator">
              <div className="pulse-dot"></div>
              <div className="pulse-ring"></div>
            </div>
            <p className="project-text">Building an Ecommerce System</p>
          </div>
        </div>

        <a href="#contacts" className="scroll_down">
          Down <AiFillCaretRight className="down_arrow" />
        </a>
      </div>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="logo_ext">
        <h6>Mumia.</h6>
      </div>
      <div className="doted_line"></div>
    </header>
  );
};

export default Header;
