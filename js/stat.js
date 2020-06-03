'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_GAP = 20;
var GAP = 10;
var TEXT_HEIGHT = 16;

/**
  * @description Отрисовывает элемент облака
  * @param {Object} ctx Канвас
  * @param {number} x Старт отрисовки по оси X
  * @param {number} y Старт отрисовки по оси Y
  * @param {string} color Цвет (RGB, HLS, HEX)
  */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/**
  * @description Определяет максимальный элемент.
  * @param {number} [arr] Массив чисел.
  * @return {number} maxElement Максимальный элемент.
  */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/**
  * @description Отрисовывает статистику игроков
  * @param {Object} ctx Канвас
  * @param {string} [players] Массив имен игроков
  * @param {number} [times] Массив результатов игроков
  */
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, ' + (Math.random() * 100 + 1) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP * 2, BAR_WIDTH, -BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP * 4 - (BAR_HEIGHT * times[i] / maxTime));
  }
};
