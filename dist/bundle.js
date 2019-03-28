'use strict';

const dispatch = () => {
  return false;
};

var stateManager = {
  dispatch,
};

const createElement = () => {
  return null;
};

var domManager = {
  createElement,
};

var index = {
  stateManager,
  dispatch,
  domManager,
  createElement
};

module.exports = index;
