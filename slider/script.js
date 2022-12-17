$(document).ready(function(){
    $('.slider-wrapper').slick({
        arrows:false,
        dots:true,
    });
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
    
});



