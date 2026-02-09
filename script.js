let step = 0;
const steps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".step-dot");

function nextStep() {
  steps[step].classList.remove("active");
  dots[step].classList.remove("active");
  step++;
  steps[step].classList.add("active");
  dots[step].classList.add("active");
}

const form = document.getElementById("claimForm");
const loading = document.getElementById("loading");
const statusBox = document.getElementById("status");

if (localStorage.getItem("demoStatus")) {
  form.style.display = "none";
  statusBox.classList.remove("hidden");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  form.style.display = "none";
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    statusBox.classList.remove("hidden");
    localStorage.setItem("demoStatus", "submitted");
  }, 2000);
});

function resetDemo() {
  localStorage.removeItem("demoStatus");
  location.reload();
}
