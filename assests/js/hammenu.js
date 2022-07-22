$(document).ready(function () {
    $('#side-menu').hide();
    $(".toggle-btn").click(function (){
        $('#side-menu').show();
        $('#side-menu').addClass("side-bar-animation");
    });
    $(".cancel-button").click(function (){
        $('#side-menu').hide();
    });
    
});