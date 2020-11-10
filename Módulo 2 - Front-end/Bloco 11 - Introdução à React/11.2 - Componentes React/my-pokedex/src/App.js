import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './PokemonGrid';

class App extends Component {
  render() {

    return <div>
      <h1>Pokedéx</h1>
      {pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>)}
    </div>
  }
}

export default App;
