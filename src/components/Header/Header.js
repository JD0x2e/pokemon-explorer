import React from "react";
import "../Header/Header.css";
import logo from "../images/pokemonlogo.png";

export default function Header({ handleChange, getPokemon }) {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="" />
      <form className="form" onSubmit={getPokemon}>
        <input className="form-input" name="name" placeholder="Name of Pokemon" onChange={handleChange} />
        <button className="form-button" type="submit">
          ◉
        </button>
      </form>
    </header>
  );
}
