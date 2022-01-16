import React, { Component } from 'react';

import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Title } from './App.styled';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = state => {
    const { name } = state.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const average = 100 / (this.countTotalFeedback() / this.state.good);
    return average.toFixed(0);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <>
        <Title>Vanilla Bakery Stats</Title>

        <Section title="Please leave Feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleButton} />
        </Section>

        {this.countTotalFeedback() > 0 && (
          <Section title="All Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
        <Section>
          {!this.countTotalFeedback() > 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
