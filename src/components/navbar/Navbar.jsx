import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div>
        <h2>El-Captain</h2>
        <div>
          Categories
          <FaArrowDown style={{ fontSize: "13px", paddingLeft: "2px" }} />
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
      <div></div>
    </div>
  );
};

export default Navbar;
