import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-con container">
        <h1>Chi-Homes</h1>
        <div className={openNav ? "nav-btn" : "nav-btn hide-nav"}>
          <AiOutlineClose className="close" onClick={() => setOpenNav(false)} />
          <button className="btn">Log in </button>
          <button className="btn">Get started</button>
          <a href="#contact" className="contact btn">
            Contact us
          </a>
        </div>
        <AiOutlineMenu
          className="menu"
          onClick={() => setOpenNav((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
