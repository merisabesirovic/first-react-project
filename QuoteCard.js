import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{quote.author}</h5>
        <p className="card-text">{quote.content}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
