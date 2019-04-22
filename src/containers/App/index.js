import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, getRobots } from '../../store/actions';

import CardList from '../../components/CardList';
import SearchBox from '../../components/Searchbox';
import Scroll from '../../components/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary';
import Header from '../../components/Header';

import './App.css';

class App extends Component {
  state = {
    robots: []
  };

  componentDidMount() {
    const { dispatch, getRobots } = this.props;
    getRobots(dispatch);
  }

  searchChange = e => {
    const { dispatch, setSearchField } = this.props;
    setSearchField(dispatch, e.target.value);
  };

  filerRobots = (robots, searchField) =>
    robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

  render() {
    const { filerRobots, searchChange } = this;
    const { searchField, robots, isPending, error } = this.props;

    const filteredRobots = filerRobots(robots, searchField);

    if (error) {
      return (
        <div className='tc'>
          <h1 className='f1'>{error.message}</h1>
        </div>
      );
    }

    return isPending ? (
      <div className='tc'>
        <h1 className='f1'>Loading...</h1>
      </div>
    ) : (
      <div className='tc aspect-ratio--object flex flex-column'>
        <div>
          <Header />
          <SearchBox searchChange={searchChange} />
        </div>
        {[...Array(5).keys()].map(i => (
          <div key={i} className='w-100 bt' />
        ))}
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
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
    setSearchField,
    getRobots,
    dispatch
  })
)(App);
