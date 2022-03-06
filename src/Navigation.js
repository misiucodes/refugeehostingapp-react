import React from "react";
import logo from "./logo.svg";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <img src={logo} alt="House of Refuge logo" width="130" className="img-fluid logo"/>
      <nav>
        <ul className="nav-links">
          <li><a href="/" rel="noreferrer">About Us</a></li>
          <li><a href="/" rel="noreferrer">Get Involved</a></li>
          <li><a href="/" rel="noreferrer"><button className="btn-contact">Contact Us</button></a></li>
        </ul>
      </nav>
    </header>
  );
}