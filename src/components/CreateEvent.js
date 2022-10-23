import React,{useState} from 'react';
import Navbar from './Navbar';
import axios from "axios";
// import Errorhandler from "./Errorhandler";

export default function CreateEvent() {
    
  const urlheroku = `https://soab-app.herokuapp.com/postevent`;
  const [input, setInput] = useState();




  
    return (
    <>
     <Navbar />
     {/* <h3 className="text-3xl font-bold subtitle mb-4 ml-4">Organisiere ein Event</h3> */}
     <div class="flex w-0.66 justify-center">
     {/* ------------ */}
     <form className="loginForm  ">
     <label >
      <h3 className='subtitle text-2xl font-bold mb-2'>Organisiere ein Event</h3>
     </label>
     <input 
        name='eventname'
        value=" Gebe einen Titel ein"
        type="text"
        id="eventname"
        placeholder='Names des Events'
     />
     <label >
      <h3 className='subtitle text-2xl font-bold mb-2 mt-3'>Adresse</h3>
     </label>
     <input 
        name='streetname'
        value="Straße/Online Event"
        type="text"
        id="eventname"
        placeholder='Straße/Online Event'
     />
    
    




     </form>
    {/* ------------ */}
     </div>
    </>
  )
}
