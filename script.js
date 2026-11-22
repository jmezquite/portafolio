const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");
const currentYear = document.querySelector("#current-year");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

currentYear.textContent = String(new Date().getFullYear());
