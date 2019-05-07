const activeClass = "ativo";

/**
 * Inicialização da navegação por tabs
 */
function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove(activeClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();
/**
 * end navegação por tabs
 */

/**
 * Accordion de faqs
 */
function initAccordionList() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach(item => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordionList();
/**
 * end Accordion de faqs
 */

/**
 * Scroll suave para links internos
 */
function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // forma alternativa
    // const topoSection = section.offsetTop;
    // window.scrollTo({
    //   top: topoSection,
    //   behavior: 'smooth',
    // });
  }

  if (linksInternos.length) {
    linksInternos.forEach(link => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
initSmoothScroll();
/**
 * end Scroll suave para links internos
 */

/**
 * Animation on Scroll
 */

function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    sections.forEach(section => {
      const middleWindow = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const inSectionVisible = sectionTop - middleWindow < 0;

      if (inSectionVisible) section.classList.add(activeClass);
      else section.classList.remove(activeClass);
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
