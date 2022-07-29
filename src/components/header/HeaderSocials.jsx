import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/dipayanjishu"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/dipayan-banik-23b77a1b4/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.facebook.com/jishugamer"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.instagram.com/dipayan.jishu/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.youtube.com/c/JISHU101"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
