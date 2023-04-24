import React, { Component } from 'react';
import { Feedback } from './Feedback';
import { Stats } from './Stats';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  addFeedback = name => {
    this.setState(prev => {
      let obj = { ...prev };
      obj[name] = prev[name] + 1;
      return obj;
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0
    );
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            data={Object.keys(this.state)}
            addFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Stats
              data={Object.keys(this.state)}
              statName={this.state}
              total={this.countTotalFeedback()}
              positiveCounter={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
