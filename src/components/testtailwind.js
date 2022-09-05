import React from "react";
import Navbar from "./Navbar";
const Testtailwind = () => {
  return (
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
            <p id="cardtext">
            
              <div>Berghain</div>
            </p>
          </div>
         
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testtailwind;
