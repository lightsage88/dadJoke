import React from 'react';
import JokeText from './JokeText';
import LoadAnimation from './LoadAnimation';
import styled from 'styled-components';

const Button = styled.button`
    background-color: red;
`;

const StyledH3 = styled.h3`
    font-weight: 800;
    font-family: fantasy;
    font-style: italic;
`;


export class JokeDevice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }

    setLoadingToTrue(){
        this.setState({
            loading: true
        });
    }

    calculateLoadTime(){
        let milliseconds = (Math.floor(Math.random() * 1) + 2) * 1000;
        this.setState({
            milliseconds
        });
    }

    setupLoadAndTime(){
        this.calculateLoadTime();
        this.setLoadingToTrue();
    }



    retrieveJoke(e){
        e.preventDefault();
        this.setState({
            joke: ''
        });
        fetch("https://icanhazdadjoke.com", 
            {
                method: "GET",
                headers: {
                    "accept": "application/json"
                }
            }
        ).then((response)=>{
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
            response.json()
            .then((data)=>{
                this.setupLoadAndTime();

                this.waitToDisplayJoke(data.joke, this.state.milliseconds);

                
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    waitToDisplayJoke(joke, time){
        setTimeout(()=>{
            this.setState({
                joke,
                loading: false
            });
        }, time)     
    }

    render(){
        return(
            <div id="jokeDeviceDiv">
                <StyledH3>Dad Gummit</StyledH3>
                <span>PRESS THE BUTTON</span>
                <Button id="jokeDeviceButton" onClick={(e)=>this.retrieveJoke(e)}></Button>


                <JokeText text={this.state.joke} />
                <LoadAnimation on={this.state.loading} time={this.state.milliseconds}/>
            </div>
        )
    }
}




export default(JokeDevice);