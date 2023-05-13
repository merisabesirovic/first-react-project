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
  const [incorrectStyles, setIncorrectStyles] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const colorMessage = incorrectStyles ? "#f00" : "#000";
  async function RegisterUser(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users`, data);
      const userInfo = await user.data;
      console.log(userInfo);
      setIncorrectStyles(false);
      setIsSuccess(true);
      setMessage("Uspesno ste registrovani na nasem sajtu!");
      setUserInput({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err.response.data.err);
      setIsSuccess(false);
      setIncorrectStyles(true);
      setMessage(err.response.data.err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    RegisterUser(userInput);
  }

  return (
    <div className="rCointener">
      <h2 style={{ textAlign: "center", color: colorMessage }}>
        {message && message}
      </h2>
      <form>
        <h1>Register</h1>
        <p style={{ textAlign: "center", color: colorMessage }}>
          {message && message}
        </p>
        {/* {message ? <p>{message}</p> : <></>} */}
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="Name"
          name="name"
          value={userInput.name}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          className="rInput"
          value={userInput.email}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password"
          name="password"
          value={userInput.password}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          required
        ></input>
        <button onClick={handleClick}>Register</button>
        <p>
          Vec imate nalog? <a href="/login">Ulogujte se ovde</a>
        </p>
      </form>
    </div>
  );
}
