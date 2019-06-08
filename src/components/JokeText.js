import React from 'react';
import styled, {keyframes} from 'styled-components';
const bounce = keyframes`

from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

let StyledP = styled.p`

 
    -webkit-animation: ${bounce} 7s;
    animation: ${bounce} 7s;
  
    

    font-family: 'Josefin', serif;
    font-size: 2.5rem;
`;

export class JokeText extends React.Component{
    constructor(props){
        super(props);
        this.state={
            joke: ''
        };
      
    }

    render(){
        console.log(this.props.text);
        
        return(
            <div id="jokeTextDiv">
                <StyledP data-animate={this.props.animateText}>{this.props.text}</StyledP>
            </div>
        );
    }
}

export default JokeText;