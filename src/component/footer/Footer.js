import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>Datisekai</h3>
      <div className="contact">
        <a href="facebook.com/datisekai">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a>
          <i className="fab fa-telegram"></i>
        </a>
        <a>
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
