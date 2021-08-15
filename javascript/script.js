import ScrollSuave from './scroll-suave.js';
import Accordion from './accordion.js';
import initTabNav from './tabnav.js';
import initModal from './modal.js';
import initTooltip from './tooltip.js';
import initDropDownMenu from './dropdown-menu.js';
import initiMenuMobile from './menu-mobile.js';
import initAnimaNumeros from './anima-numeros.js'
import initFuncionamento from './funcionamento.js';
import initFetchAnimais from './fecht-animais.js';
import initFetchBitcoin from './fetch-bitcoin.js';
import initAnimaScroll from './scroll-animação.js';

const scrollSuave = new ScrollSuave('[data-menu="suave" a[href^="#"]')
scrollSuave.init();

const Accordion = new Accordion('[data-anime="accordion"] dt');
Accordion.init();


initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initiMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();


