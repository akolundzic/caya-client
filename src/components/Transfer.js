import React,{useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function SucessLogin() {
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
}
