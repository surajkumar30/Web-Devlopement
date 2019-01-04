/*--------------Service--------------*/
$(document).ready(function(){
    //Animate on scroll
    new WOW().init();
});

/*--------------Work--------------*/
$(document).ready(function(){
    //Magnify Popup
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
          }
    });
});

/*--------------Team--------------*/
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 3 ,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                item:1
            },
            // breakpoint from 480 up
            480 : {
                item:2
            },
            // breakpoint from 768 up
            768 : {
                item:3
            }
        }
    });
  });

  /*--------------Testimonials--------------*/
$(document).ready(function(){
    $("#customers-testimonials").owlCarousel({
        items: 1 ,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
  });

  /*--------------Stats(Counter)--------------*/
  $(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
  });

  /*--------------Clients--------------*/
$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items: 6 ,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                    item:1
            },
            // breakpoint from 480 up
            480 : {
                    item:3
            },
            // breakpoint from 768 up
            768 : {
                    item:5
            },
            // breakpoint from 768 up
            992 : {
                    item:6
            }
        }
    });
  });

   /*--------------Navigation--------------*/
   //show hide transperent black navigation

/*$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            //hide nav
            $("nav").removeClass("vesco-top-nav");
        }else{
            //show nav
            $("nav").addClass("vesco-top-nav");
        }
    });
});*/

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            //hide nav
            $("#back-to-top").fadeOut();
        }else{
            //show nav
            $("#back-to-top").fadeIn();
        }
    });
});

//smooth scrolling
$(document).ready(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get/return id like #about,#team and #work ete..
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        },1250 );  /*, "easeOutExpo"*/
    });
});

//Close Mobile Menu Onclick

$(document).ready(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});



















