$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
    //close menu
    $('.header_nav').click(function(event) {
        $('.header_burger,.header_menu').removeClass('active');
        $('body').removeClass('lock')
    });
});