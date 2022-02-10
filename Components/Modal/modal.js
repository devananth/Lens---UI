const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".modal__container");
const cancelBtn = document.querySelector(".cancelBtn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});
