$(document).ready( function() {

  var index = Math.floor(Math.random() * 4) + 1;

  switch (index) {
    case 1:
      changeTheme("mountain");
      break;
    case 2:
      changeTheme("lake");
      break;
    case 3:
      changeTheme("sunset");
      break;
    case 4:
      changeTheme("forest");
      break;

  }

  //adjust background size before showing contents on screen
  adjustBgSize();

  //open menu
  $(".menu-button-wrapper").click(function() {
    var menuAndButton = $(".side-menu, .menu-button");
    if ( !menuAndButton.hasClass("open") ) {
      menuAndButton.addClass("open").removeClass("normal");
      $(".transparent-overlay.menu").addClass("menu-open").unbind().click( function () {
        menuAndButton.addClass("normal").removeClass("open");
        $(this).removeClass("menu-open");
      });
    }
    else {
      menuAndButton.addClass("normal").removeClass("open");
      $(".transparent-overlay.menu").removeClass("menu-open");
    }
  });

  //open section
  $(".home-wrapper .button-wrapper .btn").click( function() {
    var text = $(this).text();

    // if (text != "Resume") {
      populateSection(text);
      $(".section-wrapper, .back-button").addClass("open");
      $(".transparent-overlay.section").addClass("section-open");

      $(".back-button").unbind().click( function() {
        $(".section-wrapper, .back-button").removeClass("open");
        $(".transparent-overlay.section").removeClass("section-open");
      });
    // }
  });

  //change theme
  $(".side-menu .list-item.theme").click( function() {
    var that = $(this);
    if (!that.hasClass("active-item")) {
      changeTheme(that.data("theme"));
    }
  });

  $(window).resize(function() {
    adjustBgSize();
  });

  //show page when loading complete
  $(window).load(function() {
    //unload the preloaded normal bg's done via side menu
    $(".side-menu .list-item.theme").removeClass("active");
    //allow preloaded bg's to unload
    setTimeout( function() { $(".side-menu, .menu-button").addClass("normal").removeClass("open") }, 300);
    $(".section-wrapper, .back-button").removeClass("open");
    setTimeout(function() { $("html").removeClass("loading") }, 700);
  });

});

function changeTheme( theme ) {
    $("html").removeClass("mountain lake sunset forest").addClass(theme + " active");
    $(".bg-blur").removeClass("mountain lake sunset forest").addClass(theme);
    var sideMenu = $(".side-menu");
    sideMenu.find($(".list-item")).removeClass("active-item");
    sideMenu.find($(".list-item." + theme)).addClass("active-item");
}

function adjustBgSize() {

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(".bg-blur").width(windowWidth); //adjust size of the blur backgrounds
  if ( windowWidth < 1.60 * windowHeight ) {
    $("html, .bg-blur").css("background-size", "auto 100%");
  } else {
    $("html, .bg-blur").css("background-size", "100% auto");
  }
}

function populateSection( title ) {
  var sectionContainer = $(".section-wrapper .content .container");
  sectionContainer.html('').scrollTop(0);
  //for things that are not resume
  if (title != "Resume") {
    $.each( contentInfo[title].projects, function(i, val) {
      sectionContainer.append(
        '<div class="row">' +
          '<div class="col-sm-6">' +
              '<img src="img/' + this.image + '" class="project-picture"/>' +
          '</div>' +
          '<div class="col-sm-6">' +
              '<div class="project-name">' + this.title + '</div>' +
              '<div class="project-slogan">' + this.slogan + '</div>' +
              '<div class="project-description">' + this.description + '</div>' +
              '<a href=' + this.link + ' target="_blank">' +
                '<button class="btn" style="background-color:' + (this.hasOwnProperty('color') ? this.color : '') + ';">' +
                  'View ' + (this.abstract ? 'abstract' : this.title )  +
                '</button>' +
              '</a>' +
          '</div>' +
        '</div>'
      );
    });
  }

  //for resume
  else {
    sectionContainer.append(
      '<div class="row">' +
        '<div class="col-sm-12">' +
          '<div class="project-name"><i class="fa fa-user"></i><br />Awards</div>' +
          '<div class="project-description resume"></div>' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-sm-12">' +
          '<div class="project-name"><i class="fa fa-trophy"></i><br />Activities</div>' +
          '<div class="project-description resume"></div>' +
        '</div>' +
      '</div>'
    );

    $.each( contentInfo[title].awards, function(i, val) {
      sectionContainer.find($(".project-description")).first().append('<div class="resume-line">' + this + '</div>');
    });

    $.each( contentInfo[title].activities, function(i, val) {
      sectionContainer.find($(".project-description")).last().append('<div class="resume-line">' + this + '</div>');
    });
  }
}

  //for resume
  // else {
  //   sectionContainer.append(
  //     '<div class="row" id="pdf-row">' +
  //     '<embed src="http://gretahuang.me/resume.pdf" width="100%" height="600" type="application/pdf">' +
  //     '</div>'
  //   );

  //   embedpdf();
  // }

  // function embedPDF(){

  //   var myPDF = new PDFObject({ 

  //     url: 'http://gretahuang.me/resume.pdf'

  //   }).embed('pdf-row'); 
  //   // Be sure your document contains an element with the ID 'pdf-row' 

  // }
}