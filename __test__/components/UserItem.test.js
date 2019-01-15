import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'; // Smart components

// Component to be tested
import UserItem from '../../src/components/UserItem/UserItem';


describe('<UserItem />', () => {

    describe('render()', () => {
        test('render the component', () => {
            const wrapper = shallow(<UserItem />);
            const component = wrapper.dive();
      
            expect(toJson(component)).toMatchSnapshot();
        });
    });
});