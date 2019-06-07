import React from 'react';

export function JokeText(props){

    return(
        <div id="jokeTextDiv">
            <strong>{props.text}</strong>
        </div>
    )
}

export default JokeText;