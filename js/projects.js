$(document).ready(function() {

    //fade page in upon load
    $(".container.main").fadeIn(1000, function() {
        $(".page-footer").fadeIn(800);
    });

    var isMoving=false;

    //smooth scroll upon anchor link click
    $('a:not(.app-link)').click(function(){
        isMoving=true; //prevent navbar from appearing
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).position().top
        }, 500, function(){
            setTimeout(function(){
                isMoving=false; //keep the state a little longer to prevent bugs from putting navbar back down
            },200);
        });
        return false;
    });

    var pastScroll = 0;
    //switch icons on side based on what part of page user is in
    $(window).scroll(function() {

        var currentScroll = $(this).scrollTop();

        //hiding and showing the general navbar
        if(currentScroll > 500 && currentScroll > pastScroll) {
            $(".navbar,.side-icon,.project-nav").css("margin-top",-80); //hide navbar when scroll down
            pastScroll = currentScroll;
        } else if ((currentScroll < pastScroll - 250 && isMoving==false) || currentScroll <= 50) {
            $(".navbar,.side-icon,.project-nav").css("margin-top",""); //hide navbar when scroll up only when scrolling is done, not by clicking the nav
            pastScroll = currentScroll;
        }




        //show right icons and highlight right header
        if ($(window).scrollTop() < $("#android-nav-mark").position().top) { //position is in web section
            $(".side-icon.web").css("left", "");
            $(".side-icon:not(.web)").css("left",-100);
            $(".project-nav-header:not(#web-nav-header)").removeClass("active");
            $("#web-nav-header").addClass("active");

        } else if ($(window).scrollTop() >= $("#android-nav-mark").position().top && $(window).scrollTop() < $("#research-nav-mark").position().top) { //position is in android section
            $(".side-icon:not(.android)").css("left", -100)
            $(".side-icon.android").css("left", "");
            $(".project-nav-header:not(#android-nav-header)").removeClass("active");
            $("#android-nav-header").addClass("active");

        } else { //position is in research section
            $(".side-icon:not(.research)").css("left", -100);
            $(".side-icon.research").css("left", "");
            $(".project-nav-header:not(#research-nav-header)").removeClass("active");
            $("#research-nav-header").addClass("active");

        }
    });


    //make the clicked icon active
    /*$(".side-icon.web").click(function() {
       $(".side-icon.web").removeClass("active");
        $(this).addClass("active");

        var id = $(this).attr("id");
        var img = $(this).css("background-image");
        img = img.replace('url(','').replace(')','');
        var color = $(this).css("color");
        var slogan;
        var descrip;
        var btnLink;

        if (id=="CityScenes") {
            slogan="Explore the city by bike.";
            descrip="CityScenes allows you to travel" +
                " around New York City with CitiBike's bike sharing program and" +
                " experience a scenic route on the way. It uses the Google Maps API " +
                "and open NYC data of tourist locations that gives you the optimal " +
                "route from point A to point B using a CitiBike and passing through " +
                "the desired number of locations. This app was a hack made during the Young Rewired" +
                " State (YRS) Hackathon in NYC. It won the \"Best in Show\" award and gave our team" +
                " the opportunity to travel to the UK to participate in the YRS UK Hackathon." +
                " Skills used include HTML, CSS, JavaScript," +
                " Bootstrap, Google Maps API, and Yahoo! Weather API."
        }
        if (id=="SafeWalk") {
            slogan="Navigate without fear.";
            descrip="SafeWalk is an app that gives you walking directions throughout Manchester, UK that" +
                " avoids dangerous locations. The dangerous locations are determined with the Manchester " +
                "Police open data on crime locations, and a heat map displays these areas on the map " +
                "provided by the Google Maps API. An algorithm for directions detours around these " +
                "places above a certain danger threshold. SafeWalk also has a Report/Live Feed feature. " +
                "This feature gives the user a chance to report a concern or problem he encountered and submit" +
                " it. This report will update onto the website and display in real time to anyone else viewing " +
                "the website at the same time. In addition, SafeWalk's responsive design gives an optimal mobile" +
                " User Interface with an easy-to-access menu. This app was a hack made during the Young" +
                " Rewired State (YRS) Hackathon in the UK. Skills used include HTML, CSS, JavaScript, PHP, MySQL," +
                " Bootstrap, Google Maps API, Yahoo! Weather API, Express, Embedded JS, and MongoDB."
        }
        if (id=="Chainge") {
            slogan="The missing link to a more productive lifestyle.";
            descrip="Chainge is a task management app that helps users keep themselves motivated in the things they've" +
                " always wanted to do. People usually get highly motivated to do something one day," +
                " but then the next day lose that motivation. Chainge helps encourage and instill that " +
                "motivation. By adding to the daily tasks list, users try to complete their daily tasks consistently " +
                "and maintain a chain of the number of days they completed their tasks. By adding on to this chain" +
                "and completing their tasks without fail, users can feel rewarded in their progress by leveling up. The" +
                " calendar keeps a visual archive of tasks completed on certain days " +
                "and displays the chains of tasks that were completed daily. Chainge also has a reminders list" +
                " that can help a user track events to come or things to complete that may not be daily. " +
                "The reminders can also be sorted by category - Hobbies, Education, or Fitness. Skills " +
                "used include HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, and CodeIgniter."
        }


        $(".app-content.web").css("opacity", 0);
        setTimeout(function() {
            $(".project-icon.web").attr("src", img);
            $(".app-title.web").text(id).css("color",color);
            $(".app-slogan.web").text(slogan);
            $(".description.web").text(descrip);
            $(".app-btn.web").text("Visit " + id).css("background-color",color);
        }, 500);
        setTimeout(function() {
            $(".app-content.web").css("opacity", 1);
        }, 1000);

    });*/

    /*$(".side-icon.research").click(function() {
        $(".side-icon.research").removeClass("active");
        $(this).addClass("active");

        var id = $(this).attr("id");
        var img = $(this).css("background-image");
        img = img.replace('url(','').replace(')','').replace('.png','-main.jpg');
        var title;
        var slogan;
        var descrip;
        var btnLink;

        if (id=="Railgun") {
            title="Electromechanics";
            slogan="Investigation of Energy Conversion Efficiency in Railguns";
            descrip="Rail";
        }
        if (id=="Arm") {
            title="Mechanical Engineering";
            slogan="Development of Low-Cost Prosthesis through Utilization of Granular Jamming";
            descrip="Prosthetic";
        }
        if (id=="Car") {
            title="Fluid Dynamics";
            slogan="The Effect of Dimpled Surfaces on the Aerodynamics of Pinewood Derby Cars";
            descrip="Aerodynamics";
        }


        $(".app-content.research").css("opacity", 0);
        setTimeout(function() {
            $(".project-icon.research").attr("src", img);
            $(".app-title.research").text(title);
            $(".app-slogan.research").text(slogan);
            $(".description.research").text(descrip);
        }, 500);
        setTimeout(function() {
            $(".app-content.research").css("opacity", 1);
        }, 1000);

    });*/
});
