import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const PlayerList = (props) => {
  renderPlayers = () => {
    return props.players.map((player) => (
      <Player key={player._id} player={player} />
    ));
  };
  return (
    <div className="item">
      {props.players.length === 0 ? (
        <p className="item__message">Add a new player!</p>
      ) : (
        renderPlayers()
      )}
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerList;
