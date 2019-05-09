import SmoothScroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initAnimaScroll from "./modules/scroll-anima.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/horario-funcionamento.js";
import initAnimaisFetch from "./modules/animais_fecth.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

initAnimaScroll();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
