import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, getRobots } from '../../store/actions';

import './App.css';

import MainPage from '../../components/MainPage';

export class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  store => ({
    searchField: store.searchRobots.searchField,
    robots: store.getRobots.robots,
    isPending: store.getRobots.isPending,
    error: store.getRobots.error
  }),
  dispatch => ({
    setSearchField: text => dispatch(setSearchField(text)),
    getRobots: () => dispatch(getRobots())
  })
)(App);
