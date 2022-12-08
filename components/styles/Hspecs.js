import React from "react";
import Fade from "react-reveal/Fade";
import "./Hspecs.scss";
function Hspecs() {
  return (
    <div className="spec-main">
      <section className="specs">
        <h1 className="heading">Specs</h1>
        <div className="specs-container ">
          <div className="specs-details">
            <div className="box">
              <Fade left>
                <img className="bx" src="headst.svg" alt="" />
                <h3>up to 22 hours of listening time</h3>
                <p>
                  long term comfort is matched by a battery life of 22 hours.and
                  40 hours of playback when Noise Canceling turned off
                </p>
              </Fade>
            </div>
            <div className="box">
              <Fade left>
                <img src="bttry.svg" alt="" />
                <h3>Block external noise</h3>
                <p>
                  Noise cancelling countinually pinpoints externally responding
                  to individual fit and music playback
                </p>
              </Fade>
            </div>
          </div>
          <div className="spec-img">
            <Fade right>
              <img src="hd2.png" alt="" />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hspecs;
