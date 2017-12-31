/*global $, window, document*/

// Loading Screen
$(window).on('load', function () {
    "use strict";
    
    // Loading Elements
    $(".loading-overlay .spinner").fadeOut('fast', function () {
        // Show The Scroll
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut('fast', function () {
            $(this).remove();
        });
    });
});

//Dicument is ready
$(document).ready(function () {
    'use strict';
    
    $('.header-page .header-tilte').addClass('scalGrow');
    $('.header-page').mouseenter(function () {
        $('.header-page .header-tilte').removeClass('scalGrow');
    });
    /*$("a").click(function () {
        $("html,body").animate({ scrollTop : 0 }, 600);
    });*/
    
    $(window).scroll(function () {
        var winTop = $(window).scrollTop(), pos;
        
        $(".slideanim").each(function () {
            pos = $(this).offset().top;
            if (pos < winTop + 400) {
                $(this).addClass("slideUp");
            }
            if (pos < winTop + 500) {
                $(this).addClass("slideUp");
            }
        });
        
        pos = $('.exper-body').offset().top;
        if (pos < winTop + 500) {
            $('.detail-right').addClass("slideRight");
            $('.detail-left').addClass("slideLeft");
        }
        
        //Animate Progress Bar
        pos = $('.competence').offset().top;
        var progHTMLCSS = $('.comp-body .progress .htmlCss'),
            progJs = $('.comp-body .progress .Js'),
            progJq = $('.comp-body .progress .Jq'),
            progBots = $('.comp-body .progress .boots'),
            progSqlT = $('.comp-body .progress .sqlT'),
            progAspSql = $('.comp-body .progress .aspSql');
        if (pos - 250 < winTop) {
            $('.competence .comp-body .progress .progress-bar').fadeIn(100);
            progHTMLCSS.width('90%');
            progJs.width('70%');
            progJq.width('80%');
            progBots.width('85%');
            progSqlT.width('80%');
            progAspSql.width('80%');
        }
    });
    
    /*Initialisé Tooltip*/
    $(".about-img img").tooltip({
        placement: "bottom",
        delay: {show: 900, hide: 80}
    });
    
    // Add smooth scrolling
    $(".navbar a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                
                scrollTop: $(hash).offset().top - 50
                
            }, 900, function () {
                
                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        } // End if
    });
});