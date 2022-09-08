const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `something went wrong, make sure that ${selector} exist or is typed correctly.`
  );
};
const toggle_links = selectElement(".links");
const toggle_Btn = selectElement(".mobile-button");

toggle_Btn.addEventListener("click", () => {
  toggle_Btn.classList.toggle("active");
  toggle_links.classList.toggle("active");
});
