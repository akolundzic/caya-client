import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Errorhandler = ({ errorMessage }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setErrors(errorMessage);
    const timer = setTimeout(() => navigate("/"), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <body id="errorpic">
        <h1 id="title">404</h1>
        {
          <h1 id="errormessagepage">
            {errors}
          </h1>
        }
      </body>
    </>
  );
};

export default Errorhandler;
