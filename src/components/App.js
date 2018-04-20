import React, { Component } from 'react';
import LoggerContainer from '../containers/LoggerContainer';
import DecrementContainer from '../containers/DecrementContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <DecrementContainer />
        <LoggerContainer />
      </div>
    );
  }
}
