import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Errorhandler = ({ errorMessage }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setErrors(errorMessage);
    // const timer = setTimeout(() => navigate("/"), 4000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="">
        <h1 id="title">404</h1>
        {
          <h1 id="errormessage">
            {/* <h1 className=" align-middle text-center leading-10 text-3xl tracking-wider mt-12 "> */}
            {errors}
          </h1>
        }
      </div>
    </>
  );
};

export default Errorhandler;
