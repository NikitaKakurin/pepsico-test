// 1.на странице есть элементы с CSS классом userinput.
  // Написать код на JQuery, который прикрепит обработчик
  // onclick на все элементы. Функция обработки пустая.
$('.userinput').on('click', function() {})
// ---------------------------------------------------------------

// 2. найти все элементы на странице, которые вложены в элемент
//  с id Block1 и имеют класс userinput.
$('#Block .userinput')
// -----------------------------------------------------------------

// 3.Показать элемент с Id PopupDIV плавно всплывающий(fade) по центру окна браузера.
$(document).ready(function(){
  $.fn.alignCenter = function() {
   var left = Math.max(40, parseInt($(window).width()/2 - $(this).width()/2)) + 'px';
   var top = Math.max(40, parseInt($(window).height()/2 - $(this).height()/2)) + 'px';
   return $(this).css({'left':left, 'top':top});
  };
});
$('#btnShowPopupDIV').click(function(){
  $('#PopupDIV').alignCenter().fadeIn(700);
});

$('#btnHidePopupDIV').click(function(){
  $('#PopupDIV').fadeOut(700);
});

// ------------------------------------------------------------------------------
