import React from "react";
import "../assets/styles.css"; // Import custom styles

const Card = ({ number, title, desc, bg, iconClass }) => {
  return (
    <div className={`card p-4 ${bg} text-start position-relative`}>
      {/* Icon at Top-Right */}
      {/* <i className={`position-absolute top-0 end-0 p-3 ${iconClass}`}></i> */}
      <i className={`position-absolute top-0 end-0 p-3 ${iconClass}`}></i>


      {/* Left-Aligned Content */}
      <div>
        <h2 className="text-white fw-bold display-6">{number}</h2>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
