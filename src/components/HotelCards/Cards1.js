import React from "react";
import "./Cards1.css";
function getStars(starCount) {
  const stars = [];
  for (let i = 0; i < Math.trunc(starCount); i++) {
    stars.push(<span>⭐</span>);
  }
  if (starCount % 1 !== 0) {
    stars.push(
      <span>
        <img
          src="https://image.emojipng.com/790/393790.jpg"
          style={{
            width: "17px",
            height: "17px",
          }}
          alt="star"
        ></img>
      </span>
    );
  }
  return stars;
}
// 5-6 decent
// 6-7 ""
// 7-8 good
// 8-9 very good
// 9-10 wondeful

// let reaction;
function getHotels(props) {
  const slashIndex = props.rating.indexOf("/");
  const rating1 = +props.rating.slice(0, slashIndex);
  let reaction;
  if (rating1 >= 5 && rating1 < 6) {
    reaction = "Decent";
  } else if (rating1 >= 6 && rating1 < 7) {
    reaction = "";
  } else if (rating1 >= 7 && rating1 < 8) {
    reaction = "Good";
  } else if (rating1 >= 8 && rating1 < 9) {
    reaction = "Very Good";
  } else if (rating1 >= 9 && rating1 <= 10) {
    reaction = "Wonderful";
  }
  const showRecomendation = rating1 >= 8 ? true : false;
  return (
    <div className="card">
      <img style={{ height: "150px" }} src={props.imageURL} alt="hotel"></img>

      <h3 style={{ color: "black" }}>{props.name}</h3>
      <div className="card-text">
        <span style={{ background: rating1 < 9 ? "orange" : "green" }}>
          {getStars(props.stars)}
        </span>
        <p style={{ fontSize: "12px" }}>{props.location}</p>
        <p>{props.rating}</p>
        <p className="hoteldesc">{props.description}</p>
        <p>
          <span style={{ color: "gray" }}>{reaction} </span>
          <span
            style={{ color: "gray", fontSize: "10px", fontWeight: "bolder" }}
          >
            ({props.numberOfReviews})
          </span>
        </p>
        {/* 1. nacin uslovnog prikazivanja (Conditional rendering) */}
        {/* {showRecomendation && <p>Recomendation</p>} */}
        {/* 2. nacin uslovnog prikazivanja (Conditional rendering) */}
        {showRecomendation ? <p>Recomendation</p> : <></>}
      </div>
    </div>
  );
}

export default getHotels;
