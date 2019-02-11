var maxNumberOfChars = 10;
    $('#contactMessage').on('keyup', function(event) {
        var numberOfChars = this.value.length,
            message = '',
            remmainingChars = maxNumberOfChars - numberOfChars;
        
        // Disable submit button 
        if (numberOfChars >= 10) {
            // disable submit button
            document.getElementById("button").disabled = true;
            
        }

        // Set message
        if (remmainingChars >= 0) {
            message = "Remaining characters : " + remmainingChars;
            document.getElementById("button").disabled = false;
        } else {
           
            message = "Maximum number of " + maxNumberOfChars + " characters exceeded ";
        }

        // Show message
        $("#reamainingC").html(message);
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