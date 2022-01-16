import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ReactionButton } from './ReactionButton/ReactionButton';
import { ReactionList } from './components/ReactionList/ReactionList';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = state => {
    // console.log(state);
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const keys = Object.keys(this.state);
    const value = Object.values(this.state);

    const renderReactionList = value.reduce((a, item) => a + item, 0);
    console.log(renderReactionList);
    return (
      <>
        <Container>
          <h2>Please leave Feedback</h2>
          <ReactionButton title="Good" onClick={this.handleButton} name="good" />
          <ReactionButton title="Neutral" onClick={this.handleButton} name="neutral" />
          <ReactionButton title="Bad" onClick={this.handleButton} name="bad" />
        </Container>
        {renderReactionList > 0 && <ReactionList names={keys} numbers={value} />}
      </>
    );
  }
}

export default App;
