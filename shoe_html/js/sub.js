$(function(){

    $('.btn-open').click(function(){
        $('.list').show();
        $('.btn-close').show();
        $('.btn-open').hide();
    })

    $('.btn-close').click(function(){
        $('.list').hide();
        $('.btn-open').show();
        $('.btn-close').hide();
    })
})
