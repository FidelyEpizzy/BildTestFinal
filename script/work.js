$(document).ready(function () {
    $('.category-item').click(function () {
        var category = $(this).attr('id');

        if (category == 'all') {
            $('.item').addClass('hide');

            setTimeout(function () {
                $('.item').removeClass('hide');
            }, 300);

        }
        else {
            $('.item').addClass('hide');
            setTimeout(function () {

                $('.' + category).removeClass('hide');
            }, 300);

        }
    });
});

$(document).ready(function () {
    $('.pregled').click(function () {
        var pregledstr = $(this).attr('id');

        if (pregledstr == 'lista') {
            $('.portfolio').addClass('listapregled');
        }
        else if (pregledstr == 'grid') {
            $('.portfolio').removeClass('listapregled');
        }

    });
});
     $(document).ready(function () {
    $("#navbar-work .nav-link").html("ALL");
    $('.dropdown-item').click(function () {

        var selected = $(this).attr('id'),
            mess = selected.toUpperCase();

        $("#navbar-work .nav-link ").html(mess);

    });});

   
var ctscan = 0;
$('#mobile-navigation').click(function () {
    var navMsg = $(this).attr('id');
    
    if ($('.navbar').click) {
        ctscan++;
    }
    if (ctscan%2==1) {
        $('body').css({'overflow-y':'hidden'})
        $('.mobile').removeClass('hide');

    } else {
        $('body').css({'overflow-y':'visible'})
        
    }


});
    