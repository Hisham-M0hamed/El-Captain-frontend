import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa";

// import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h2>El-Captain</h2>
          <div>
            <div>
              Categories
              <FaArrowDown style={{ fontSize: "13px", paddingLeft: "2px" }} />
            </div>
            <ul className="our-categories">
              <li>Building materials</li>
              <li>Chemical industries</li>
              <li>Pharmaceutical industries</li>
              <li>Engineering industries</li>
            </ul>
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About US</li>
              <li>Partners</li>
              <li>Contact US</li>
            </ul>
          </nav>
        </div>
        <div className="login">
          <div className="icons">
            <FaCartShopping />
            <FaCaravan />
          </div>
          <button>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
