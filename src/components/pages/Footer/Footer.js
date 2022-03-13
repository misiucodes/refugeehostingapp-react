import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer>
      <a href="/" rel="noreferrer">
        <img src="/images/logo.svg" className="logo-footer" alt="House of Refuge logo"/>
      </a>
      <div className="copyright">Copyright &copy; 2022<script>document.write(new Date().getFullYear())</script> House of Refuge. All Rights Reserved.</div>
    </footer>
  );
}