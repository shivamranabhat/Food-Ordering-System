$(document).ready(function (){ 
      $(".home").click(function (){
        $(".preloader").show();
        window.location.href = "index.html";
      });
      $(".menus").click(function (){
        $(".preloader").show();
        window.location.href = "menu.html";
      });
      $(".contact").click(function (){
        $(".preloader").show();
        window.location.href = "contact.html";
      });
      $(".gallery").click(function (){
        $(".preloader").show();
        window.location.href = "gallery.html";
      });
});