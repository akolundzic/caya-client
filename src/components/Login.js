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
        .post("http://localhost:8000/auth/login", {
          email: inputlogin.email,
          password: inputlogin.password,
        })
        .then((response) => {
        console.log(response.data.id);
        navigate("/profile/"+response.data.id);
    });
    }

    // try{

    // }
    // catch(err){
    //   console.log(err);
    // }
  };

  return (
    <div>
      <h1 id="title">ComeAsYouAre</h1>
      <form className="loginForm">
        <input
          name="email"
          value={inputlogin.email}
          type="text"
          id="email"
          placeholder="Email"
          onChange={loginHandler}
        />
        <input
          name="password"
          value={inputlogin.password}
          type="password"
          id="password"
          placeholder="Password"
          onChange={loginHandler}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={submitTodoHandler}
          type="submit"
          id="new-task-submit"
        >
          login
        </button>
      </form>
      <div className="icons">
        <Link to="/signup" id="house">
          <FaUserPlus />
        </Link>
        <button>
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
