import React, { Component } from 'react';

export default class Decrement extends Component {
  handleOnClick = (e) => {
    e.preventDefault();
    this.props.showStuff();
  };

  handleAddClick = (e) => {
    e.preventDefault();
    this.props.increment();
  };
  
  render() {
    return (
      <div>
        <button onClick={this.handleAddClick}>+</button>
        <button onClick={this.handleOnClick}>-</button>
        <span>{this.props.person.counter}</span>
      </div>
    );
  }
}
