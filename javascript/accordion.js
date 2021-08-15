export default function initAccordion() {

    const accordionLista = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo'
    if(accordionLista.length) {
    accordionLista[0].classList.add(activeClass);
    accordionLista[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionLista.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
    }
}