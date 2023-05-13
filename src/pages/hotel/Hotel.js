import React, { useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "../../common/cards.json";
import Kartica from "../../pages/hotel/Kartica";
import "./Hotel.css";
export default function Hotel() {
  const { id } = useParams();
  console.log(typeof id);
  console.log(hotels);
  const hotel = hotels.find((e) => {
    return e.id == id;
  });
  console.log(hotel);
  return (
    <div className="hotel-one">
      <div className="hotel-card-wrapper">
        <Kartica
          imageURL={hotel.imageURL}
          name={hotel.name}
          location={hotel.location}
          description={hotel.description}
        />
      </div>
    </div>
  );
}
