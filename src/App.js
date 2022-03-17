import React, { Component } from 'react';
import Pokecard from './Pokegame/Pokegame.js';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Pokecard/>
      </div>
    );
  }
}

export default App;