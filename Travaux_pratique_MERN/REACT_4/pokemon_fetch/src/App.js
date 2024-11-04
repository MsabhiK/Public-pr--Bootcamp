//import './App.css';
import React, { useState } from'react';
//import axios from 'axios';


function App() {
  const [listPokemon, setListPokemon] = useState([]);

  const fetch_pokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        const namesPokemons = response.data.results.map(pokemon => pokemon.name);
        setListPokemon(namesPokemons);
      })
      .catch((err) => {
        console.log("Error for fetching Names of Pokemons", err)
      })
  }
  return (
    <>
    <div className="container">
      <h1 className='text-center text text-success'>List of 8️⃣0️⃣7️⃣ POKEMONS</h1>
      <button className='text-center btn btn-primary mt-3' onClick={ fetch_pokemon }>Fetch Pokemons</button>

      <ul className="list-group list-group-numbered mt-2">
      {
          listPokemon.map((pok, index) => (
          <li key={index} className="list-group-item">{pok}</li>
          ))
      }
      </ul>
    </div>

    </>
  )
};

export default App;
