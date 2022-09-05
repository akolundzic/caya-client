import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaShareAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cardevent = () => {
  return (
    <>
       <div>
      {/* Grid start */}
      
      <div className=" grid grid-cols-3 oneevent shadow hover:shadow-md rounded-lg  cursor-pointer">
        <div className="  w-60 cols-span-2 grid">
          <div className="h-8 ">
            <p id="cardtext">
              <div className="w-8">Mo</div>
              <div className="w-3">5.</div>
              <div className="w-5">May</div>
            </p>
          </div>
          <div>
            {" "}
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="h-8 pt-4 pb-4">
            <p id="cardtext">
              <div className="w-20">Kreuzberg</div>
              <div className="w-20">Berghain</div>
           
            </p>
          </div>
        </div>
        <div className=" w-40 cols-span-1 grid">
          <div>
            <p id="cardtext">18:00</p>
          </div>
          <div>
            <img
              className=" object-cover imagebox"
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
              alt="Flower and sky"
            />
          </div>
    
          <div className="h-8 pt-4 pb-4">
           
          <div><button className="button">going</button>
          <button><FaShareAlt className="share"/></button></div>
           
           
          </div>
         
          <div></div>
        </div>
      </div>
      
    </div>
{/* 
      <Container className="fluid">
        <Row>
          <Col sm={8}><h2 id="subtitles">Kalender</h2></Col>
          <Col sm={4}><h2 id="subtitles">Bezirkswahl</h2></Col>
        </Row>
        <div className="oneevent">
          <Row>
            <Col sm="auto">
              <p id="cardtext">Mo</p>
            </Col>
            <Col sm="auto">
              <p id="cardtext">09.09.2022</p>
            </Col>
            <Col sm="auto"></Col>
            <Col sm="auto">
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
    

       */}
    </>
  );
};

export default Cardevent;
