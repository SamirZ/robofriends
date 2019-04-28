import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAILURE
} from '../types';
import apiCall from '../../utils/apiCall';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const getRobots = () => dispatch => {
  dispatch({ type: GET_ROBOTS });
  return apiCall('https://jsonplaceholder.typicode.com/users')
    .then(robots => dispatch(getRobotsSuccess(robots)))
    .catch(error => dispatch(getRobotsFailure(error)));
};

export const getRobotsSuccess = robots => ({
  type: GET_ROBOTS_SUCCESS,
  payload: robots
});

export const getRobotsFailure = error => ({
  type: GET_ROBOTS_FAILURE,
  payload: error
});
