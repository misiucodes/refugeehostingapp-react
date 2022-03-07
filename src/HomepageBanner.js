import React from "react";
import "./HomepageBanner.css";

export default function HomepageBanner() {
  return (
    <div className="container-middle flex">
      <h2>Help for people fleeing Ukraine</h2>
      <p>Right now, refugees fleeing from the war in Ukraine are in need of urgent temporary housing. Your space can provide comfort to a family or refugee making a live-saving journey and be a powerful way of welcoming those fleeing to help them integrate within the community faster.</p>
      <h3><strong>If you can spare it, share it.</strong></h3>
      <button className="btn-learnmore">Learn more</button>
    </div>
  );
}