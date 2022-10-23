import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const SuccessLogin = () => {
 const navigate = useNavigate();
 useEffect(() => {
  const timer = setTimeout(() => navigate("/"), 4000);
  return () => clearTimeout(timer);
 },[]);

  return (
    <>
     <h1 className=" textbox  ">Du hast dich erflolgreich regristriert
     <br></br>
        Du wirst zur Login-Adresse weitergeleitet.
    </h1>
    
    </>
  )
};
export default SuccessLogin;