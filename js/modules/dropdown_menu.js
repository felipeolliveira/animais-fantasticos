import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach(item => {
    ["click", "touchstart"].forEach(userEvent => {
      item.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }
}
