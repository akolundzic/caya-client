import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
// import Errorhandler from "./Errorhandler";

export default function CreateEvent() {
  const urlheroku = `https://soab-app.herokuapp.com/postevent`;
  const [input, setInput] = useState();

  return (
    <>
      <Navbar />

      <form className="loginForm flex justify-center ml-3 mr-2">
        {/* ------------ */}
        <label>
          <h3 className="subtitle text-2xl font-bold mb-2">
            Ich organisiere das Event ...
          </h3>
        </label>
        <input
          name="eventname"
          value=" Gebe einen Titel ein"
          type="text"
          id="eventname"
          placeholder="Names des Events"
        />
        <label>
          <h3 className="subtitle text-2xl font-bold mb-2 mt-3">Eventort</h3>
        </label>
        {/* --- */}
        <div className="h-10 flex onlineevent flex-row flex pl-2 ">
          {/* <labal className="cursor-pointer flex toggle-switcher h-8 ">
        <input 
          type="checkbox"
          className=''
          />

        </labal> */}
          {/* <button className='rounded-lg hover:bg-blue-500 pl-4 pr-4  h-8 boxcolor iconcolor shadow-lg '>
           ja
          </button> */}
          <label>
            <h3 className="  text-2xl font-bold p-2">Online-Event</h3>
          </label>
        </div>
        {/* --- */}
        <label>
          <h3 className="subtitle text-2xl font-bold mb-2 mt-3">Adresse</h3>
        </label>
        <div className=" flex-row flex ">
          <input
            name="streetname"
            value=""
            type="text"
            id="streetname"
            placeholder="Straße"
          />

          <input
            name="number"
            value=""
            type="text"
            id="streetnumer"
            placeholder="Nr."
          />
        </div>
        <div className=" flex-row flex ">
          <input
            name="Stadt"
            value=""
            type="text"
            id="Stadt"
            placeholder="Stadt"
          />
          <input
            name="zipcode"
            value=""
            type="text"
            id="zipcode"
            placeholder="Zip"
          />
        </div>

        {/* ------------ */}
      </form>
      <label for="toggle-switch flex ">
        <input type="checkbox" id="toggle-switch " 
            className="cursor-pointer w-16 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer">

        </input>
      </label>
    </>
  );
}
