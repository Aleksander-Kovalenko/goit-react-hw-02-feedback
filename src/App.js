import React, { Component } from 'react';
import { Container, List } from './App.styled';

import { ButtonReaction } from './ButtonReaction/ButtonReaction';
import { ReactionList } from './ReactionList/ReactionList';

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
      return {
        [name]: prevState[`${name}`] + 1,
      };
    });
  };

  render() {
    const keys = Object.keys(this.state);
    const val = Object.values(this.state);
    return (
      <Container>
        <h3>Please leave feedback</h3>
        {keys.map(item => (
          <ButtonReaction
            name={item[0].toUpperCase() + item.slice(1)}
            handleReaction={this.handleReaction}
          >
            {item}
          </ButtonReaction>
        ))}

        <List>
          {keys.map((item, index) => (
            <ReactionList reaction={item}>
              {item[0].toUpperCase() + item.slice(1)}:{val[index]}
            </ReactionList>
          ))}
        </List>
      </Container>
    );
  }
}

export default App;
