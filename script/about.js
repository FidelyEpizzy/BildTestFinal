    $('#websites').addClass('visitedactive');
    $('.websites').removeClass('hide');

    $('.tabovi').click(function () {
        var tab = $(this).attr('id');
        console.log(tab);

        if (tab == "websites") {
            $('#websites').addClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.websites').removeClass('hide');
            $('.photography').addClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');
        }
        else if (tab == "photography") {
            $('#websites').removeClass('visitedactive');
            $('#photography').addClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.websites').addClass('hide');
            $('.photography').removeClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');

        } else if (tab == "seo") {
            $('#websites').removeClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').addClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.photography').addClass('hide');
            $('.seo').removeClass('hide');
            $('.applications').addClass('hide');
            $('.websites').addClass('hide');

        } else if (tab == "applications") {
            $('#websites').removeClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').addClass('visitedactive');

            $('.photography').addClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');
            $('.websites').removeClass('hide');
        } else {
             if (tab == "websites") {
            $('#websites').addClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.websites').removeClass('hide');
            $('.photography').addClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');
        }
        else if (tab == "photography") {
            $('#websites').removeClass('visitedactive');
            $('#photography').addClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.websites').addClass('hide');
            $('.photography').removeClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');

        } else if (tab == "seo") {
            $('#websites').removeClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').addClass('visitedactive');
            $('#applications').removeClass('visitedactive');

            $('.photography').addClass('hide');
            $('.seo').removeClass('hide');
            $('.applications').addClass('hide');
            $('.websites').addClass('hide');

        } else if (tab == "applications") {
            $('#websites').removeClass('visitedactive');
            $('#photography').removeClass('visitedactive');
            $('#seo').removeClass('visitedactive');
            $('#applications').addClass('visitedactive');

            $('.photography').addClass('hide');
            $('.seo').addClass('hide');
            $('.applications').addClass('hide');
            $('.websites').removeClass('hide');
        } 
          
        }
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
            $('body').css({'overflow-y':'visible'})
            
        }
    
    
    });