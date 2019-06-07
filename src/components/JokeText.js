import React from 'react';

export class JokeText extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        this.setFunnyRef = element => {
            this.funny = element;
        };
    }


   breakTextToArray(text) {
        if(text !== undefined) {
            console.log(text);
            let array = text.split('');
            console.log(array);
            
        }
    }


    render(){
        this.breakTextToArray(this.props.text);

        return(
            <div id="jokeTextDiv">
                <strong id="jokeStrong" ref={this.setFunnyRef}></strong>
            </div>
        );
    }
}

export default JokeText;