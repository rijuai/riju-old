class SplitSlide {
  static get toolbox() {
    return {
      title: "Split Slide",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>`,
    };
  }

  render() {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Split Slide";

    div.className = `w-full flex items-center justify-center before:flex-1 before:border before:border-dashed after:flex-1 after:border after:border-dashed py-4`;

    div.appendChild(paragraph);

    return div;
  }

  save() {
    return;
  }
}

export default SplitSlide;
