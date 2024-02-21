const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeClassActive();
    panel.classList.add("active");
  });
});

const removeClassActive = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
