import React from "react";
import "./Logo.css";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="logo-area">
      <img src={logo} alt="" id="logo--pic" />
      <a href="index.html" id="logo">
        MovieLand
      </a>
    </div>
  );
}

export default Logo;
