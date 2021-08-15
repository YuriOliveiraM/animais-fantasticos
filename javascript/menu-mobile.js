import outsideClick from './outsideclick.js'

export default function initiMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
    
    if(menuButton) {
    function openMenu(event) {
        menuButton.classList.toggle('active');
        menuList.classList.toggle('active');
    }
    
    eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
    })
}

}


