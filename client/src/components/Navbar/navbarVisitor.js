import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const NavbarVisitor = () => {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="sect-1">
          <Link to={{ pathname: "/" }}>
            <h3>Safe</h3>
            <p>Space</p>
          </Link>
        </div>
        <div className="sect-2">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/doctors" }}>Doctors</Link>
          <Link to={{ pathname: "/blog" }}>Blog</Link>
          <Link to="/login">Login / Register</Link>
        </div>
      </div>
    </div>
  );
};
