import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('.App').length).toBe(1);
});

it('renders the styled SiteIcon element', ()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('#siteIcon').length).toBe(1);
  expect(wrapper.find('#siteIcon').length).not.toBe(10);
});

it('renders the styled SiteTitle element', ()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find('#siteTitle').length).toBe(1);
  expect(wrapper.find('#siteTitle').length).not.toBe(10);
});

it('renders the styled JokeDeviceWrapper element',()=> {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('#jokeDeviceWrapper').length).toBe(1);
  expect(wrapper.find('#jokeDevice').length).toBe(1);  
});



