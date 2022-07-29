import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/tictactoegame.png";
import IMG2 from "../../assets/FINAL_COVER.png";
import magazine from "../../assets/Horizon & Beyond Vol2.pdf";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tic Tac Toe</h3>
          <h5>A simple game made with React</h5>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/dipayanjishu/tictactoe"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ttt_j.surge.sh/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Horizon and Beyond Vol2 (Magazine)</h3>
          <h5>Part of the designing team</h5>
          <div className="portfolio_item-cta">
            <a
              href={magazine}
              download
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
