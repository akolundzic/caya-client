import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaShareAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cardevent = () => {
  return (
    <>
      

      <Container className=" fluid">
        <Row>
          <Col sm={8}><h2 id="subtitles">Kalender</h2></Col>
          <Col sm={4}><h2 id="subtitles">Bezirkswahl</h2></Col>
        </Row>
        <div className="oneevent">
          <Row>
            <Col sm={1}>
              <p id="cardtext">Mo</p>
            </Col>
            <Col sm={3}>
              <p id="cardtext">09.09.2022</p>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4}>
              <p id="cardtext">18:00</p>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </Col>
            <Col sm={4}>
              <div className="imagebox"></div>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <p id="cardtext">Kreuzberg</p>
            </Col>
            <Col sm={2}>
              <button className="button">going</button>
            </Col>
            <Col sm={2}>
            <button><FaShareAlt className="share"/></button>
            
            
            </Col>
          </Row>
        </div>
      </Container>
    

      
    </>
  );
};

export default Cardevent;
