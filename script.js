import * as model from './model.js';
import * as view from './view.js';

('use strict');

// CONTROLLER
//ninja tally update-subscriber
const updateNinjaTally = function () {
  let ninjaTally = model.getNinjaTally();
  ninjaTally++;
  model.setNinjaTally(ninjaTally);
  view.renderNinjaTally(ninjaTally);
};

//samurai tally update-subscriber
const updateSamuraiTally = function () {
  let samuraiTally = model.getSamuraiTally();
  samuraiTally++;
  model.setSamuraiTally(samuraiTally);
  view.renderSamuraiTally(samuraiTally);
};

const init = function () {
  // localStorage.clear();
  model.initiateLocalStorage();
  view.renderNinjaTally(model.getNinjaTally());
  view.renderSamuraiTally(model.getSamuraiTally());
  view.handleNinjaButton(updateNinjaTally);
  view.handleSamuraiButton(updateSamuraiTally);
};

init();
