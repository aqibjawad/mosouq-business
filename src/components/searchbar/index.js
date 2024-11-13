import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FiSearch size={20} className="search-icon" />
      <input
        type="text"
        placeholder="compnay title, keyword..."
        className="search-input"
      />
      <button className="search-button">Request Demo</button>
    </div>
  );
};

export default SearchBar;