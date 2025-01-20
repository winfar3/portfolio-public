document.getElementById('header__burger').onclick = function() {
    document.getElementById('header__burger').classList.toggle('active');
    document.getElementById('header__nav').classList.toggle('active');
    document.getElementById('header__button').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}