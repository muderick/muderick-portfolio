import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">
                Mumia.
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>

            <div className="footer_socials">
                <a
                    href="https://www.instagram.com/mu_drick/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsInstagram />
                </a>
                <a
                    href="https://ke.linkedin.com/in/mu-derick/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/muderick"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
            </div>

            <div className="footer_copyright">
                <small>&copy; {new Date().getFullYear()} Mumia. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
