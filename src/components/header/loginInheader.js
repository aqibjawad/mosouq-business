import React, { useState } from "react";
import "./header.desktop.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoggedInHeader = ({ toggleMenu, menuOpen, user }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("user");
      navigate('/'); 
    };

  return (
    <header className="header shadow-sm">
      <div className="header-container px-3 px-md-5">
        <div className="logo">
          {/* <div className="mosouq-logo-tag">
            Mosouq Business
          </div> */}
          <img src="/mq-logo-busi.png" alt="" />

        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/business-Home" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/business-Home" onClick={toggleMenu}>
            Reviews
          </Link>
          {/* <Link to="/settings" onClick={toggleMenu}>
            Blogs
          </Link>

          <Link to="/user-profile" onClick={toggleMenu}>
            Profile
          </Link> */}
          <div className="logout-button" onClick={handleLogout} style={{cursor:"pointer"}}>
            Log out
          </div>
        </nav>
        {/* <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div> */}
      </div>
    </header>
  );
};

export default LoggedInHeader;
