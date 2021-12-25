import React, { Component } from 'react';
import { Item } from './Item.styled';

export class ReactionList extends Component {
  render() {
    return <Item>{this.props.children}</Item>;
  }
}
