import "../css/index.css";

// Get a reference to the element where you want to display the cursor position
const cursorPositionElementX = document.getElementById("cursor-position-x");

// Add a mousemove event listener to the document
document.addEventListener("mousemove", (e) => {
  // Get the
  // Get the current mouse cursor position
  const x = e.clientX / window.innerWidth;

  // Update the content of the element with the cursor position
  cursorPositionElementX.textContent = `${x}`;
});

const cursorPositionElementY = document.getElementById("cursor-position-y");

// Add a mousemove event listener to the document
document.addEventListener("mousemove", (e) => {
  // Get the current mouse cursor position

  const y = e.clientY / window.innerHeight;

  // Update the content of the element with the cursor position
  cursorPositionElementY.textContent = `${y}`;
});

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
