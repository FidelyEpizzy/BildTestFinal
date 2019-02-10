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
