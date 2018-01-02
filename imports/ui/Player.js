import React from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

const Player = (props) => {
  return (
    <div className="item">
      <p>
        {props.player.name} has {props.player.score} point(s).
      </p>
      <button
        className="button button--round"
        onClick={() => {
          Players.update(props.player._id, { $inc: { score: 1 } });
        }}
      >
        +1
      </button>
      <button
        className="button button--round"
        onClick={() => {
          Players.update(props.player._id, { $inc: { score: -1 } });
        }}
      >
        -1
      </button>
      <button
        className="button button--round"
        onClick={() => {
          Players.remove(props.player._id);
        }}
      >
        X
      </button>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
