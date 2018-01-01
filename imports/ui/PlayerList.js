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
    <div>
      {props.players.length === 0 ? <p>Add a new player!</p> : renderPlayers()}
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerList;
