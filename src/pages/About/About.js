import React from "react";
import { Link } from "react-router-dom";
import "../About/About.css";

export default function About() {
  return (
    <div className="about">
      <h2>Welcome to Pokémon Explorer!</h2>
      <div className="about-container">
        <p>
          <br /> Here you can type in any Pokémon you want to find out the information about them.
        </p>
      </div>
      <Link className="link" to="/"></Link>
      <Link className="link" to="/battle"></Link>
    </div>
  );
}
