import React from 'react';
import {shallow, mount, render} from 'enzyme';
import LoadAnimation from './LoadAnimation';
import { exportAllDeclaration } from '@babel/types';

const props = {
    on : true,
    loadMessage: "Hello"
};

describe('LoadAnimation rendering', ()=>{
    it('should render LoadAnimation', ()=>{
        const wrapper = shallow(<LoadAnimation {...props}/>);
        expect(wrapper.find('#loadAnimationDiv').exists()).toEqual(true);
    
    })

})