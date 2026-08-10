window.addEventListener('scroll', function(){
    const navigationMenu = document.getElementById('menu-dropdown');
    if(window.scrollY >240) {
        navigationMenu.classList.add('scrolled');
    } else{
        navigationMenu.classList.remove('scrolled');
    }
});