import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAILURE
} from '../types';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const getRobots = dispatch => {
  dispatch({ type: GET_ROBOTS });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => dispatch({ type: GET_ROBOTS_SUCCESS, payload: robots }))
    .catch(error => {
      dispatch({ type: GET_ROBOTS_FAILURE, payload: error });
    });
};
