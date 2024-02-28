const progress = document.querySelector(".progress");
const start = document.querySelector(".start-progress");
const startLabel = start.textContent;

start.addEventListener("click", function () {
  start.setAttribute("disabled", true);
  start.style.setProperty("opacity", 0.5);
  start.textContent = "PROCESSING ...";
  let current = 10;
  let process = setInterval(() => {
    progress.setAttribute("data-value", current);
    progress.style.setProperty("--progress", `${current}%`);

    if (current <= 33) {
      progress.style.setProperty("--primary", "#E74C3C");
    } else if (current > 33 && current <= 66) {
      progress.style.setProperty("--primary", "#3498DB");
    } else {
      progress.style.setProperty("--primary", "#2ECC71");
    }

    if (current === 100) {
      clearInterval(process);
      start.removeAttribute("disabled");
      start.style.removeProperty("opacity");

      start.textContent = startLabel;
      current = 0;
    }

    current += 10;
  }, 500);
});
