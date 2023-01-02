import React from "react";
import "./Hfooter.scss";
function Hfooter() {
  return (
    <div>
      <section className="footer ">
        <a href="" className="logo">
          <img src="abc3.png" alt="" />
        </a>
        <div className="footer-box">
          <h2>Products</h2>
          <a href="">Return Policy</a>
          <a href="">Refund Policy</a>
          <a href="">Support</a>
          <a href="">Terms Of Use</a>
        </div>
        <div className="footer-box">
          <h2>Payments</h2>
          <a href="">Return Policy</a>
          <a href="">Refund Policy</a>
          <a href="">Support</a>
          <a href="">Terms Of Use</a>
        </div>
        <div className="footer-box">
          <h2>Social</h2>
          <div className="social">
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>&#169; Copyright All Right Reserved</p>
      </div>
    </div>
  );
}

export default Hfooter;
