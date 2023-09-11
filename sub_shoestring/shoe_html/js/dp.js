$(function(){
    var $win = $(window);
    var headerTop = $('.side-menu').offset().top;

    $(window).scroll(function(){
        if ($(this).scrollTop() > headerTop) {
            $('.side-menu').addClass('sticky');
        } else {
            $('.side-menu').removeClass('sticky');
        }
    })

});