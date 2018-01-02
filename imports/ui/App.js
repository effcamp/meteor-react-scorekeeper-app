import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import { Players, calcPlayerPos } from '../api/players';

const App = () => {
  const players = Players.find({}, { sort: { score: -1 } }).fetch();
  const positionedPlayers = calcPlayerPos(players);
  const title = 'Score Keep';
  const subtitle = 'Created by Fred';
  return (
    <div>
      <TitleBar title={title} subtitle={subtitle} />
      <div className="wrapper">
        <PlayerList players={positionedPlayers} />
        <AddPlayer />
      </div>
    </div>
  );
};

export default App;
