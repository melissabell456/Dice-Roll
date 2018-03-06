"use strict";

module.exports = (args) => {
  return args.length === 1 ? {count: 1, sides: args[0]} : {count: args[0], sides: args[1]}; 
};