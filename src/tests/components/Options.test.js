import React from 'react';
import { shallow } from 'enzyme';
import Options from '../../components/Options';

it('should render App component correctly', () => {
    const wrapper = shallow(<Options 
        onHandleChange={jest.fn()} 
        list={[1, 2, 3]} />);

    expect(wrapper).toMatchSnapshot();
});