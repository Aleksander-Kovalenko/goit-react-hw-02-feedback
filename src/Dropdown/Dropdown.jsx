import React, { Component } from 'react';
import { Container, Visible, List } from './Dropdown.styled';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <Container>
        <Visible type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </Visible>
        {this.state.visible && <List>Выпадающее меню</List>}
      </Container>
    );
  }
}

export default Dropdown;
