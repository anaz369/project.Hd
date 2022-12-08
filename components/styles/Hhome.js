import React from "react";
import Pulse from "react-reveal/Pulse";
import "./Hhome.scss";
function Hhome() {
  return (
    <div>
      <section className="home">
        <div className="home-content container">
          <div className="home-img">
            <img src="abc2.png" alt="" />
          </div>
          <div className="home-text">
            <Pulse>
              <h1>Beats Solo 3</h1>
            </Pulse>
            <p>
              Beats Studio3 Wireless over-ear headphones delivers premium sound
              while blocking external noise with Active Noise Cancelling
            </p>
            <a href="btn" className="btn">
              <i className="fa fa-shopping-bag"></i>
              <span>Add To BAg</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hhome;
