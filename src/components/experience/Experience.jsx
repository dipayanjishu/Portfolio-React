import React from "react";
import "./Experience.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";

import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I've learned so far...</h5>
      <h2>My Experience</h2>
      {/* Frontend */}
      <div className="container experience__container">
        <div className="experience__forntend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience_details">
              <DiHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience_details">
              <DiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience_details">
              <DiJavascript1 className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                {" "}
                <h4>React</h4>
              </div>
            </article>

            <article className="experience_details">
              <DiBootstrap className="experience_details-icon" />
              <div>
                <h4>BootStrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* Graphic Designing */}
        <div className="experience_graphics">
          <h3>Graphics Designing</h3>
          <div className="experience__content">
            <article className="experience_details">
              <SiAdobephotoshop className="experience_details-icon" />
              <div>
                <h4>Photoshop</h4>
              </div>
            </article>

            <article className="experience_details">
              <SiAdobepremierepro className="experience_details-icon" />
              <div>
                <h4>Premiere Pro</h4>
              </div>
            </article>

            <article className="experience_details">
              <SiAdobeindesign className="experience_details-icon" />
              <div>
                <h4>InDesign</h4>
              </div>
            </article>

            <article className="experience_details">
              <SiAdobeaftereffects className="experience_details-icon" />
              <div>
                <h4>After Effects</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
