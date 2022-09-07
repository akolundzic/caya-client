import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { FaRegEdit, FaUserAlt} from "react-icons/fa";
import {BsEnvelopeFill} from "react-icons/bs";

const Profile = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();

  const url = "https://soab-app.herokuapp.com/auth/users/"+id;
  // const url = "http://localhost:8000/auth/users/"+id;
  console.log(url);
  
  useEffect(() => {
    getUserdata();
  }, []);
  
  const getUserdata = async () => {
      await axios
        .get(url)
        .then((response) => {
          setUser(response.data);
          console.log(response);
        })
        .catch ((err) => {
      console.log(err);
      // alert("Error: " + id);
    })
  };
  
  return (
    <>
     {
      user ? 
      <div>
      <Navbar />
      <div class=" p-2   ">
        {user ? <h1 id="subtitles">Profiel {user.name}</h1> : "loading..."}
      </div>
      <div className=" items-center  grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
        <div className=" h-10   ">
          <div class="border-solid">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="w-12 h-auto rounded-full pic "
              alt=""
            />
          </div>
        </div>
        <div>
          <p id="cardtext">(Drücke auf das Bild links)</p>
        </div>
        <div>
          <button>
            {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
            <FaRegEdit className="iconcolor" size={"3rem"} />
          </button>
        </div>
      </div>
        {/* ---- */}
        
      <div className=" items-center grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
        <div className=" h-8 ">
        <button>
            {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
            <BsEnvelopeFill className="usercolor" size={"2.5rem"} />
          </button>
        </div>
        <div>
          <p  className="text-xl">{user.email}</p>
        </div>
        <div>
          <button>
            {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
            <FaRegEdit className="iconcolor" size={"3rem"} />
          </button>
        </div>
      </div>
        {/* ---- */}
        <div className=" items-center grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
        <div className=" h-10 ">
        <button>
            {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
            <FaUserAlt className="usercolor" size={"2.5rem"} />
          </button>
        </div>
        <div>
          <p  className="text-xl">{user.name} {user.surname}</p>
        </div>
        <div>
          <button>
            {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
            <FaRegEdit className="iconcolor" size={"3rem"} />
          </button>
        </div>
      </div>
      </div>
      

    :
    "LOADING..."    
     
      
     
    }
    </>
  );
};

export default Profile;
