'use strict';

let tallyNinja = 0;
let tallySamurai = 0;

document.querySelector('.button-ninja').addEventListener('click', function () {
  tallyNinja++;
  document.querySelector('.tallybox-ninja').textContent = tallyNinja;
});

document
  .querySelector('.button-samurai')
  .addEventListener('click', function () {
    tallySamurai++;
    document.querySelector('.tallybox-samurai').textContent = tallySamurai;
  });
