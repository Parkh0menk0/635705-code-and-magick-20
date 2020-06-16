'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');

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

/**
 * @description Создаёт DOM-элементы на основе JS-объекта.
 * @param {Object[]} generated Сгенерированный массив персонажей.
 * @return {Object} DocumentFragment.
 */
function createWizards(generated) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < generated.length; i++) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = generated[i].name;
    element.querySelector('.wizard-coat').setAttribute('fill', generated[i].coatColor);
    element.querySelector('.wizard-eyes').setAttribute('fill', generated[i].eyesColor);
    fragment.appendChild(element);
  }

  return fragment;
}

/**
 * @description Заполняет блок DOM-элементами на основе массива JS-объектов.
 * @param {Object} fragment DocumentFragment.
 */
function fillWizards(fragment) {
  var list = document.querySelector('.setup-similar-list');

  list.appendChild(fragment);
}

/**
 * @description Открывает модальное окно.
 */
function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

/**
 * @description Закрывает модальное окно.
 */
function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

/**
 * @description Оработчик закрытия окна по нажатию на Esc.
 * @param {Object} evt Объект события.
 */
function onPopupEscPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
}

for (var i = 0; i < WIZARDS_COUNT; i++) {
  similarWizards.push({
    name: NAME[randomInteger(NAME.length - 1)] + ' ' + SURNAME[randomInteger(SURNAME.length - 1)],
    coatColor: COAT_COLOR[randomInteger(COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomInteger(EYES_COLOR.length - 1)],
  });
}

fillWizards(createWizards(similarWizards));

setupSimilar.classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
