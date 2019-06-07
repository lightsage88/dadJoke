import React, { Component } from 'react';
import pic from './assets/falloutIcon.png';
import './App.css';
import JokeDevice from './components/JokeDevice.js';

class App extends Component {

 

  render() {
  

    return (
      <div className="App">
        <div className="App-header">
          <img src={pic} className="App-logo" alt="logo" />
          <h2>Silly Dad Jokes</h2>
        </div>
        <JokeDevice/>
      </div>
    );
  }
}

export default App;
