export default function initScrollSuave() {

    const linksInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href1 = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href1);
        section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    
    }

    linksInterno.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}