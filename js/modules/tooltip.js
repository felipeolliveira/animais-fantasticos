export default function initTooltip() {
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    }
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 15 + "px";
      this.tooltipBox.style.left = event.pageX + 15 + "px";
    }
  };

  function createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const textTooltip = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = createTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  if (window.innerWidth >= 700) {
    const tooltip = document.querySelectorAll("[data-tooltip]");

    tooltip.forEach(i => {
      i.addEventListener("mouseover", onMouseOver);
    });
  }
}
