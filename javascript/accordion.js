export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

     toggleAccordion(item) {
        item.classList.toggle(activeClass)
        item.nextElementSibling.classList.toggle(this.activeClass)
    }

    //adiciona o evento ao accordion

    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    //iniciar função

    init() {
        if(this.accordionList.length) {
            this.toggleAccordion(this.accordionList[0])
            this.addAccordionEvent();
        } return this;
    }

}

