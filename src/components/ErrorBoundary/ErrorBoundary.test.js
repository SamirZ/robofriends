import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './index';

it('expect to render ErrorBoundary component', () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
