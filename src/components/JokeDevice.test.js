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
    const wrapper = shallow(<JokeDevice/>);
    wrapper.instance().retrieveJoke();
    expect(spy).toHaveBeenCalled();
    
});

it('should fire "pickLoadMessage" as a result of the above test', ()=>{
    const spy = jest.spyOn(JokeDevice.prototype, 'pickLoadMessage');

    const wrapper = mount(<JokeDevice/>);
    wrapper.instance().pickLoadMessage();
    expect(spy).toHaveBeenCalled();
});

it('should fire "setupLoadAndTime" as a result of retrieveJoke firing', ()=>{
    const spy = jest.spyOn(JokeDevice.prototype, 'setupLoadAndTime');
    const wrapper = mount(<JokeDevice/>);
    wrapper.instance().setupLoadAndTime();
    expect(spy).toHaveBeenCalled();
});

it('should fire "waitToDisplayJoke" as a result of retrieveJoke firing', ()=>{
    const spy = jest.spyOn(JokeDevice.prototype, 'waitToDisplayJoke');
    const wrapper = mount(<JokeDevice/>);
    wrapper.instance().waitToDisplayJoke();
    expect(spy).toHaveBeenCalled();
});