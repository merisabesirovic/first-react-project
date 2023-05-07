import React, { useState } from "react";
import HotelCards from "../../components/HotelCards/Cards1";
import hotels from "../../common/cards.json";
import "./Hotels.css";

export default function Hotels() {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div
      className={`hotel-card ${expanded ? "hotel-card--expanded" : ""}`}
      onClick={handleClick}
    >
      <div className="hotels-container">
        {hotels.map((hotel) => (
          <a href={"hotels/" + hotel.id.toString()}>
            <HotelCards
              key={hotel.id}
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              location={hotel.location}
              rating={hotel.rating}
              comments={hotel.comments}
              numberOfReviews={hotel.numberOfReviews}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
