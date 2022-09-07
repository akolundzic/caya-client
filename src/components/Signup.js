import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";
import {Link} from "react-router-dom";

const Signup = ({ setInputsignup, inputsignup }) => {
  const loginHandler = (e) => {
    setInputsignup((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(inputsignup);

  const sendData = async () => {
    // axios
    try {
      await axios
        .post(`http://localhost:8000/auth/signup`, {
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
      <Container className="fluid" id="sizeofrow">
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
        <Link to="/" className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={sendData}>GO!</Link>
      </Container>
    </div>
  );
};

export default Signup;
