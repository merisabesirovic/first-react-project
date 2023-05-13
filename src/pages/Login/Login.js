import { useContext, useState } from "react";
import "./Login.css";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  console.log(useContext(AppContext).token);
  async function loginUser(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users/login`, data);
      if (user && user.data) {
        const userInfo = await user.data;
        console.log(userInfo);
        navigate("/");
        setIsLoggedIn(true);
        setToken(userInfo.token);
      }
    } catch (err) {
      console.log(err.response.data.err);
      setError(err.response.data.err);
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setToken(null);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  }

  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          name="email"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
        <p>
          Nemate nalog? <a href="/register">Registrujte se ovde</a>
        </p>
        {/* <p style={{ fontSize: "2rem", color: "black" }}> {email}</p> */}
        {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
}
