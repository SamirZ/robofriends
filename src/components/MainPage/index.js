import React, { Component } from 'react';

import CardList from '../CardList';
import SearchBox from '../Searchbox';
import Scroll from '../Scroll';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';

export class MainPage extends Component {
  componentDidMount() {
    const { getRobots } = this.props;
    getRobots();
  }

  searchChange = e => {
    const { setSearchField } = this.props;
    setSearchField(e.target.value);
  };

  filterRobots = () =>
    this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );

  render() {
    const { filterRobots, searchChange } = this;
    const { isPending, error } = this.props;

    const filteredRobots = filterRobots();

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
export default MainPage;
