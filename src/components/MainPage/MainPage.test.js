import React from 'react';
import { shallow } from 'enzyme';
import MainPage, { App } from './index';

let wrapper;
beforeEach(() => {
  const mockProps = {
    getRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when we type a valid search field', () => {
  const mockProps2 = {
    getRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
});
