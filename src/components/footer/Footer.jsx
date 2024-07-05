import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram , FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DUMMY
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Pavi143" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/pavi_vs_010403?igsh=MXZzeXcwaTBsZ3BjeQ==" target="blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/pavithra-v-323195217" target="blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
