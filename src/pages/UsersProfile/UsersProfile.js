import React from "react";
import "../UsersProfile/UsersProfile.css";
export default function UserCard({
  name,
  email,
  createdAt,
  imgUrl,
  residency,
  ghUrl,
}) {
  return (
    <div className="userContainer">
      <img src={`${imgUrl}`} alt="slika"></img>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{createdAt}</p>
      <p>{ghUrl}</p>
      <p>{residency}</p>
    </div>
  );
}
