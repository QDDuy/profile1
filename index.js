$(document).ready(function () {
    $('img').hide();
    $(' img').each(function(index) {
        $(this).delay(2000 * index).fadeIn(2000); 
    });

    $('.nav-right').hide();
    $('.nav').animate( {
        marginTop:100
    },1000);
    $('.nav-right').each(function(index) {
        $(this).delay(2000 * index).fadeIn(2000); 
    });
    $('.list-item ').animate( {
        marginTop:-10
    },700);

    $('.header-left').animate( {
        marginLeft:30 
        
    });
});
