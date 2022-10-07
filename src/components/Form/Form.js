import React from "react";
import "../Form/Form.css";

export default function Form({ getPokemon, handleChange }) {
  return (
    <div className="form">
      <form onSubmit={getPokemon}>
        <input className="form-input" name="name" placeholder="Name of Pokemon" onChange={handleChange} />
        <button className="form-button" type="submit">
          ◉
        </button>
      </form>
    </div>
  );
}
