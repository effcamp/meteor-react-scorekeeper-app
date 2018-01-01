import React from 'react';
import { Players } from '../api/players';

export default (props) => {
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
