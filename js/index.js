(function($){
    "use strict";

    $(window).load(function(){

        // Page loader
        $(".page-loader div").delay(0).fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");

        init_scroll_navigate();

        $(window).trigger("scroll");
        $(window).trigger("resize");

        // Hash menu forwarding
        if (window.location.hash){
            var hash_offset = $(window.location.hash).offset().top;
            $("html, body").animate({
                scrollTop: hash_offset
            });
        }

    });

    $(document).ready(function(){

        $(window).trigger("resize");

        init_parallax();
    });

    $(window).resize(function(){

        js_height_init();

    });
/*
  ========================================
  Platform ID
  ========================================
*/
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    }
    else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }

    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    }
    else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    }
    else {
        safariTest = false;
    }

    // Detect touch devices
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

 /*
  ========================================
  Scroll navigation
  ========================================
*/

    function init_scroll_navigate(){

        $(".local-scroll").localScroll({
            target: "body",
            duration: 1500,
            offset: 0,
            easing: "easeInOutExpo"
        });

        var sections = $(".background-image, .split-section, .page-section");
        var menu_links = $(".scroll-nav li a");

        $(window).scroll(function(){

            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });

        });

    }

/*
  ========================================
  Parallax
  ========================================
*/

    function init_parallax(){

        // Parallax
        if (($(window).width() >= 1024) && (mobileTest == false)) {
            $("#home").parallax("50%", 0.3);
            $("#first-parallax").parallax("50%", 0.2);
            $("#second-parallax").parallax("50%", 0.5);
        }

    }

})(jQuery);

/*
  ========================================
  Height Adjust
  ========================================
*/
function js_height_init(){
    (function($){
        $(".resize-height-full-page").height($(window).height());
    })(jQuery);
}

/*
  ========================================
  Social Icon Hovers
  ========================================
*/

$(function() {
    $(".social-badge-img")
        .mouseover(function() {
            var src = $(this).attr("src").replace("grey", "color");
            $(this).attr("src", src);
        })
        .mouseout(function() {
            console.log('mouseout');
            var src = $(this).attr("src").replace("color", "grey");
            $(this).attr("src", src);
        });
});
