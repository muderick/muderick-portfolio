import React from "react";
import CV from "../../assets/Mumia Derick Afuya CV 2025.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
      
      <a href={CV} download={CV} className="btn">
      Download CV
      </a>
    </div>
  );
};

export default Cta;
