const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  console.log(form);
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.classList.add("error");
    }
  });
});
