import React from "react";
import "../Header/Header.css";
import logo from "../../images/pokemon.png";
import { Link } from "react-router-dom";

export default function Header({ handleChange, getPokemon }) {
  return (
    <header className="header">
      <Link className="link" to="/battle">
        Battle Arena
      </Link>
      <Link>
        <img className="header-logo" src={logo} alt="" to="/" />
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
    </header>
  );
}
