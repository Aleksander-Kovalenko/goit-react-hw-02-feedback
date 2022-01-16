import React, { Component } from 'react';

import { FeedbackOptions } from './ReactionButton/ReactionButton';
import { ReactionList } from './components/ReactionList/ReactionList';
import { Container } from './App.styled';

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
    const positiVeFeedback = this.state.good;
    const average = 100 / (this.countTotalFeedback() / positiVeFeedback);
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
          <h1>Vanilla Bakery Stats</h1>
          <h2>Please leave Feedback</h2>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleButton} />
          {this.countTotalFeedback() > 0 && (
            <>
              <ReactionList
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
