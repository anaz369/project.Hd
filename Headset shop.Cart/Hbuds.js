import React from "react";
import Fade from "react-reveal/Fade";
import "./Hbuds.scss";
function Hbuds() {
  return (
    <div className="buds-main">
      <section className="buds">
        <div className="buds-container container">
          <div className="buds-text">
            <Fade left>
              <h2>Beats Studio Buds</h2>
              <span>$149.95</span>
              <p>One -touch pairing for apple and Android</p>
              <a href="btn" className="btn">
                <i className="fa fa-shopping-bag"></i>
                <span>Buy Now</span>
              </a>
            </Fade>
          </div>
          <div className="buds-img">
            <Fade right>
              <img
                src="https://www.futureworldindia.in/image/cache/catalog/194253194521/01-95994_big-416x416.png"
                alt=""
              />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hbuds;
