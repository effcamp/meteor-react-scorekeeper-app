import React from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

const Player = (props) => {
  return (
    <div>
      <p>
        {props.player.name} has {props.player.score} point(s).
        <button
          onClick={() => {
            Players.update(props.player._id, { $inc: { score: 1 } });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players.update(props.player._id, { $inc: { score: -1 } });
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            Players.remove(props.player._id);
          }}
        >
          X
        </button>
      </p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
