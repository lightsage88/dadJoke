import React from 'react';
import {PacmanLoader} from 'react-spinners';
import styled from 'styled-components';

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
