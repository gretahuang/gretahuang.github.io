$(document).ready(function() {


    $(".container.main").fadeIn(1000, function() {
        $(".page-footer").fadeIn(800);
    });


    var scrollPos;
    $(window).bind('scroll', 'touchstart', function() {

        scrollPos = $(window).scrollTop();
        if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
            $(".main-content").css({"margin-top":-1*scrollPos}); //push content under picture up
            $(".container.main").css({"margin-top":80 + scrollPos}) //push margin of page down to retain page height

            var rgb = scrollPos/5 + 100;
            $(".senior-pic-wrapper").css({"opacity":Math.pow(1.005,-1*scrollPos),"background-color":"rgb("+rgb+","+rgb+","+rgb+")"});
        }
    });


});
