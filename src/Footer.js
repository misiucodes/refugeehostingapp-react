import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="/" rel="noreferrer">
        <img src={logo} className="logo-footer" alt="House of Refuge logo"/>
      </a>
      <div className="copyright">© 2022 House of Refuge. All rights reserved.</div>
    </footer>
  );
}