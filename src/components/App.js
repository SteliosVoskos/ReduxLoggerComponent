import React, { Component } from 'react';
import LoggerContainer from '../containers/LoggerContainer';
import DecrementContainer from '../containers/DecrementContainer';

export default class App extends Component {
  getStyles() {
    return {
      container: {
        backgroundColor: '#f9f9f9'
      }
    }
  }

  render() {
    return (
      <div style={this.getStyles().container}>
        <DecrementContainer />
        <LoggerContainer />
      </div>
    );
  }
}
