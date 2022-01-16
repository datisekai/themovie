import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {

  const setBg = () => {
    console.log(window.scrollY);
    return 'white'
  }
  return (
    <header className="transparent-header header">
      <div className="search">
        <Link to="/">
          <div className="logo">
            <img src="https://i.imgur.com/lT3pV2Z.png"></img>
          </div>
        </Link>
        <Link to="/search">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
