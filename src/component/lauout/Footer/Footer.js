import React from "react";
import "./footer.css";
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Download Our App For Mobile Ans Ios</p>
        <img src={appStore} alt="img not found" />
        <img src={playStore} alt="img not found" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>HIgh quality is our priority.</p>
        <p>copyright 2021 &copy;</p>
      </div>

      <div className="rightFooter">
        <h4>Follow us</h4>
        {/* <a href="/">Instagram</a>
        <a href="/">Instagram</a>
        <a href="/">Instagram</a> */}
      </div>
    </footer>
  );
};

export default Footer;
