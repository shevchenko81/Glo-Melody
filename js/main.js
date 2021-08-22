$(document).ready(function () {
  var currentFloor = 2; // переменная с текущим этажем
  var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); /*кнопка уведичения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  
  // Функция при наведении мыши на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получем значение текущего этажа
    $(".counter").text(currentFloor); // записваем значение этажа в счетчик
  });

  floorPath.on('click', toggleModal); // при клике на этаж вызвать окно
  modalCloseButton.on('click', toggleModal); //при клике закрыть окно
  viewFlatsButton.on('click', toggleModal);

  //отсдеживаем клик по кнопке вверх
  counterUp.on("click", function () {  
    if (currentFloor < 18) { // не больше 18
    currentFloor++; // прибавляем один этаж
    uscurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, что бы было  а не 
    $(".counter").text(uscurrentFloor); // записваем значение этажа в счетчик
    floorPath.removeClass('current-floor'); // удаляеммактивный активный класс у этажей
    $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
    currentFloor++;
    uscurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $(".counter").text(uscurrentFloor);
    floorPath.removeClass('current-floor');
    $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on('click', function () {
    if (currentFloor > 02) {
      currentFloor--;
      uscurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(uscurrentFloor);
      floorPath.removeClass('current-floor');
    $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toggleModal() {
    modal.toggleClass("is-open"); // функция открыть-закрыть окно
  }
});