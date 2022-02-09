const toastBtn = document.querySelector(".toastBtn");
const demoToast = document.querySelector(".demo-toast");

toastBtn.addEventListener("click", () => {
  demoToast.classList.add("active");
  setTimeout(() => demoToast.classList.remove("active"), 2000);
});
