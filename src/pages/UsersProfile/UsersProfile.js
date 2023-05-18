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
    <div className="useri">
      <div className="userContainer">
        <img
          src={
            imgUrl
              ? `${imgUrl}`
              : `https://as2.ftcdn.net/v2/jpg/05/09/59/75/1000_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg`
          }
          alt="Slika"
        ></img>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{createdAt}</p>
        <p>{ghUrl}</p>
        <p>{residency}</p>
      </div>
    </div>
  );
}
