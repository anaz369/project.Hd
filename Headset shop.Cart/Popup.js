import React from "react";
import "./popup.scss";
const Popup = ({ popupRemove, name, data, handleClick, warning }) => {
  let final = data
    .filter((model) => {
      return model.model === name;
    })
    .map((item) => {
      return (
        <>
          <img src={item.img1} alt="" />
          <h1>{item.model}</h1>
          <h5>{item.des}</h5>
          {warning && (
            <div className="warning1">This item is already in your cart</div>
          )}
          <button onClick={() => handleClick(item)}>
            <span>
              <i className="fa fa-shopping-bag"></i>
            </span>
            Add to Cart
          </button>
        </>
      );
    });

  return (
    <div className="popup-main">
      <i class=" fa-sharp fa-solid fa-xmark" onClick={() => popupRemove()}></i>
      <div className="content">{final}</div>
    </div>
  );
};

export default Popup;
