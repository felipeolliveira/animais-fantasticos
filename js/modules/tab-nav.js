export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    const direcao = this.tabContent[index].dataset.anime;

    this.tabContent.forEach(section => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addEventTabNav() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEventTabNav();
      return this;
    }
  }
}
