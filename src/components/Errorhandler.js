import React, { useState, useEffect } from "react";
import { FaUserPlus, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Errorhandler = ({ errorMessage }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(errorMessage);

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h3 className="text-3xl font-bold subtitle mb-4 ml-4">404</h3>
      <div className="about">
        <p className="about-text p-4">
          User account information not found. Please signup, create new password
          or contact us.
        </p>
      </div>
    </>
  );
};

export default Errorhandler;
