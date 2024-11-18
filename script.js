const burgerMenu = document.getElementById("burger-menu");
const mobileMenu = document.getElementById("mobile-menu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");
let index = 0;

const updateCarousel = () => {
  const cardWidth = document.querySelector(".card").offsetWidth;
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
};

prevBtn.addEventListener("click", () => {
  const totalCards = document.querySelectorAll(".card").length;
  index = index === 0 ? totalCards - 1 : index - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  const totalCards = document.querySelectorAll(".card").length;
  index = index === totalCards - 1 ? 0 : index + 1;
  updateCarousel();
});
