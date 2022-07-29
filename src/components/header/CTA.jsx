import React from "react";
import Dipayan from "../../assets/Dipayan.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Dipayan} download className="btn">
        Downlaod CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Ping Me
      </a>
    </div>
  );
};

export default CTA;
