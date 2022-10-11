import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
  const errors = {};
  const [erroroutput, setErroroutput] = useState("");
  const handleErrors = (err) => {
    //duplicate error code
     const obj =  Object.values(err.response)[0].errors;
     if(err.code){
      for(const i in obj){
       errors[i]=obj;
      }};
     return errors;
  };



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
  // console.log(inputsignup);

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
      const errout = handleErrors(err);
      console.log(erroroutput);
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="fluid " id="sizeofrow">
        <Row>
          <Col sm={11}>
           { <h3>Email {erroroutput}</h3>}
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
