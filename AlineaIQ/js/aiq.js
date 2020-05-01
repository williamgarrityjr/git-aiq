$(function() {

    //header - tabs

    $("button.demo-request").click(function(){
        $(".modal.demo-request").toggleClass("--show");
        $("body").toggleClass("stop");
    });

    //header - mobile menu
    $(".mobile-menu img").click(function(){
        $("nav").toggleClass("--show");
    });
    $("nav button").click(function(){
        $("nav").toggleClass("--show");
    }); 

    //tabs
    $( "#tabs" ).tabs();
    $(".tab-nav a").click(function() {
        $(".tab-nav a").removeClass("active");
        $(this).addClass("active");
    });

});