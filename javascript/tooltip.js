export default function initTooltip() {
    
const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) =>{
    item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMousemove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMousemove);
   
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
    handleEvent() {
       this.tooltipBox.remove();
       this.element.removeEventListener('mouseleave', onMouseLeave);
       this.element.removeEventListener('mousemove', onMousemove);
    }
}

const onMousemove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 'px';
        this.tooltipBox.style.left = event.pageX + 'px';
    }
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
    }
}
