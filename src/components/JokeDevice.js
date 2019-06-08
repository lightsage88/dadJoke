import React from 'react';
import JokeText from './JokeText';
import LoadAnimation from './LoadAnimation';
import styled from 'styled-components';

const StyledJokeDeviceDiv = styled.div`
    position: relative;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    background-color: red;
    background-image: linear-gradient(red, lightcoral);
    display: inline-block;
    padding: 1.5rem 2.5rem;

    text-decoration: none;
    color: #fff;
    font-size: 2.5rem;
    font-family: sans-serif;
    font-weight: 100;

    ::after {
        content: '';
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: calc(100% - 0.4rem);
        height: 50%;
        background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }

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
            loading: false,
            animateText: true
        }
    }

    componentDidMount(){
        this.retrieveJoke();
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



    retrieveJoke(){
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
                loading: false,
            });
        }, time)     
    }

    render(){
        return(
        
            <StyledJokeDeviceDiv id="jokeDeviceDiv">
                <StyledH3>Dad Gummit</StyledH3>
                <Button id="jokeDeviceButton" onClick={(e)=>this.retrieveJoke()}>
                    Press Me!
                </Button>


                <JokeText text={this.state.joke} animateText={this.state.animateText}/>
                <LoadAnimation on={this.state.loading} time={this.state.milliseconds}/>
            </StyledJokeDeviceDiv>
        )
    }
}




export default(JokeDevice);