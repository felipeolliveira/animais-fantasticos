/**
 * Scroll suave para links internos
 */
export default function initSmoothScroll() {
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
/**
 * end Scroll suave para links internos
 */
