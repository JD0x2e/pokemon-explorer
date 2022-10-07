import React from "react";
import { Link } from "react-router-dom";
import "../BattleArena/BattleArena.css";

export default function BattleArena() {
  return (
    <div className="battle-arena">
      <p>Battle Arena</p>
      <Link to="/">Home</Link>
    </div>
  );
}
