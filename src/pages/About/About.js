import React from "react";
import { Link } from "react-router-dom";
import "../About/About.css";

export default function About() {
  return (
    <div className="about">
      <h2 className="about-title">Welcome to Pokémon Explorer!</h2>
      <div className="about-container">
        <p className="info-top">
          On Pokémon Explorer, you can type in any Pokémon you would like and it will fetch all of the relevant information
          about that certain Pokémon.
        </p>
        <p className="info-bottom">Happy hunting trainers!</p>
      </div>
      <Link className="link" to="/"></Link>
      <Link className="link" to="/battle"></Link>
    </div>
  );
}
