import React, { useEffect } from "react";
import "./NavBar.css";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const { token, setToken } = useContext(AppContext);
  const navigation = useNavigate();
  const acitveStyles = {
    backgroundColor: "#252525",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
  };
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  useEffect(() => {}, [token]);
  return (
    <header className="header">
      {!token ? (
        <>
          <NavLink
            to={"/login"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
            tabIndex={2}
          >
            <h2 style={{ fontFamily: "Arial" }}>Login</h2>
          </NavLink>
          <NavLink
            to={"/register"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
            tabIndex={1}
          >
            <h2 style={{ fontFamily: "Arial" }}>Register</h2>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
            tabIndex={1}
          >
            <h2 style={{ fontFamily: "Arial" }}>Forma</h2>
          </NavLink>
          <NavLink
            to={"/aboutus"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>About Us</h2>
          </NavLink>
          <NavLink
            to={"/hotels"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Booking</h2>
          </NavLink>
          <NavLink
            to={"/teams"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Teams</h2>
          </NavLink>
          <NavLink
            to={"/quotes"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Quotes</h2>
          </NavLink>
          <button
            className="activeStyles"
            style={{ width: "100px", borderRadius: "50px" }}
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
              navigation("/login");
            }}
          >
            Logout
          </button>
        </>
      )}
    </header>
  );
}
export default Navbar;
