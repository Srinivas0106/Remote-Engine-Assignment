import React from "react";
import Card from "./Card";

const CardContainer = () => {
  const cards = [
    { number: "01", title: "Title One", desc: "This is card one.", bg: "bg-danger text-white", iconClass: "bi bi-facebook" },
    { number: "02", title: "Title Two", desc: "This is card two.", bg: "bg-warning text-dark", iconClass: "bi bi-twitter" },
    { number: "03", title: "Title Three", desc: "This is card three.", bg: "bg-info text-dark", iconClass: "bi bi-linkedin" },
    { number: "04", title: "Title Four", desc: "This is card four.", bg: "bg-primary text-white", iconClass: "bi bi-instagram" },
  ];
  

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
