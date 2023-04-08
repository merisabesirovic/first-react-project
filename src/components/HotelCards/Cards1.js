import React from "react";
import "./Cards1.css";
function getStars(starCount) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(<span>⭐️</span>);
  }
  return stars;
}
function getHotels(props) {
  return (
    <div className="card">
      <img style={{ height: "150px" }} src={props.imageURL} alt="hotel"></img>

      <h3>{props.name}</h3>
      <div className="card-text">
        <span>{getStars(props.stars)}</span>
        <p style={{ fontSize: "12px" }}>{props.location}</p>
        <p>{props.rating}</p>
        <p>{props.comment}</p>
        <p
          style={{
            fontWeight: "bold",
            marginTop: "5px",
          }}
        >
          Number of reviews :{props.numberOfReviews}
        </p>
      </div>
    </div>
  );
}
export default getHotels;
