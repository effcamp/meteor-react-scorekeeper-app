import React, { Component } from 'react';

import { Players } from '../api/players';

export default class AddPlayer extends Component {
  handleSubmit = (e) => {
    const name = e.target.playerName.value;
    e.preventDefault();
    if (name) {
      e.target.playerName.value = '';
      Players.insert({
        name,
        score: this.props.score
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="playerName"
            placeholder="Player name"
            autoComplete="off"
            autoFocus
          />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
