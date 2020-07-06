'use strict';

(function () {

  var setupClose = setup.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');

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

})();
