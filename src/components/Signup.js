import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
 
  const [erroroutput, setErroroutput] = useState({
    email:"Please provide a valid email address",
    surname:"Please provide a your surname",
    name:"Please provide a name",
    password:"Please provide a password with at leat 6 digits"
  });
  const [errstate, setErrstate] = useState(false);
  //    const obj =  Object.values(err.response)[0].errors;
 
  // const url = `http://localhost:8000/auth/signup`;
  const heroku=`https://soab-app.herokuapp.com/auth/signup`;
  const [messages, setMessages] = useState("");

  const loginHandler = (e) => {
    setInputsignup((prevState) => (
      {
      ...prevState,
      [e.target.name]: e.target.value,
    }
    ));
  };
  
  const sendData = async () => {
    // axios8
    try {
      await axios
        .post(heroku, {
          email: inputsignup.email,
          name: inputsignup.firstname,
          surname: inputsignup.surname,
          password: inputsignup.password,
        })
        .then(() => { 
          setMessages(inputsignup.surname+", you successfully signed up");
        });
      
    } catch (err) {
      console.log(err.response);
      setErrstate(true);
     
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="fluid " id="sizeofrow">
        <Row>
          <Col sm={11}>
           <h3>Email</h3> <div className="errortextcontacts"> {errstate ? erroroutput.email:null}</div>
          
           
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
            <h3>Name</h3>
            <input
              name="firstname"
              value={inputsignup.firstname}
              type="text"
              id="firstname"
              placeholder="Vorname"
              onChange={loginHandler}
            />
          </Col>
          
          <Col>
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
            <h3>Passwort</h3>
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
            to="/"
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
