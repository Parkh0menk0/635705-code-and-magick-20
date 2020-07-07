'use strict';

(function () {

  // var INITIAL_COORDS = {
  //   x: 44,
  //   y: 80
  // };

  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var userName = document.querySelector('.setup-user-name');
  var dialogHandle = setup.querySelector('.upload');

  /**
   * @description Открывает модальное окно.
   */
  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    setup.style.top = '';
    setup.style.left = '';
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
    if (!userName.matches(':focus')) {
      evt.preventDefault();
      window.util.isEscEvent(evt, closePopup);
    }
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    /**
     * @description Добавляет слушателя события движения мыши.
     * @param {Object} moveEvt Событие, возникающее при движении мыши с зажатой кнопкой.
     */
    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    /**
     * @description Удаляет слушателя события движения мыши.
     * @param {Object} upEvt Событие, возникающее при отпускании кнопки мыши.
     */
    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
