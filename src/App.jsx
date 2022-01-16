import React, { Component } from 'react';

import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Container } from './App.styled';
import { Section } from './components/Section/Section';

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
        <Container>
          <Section title="Vanilla Bakery Stats" />
          <Section title="Please leave Feedback" />

          <FeedbackOptions options={keys} onLeaveFeedback={this.handleButton} />
          {this.countTotalFeedback() > 0 && (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                percentage={this.countPositiveFeedbackPercentage()}
              />
            </>
          )}
        </Container>
      </>
    );
  }
}

export default App;
