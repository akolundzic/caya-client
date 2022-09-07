import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();

  const getUserdata = async () => {
    try {
      await axios
        .get(`http://localhost:8000/auth/users/${id}`)
        .then((response) => {
          setUser(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserdata();
  }, []);

  //   console.log(user);
  return (
    <div>
      <Navbar />

      <div class=" p-2   ">
        {user ? <h1 id="subtitles">Profile {user.name}</h1> : "loading..."}
      </div>

      <div className=" items-center grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
        <div className=" h-10 ">
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
    </div>
  );
};

export default Profile;
