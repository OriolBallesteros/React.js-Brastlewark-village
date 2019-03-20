import React from 'react';
import {shallow} from 'enzyme';
import PeopleListItem from '../../components/PeopleListItem';
import {dummyData} from '../dummyData';

it('should render App component correctly', ()=>{
    const wrapper = shallow(<PeopleListItem habitant={dummyData[0]}/>);

    expect(wrapper).toMatchSnapshot();
});
