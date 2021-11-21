import React from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";

const Header = () => {
  return (
    <section className="header">
      <Link to="/" className="header-title">
        React Quiz
      </Link>
      <hr className="divider" />
    </section>
  );
};

export default Header;
