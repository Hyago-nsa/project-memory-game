import React from "react";
import emojihide from "../assets/interrogation.png";
import "./Card.css";

const Card = ({ emoji, id, handleCardClick}) => {


  return (
    <button className="card" onClick={handleCardClick} data-id={id}>
      <div className="side front">
        <img className="emojihide" src={emojihide} alt="hidden" />
      </div>
      <div className="side back">{emoji}</div>
    </button>
  );
};

export default Card;
