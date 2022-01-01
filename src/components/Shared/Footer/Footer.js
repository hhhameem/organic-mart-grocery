import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="inner-footer">
        <div class="footer-items">
          <h2 className="text-start">Organic Mart & Grocery</h2>
          <p>
            Organic Mart & Grocery - worldwide Grocery store since 2022. We sell
            over 2000+ Category products on our web-site.
          </p>
        </div>

        {/* <!--  for quick links  --> */}
        <div class="footer-items">
          <h3 className="text-start">Quick Links</h3>
          <div class="border1"></div>
          {/* <!--for the underline --> */}
          <ul>
            <a href="/">
              <li className="text-start">Home</li>
            </a>
            <a href="/">
              <li className="text-start">Search</li>
            </a>
            <a href="/">
              <li className="text-start">Contact</li>
            </a>
            <a href="/">
              <li className="text-start">About</li>
            </a>
          </ul>
        </div>

        {/* <!--  for some other links --> */}
        <div class="footer-items">
          <h3 className="text-start">Company</h3>
          <div class="border1"></div>
          {/* <!--for the underline --> */}
          <ul>
            <a href="/">
              <li className="text-start">Privacy Policy</li>
            </a>
            <a href="/">
              <li className="text-start">Returns</li>
            </a>
            <a href="/">
              <li className="text-start">Terms & Conditions</li>
            </a>
            <a href="/">
              <li className="text-start">Italian</li>
            </a>
          </ul>
        </div>

        {/* <!--  for contact us info --> */}
        <div class="footer-items">
          <h3 className="text-start">Contact us</h3>
          <div class="border1"></div>
          <ul>
            <li className="text-start">
              <i class="fa fa-map-marker" aria-hidden="true"></i>Bangladesh
            </li>
            <li className="text-start">
              <i class="fa fa-phone" aria-hidden="true"></i>0123456789
            </li>
            <li className="text-start">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              organicnart@gmail.com
            </li>
          </ul>

          {/* <!--   for social links --> */}
          <div class="social-media text-start">
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
