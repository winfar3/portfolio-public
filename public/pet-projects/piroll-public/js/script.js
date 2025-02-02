$(document).ready(function(){
    $('.testimonials').slick({
        arrows: false,
        dots: true,
    });
})

/* Menu nav toggle */
$("#nav_toggle").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("active");
});