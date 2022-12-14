import React, { useState } from "react";
import { FaUserPlus, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Errorhandler from "./Errorhandler";

function Login() {
  // const url = `http://localhost:8000/auth/login`;
  const urlheroku = `https://soab-app.herokuapp.com/auth/login`;
  //get props from form, save into setLogin = [email, password]
  const [inputlogin, setInputlogin] = useState({ email: "", password: "" });
  const [erroroutput, setErroroutput] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    // console.log("we are here");
    setInputlogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputlogin.email === "" || inputlogin.password === "") {
      setErroroutput("Bitte gib deine email-Adrese und Passwort ein.");
    } else {
      axios
        .post(urlheroku, {
          email: inputlogin.email,
          password: inputlogin.password,
        })
        .then((response) => {
          navigate("/profile/" + response.data.id);
        });
    }
  };

  return (
    <div>
      <h1 id="title">CAYA</h1>

      {/* <h1 className="text-red-800 text-center mt-4">Please enter your email address and password.</h1> */}
      {erroroutput ? (
        <h1 className="text-red-800 font-bold bg-white bg-opacity-50 bg-rounded text-center box-content  pl-2 pr-2  ml-2 mr-2">
          {erroroutput}
        </h1>
      ) : null}
      <form className="loginForm ">
        <input
          className="p-2"
          name="email"
          value={inputlogin.email}
          type="text"
          id="email"
          placeholder="Email"
          onChange={loginHandler}
        />
        <input
          className="p-2"
          name="password"
          value={inputlogin.password}
          type="password"
          id="password"
          placeholder="Password"
          onChange={loginHandler}
        />
        <button
          className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-2 "
          onClick={submitTodoHandler}
          type="submit"
        >
          login
        </button>
      </form>
      <div className="icons ">
        <Link to="/signup" id="house">
          <FaUserPlus classname />
        </Link>
        <button id="house">
          <img src={require("./SOS.svg")} alt="Notrufnummer" />
        </button>
        <Link to="/about" id="house">
          <FaInfoCircle />
        </Link>
      </div>
    </div>
  );
}

export default Login;
