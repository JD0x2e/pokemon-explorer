import React from "react";
import { Link } from "react-router-dom";
import "../BattleArena/BattleArena.css";

export default function BattleArena() {
  return (
    <div className="battle-arena">
      <p>This is where you can pick two different Pokémon and battle with them.</p>
      <Link to="/"></Link>
      <Link to="/about"></Link>
    </div>
  );
}
