import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import axios from "axios";

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
      //   // .post("https://soab-app.herokuapp.com/", {
      //   .post("http://localhost:8000/auth/signup", {
      //     email: inputsignup.email,
      //     name: inputsignup.firstname,
      //     surname: inputsignup.surname,
      //     password: inputsignup.password,

      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      // .catch((err) => {
      //   console.log(err);
      // });

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
        {/* <Row>
          <Col sm={9}>
            <h3>Adresse</h3>
            <input
              name="streetname"
              value={inputsignup.streetname}
              type="text"
              id="streetname"
              placeholder="Straßenname"
              onChange={loginHandler}
            />
          </Col>
          <Col sm={2}>
            <input
              name="nr"
              value={inputsignup.nr}
              type="text"
              id="nr"
              placeholder="Nr."
              onChange={loginHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            <input
              name="district"
              value={inputsignup.district}
              type="text"
              id="district"
              placeholder="Bezirk"
              onChange={loginHandler}
            />
          </Col>
        </Row> */}
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
        <button onClick={sendData}>GO!</button>
      </Container>
    </div>
  );
};

export default Signup;

{
  /* <form className="loginForm">
    <h3>Name</h3>
        <input
          name="name"
          // value={inputlogin.email}
          type="text"
          id="name"
          placeholder="Name"
          // onChange={loginHandler}
        /> */
}
// <input
//   name="surname"
//   // value={inputlogin.password}
//   type="text"
//   id="surname"
//   placeholder="Nachname"
//   // onChange={loginHandler}
// />
// {/* <button onClick={submitTodoHandler} type="submit" id="new-task-submit"><i className="fa-solid fa-square-plus"></i></button> */}
// <br></br>
// <h3>Adresse</h3>
// <input
//   name="streetname"
//   // value={inputlogin.password}
//   type="text"
//   id="streetname"
//   placeholder="Straßenname"
//   // onChange={loginHandler}
// />
// <input
//   name="nr"
//   // value={inputlogin.password}
//   type="text"
//   id="nr"
//   placeholder="Nr."
// onChange={loginHandler}
//   />
// </form>
