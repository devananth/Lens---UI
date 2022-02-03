const closeBtn = document.querySelector(".alert-dismiss .close-btn");

closeBtn.addEventListener("click", () => {
  const iconContainer = closeBtn.parentElement;

  const alert = iconContainer.parentElement;

  alert.remove();
});
