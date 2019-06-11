import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {PacmanLoader} from 'react-spinners';
import LoadAnimation from './LoadAnimation';



describe('LoadAnimation rendering', ()=>{
   
    it('should render LoadAnimation', ()=>{
        const wrapper = shallow(<LoadAnimation on="true" loadMessage="Hello"/>);
        expect(wrapper.find('#loadAnimationDiv').exists()).toEqual(true);
    });

    it('should render StyledLoadMessage', ()=>{
        const wrapper = render(<LoadAnimation/>);
        expect(wrapper.html()).toContain('styledLoadMessage');
    });

    it('should render the PacmanLoader', ()=>{
        const wrapper = mount(<LoadAnimation />);
        expect(wrapper.find(".css-1anlcob-pacmanStyle").exists()).toEqual(true);
    });

})