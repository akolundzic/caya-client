import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
 
  const [errstate, setErrstate] = useState({email:null, password:null});
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
     
      const obj =await axios
        .post(heroku, {
          email: inputsignup.email,
          name: inputsignup.firstname,
          surname: inputsignup.surname,
          password: inputsignup.password,
        });
       if(obj.data.login){
        obj.then(()=>{
          setMessages(inputsignup.surname+", you successfully signed up");
        });
       }
       else{
        setMessages(obj.data.message);
        console.log(obj.data.message);
       }

       
      
      //   .then((response) => { 
      //     if(response.data.login){
      //     setMessages(inputsignup.surname+", you successfully signed up");
      //     } else{
      //       setMessages(response.data.message);
      //     }
      //   });
      // console.log(messages);
    } catch (err) {
      const obj = await err.response.data.errors;
      setErrstate(() =>{return({email:obj.email,password: obj.password }); });
      
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="fluid " id="sizeofrow">
        <Row>
          <Col sm={11}>
          <h3>Email  </h3> <div className="errortextcontacts"> {errstate.email ? errstate.email:null}</div> 
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
              required value={inputsignup.firstname}
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
              required type="text"
              id="surname"
              placeholder="Nachname"
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={11}>
            <h3>Passwort</h3><div className="errortextcontacts"> {errstate.password ? errstate.password:null}</div> 
            <input
              name="password"
              value={inputsignup.password}
              required type="password"
              id="password"
              placeholder="Passwort"
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <button className="login hover:bg-blue-500 text-white font-bold w-20 h-8 rounded-2 mt-2  "
         onClick={sendData}>
        {/* <Link
            to="/sucess"
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


{/* <div className="errortextcontacts"> {errstate ? erroroutput.email:null}</div>  */}