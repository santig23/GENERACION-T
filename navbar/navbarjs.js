function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function toggleSubMenu() {
    var submenu = document.getElementById('productos-dropdown');
    submenu.classList.toggle('open');
}

document.addEventListener('click', function(event) {
    var isClickInsideMenu = document.getElementById('menu').contains(event.target);
    if (!isClickInsideMenu) {
        var submenu = document.getElementById('productos-dropdown');
        submenu.classList.remove('open');
    }
});