$(document).ready(function(){
    $('.karusel').slick({
 centerMode: true,
 centerPadding: '60px',
 slidesToShow: 3,
 speed:1500,
 index: 2,
 responsive: [
  {
    breakpoint: 992,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
   
   {
     breakpoint: 768,
     settings: {
       arrows: true,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 2
     }
   },
   {
    breakpoint: 480,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
 ]
});
   });

