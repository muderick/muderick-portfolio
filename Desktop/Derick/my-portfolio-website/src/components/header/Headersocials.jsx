import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";


const Headersocials = () => {

  return (
      <div className="header_socials">
          <a
              href="https://ke.linkedin.com/in/mu-derick/"
              target="_blank"
              rel="noreferrer"
          >
              <BsLinkedin size={32} />
          </a>
          <a
              href="https://github.com/muderick/"
              target="_blank"
              rel="noreferrer"
          >
              <FaGithub size={32}/>
          </a>
      </div>
  );
}

export default Headersocials