//--------------------Variables---------------//
//--Logo-----//
const logo = $('.mainLogo');

//--Nav Bar Variables-----//
const navBar = $('.mainNav')[0];
let navBarShow = function navBarShow() {
  $(navBar).css('visibility', 'visible');
}

let navBarHide = function navBarHide(){
  $(navBar).css('visibility', 'hidden');
}

let home = function home() {
    return $('#top').offset().top;
}
let portfolio = function portfolio() {
    return $('#portfolio').offset().top;
}
let contact = function contact() {
    return $('#contact').offset().top;
}

navBarHide();

//--Icon Bar Variables-----//
const iconBar = $('footer ul')[0];
let iconBarShow = function iconBarShow() {
  $(iconBar).css('visibility', 'visible');
}

let iconBarHide = function iconBarHide(){
  $(iconBar).css('visibility', 'hidden');
}

iconBarHide();

//-- Read More / Read Less Variables-----//
let codeSection = $('.projectSection')[0];
let closeCode = $('.closeCode')[0];
let readMeCode = $('.codeButton')[0];

let codeShow = function codeShow() {
  $(codeSection).show();
}

let codeHide = function codeHide() {
  $(codeSection).hide();
}


//----Variables to Hide and Show Back Buttons

let codePanelStart = function codePanelStart() {
    return $(readMeCode).offset().top;
}

let codePanelEnd = function codePanelEnd() {
    return $(closeCode).offset().top;
}

codeHide();

//---Variables to View Image Under info Card----//
let projects = $('.codeProjects');
let project = $('.project');
let skill = $('.designProjects');
let viewButton = $('h4');
let textOverlay = $('.textOverlay');



//-------------Functions Triggered on Scroll------------//
$(document).ready(function(){
  //-----Call Hide and Show Functions---//
  codePanelStart();
  codePanelEnd();
  home();
  contact();
  portfolio();


    $(window).scroll(function(){

            //-------------Hide/Show Nav & Social Icon Bar on Scroll---//
            if ($(this).scrollTop() < 80) {
                navBarHide();
                iconBarHide();
             } else {
                    navBarShow();
                    iconBarShow();
                  }

           //-------------Active Navigation Links on Scroll--------//
           //---Add CurrentLink Class to Home----//
           if (($(this).scrollTop()+ 50) < portfolio()) {
               $(".homeLink").addClass("currentLink");
               $(".portfolioLink").removeClass("currentLink");
               $(".contactLink").removeClass("currentLink");

           }
           else {
               $(".homeLink").removeClass("currentLink");
           }
           //---Add CurrentLink Class to Portfolio----//
           if (($(this).scrollTop()+ 50) >= portfolio() && $(this).scrollTop() < contact()) {
               $(".portfolioLink").addClass("currentLink");
                $(".contactLink").removeClass("currentLink");
               $(".homeLink").removeClass("currentLink");
           }
           else {
               $(".portfolioLink").removeClass("currentLink");
           }
           //---Add CurrentLink Class to Contact----//
           if (($(this).scrollTop()+ 50) >= contact()) {
               $(".contactLink").addClass("currentLink");
               $(".portfolioLink").removeClass("currentLink");
               $(".homeLink").removeClass("currentLink");
           }
           else {
               $(".contactLink").removeClass("currentLink");
           }

      });

});



// Read More/Read Less Button & closing section
$(document).ready(function(){
  //--Variables
    let codeTop;

            $(closeCode).on('click', function(e){
                      if (e.target) {
                         codeHide();
                         $(window).scrollTop(codeTop);
                      }
                      $(readMeCode).text('View More');
            });

            $(readMeCode).on('click', function(e){
                if ($(this).text() === 'View More') {
                    codeTop = $(window).scrollTop();
                    codeShow();
                    $(this).text('View Less');
                }
                else {
                      codeHide();
                      $(window).scrollTop(codeTop);
                      $(this).text('View More');
                  }
            });

});

//--- View Image Under info Card on View click----//
$(document).ready(function(){
         skill = $('.designProjects');
         viewButton = $('h4');

         viewButton.on('click', function(e) {
           let button = e.target;
           let imageContainer = button.nextSibling.nextSibling;
           let textOverlay = imageContainer.children[1];

           textOverlay.classList.toggle('clicked');

           if ($(e.target).text() === 'View') {
                $(textOverlay).addClass("clicked");
                $(e.target).text('Hide');
              }
              else {
                $(textOverlay).removeClass("clicked");
                $(e.target).text('View');
              }

         });

});
