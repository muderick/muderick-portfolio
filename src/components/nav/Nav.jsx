import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="home">
        {/* eslint-disable-next-line */}
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <div>
          <p className="nav_p">Home</p>
        </div>
      </div>
      <div className="about">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <div>
          <p className="nav_p">About</p>
        </div>
      </div>
      <div className="experience">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <div>
          <p className="nav_p">Skills</p>
        </div>
      </div>
      <div className="services">
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <div>
          <p className="nav_p">Services</p>
        </div>
      </div>
      <div className="portfolio">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BiLayer />
        </a>
        <div>
          <p className="nav_p">Projects</p>
        </div>
      </div>
      <div className="contacts">
        <a
          href="#contacts"
          onClick={() => setActiveNav("#contacts")}
          className={activeNav === "#contacts" ? "active" : ""}
        >
          <BiMessageDots />
        </a>
        <div>
          <p className="nav_p">Contacts</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
