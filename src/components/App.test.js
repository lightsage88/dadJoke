import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the styled SiteIcon element', ()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('#siteIcon').length).toBe(1);
  expect(wrapper.prop('src')).to.equal('sam');
});


 