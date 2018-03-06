"use strict";
const { getRandomInt } = require('./math'); 

const toDiceNotation = ({ count, sides }) => {
  let diceNotation = `${count}d${sides}`;
  return diceNotation;
};

const roll = (diceString) => {
  let [ count, sides ] = diceString.split('d');
  return getRandomInt(+1, +`${sides}`);
}

module.exports = { toDiceNotation, roll };