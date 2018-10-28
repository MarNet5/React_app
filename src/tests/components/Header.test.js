//react-test-renderer
import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

// test('should render Header correctly', () => {
//     const wrapper = shallow(<Header />);
//     expect(toJSON(wrapper)).toMatchSnapshot();
// });    
    
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    test('should render Header correctly', () => {
        const wrapper = shallow(<Header startLogout={() => {}} />);
        expect(wrapper).toMatchSnapshot();
      });
      
    test('should call startLogout on button click', () => {
        const startLogout = jest.fn();
        const wrapper = shallow(<Header startLogout={startLogout} />);
        wrapper.find('button').simulate('Click');
        expect(startLogout).toHaveBeenCalled();
    });