
$(document).ready(function () {

    $('.karusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.karusel1'
    });
    $('.karusel1').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.karusel',
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1058,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    arrows: false,

                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,

                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,

                    centerMode: true,
                    centerPadding: '30px'
                }
            },
        ]
    });
});
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
  
});


var ctscan = 0;
$('.navbar').click(function () {
    var navMsg = $(this).attr('id');
    
    if ($('.navbar').click) {
        ctscan++;
    }
    if (ctscan%2==1) {
        $('body').css({'overflow-y':'hidden'})
        $('.mobile').removeClass('hide');

    } else {
        $('body').css({'overflow-y':'vissible'})
        
    }


});