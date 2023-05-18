import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../config/api";
import { useParams } from "react-router-dom";
import UserKartica from "./UserKartica";
import { AppContext } from "../../context/AppContext";

export default function UserDetails() {
  const { id } = useParams();
  const { token } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState([]);
  const user = userInfo.find((e) => e.id === id.toString());

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        const userData = response.data;
        setUserInfo(userData.users);
      } catch (error) {
        console.log(error.response.data.err);
      }
    }

    getUsers();
  }, [id, token]);

  return (
    <div className="user-details">{user && <UserKartica user={user} />}</div>
  );
}
