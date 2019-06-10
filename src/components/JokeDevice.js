import React from 'react';
import JokeText from './JokeText';
import LoadAnimation from './LoadAnimation';
import styled from 'styled-components';


const JokeDeviceDiv = styled.div`
    position: relative;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const JokeDeviceButton= styled.button`
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
            loading: true,
            animateText: true,
            loadMessage: ''
        }
    }

    componentDidMount(){
        this.retrieveJoke();
    }

    pickLoadMessage(){
        const loadMessages = [
            'PacMan was popular when I was a boy, when does the next one come out?',
            'Have you tried talking to a manager? You shouldn\'t only apply online.',
            'Trickle down economics works!',
            'I know you like opera, but sing popular things, like Perry Como and Sinatra.',
            'Bernie Sanders is a communist!'
        ];

        console.log(loadMessages.length);
        console.log(Math.floor(Math.random(1)*5));
        this.setState({
            loadMessage: loadMessages[Math.floor(Math.random(1)*5)]
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
    }


    retrieveJoke(){
        this.pickLoadMessage();

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
                if(data.joke !== '' || undefined) {
                this.waitToDisplayJoke(data.joke, this.state.milliseconds);
                }

            });
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    waitToDisplayJoke(joke, time){
    //While not needed for the first fetch, subsequent presses of the button
    //causing later fetches will require that the state's loading value gets reset to true
        this.setState({
            loading: true
        });
        setTimeout(()=>{
            this.setState({
                joke,
                loading: false,
            });
        }, time)     
    }

    render(){

    //When you click the styled component 'JokeDeviceButton', then a callback function is fired which,
    //in turn, fires this component's function "retrieveJoke". That function sets off the chain reaction
    //which gets the joke from the API and more.

    //LoadAnimation gets sent the state's loading and milliseconds properties as props.
    //But we want it in seconds.
        return(
            <JokeDeviceDiv id="jokeDeviceDiv">
                <LoadAnimation on={this.state.loading}  loadMessage={this.state.loadMessage}/>

                
                <JokeText text={this.state.joke}/>

                <JokeDeviceButton id="jokeDeviceButton" onClick={()=>this.retrieveJoke()}>
                    Press Me!
                </JokeDeviceButton>

            </JokeDeviceDiv>
        );
    }
}




export default(JokeDevice);