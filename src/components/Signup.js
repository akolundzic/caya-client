import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
  const url = `http://localhost:8000/auth/signup`;
  // const heroku=`https://soab-app.herokuapp.com/auth/signup`

  const loginHandler = (e) => {
    setInputsignup((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(inputsignup);

  const sendData = async () => {
    // axios8
    try {
      await axios
        .post(url, {
          email: inputsignup.email,
          name: inputsignup.firstname,
          surname: inputsignup.surname,
          password: inputsignup.password,
        })
        .then((response) => {
          this.setState({ response: response });
          console.log(this.state.response);
        });
      // this.setState({ data: json });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <Container className="fluid " id="sizeofrow">
        <Row>
          <Col sm={11}>
            <h3>Email</h3>
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
        <button >
          <Link
            to="/"
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold w-20 h-8 shadow-lg rounded-2 "
            onClick={sendData}
          >
            Sign Up!
          </Link>
        </button>
      </Container>
    </div>
  );
};

export default Signup;
