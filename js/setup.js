'use strict';

(function () {

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

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setupSimilar.classList.remove('hidden');
  }, function () {});


  window.colorize(wizardEyes, eyesColorHidden, color.eyes);
  window.colorize(wizardCoat, coatColorHidden, color.coat);
  window.colorize(wizardFireball, fireballColorHidden, color.fireball);
})();
