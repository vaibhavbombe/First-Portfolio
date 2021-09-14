burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('visiblity');
    navlist.classList.toggle('visiblity');
    navbar.classList.toggle('nav-height');
})