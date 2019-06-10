import React from 'react';
import {shallow, mount, render} from 'enzyme';
import JokeDevice from './JokeDevice';

it('renders JokeDevice without error', ()=>{
    const wrapper = shallow(<JokeDevice/>);
    expect(wrapper.find('#jokeDeviceDiv').length).toBe(1);
});

it('should fire "retrieveJoke" once componentDidMount fires', ()=>{
    const spy = jest.spyOn(JokeDevice.prototype, 'componentDidMount');
    const wrapper = mount(<JokeDevice {...props}/>);
    wrapper.instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
})