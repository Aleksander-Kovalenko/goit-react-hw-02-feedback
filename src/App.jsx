import React, { Component } from 'react';
import { Container, List, StaticsInfo } from './App.styled';

import { ButtonReaction } from './ButtonReaction/ButtonReaction';
import { ReactionList } from './ReactionList/ReactionList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { NotificationMessage } from './Notification/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleReaction = e => {
    e.preventDefault();
    const { name } = e.target;
    this.setState(prevState => {
      const newState = prevState[`${name}`] + 1;
      return {
        [name]: newState,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((a, b) => a + b, 0);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state).reduce((a, b) => a + b, 0);
    const average = 100 / (values / this.state.good);
    return average;
  };

  render() {
    const keys = Object.keys(this.state);
    const val = Object.values(this.state);
    return (
      <Container>
        <SectionTitle text="Please leave feedback"></SectionTitle>

        {keys.map(item => (
          <ButtonReaction
            name={item[0].toUpperCase() + item.slice(1)}
            handleReaction={this.handleReaction}
          >
            {item}
          </ButtonReaction>
        ))}

        {this.state.bad || this.state.good || this.state.neutral ? (
          <>
            <List>
              {keys.map((item, index) => (
                <ReactionList statics={item}>
                  {item[0].toUpperCase() + item.slice(1)}:{val[index]}
                </ReactionList>
              ))}
            </List>
            <StaticsInfo> Total: {this.countTotalFeedback()}</StaticsInfo>
            <StaticsInfo>Positive feedback:{this.countPositiveFeedbackPercentage()} %</StaticsInfo>
          </>
        ) : (
          <NotificationMessage text="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default App;
