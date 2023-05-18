import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../config/api";
import UsersProfile from "../../pages/UsersProfile/UsersProfile";
import { AppContext } from "../../context/AppContext";

export default function Users() {
  const { token } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState([]);
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        const userData = await response.data;
        setUserInfo(userData.users);
        console.log(userData);
      } catch (error) {
        console.log(error.response.data.err);
      }
    }

    getUsers();
  }, []);
  return (
    <div
      className={`usersExpanded ${expanded ? "userCardExpanded" : ""}`}
      onClick={handleClick}
    >
      <div className="userCards" style={{ marginTop: "150px" }}>
        {userInfo.length > 0 &&
          userInfo.map((user) => (
            <a href={"users/" + user.id.toString()}>
              <UsersProfile
                name={user.name}
                email={user.email}
                createdAt={user.createdAt}
                imgUrl={user.imgUrl}
                residency={user.residency}
                ghUrl={user.ghUrl}
              />
            </a>
          ))}
      </div>
    </div>
  );
}
