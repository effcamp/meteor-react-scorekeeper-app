import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';

const renderPlayers = (playerList) => {
  return playerList.map((player) => (
    <p key={player._id}>
      {player.name} has {player.score} point(s).
      <button
        onClick={() => {
          Players.update(player._id, { $inc: { score: 1 } });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          Players.update(player._id, { $inc: { score: -1 } });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          Players.remove(player._id);
        }}
      >
        X
      </button>
    </p>
  ));
};

const handleSubmit = (e) => {
  const name = e.target.playerName.value;
  e.preventDefault();
  if (name) {
    e.target.playerName.value = '';
    Players.insert({
      name,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = 'Score Keep';
    const name = 'Tom';
    const jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        {renderPlayers(players)}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="playerName"
            placeholder="Player name"
            autoComplete="off"
          />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
