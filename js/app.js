document.addEventListener('DOMContentLoaded',function() {
    eventListeners();
    darkMode();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener("click", navegacionResponsive)
};

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar')
    } else {
        navegacion.classList.add('mostrar')
    }
}

function darkMode() {
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    darkModeBtn.addEventListener("click", function(){
        document.body.classList.toggle('dark-mode')
    })
};


