$( document ).ready(function() {
  
  
    var audioplayer = document.getElementById("audio-player");
    $(".audio").click(function()
    {
    if (audioplayer.paused) {
       audioplayer.play();
       $('.audio i').removeClass('fa-volume-mute').addClass('fa-volume-up');  
       $('.carousel').carousel({
        interval: 1200
      });  
    }   
    else {
       audioplayer.pause();
       $('.audio i').removeClass('fa-volume-up').addClass('fa-volume-mute'); 
       $('.carousel').carousel({
        interval: 1200
      });
    }
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



});