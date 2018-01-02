import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calcPlayerPos = (players) => {
  let rank = 1;

  return players.map((player, i) => {
    if (i !== 0 && players[i - 1].score > player.score) {
      rank++;
    }
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};
