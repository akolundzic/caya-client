import React from "react";
import { FaHouseUser,FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>
      <img src={require('./SOS.svg')} alt="Notrufnummer" />
      </button>
      <button id="Plus">
      +
      </button>
      <Link to="/events" id="house">
     <i> <FaHouseUser /></i>
      </Link>
      <button id="house">
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
