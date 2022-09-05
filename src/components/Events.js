import React from "react";
import Navbar from "./Navbar";
import Cardevent from "./Cardevent";
// import Testtailwind from "./testtailwind";

const Events = () => {
  return (
    <>
      <Navbar />
      {/* <Row>
          <Col sm={8}><h2 id="subtitles">Kalender</h2></Col>
          <Col sm={4}><h2 id="subtitles">Bezirkswahl</h2></Col>
        </Row> */}
      <div className="overflow-y-scroll">
      <Cardevent />
      <Cardevent />
      

      </div>
      
    </>
  );
};

export default Events;
