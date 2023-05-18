import React from "react";

const UserKartica = ({ user }) => {
  return (
    <div className="user-kartica">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Created At: {user.createdAt}</p>
      <img src={user.imgUrl} alt="User Avatar" />
      <p>Residency: {user.residency}</p>
      <a href={user.ghUrl}>GitHub Profile</a>
    </div>
  );
};

export default UserKartica;
