document.getElementById('header__burger').onclick = function() {
    document.getElementById('header').classList.toggle('active');
    document.getElementById('header__burger').classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}

$(document).ready(function(){
    $('.slider').slick();
});