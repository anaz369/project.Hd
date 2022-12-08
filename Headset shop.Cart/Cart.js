import React, { useEffect, useState } from "react";
import "./Cart.scss";
const Cart = ({ cart, setcart, handleChange }) => {
  const [price, setprice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart?.map((item) => {
      return (ans += item.amount * item.price);
    });
    setprice(ans);
  };
  const handleRemove = (id) => {
    const array = cart.filter((item) => item.id !== id);
    setcart(array);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <article className="cart-main">
      {cart?.map((item) => {
        return (
          <div className="cart-box">
            <div className="cart-img">
              <img src={item.img} />
              <p>{item.model}</p>
            </div>
            <div className="btn-1">
              <button onClick={() => handleChange(item, +1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className="btn-2">
              <span>${item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="total">
        <span className="sp-1">Total price of your Cart</span>
        <span className="sp-2"> USD - ${price}</span>
      </div>
    </article>
  );
};

export default Cart;
