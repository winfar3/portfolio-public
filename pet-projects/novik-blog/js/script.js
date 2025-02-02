document.getElementById('navigation__burger').onclick = function() {
    document.getElementById('navigation__burger').classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
    document.getElementById('lang-nav').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}

const menu = document.getElementById("nav");
menuTopPossition = menu.getBoundingClientRect().y;

window.onscroll = function showmenu() {
    if (window.pageYOffset > menuTopPossition) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
}

let inst = document.getElementsByClassName('nav__link');

for (ins of inst) {
    if (ins.onclick = function() {
        document.getElementById('navigation__burger').classList.remove('active');
        document.getElementById('nav').classList.remove('active');
        document.getElementById('lang-nav').classList.remove('active');
        document.getElementById('body').classList.remove('lock');
    });
}