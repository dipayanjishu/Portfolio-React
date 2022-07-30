import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import { BsTwitch } from "react-icons/bs";
import { BsFillFolderFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsTwitch className="about__icon" />
              <h5>Streaming</h5>
              <small>Twitch Affiliated</small>
            </article>
            <article className="about__card">
              <BsFacebook className="about__icon" />
              <h5>Content Creator</h5>
              <small>More than 1M+ views</small>
            </article>
            <article className="about__card">
              <BsFillFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            Hello, I'm Dipayan Banik, a student of computer application. Having
            great enthusiast in Graphic Designing and Gaming. Currently,
            learning front end development and this portfolio is an instance of
            that. Thank you.
          </p>
          <a href="#contact" className="btn btn-primary">
            Ping Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
