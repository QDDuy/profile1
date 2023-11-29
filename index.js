$(document).ready(function () {
    $('img').hide();
    $(' img').each(function(index) {
        $(this).delay(1000 * index).slideDown(600); 
    });

    $('.nav-left').hide();
    $('.nav-left').each(function(index) {
        $(this).delay(1000 * index).slideDown(200); 
    });
    

    $('.header-left').animate( {
        marginLeft:30 
        
    });
});
