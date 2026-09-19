// Fill in your real profile URLs here once — every link with a matching
// data-link attribute (nav + footer) gets updated automatically.
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/your-handle",
  github:   "https://github.com/your-handle",
  leetcode: "https://leetcode.com/your-handle",
  tuf:      "https://takeuforward.org/plus/profile/your-handle"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (SOCIAL_LINKS[key]) {
    el.setAttribute("href", SOCIAL_LINKS[key]);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".topbar__nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
