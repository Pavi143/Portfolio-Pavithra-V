import React from "react";
import { FaLinkedin, FaGithub, FaFreeCodeCamp } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/pavithra-v-323195217" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Pavi143" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://leetcode.com/PavithraVS" target="_blank" rel="noreferrer">
        <FaFreeCodeCamp />
      </a>
    </div>
  );
};

export default HeaderSocials;
