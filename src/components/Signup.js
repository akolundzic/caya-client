import React, {useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
 
  const [errstate, setErrstate] = useState({ 
    email:null, password:null, name:null,surname:null});
  // const url = `http://localhost:8000/auth/signup`;
  const heroku=`https://soab-app.herokuapp.com/auth/signup`;
  const navigate = useNavigate();

  const loginHandler = (e) => {
    setInputsignup((prevState) => (
      { 
      ...prevState,
      [e.target.name]: e.target.value,
    }
    ));
  };
  //object handler errorstate[key]=value
  // const setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
  // const setNull = obj => setAll(obj, null);
  
  const sendData = async () => {
  
     await axios
        .post(heroku, {
          email: inputsignup.email,
          name: inputsignup.firstname,
          surname: inputsignup.surname,
          password: inputsignup.password,
        }).then((response) =>{
          navigate("/success");
        }).catch(err => {
          setErrstate(err.response.data);
        } );
        // console.log(errstate);
  };
  
  return (
    <div>
      <Navbar />
      <Container className="fluid " id="sizeofrow">
        <Row>
          <Col sm={11}>
          <h3>Email  </h3> <div className="errortextcontacts"> {errstate.email}</div> 
            <input
              name="email"
              value={inputsignup.email}
              type="text"
              id="email"
              placeholder="Email"
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={11}>
            <h3>Name</h3><div className="errortextcontacts"> {errstate.name}</div> 
            <input
              name="firstname"
              value={inputsignup.firstname}
              type="text"
              id="firstname"
              placeholder="Vorname"
              onChange={loginHandler}
            />
          </Col>
          <Col><div className="errortextcontacts"> {errstate.surname}</div> 
            <input
              name="surname"
              value={inputsignup.surname}
              type="text"
              id="surname"
              placeholder="Nachname"
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={11}>
            <h3>Passwort</h3><div className="errortextcontacts"> {errstate.password}</div> 
            <input
              name="password"
              value={inputsignup.password}
              type="password"
              id="password"
              placeholder="Passwort"
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <button className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-2  "
         onClick={sendData}>
        {/* <Link
            to="/success"
            onClick={sendData}
          > */}
            Sign Up!
          {/* </Link> */}
        </button>
        
      </Container>
    </div>
  );
};

export default Signup;


