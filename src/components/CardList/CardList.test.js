import React from 'react';
import { shallow } from 'enzyme';
import CardList from './index';

it('expect to render CardList component', () => {
  const mockRobos = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobos} />)).toMatchSnapshot();
});
