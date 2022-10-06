import React from "react";
import "../Main/Main.css";

export default function Main({ pokemons }) {
  return (
    <main className="main">
      <div className="main-logo-title">
        <h2 className="pokemon-name">{pokemons.name}</h2>
        <img
          className="pokemon-img"
          src={pokemons.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
          alt={pokemons.name}
        />
      </div>
      {Object.keys(pokemons).length !== 0 && (
        <div className="ability-box">
          <p className="ability-title">Abilities</p>
          <div className="pokemon-abilites">
            {pokemons.abilities?.map((ability, idx) => {
              return <p key={idx}>{ability.ability.name}</p>;
            })}
          </div>
        </div>
      )}
    </main>
  );
}
