import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cart from "./Cart";
import Hbuds from "./Hbuds";
import Hfooter from "./Hfooter";
import Hheader from "./Hheader";
import Hhome from "./Hhome";
import Hshop from "./Hshop";
import Hspecs from "./Hspecs";
import Login from "./Login";
function Headset() {
  const [show, setshow] = useState(true);
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState(false);
  const handleClick = (item) => {
    let presentcondition = false;
    cart.forEach((product) => {
      if (item.id === product.id) presentcondition = true;
    });
    if (presentcondition) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setcart([...cart, item]);
  };
  const handleHome = (item) => {
    let presentcondition = false;
    cart.forEach((product) => {
      if (item.id === product.id) presentcondition = true;
    });
    if (presentcondition) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setcart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArray = cart;
    tempArray[ind].amount += d;

    if (tempArray[ind].amount === 0) tempArray[ind].amount = 1;
    setcart([...tempArray]);
    console.log("heyyy", tempArray);
  };

  return (
    <div>
      <Router>
        <Hheader size={cart.length} setshow={setshow} />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />}></Route>
          <Route
            path="Home"
            element={
              <Hhome handleHome={handleHome} cart={cart} warning={warning} />
            }
          ></Route>
          <Route path="Specs" element={<Hspecs />}></Route>
          {show ? (
            <Route
              path="Shop"
              element={<Hshop handleClick={handleClick} warning={warning} />}
            ></Route>
          ) : (
            <Route
              path="fa-solid fa-cart-shopping"
              element={
                <Cart
                  cart={cart}
                  setcart={setcart}
                  handleChange={handleChange}
                />
              }
            ></Route>
          )}
          <Route path="Buds" element={<Hbuds />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>
        <Hfooter />
      </Router>
    </div>
  );
}

export default Headset;
