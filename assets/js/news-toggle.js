document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-news-toggle]").forEach((button) => {
    const news = button.closest(".news");
    if (!news) return;

    const extraItems = news.querySelectorAll("[data-news-extra]");
    if (!extraItems.length) return;

    const label = button.querySelector("[data-news-toggle-label]");
    button.hidden = false;

    button.addEventListener("click", () => {
      const shouldExpand = button.getAttribute("aria-expanded") !== "true";

      extraItems.forEach((item) => {
        item.hidden = !shouldExpand;
      });

      button.setAttribute("aria-expanded", shouldExpand.toString());
      if (label) {
        label.textContent = shouldExpand ? button.dataset.lessLabel : button.dataset.moreLabel;
      }
    });
  });
});
