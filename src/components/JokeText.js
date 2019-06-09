import React from 'react';
import styled, {keyframes} from 'styled-components';


//Here is a bouncing animation for the text when it comes in
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

const JokeTextDiv = styled.div`
  min-height: 15rem;
`;

//The StyledP is made with its CSS rules,
//We interpolate the previously made variable
//Referencing the bounce animation

const StyledP = styled.p`
    -webkit-animation: ${bounce} 3s;
    animation: ${bounce} 3s;
    font-family: 'Josefin', serif;
    font-size: 2.5rem;
`;


export class JokeText extends React.Component{
    constructor(props){
        super(props);
//In the state I make animateText be false so that
//when the incoming prop with the text of the joke comes in later
//it will be set to false so that when 
        this.state={
            animateText: false,
            text: null
        };
      
    }

    componentWillReceiveProps(incomingProps){
       
        if(incomingProps.text !== ''){

            this.setState({
                text: incomingProps.text,
                animateText: true

            })
        } else {
            this.setState({
                animateText: false
            });
        }

    }

    render(){

      const jokeText = this.state.animateText === true ? <StyledP>{this.state.text}</StyledP> : '';
  
        return(
            <JokeTextDiv>
              
                    {jokeText}
               
            </JokeTextDiv>
        );
    }
}

export default JokeText;