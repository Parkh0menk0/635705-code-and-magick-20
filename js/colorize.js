'use strict';
(function () {

  /**
   * @description Генерирует случайный цвет.
   * @param {String} color Цвет.
   * @return {number} Случайное целое число.
   */
  var getRandomColor = function (color) {
    return color[Math.floor(color.length * Math.random())];
  };

  /**
   * @description Залаёт цвет части игрового парсонажа.
   * @param {Object} element DOM-элемент окрашиваемой части персонажа.
   * @param {String} hiddenElement Скрытое поле окрашиваемой части персонажа.
   * @param {String} elementСolor Цвет.
   */
  window.colorize = function (element, hiddenElement, elementСolor) {
    element.addEventListener('click', function () {
      var color = getRandomColor(elementСolor);
      hiddenElement.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
