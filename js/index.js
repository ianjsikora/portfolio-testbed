(function($){
    "use strict";

    $(window).load(function(){

        // Page loader
        $(".page-loader div").delay(0).fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");

        $(window).trigger("resize");

    });

    $(document).ready(function(){

        $(window).trigger("resize");

    });

    $(window).resize(function(){

        resize_height_init();

    });

})(jQuery);

/*
  ========================================
  Page Resize
  ========================================
*/
function resize_height_init(){
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
