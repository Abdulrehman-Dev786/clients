import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="cube">
        <div className="cube-face front">CODE <br /><span>NCE</span></div>
        <div className="cube-face back"> CODE <br /><span>NCE</span></div>
        <div className="cube-face right">CODE <br /><span>NCE</span></div>
        <div className="cube-face left"> CODE <br /><span>NCE</span></div>
        <div className="cube-face top">  CODE <br /><span>NCE</span></div>
        <div className="cube-face bottom">CODE <br /><span>NCE</span></div>
      </div>
    </div>
  );
};

export default Preloader;