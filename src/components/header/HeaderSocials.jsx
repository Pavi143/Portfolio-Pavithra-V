import React from "react";
import { BsLinkedin, BsGithub, BsLeetcode } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/pavithra-v-323195217" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Pavi143" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/PavithraVS" target="_blank" rel="noreferrer">
        <BsLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
