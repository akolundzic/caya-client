import React from "react";
import { FaUserPlus,FaPlus,FaHouseUser,FaBars} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className="navbar">
      <button>
      <img src={require('./SOS.svg')} />
      </button>
      <button id="Plus">
      +
      </button>
      <button id="house">
     <i> <FaHouseUser /></i>
      </button>
      <button id="house">
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
