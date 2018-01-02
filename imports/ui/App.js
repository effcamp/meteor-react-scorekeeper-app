import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import { Players } from '../api/players';

const App = () => {
  const players = Players.find({}, { sort: { score: -1 } }).fetch();
  const title = 'Score Keep';
  const subtitle = 'Created by Fred';
  return (
    <div>
      <TitleBar title={title} />
      <div className="wrapper">
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    </div>
  );
};

export default App;
