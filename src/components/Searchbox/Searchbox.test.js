import React from 'react';
import { shallow } from 'enzyme';
import Searchbox from './index';

it('expect to render Searchbox component', () => {
  expect(shallow(<Searchbox />)).toMatchSnapshot();
});
