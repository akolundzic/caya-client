import React, { useState } from "react";
import { FaUserPlus, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({}) {
  //get props from form, save into setLogin = [email, password]
  const [inputlogin, setInputlogin] = useState({ email: "", password: "" });
  const [id, setId] = useState("")
  
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
     
      alert("no empty fields");
    } else {
      console.log("else");
      axios
        .post("https://soab-app.herokuapp.com/auth/login", {
          email: inputlogin.email,
          password: inputlogin.password,
        })
        .then((response) => {
        // console.log(response.data.id);
        navigate("/profile/"+response.data.id);
    });
    }

  };

  return (
    <div>
      <h1 id="title">ComeAsYouAre</h1>
      <form className="loginForm">
        <input className="p-2"
          name="email"
          value={inputlogin.email}
          type="text"
          id="email"
          placeholder="Email"
          onChange={loginHandler}
        />
        <input class="p-2"
          name="password"
          value={inputlogin.password}
          type="password"
          id="password"
          placeholder="Password"
          onChange={loginHandler}
        />
        <button
          className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-4 "
          onClick={submitTodoHandler}
          type="submit"
          
        >
          login
        </button>
      </form>
      <div className="icons ">
        <Link to="/signup" id="house">
          <FaUserPlus classname/>
        </Link>
        <button id="house">
          <img src={require("./SOS.svg")} />
        </button>
        <Link to="/about" id="house">
          <FaInfoCircle />
        </Link>
      </div>
    </div>
  );
}

export default Login;
