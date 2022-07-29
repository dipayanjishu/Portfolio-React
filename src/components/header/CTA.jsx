import React from "react";
import Dipayan from "../../assets/Dipayan.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Dipayan} download className="btn">
        Downlaod
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets talk
      </a>
    </div>
  );
};

export default CTA;
