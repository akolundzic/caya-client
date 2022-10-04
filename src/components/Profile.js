import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { FaRegEdit, FaUserAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

// RiDeleteBack2Fill
const Profile = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();
  // const [logout, setLogout] = useState();
  const navigate = useNavigate();
  const url = "https://soab-app.herokuapp.com/auth/users/" + id;
  // const testurl = `http://localhost:8000/auth/users` + id;
  useEffect(() => {
    getUserdata();
  }, []);

  const logoutHandler = (e) => {
    e.preventDefault();

    //   axios
    //   .post("https://soab-app.herokuapp.com/auth/login", {
    //     email: inputlogin.email,
    //     password: inputlogin.password,
    //   })
    //   .then((response) => {
    //   console.log(response.data.id);
    // });
    navigate("/");
  };

  const getUserdata = async () => {
    await axios
      .get(url)
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user ? (
        <div>
          <Navbar />
          <div class=" p-2   ">
            <h1 id="subtitles">Profiel {user.name}</h1>
          </div>
          <div className=" items-center  grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
            <div className=" h-10   ">
              <div class="border-solid">
                <img
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                  className="w-12 h-auto rounded-full pic "
                  alt="Prfilfoto"
                />
              </div>
            </div>
            <div>
              <p id="cardtext">(Drücke auf das Bild links)</p>
            </div>
            <div>
              ,{" "}
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
              <p className="text-xl">{user.email}</p>
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
              <p className="text-xl">
                {user.name} {user.surname}
              </p>
            </div>
            <div>
              <button>
                {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
                <FaRegEdit className="iconcolor" size={"3rem"} />
              </button>
            </div>
          </div>
          {/* ---- */}
          <div className=" items-center  grid grid-cols-2 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer m-1">
            <div className=" h-10   ">
              <div>
                <p className="text-xl m-2">Account löschen</p>
              </div>
            </div>
            <div>
              <button>
                {/* <i className='bx bxs-edit iconcolor ' size={"2rem"}/> */}
                <RiDeleteBack2Fill className="text-red-600" size={"3rem"} />
              </button>
            </div>
          </div>
          {/* login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-4  */}
          {/* ---- */}
          <div className="flex justify-center ">
            <button className="  login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-2 ">
              <Link to="/" onClick={logoutHandler} type="submit">
                logout
              </Link>
            </button>
          </div>
        </div>
      ) : (
        "LOADING..."
      )}
    </>
  );
};

export default Profile;
