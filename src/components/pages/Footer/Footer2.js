import React from "react";
import "./Footer2.css";
import {Link} from "react-router-dom";

function Footer2() {
 
  return (
  
    <div className="footer">
      <div className="footer-container">
        <div className="copyright">Copyright &copy; 2022<script>document.write(new Date().getFullYear())</script> House of Refuge. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer2;