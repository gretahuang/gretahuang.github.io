$(document).ready(function() {

    //attach custom scrollbars to contents and menu
    var scrollBarParameters = {
        height:"100%",
        width:"",
        railVisible:true,
        size:'10px',
        wheelStep:5,
        touchScrollStep:50
    };
    //$(".content-wrapper > .container, #menu-content").slimScroll(scrollBarParameters);

    //center blocks based on the section block's height in the window
    _centerBlocks();
    $(window).resize(function(){_centerBlocks();});



    //menu button reveals menu upon hover in desktop
    $("#menu-icon-wrapper, #menu-wrapper").hover(function() {
        $(".expandable").addClass("on");
    }, function() { //hovering off menu hides it
        $(".expandable").removeClass("on");
    });

    //menu button toggles the menu in mobile
    $("#menu-icon-wrapper").bind('touchstart', function(e) {
        $(".expandable").toggleClass("on");
    });

    /*
    //"View All" prompt appears upon hovering a section block
    var viewButton = '<div class="more-button">View All<span class="inline-icon">&#xf105;</span></div>';
    $(".section-block").hover(function(){ //when user hovers over block

        $(this).append(viewButton);

    }, function() { //when user stops hovering over block
        $(".more-button").fadeOut(200,function(){
            $(this).remove();
        });

    });
    */

    //blocks separate from each other when one is clicked and content appears
    $(".section-block").click(function(){
        var title = $(this).find(".block-header").text();
        _expandBlocks($(this).attr("id"),title);
    });

    //blocks join back together when back button is clicked
    $("#back-button").click(function(){
        _collapseBlocks();
    });

});


_centerBlocks = function() {
    var newPadding  = ($(".section-block").height() - ($(".block-icon").height() + $(".block-header").height()) ) /2;
    $(".block-icon").css("paddingTop", newPadding);
}

_expandBlocks = function(id, title) {

    //change title name to appropriate name
    $("#title").text(title);

    //make back button appear
    $("#back-button").css("display","inline-block").animate({
        opacity:"1",
        left:0
    }, 700);

    //make the desired content appear
    $("." + id + "-content").css("display","block").animate({
        opacity:1
    }, 400);

    //move the blocks out of the way with random animation
    $(".section-block").addClass("out");
    var transition = Math.floor((Math.random() * 3)+ 1);
    if(transition == 1)
        $(".section-block").addClass("corner");
    else if (transition == 2)
        $(".section-block").addClass("side");
    else if (transition == 3)
        $(".section-block").addClass("vert");

}

_collapseBlocks = function() {

    //change title name back to "Greta Huang"
    $("#title").text("Greta Huang");

    //make back button disappear
    $("#back-button").animate({
        opacity:"0",
        left:"30%"
    }, 300, function() {$(this).css("display","none")});

    //hide content
    $(".content-wrapper").animate({
        opacity:0
    }, 400, function() {$(this).css("display","none")});

    //put section blocks into original position
    $(".section-block").removeClass("out").removeClass("corner").removeClass("side").removeClass("vert");
}