import React from 'react';
import {PacmanLoader} from 'react-spinners';
import styled, {keyframes} from 'styled-components';

const hinge = keyframes`
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }

    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }

    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
    }

    to {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
    }
`;


const StyledPacmanLoader = styled(PacmanLoader)`
  
`;

const StyledLoadAnimationDiv = styled.div`
    border: solid;
    display: inline;
    margin: auto;
    opacity: ${props => { 
        const visible = props.on;
            if(visible === true) {
                return 1;
            } else {
                return 0;
            }
        }
    };

    -webkit-animation: ${props => props.on ? 0 : hinge };
    -webkit-animation-duration: 3s;

    
    position: fixed;
    text-align: center;
    text-align: -webkit-center;
    transition: 0.5s;

`;

function LoadAnimation(props){
    return(
        <StyledLoadAnimationDiv id="loadAnimationDiv" on={props.on}>
            <StyledPacmanLoader/>
        </StyledLoadAnimationDiv>
    );
}

export default LoadAnimation;
