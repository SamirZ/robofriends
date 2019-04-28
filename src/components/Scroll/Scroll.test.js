import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './index';

it('expect to render Scroll component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
