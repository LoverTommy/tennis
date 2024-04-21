const openMenu = document.getElementById('burgerMenuOpen');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('burgerMenu');

openMenu.addEventListener('click', ()=>{
    menu.style.display = 'block';
})

closeMenu.addEventListener('click', ()=>{
    menu.style.display = 'none';
})