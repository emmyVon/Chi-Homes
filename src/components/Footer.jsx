import React from "react";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-con">
        <ul>
          <li>
            <a href="https://github.com/emmyVon" target="blank">
              <AiOutlineGithub color="white" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/emmyobiezuo" target="blank">
              <AiOutlineTwitter color="white" />
            </a>
          </li>
        </ul>
        <p>&copy;emmmanuel</p>
      </div>
    </footer>
  );
};

export default Footer;
