import React, { useState } from "react";
import LoggedOutHeader from "./logoutheader";
import LoggedInHeader from "./loginInheader";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessMode, setBusinessMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBusinessMode = () => {
    setBusinessMode(!businessMode);
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return user ? (
    <LoggedInHeader toggleMenu={toggleMenu} menuOpen={menuOpen} user={user} />
  ) : (
    <LoggedOutHeader toggleMenu={toggleMenu} menuOpen={menuOpen} toggleBusinessMode={toggleBusinessMode} />
  );
};

export default Header;
