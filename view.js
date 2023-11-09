// VIEW
//NINJA VOTE-listener/publisher
export const handleNinjaButton = function (subscriber) {
  document.querySelector('.button-ninja').addEventListener('click', subscriber);
};

//SAMURAI VOTE-listener/publisher
export const handleSamuraiButton = function (subscriber) {
  document
    .querySelector('.button-samurai')
    .addEventListener('click', subscriber);
};

export const renderNinjaTally = function (value) {
  document.querySelector('.tallybox-ninja').textContent = value;
};

export const renderSamuraiTally = function (value) {
  document.querySelector('.tallybox-samurai').textContent = value;
};
