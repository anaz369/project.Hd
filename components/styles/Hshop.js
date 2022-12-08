import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeadphoneData from "./Hdata";
import "./Hshop.scss";
function Hshop({ handleClick, warning }) {
  let [data, setdata] = useState(HeadphoneData);
  let Hdata = data.map((item) => {
    return (
      <div>
        <Fade top>
          <div className="box">
            <img src={item.img} alt="" />
            <h3>{item.model}</h3>
            <span>${item.price}</span>
            <i
              onClick={() => handleClick(item)}
              className="fa fa-shopping-bag"
            ></i>
          </div>
        </Fade>
      </div>
    );
  });
  return (
    <div className="shop-main">
      <section className="shop">
        <h2 className="heading">Shop Now</h2>
        <div className="shop-container">{Hdata}</div>
        {warning && (
          <div className="warning">This item is already in your cart</div>
        )}
      </section>
    </div>
  );
}

export default Hshop;
