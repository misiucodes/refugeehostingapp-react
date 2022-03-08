import React from "react";
import logo from "./logo.svg";
import "./Navigation.css";
import {Link} from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <header>
        <a href="/" rel="noreferrer">
          <img src={logo} alt="House of Refuge logo" width="130" className="img-fluid logo"/>
        </a>
        <nav>
          <ul className="navbar ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/getinvolved" className="nav-link">Get Involved</Link>
            </li>
            <li className="nav-item">
              <Link to="/findahost" className="nav-link">Find a Host</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}