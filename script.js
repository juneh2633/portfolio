const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".rail-dot"));
const currentSlide = document.querySelector("#currentSlide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let active = 0;

function padSlide(number) {
  return String(number + 1).padStart(2, "0");
}

function setSlide(index) {
  active = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-current", slideIndex === active);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === active);
  });

  currentSlide.textContent = padSlide(active);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => setSlide(index));
});

prevBtn.addEventListener("click", () => setSlide(active - 1));
nextBtn.addEventListener("click", () => setSlide(active + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    setSlide(active + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    setSlide(active - 1);
  }
});

if (window.lucide) {
  window.lucide.createIcons();
}
