import React from "react";
import Login from "../../pages/Login/Login";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const isLoggedIn = localStorage.getItem("token") !== null;
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
  return (
    <header className="header">
      {!isLoggedIn && (
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
      )}
      {isLoggedIn && (
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
        </>
      )}
    </header>
  );
}
export default Navbar;
