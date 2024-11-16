import React from "react";
import "./card.css";
const Card = ({ nome, email }) => {
  return (
    <div className="generic-card">
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
