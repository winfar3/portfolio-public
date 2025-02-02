const menu = document.getElementById("navigation");
menuTopPossition = menu.getBoundingClientRect().y;

window.onscroll = function showmenu() {
    if (window.pageYOffset > menuTopPossition) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
}

document.getElementById('navigation__burger').onclick = function() {
    document.getElementById('navigation').classList.toggle('active');
    document.getElementById('navigation__burger').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}