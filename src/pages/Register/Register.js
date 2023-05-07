import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import "./Register.css";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  async function RegisterUser() {
    try {
      const user = await axios.post(`${BASE_URL}/users`, {
        name,
        email,
        password,
      });
      setMessage("Uspesno ste se registrovali");

      const userInfo = await user.data;
      console.log(userInfo);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    RegisterUser(userInput);
  }

  return (
    <div className="rCointener">
      <form>
        <h1>Register</h1>
        <p>{message && message}</p>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="First Name"
          name="firstname"
          required
          value={userInput.name}
          onChange={(e) =>
            setUserInput((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>

        <label>Username</label>
        <input
          type="email"
          className="rInput"
          value={userInput.email}
          onChange={(e) =>
            setUserInput((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter Username"
          name="username"
          required
        ></input>
        <label>password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          value={userInput.password}
          onChange={(e) =>
            setUserInput((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          name="password"
          required
        ></input>
        <button onClick={handleClick}>Register</button>
        {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
}
