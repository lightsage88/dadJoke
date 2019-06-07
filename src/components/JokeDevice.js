import React from 'react';
import JokeText from './JokeText';
import Loader from './LoadAnimation';
import styled from 'styled-components';

const Button = styled.button`
        background-color: red
    
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
        let seconds = Math.floor(Math.random() * 6) + 2;
        this.setState({
            seconds
        });
    }

    setupLoadAndTime(){
        this.calculateLoadTime();
        this.setLoadingToTrue();
    }



    retrieveJoke(e){
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
                this.setState({
                    joke: data.joke
                });
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div id="jokeDeviceDiv">
                <h3>Dad Gummit</h3>
                <span>PRESS THE BUTTON</span>
                <Button id="jokeDeviceButton" onClick={(e)=>this.retrieveJoke(e)}></Button>


                <JokeText text={this.state.joke}/>
                <Loader on={this.state.loading} time={this.state.seconds}/>
            </div>
        )
    }
}




export default(JokeDevice);