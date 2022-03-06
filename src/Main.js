import React from "react";
import "./Main.css";
import family from "./family.svg";

export default function Main() {
  return (
    <div className="container-main">
      <section className="main grid">
        <div className="container-top-left">
          <h1>Give people a place of refuge in times of crisis.</h1>
          <button className="btn-host">Become a host</button>
          <button className="btn-findhost">Find a host</button>
        </div>
        <div className="container-top-right">
          <img src={family} className="img-fluid family" alt="Mother, Father and child walking with a globe in the background." width="500" />
        </div>
      </section>
    </div>
  );
}