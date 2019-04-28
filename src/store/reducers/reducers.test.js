import { getRobots, setSearchField } from '../actions';

import * as reducers from './index';
import { GET_ROBOTS, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILURE } from '../types';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, setSearchField('abc'))
    ).toEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initialStateSearch = {
    error: '',
    robots: [],
    isPending: false
  };

  it('should return the initial state', () => {
    expect(reducers.getRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should change isPending to true when robots are requested', () => {
    expect(
      reducers.getRobots(initialStateSearch, { type: GET_ROBOTS })
    ).toEqual({ ...initialStateSearch, isPending: true });
  });

  it('should return robots array', () => {
    const robots = [
      {
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }
    ];
    expect(
      reducers.getRobots(initialStateSearch, {
        type: GET_ROBOTS_SUCCESS,
        payload: robots
      })
    ).toEqual({ ...initialStateSearch, robots });
  });

  it('should return an error', () => {
    const error = 'An error occured';
    expect(
      reducers.getRobots(initialStateSearch, {
        type: GET_ROBOTS_FAILURE,
        payload: error
      })
    ).toEqual({ ...initialStateSearch, error });
  });
});
