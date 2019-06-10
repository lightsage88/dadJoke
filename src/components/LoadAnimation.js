import React from 'react';
import {PacmanLoader} from 'react-spinners';
import styled, {keyframes} from 'styled-components';

//Here we have the hinge animation, which makes things dangle and drop


const hinge = keyframes`
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;

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

    100% {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
    }
`;

//TODO: ??
const StyledPacmanLoader = styled(PacmanLoader)`
  
`;

const StyledLoadMessage = styled.h3`

`

const StyledLoadAnimationDiv = styled.div`
    margin: auto;
    

    -webkit-animation: ${props => props.on ? 'inherit' : hinge };
    -webkit-animation-duration: 3s;
    transition: right  ease-in 2s;


    opacity: ${props => props.on ? 1 : 0};

    position: relative;
    text-align: center;
    text-align: -webkit-center;
    
`;

function LoadAnimation(props){
    return(
        <StyledLoadAnimationDiv id="loadAnimationDiv" on={props.on}>
            <StyledLoadMessage id="styledLoadMessage">{props.loadMessage}</StyledLoadMessage>
            <StyledPacmanLoader id="styledPacmanLoader"/>
        </StyledLoadAnimationDiv>
    );
}

export default LoadAnimation;
