import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Events from "./components/Events";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import CreateEvent from "./components/CreateEvent";
import SuccessLogin from "./components/Transfer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  // const [inputlogin, setInputlogin] = useState({});
  const [inputsignup, setInputsignup] = useState({});

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`);

  return (
    <div className="App">
      <html>
        <head>
          <meta charSet="utf-8" />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
            rel="stylesheet"
            integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://unpkg.com/tailwindcss@1.0.4/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>

          <title>CAYA</title>
        </head>
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/postevent" element={<CreateEvent />} />
          <Route
            exact
            path="/signup"
            element={
              <Signup
                inputsignup={inputsignup}
                setInputsignup={setInputsignup}
              />
            }
          />
        <Route exact path="/success" element={<SuccessLogin />} />
        </Routes>
      </html>
    </div>
  );
}

export default App;
