import React from "react";
import "./Home.css";
import HomepageBanner from "./HomepageBanner";
import Navigation from "./Navigation";
import family from "./family.svg";

export default function Home() {
  return (
    <div className="homepage">
      <Navigation />
      <div className="container-main">
        <section className="main grid">
          <div className="container-top-left">
            <h1>Give people a place of refuge in times of crisis.</h1>
            <a href="/getinvolved" rel="noreferrer">
              <button className="btn-host">Become a host</button>
            </a>
            <a href="/findahost" rel="noreferrer">
              <button className="btn-findhost">Find a host</button>
            </a>
          </div>
          <div className="container-top-right">
            <img src={family} className="img-fluid family" alt="Mother, Father and child walking with a globe in the background." width="500" />
          </div>
        </section>
      </div>
      <HomepageBanner />
    </div>
  );
} 