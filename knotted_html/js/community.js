$(function(){
  // faq 메뉴 드롭다운
  $('.q').click(function(){
    $(this).next('.a').slideToggle();
    $(this).find('.bottom-arrow').toggle();
    $(this).find('.top-arrow').toggle();
  });

});