import React from 'react';
import { shallow } from 'enzyme';
import { __PeopleInfoItemView as PeopleInfoItemView } from '../../components/PeopleInfoItem';
import { dummyData } from '../dummyData';

it('should render PeopleInfoItem component correctly', ()=>{
    const wrapper = shallow(<PeopleInfoItemView habitant={dummyData[0]} />);

    expect(wrapper).toMatchSnapshot();
});