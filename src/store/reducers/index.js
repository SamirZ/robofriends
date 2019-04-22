import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAILURE
} from '../types';

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const getRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case GET_ROBOTS:
      return { ...state, isPending: true };
    case GET_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case GET_ROBOTS_FAILURE:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export default {
  searchRobots,
  getRobots
};
