import React from 'react';
import Player from './Player';

const PlayerList = (props) => {
  renderPlayers = () => {
    return props.players.map((player) => (
      <Player key={player._id} player={player} />
    ));
  };
  return <div>{renderPlayers()}</div>;
};

export default PlayerList;
