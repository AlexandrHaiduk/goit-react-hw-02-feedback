import React, { Component } from 'react';
import { Feedback } from './Feedback';
import { Stats } from './Stats';

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  addFeedback = event => {
    console.log(event.target);
  };

  render() {
    return (
      <>
        <Feedback onClick={this.addFeedback} />
        <Stats />
      </>
    );
  }
}
