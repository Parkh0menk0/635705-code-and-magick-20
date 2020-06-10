'use strict';

var setup = document.querySelector('.setup');

var similarWizards = [];

var WIZARDS_COUNT = 4;

var NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

/**
 * @description Генерирует случайные данные.
 * @param {number} max Максимальное целое число.
 * @return {number} Случайное целое число.
 */
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

setup.classList.remove('hidden');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  similarWizards.push({
    name: NAME[randomInteger(NAME.length - 1)] + ' ' + SURNAME[randomInteger(SURNAME.length - 1)],
    coatColor: COAT_COLOR[randomInteger(COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomInteger(EYES_COLOR.length - 1)],
  });
}

