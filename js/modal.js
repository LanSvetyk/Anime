const modal = document.querySelector(".search-model");
const modalBtn = document.querySelector(".icon_search");
const iconClose = modal.querySelector(".search-close-switch");
const searchInput = modal.querySelector("#search-input");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

iconClose.addEventListener("click", () => {
  modal.style.display = "none";
});

searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
});
