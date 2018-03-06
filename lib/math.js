"use strict";

module.exports.getRandomInt = (lowerInt, upperInt) => {
  let randomNum = Math.floor(Math.random() * upperInt) + lowerInt;
  return randomNum;
}