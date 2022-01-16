import { Component } from 'react';

export class ReactionButton extends Component {
  handleButton = e => {
    // console.log(e.target.name);
    this.props.onClick(e.target.name);
  };
  render() {
    const { title, name } = this.props;
    return (
      <button type="submit" name={name} onClick={this.handleButton}>
        {title}
      </button>
    );
  }
}
