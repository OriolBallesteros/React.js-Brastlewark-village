import React from 'react';
import {shallow} from 'enzyme';
import ErrorMessage from '../../components/ErrorMessage';

it('should render ErrorMessage component correctly', ()=>{
    const error = {
        data: 'Something went wrong',
        config: {
            url: 'www.foo.com'
        }
    };
    const wrapper = shallow(<ErrorMessage error={error}/>);

    expect(wrapper).toMatchSnapshot();
});