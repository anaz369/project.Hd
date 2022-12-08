import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hhead.scss";
function Hheader({ size, setshow }) {
  let [state, setstate] = useState("");
  let [set, setdo] = useState("");
  console.log("heyee", size);
  function clicked() {
    setstate((prevstate) => {
      if (prevstate == "") {
        return "active";
      } else {
        return "";
      }
    });
    setdo((prevstate) => {
      if (prevstate == "") {
        return "fa-sharp fa-solid fa-xmark";
      } else {
        return "";
      }
    });
  }
  return (
    <div>
      <header>
        <div className="nav">
          <a className="logo" href="">
            <img src="abc3.png" alt="" />
          </a>
          <i onClick={clicked} class={`fa-solid fa-bars menu-icon ${set}`}></i>
          <ul className={`navbar ${state}`}>
            <li>
              <Link to="Home">Home</Link>
            </li>
            <li>
              <Link to="Specs">Specs</Link>
            </li>
            <li onClick={() => setshow(true)}>
              <Link to="Shop">Shop</Link>
            </li>
            <li>
              <Link to="Buds">Buds</Link>
            </li>
            <li>
              <Link to="fa-solid fa-cart-shopping">
                <i
                  class="fa-solid fa-cart-shopping"
                  onClick={() => setshow(false)}
                ></i>
                <span>{size}</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Hheader;
