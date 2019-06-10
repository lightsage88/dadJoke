import React from 'react';
import {shallow, mount, render} from 'enzyme';
import JokeDevice from './JokeDevice';

it('renders JokeDevice without error', ()=>{
    const wrapper = shallow(<JokeDevice/>);
    expect(wrapper.find('#jokeDeviceDiv').exists()).toEqual(true);
    expect(wrapper.find('#jokeDeviceDiv').length).toBe(1);
    
});

it('should fire "retrieveJoke" once componentDidMount fires', ()=>{
    const spy = jest.spyOn(JokeDevice.prototype, 'retrieveJoke');
    const wrapper = mount(<JokeDevice/>);
    wrapper.instance().JokeDevice();
    expect(spy).toHaveBeenCalled();
})