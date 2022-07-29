import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/dipayanjishu"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.instagram.com/dipayan.jishu/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href="https://www.youtube.com/c/JISHU101"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
