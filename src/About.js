import React from "react";
import Navigation from "./Navigation";


export default function About() {
  return (
      <div className="about">
        <Navigation />
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-auto">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div className="col-auto">
              <h1 className="font-weight-light">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
