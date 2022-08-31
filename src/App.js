import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [inputlogin, setInputlogin] = useState({});

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={<Login inputlogin={inputlogin} setInputlogin={setInputlogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
