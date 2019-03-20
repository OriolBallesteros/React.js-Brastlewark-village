import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

it('should render App component correctly', ()=>{
    const wrapper = shallow(<Header/>);

    expect(wrapper).toMatchSnapshot();
});