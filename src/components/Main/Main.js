import React from "react";
import "../Main/Main.css";

export default function Main({ pokemons }) {
  return (
    <main className="main">
      <div className="top-half">
        <div className="main-logo-title">
          <h2 className="pokemon-name">{pokemons.name}</h2>
          <img
            className="pokemon-img"
            src={pokemons.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
            alt={pokemons.name}
          />
        </div>
      </div>
      {Object.keys(pokemons).length !== 0 && (
        <div className="bottom-half">
          <div className="info-container">
            <div className="stats-container">
              <p className="stats-title">Stats</p>
              {pokemons.stats?.map((stat, idx) => {
                return (
                  <p className="pokemon-stats" key={idx}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                );
              })}
            </div>
            <div className="ability-container">
              <p className="ability-title">Abilities</p>
              <div className="pokemon-abilites">
                {pokemons.abilities?.map((ability, idx) => {
                  return <p key={idx}>{ability.ability.name}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
