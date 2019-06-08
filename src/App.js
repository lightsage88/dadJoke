import React, { Component } from 'react';
import pic from './assets/falloutIcon.png';
import styled, {keyframes} from 'styled-components';
import './App.css';
import JokeDevice from './components/JokeDevice.js';

class App extends Component {

  
 

  render() {
    const lightSpeedIn = keyframes`
      from {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
      }
    
      60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1;
      }
    
      80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
      }
    
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    `;

    const jackInTheBox = keyframes`
      from {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(30deg);
        transform: scale(0.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
      }
    
      50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
    
      70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
      }
    
      to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    `;

    const StyledDadHead = styled.img`
      -webkit-animation: ${lightSpeedIn} 1s;
      animation: ${lightSpeedIn} 1s;
    `;

    const StyledH2 = styled.h2`
      color: red;
      -webkit-animation: ${jackInTheBox} 1s;
      animation: ${jackInTheBox} 1s;
    `;
    return (
      <div className="App">
        <div className="App-header">
          <StyledDadHead src={pic} className="App-logo" alt="logo"/>
          <StyledH2>Silly Dad Jokes</StyledH2>
        </div>
        <JokeDevice/>
      </div>
    );
  }
}

export default App;
