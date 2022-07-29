import React from "react";
import "./Services.css";

import { RiCheckFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Poster Design</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Thumbnail Design</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Magazine Design</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Leaflet Design</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Cinematic Videos</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Short Videos</p>
            </li>
          </ul>
        </article>

        {/* end of G Design */}

        <article className="service">
          <div className="service__head">
            <h3>Gaming Guides</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>PUBG</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Valorant</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>CS:GO</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>GTA V</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Super People</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>COD Warzone</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
