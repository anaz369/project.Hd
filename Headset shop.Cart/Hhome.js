import React, { useState } from "react";
import Pulse from "react-reveal/Pulse";
import heeadsetdata from "./Subdata";
import "./Hhome.scss";
function Hhome({ handleHome, cart, warning }) {
  const [data1, setdata1] = useState(heeadsetdata);
  const home = data1.map((item) => {
    return (
      <div>
        <div className="home-content container">
          <div className="home-img">
            <img src={item.img} alt="" />
          </div>
          <div className="home-text">
            <Pulse>
              <h1>{item.model}</h1>
            </Pulse>
            <p>
              Beats Studio3 Wireless over-ear headphones delivers premium sound
              while blocking external noise with Active Noise Cancelling
            </p>
            <i href="btn" className="btn" onClick={() => handleHome(item)}>
              <i className="fa fa-shopping-bag"></i>
              <span>Add To BAg</span>
            </i>
            {warning && (
              <div className="warning">This item is already in your cart</div>
            )}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <section className="home">{home}</section>
    </div>
  );
}

export default Hhome;
