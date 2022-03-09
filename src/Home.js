import React from "react";
import "./Home.css";
import HomepageBanner from "./HomepageBanner";
import Navbar from "./Navbar";
import family from "./family.svg";
import { Button } from "./Button";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="container-main">
        <section className="main grid">
          <div className="container-top-left">
            <h1>Give people a place of refuge in times of crisis.</h1>
            <a href="/getinvolved" rel="noreferrer">
              <Button className="btn--primary">Become a host</Button>
            </a>
            <a href="/findahost" rel="noreferrer">
              <Button className="btn--primary">Find a host</Button>
            </a>
          </div>
          <div className="container-top-right">
            <img src={family} className="hero-img" alt="Mother, Father and child walking with a globe in the background." width="500" />
          </div>
        </section>
      </div>
      <HomepageBanner />
    </div>
  );
} 