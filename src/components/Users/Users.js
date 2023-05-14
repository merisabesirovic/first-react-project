import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config/api";
import UsersProfile from "../../pages/UsersProfile/UsersProfile";

export default function Users() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        const userData = response.data;
        setUserInfo(userData);
        console.log(userData);
      } catch (error) {
        console.log(error.response.data.err);
      }
    }

    getUsers();
  }, []);

  return (
    <div className="userCards" style={{ marginTop: "150px" }}>
      {/* {userInfo.map((user) => (
        <UsersProfile
          name={user.name}
          email={user.email}
          createdAt={user.createdAt}
          imgUrl={user.imgUrl}
          residency={user.residency}
          ghUrl={user.ghUrl}
        />
      ))} */}
    </div>
  );
}
