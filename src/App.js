import React, { Component } from 'react';
// import Pokecard from './Pokecard.js';
import Pokegame from './Pokegame.js';
// import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <Pokecard/> */}
        <Pokegame/>
      </div>
    );
  }
}

export default App;