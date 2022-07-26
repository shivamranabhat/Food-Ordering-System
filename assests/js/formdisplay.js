$(document).ready(function(){
    $(".signin,.sign-buttons").on("click",function () {
        $("#log-form").show(400);
    });
    $(".signup-link").on("click",function () {
        $(".login").hide();
        $(".signup").show();
    });
    $(".login-link").on("click",function () {
        $(".signup").hide();
        $(".form.forgot-pass").hide();
        $(".login").show();
    });
    $(".forgot-link").on("click",function () {
        $(".form.forgot-pass").show();
        $(".login").hide();
    });
    $(".close").on("click",function (){
        // console.log("this is clicked");
        $("#log-form").hide();
    });
});
