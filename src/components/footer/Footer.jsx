/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JISHU
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
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jishugamer" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/dipayan.jishu/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.youtube.com/c/JISHU101" target="_blank">
          <BsYoutube />
        </a>
        <a href="https://twitter.com/jishu_01" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dipayan Banik. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
