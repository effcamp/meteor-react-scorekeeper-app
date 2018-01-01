import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import { Players } from '../api/players';

const App = () => {
  const players = Players.find().fetch();
  const title = 'Score Keep';
  const subtitle = 'Created by Fred';
  return (
    <div>
      <TitleBar title={title} />
      <PlayerList players={players} />
      <AddPlayer />
    </div>
  );
};

export default App;
