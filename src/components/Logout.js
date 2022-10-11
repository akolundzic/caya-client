import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const Logout = () => {
  const urlheroku = `https://soab-app.herokuapp.com/auth/logout`;
  const navigate = useNavigate();

  useEffect(() => {
    clearCookie();
  }, []);

  const clearCookie = async () => {
    try {
      await axios.get(urlheroku).then((response) => {
       
        const timer = setTimeout(() => navigate("/"), 4000);
        return () => clearTimeout(timer);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 id="title">Auf Wiedersehen</h1>

      <h1 className=" textbox ">
        Falls du doch Hilfe braucht,
        <br></br>
        klicke einfach unten auf das
        <br></br>
        SoS Symbol
      </h1>
      <div className="justify-center flex mt-4">
        <button className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2  ">
          <Link to="/">login</Link>
        </button>
        <div className="pl-2">
          <img src={require("./SOS.svg")} alt="Notrufnummer" />
          </div>
      </div>

      {/* <div className="flex-row">
        <button>
          <img src={require("./SOS.svg")} alt="Notrufnummer" />
        </button>
        <button className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2  ">
          <Link to="/login">login</Link>
        </button>
      </div> */}
    </>
  );
};
// mt-6 text-white font-bold justify-center align-center text-xl text-center p-4
export default Logout;
