export default class SmoothScroll {
  constructor(link, options) {
    this.internalLinks = document.querySelectorAll(link);

    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    if (this.internalLinks.length) {
      this.internalLinks.forEach(link => {
        link.addEventListener("click", this.scrollToSection);
      });
    }
  }

  init() {
    this.addLinkEvent();
    return this;
  }
}
