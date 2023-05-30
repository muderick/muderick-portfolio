import React from "react";
import "./header.css";
import Cta from "./Cta";
import Headersocials from "./Headersocials";
import { AiFillCaretRight } from "react-icons/ai";
import logo from "../../assets/Drick__Logo.png";
import Derick from "../../assets/derick 4.png"

const Header = () => {
  return (
    <header>
      <div className="top">
      </div>
      <div className="container header_container">
        <div className="container-info">
          <div className="container-info_names">
            <h5>Hi, I'm</h5>
            <h1>Mumia Derick</h1>
            <h4 className="text-light">Front-End Developer</h4>
            <Cta />
          </div>
          <Headersocials />
        </div>

        <div className="mine">
          <h4 style={{ display: "flex" }}>
            <div style={{ width: "6rem", }} >Majored in &nbsp;</div>
            <div style={{ paddingTop: "0.1rem" }}>
              <AiFillCaretRight className="down_arrow skills_dwn-arrow" />
            </div>
          </h4>
        </div>

        <div className="mine_image">
          <img src={Derick} alt="Derick" />
        </div>

        <a href="#contacts" className="scroll_down">
          Down <AiFillCaretRight className="down_arrow" />
        </a>
      </div>

      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="logo_ext">
        <h6>Mumia.</h6>
      </div>
      <div className="doted_line"></div>
      <div className="under_line"></div>
    </header>
  );
};

export default Header;
