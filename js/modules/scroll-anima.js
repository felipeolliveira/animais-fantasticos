const activeClass = "ativo";

/**
 * Animation on Scroll
 */

export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    sections.forEach(section => {
      const middleWindow = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const inSectionVisible = sectionTop - middleWindow < 0;

      if (inSectionVisible) section.classList.add(activeClass);
      else if (section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
