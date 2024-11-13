import React, { useState } from "react";
import "./header.desktop.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Container } from "react-bootstrap";

const LoggedOutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header shadow-sm">
      <Container fluid className="header-container px-3 px-md-5">
        <Link to={'/'} className="">
          {/* <div className="business-logo">
            Mosouq Business
          </div> */}
          <img src="/mq-logo-busi.png" alt="" />
        </Link>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="back-link text-black">
            <FaArrowLeft />{" "}
            <Link to="https://mosouq.ae/"> Return As User </Link>
          </div>
          <div className="dropdown">
            <Link to="#" onClick={toggleMenu}>
              Solutions
            </Link>
            <div className="dropdown-content">
              <Link to="/solution/new-customers"> New Customers </Link>
            </div>
          </div>

          {/* <div className="dropdown">
            <Link to="/pricing" onClick={toggleMenu}>
              Business Home
            </Link>
          </div> */}
          <div className="dropdown">
            <Link to="#" onClick={toggleMenu}>
              Features
            </Link>
            <div className="dropdown-content">
              <Link to="/features/service-review"> Service Review </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/pricing" onClick={toggleMenu}>
              Pricing
            </Link>
          </div>
          <div className="dropdown">
            <Link to="/business-signin" onClick={toggleMenu}>
              Login
            </Link>
          </div>
          <div className="dropdown">
            <Link to="#" onClick={toggleMenu}>
              Resources
            </Link>
            <div className="dropdown-content">
              <Link to="/resources/blogs"> Blogs </Link>
            </div>
          </div>
          <button className="business-button-header-demo" onClick={toggleMenu}>
            <Link to="/demo" style={{ textDecoration: "none", color: "white" }}>
              Request Demo
            </Link>
          </button>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </Container>
    </header>
  );
};

export default LoggedOutHeader;
