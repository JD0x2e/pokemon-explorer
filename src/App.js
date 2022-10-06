import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [pokemons, setPokemon] = useState({});
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getPokemon = async (e) => {
    e.preventDefault();
    // const API = `http://localhost:8080/pokemon/${form.name.toLowerCase()}`;
    const API = `https://pokeapi.co/api/v2/pokemon/${form.name.toLowerCase()}`;
    const res = await axios.get(API);
    setPokemon(res.data);
  };

  return (
    <div className="App">
      <Header handleChange={handleChange} getPokemon={getPokemon} />
      <Main pokemons={pokemons} />
      <Footer />
    </div>
  );
}
