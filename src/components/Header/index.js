import React, { Component } from 'react';

export default class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <h1 className='f2'>RoboFriends</h1>;
  }
}
