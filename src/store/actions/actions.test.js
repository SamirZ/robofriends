import * as actions from './index';
import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAILURE
} from '../types';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'abc';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('getRobots', () => {
  it('should start robots API request', () => {
    const store = mockStore();
    store.dispatch(actions.getRobots());
    const expectedAction = {
      type: GET_ROBOTS
    };
    const storeActions = store.getActions();
    expect(storeActions[0]).toEqual(expectedAction);
  });

  it('should handle robots API success', () => {
    const store = mockStore();
    const robots = [
      {
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }
    ];
    store.dispatch(actions.getRobotsSuccess(robots));
    const expectedAction = {
      type: GET_ROBOTS_SUCCESS,
      payload: robots
    };
    expect(store.getActions()[0]).toEqual(expectedAction);
  });

  it('should handle robots API failure', () => {
    const store = mockStore();
    const error = 'An error occured';
    store.dispatch(actions.getRobotsFailure(error));
    const expectedAction = {
      type: GET_ROBOTS_FAILURE,
      payload: error
    };
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});
