'use strict';

(function () {

  var form = document.querySelector('.setup-wizard-form');
  var similarListElement = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content;
  var setupSimilar = document.querySelector('.setup-similar');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorHidden = document.querySelector('[name=coat-color]');
  var eyesColorHidden = document.querySelector('[name=eyes-color]');
  var fireballColorHidden = document.querySelector('[name=fireball-color]');

  var WIZARDS_COUNT = 4;

  var color = {
    coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green'],
    fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  /**
   * @description Создаёт DOM-элемент на основе JS-объекта.
   * @param {Object} wizard Персонаж.
   * @return {Object} Персонаж.
   */
  function createWizard(wizard) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
    wizardElement.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);

    return wizardElement;
  }

  /**
   * @description Обработчик успешной загрузки.
   * @param {Object[]} wizards Массив объектов персонажей.
   */
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setupSimilar.classList.remove('hidden');
  };

  /**
   * @description Обработчик успешной загрузки.
   * @param {Object} evt Событие DOM.
   */
  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.setup.classList.add('hidden');
    });
    evt.preventDefault();
  };

  /**
   * @description Обработчик ошибки.
   * @param {String} errorMessage Текстовое описание ошибки.
   */
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.colorize(wizardEyes, eyesColorHidden, color.eyes);
  window.colorize(wizardCoat, coatColorHidden, color.coat);
  window.colorize(wizardFireball, fireballColorHidden, color.fireball);

  window.backend.load(successHandler, errorHandler);
  form.addEventListener('submit', submitHandler);
})();
