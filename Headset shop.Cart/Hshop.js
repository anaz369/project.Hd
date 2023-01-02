import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeadphoneData from "./Hdata";
import "./Hshop.scss";
import Popup from "./Popup";
function Hshop({ handleClick, warning }) {
  let [data, setdata] = useState(HeadphoneData);
  let [popup, setpopup] = useState(false);
  let [just, setjust] = useState([]);
  function popupHandler(item) {
    setpopup(true);
    setjust(item);
  }
  function popupRemove() {
    setpopup(false);
  }
  let Hdata = data.map((item) => {
    return (
      <div>
        <div className="div-1">
          <Fade top>
            <div className="box">
              <img src={item.img} alt="" />
              <h3>{item.model}</h3>
              <span>${item.price}</span>
              <i
                onClick={() => popupHandler(item.model)}
                className="fa fa-shopping-bag"
              ></i>
            </div>
          </Fade>
        </div>
      </div>
    );
  });
  return (
    <div className="shop-main">
      <section className="shop">
        <h2 className="heading">Shop Now</h2>
        {popup && (
          <Popup
            popupRemove={popupRemove}
            name={just}
            data={data}
            handleClick={handleClick}
            warning={warning}
          />
        )}
        <div className="shop-container">{Hdata}</div>
      </section>
    </div>
  );
}

export default Hshop;
