const sections = document.querySelectorAll(".menu-section");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = header.offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 50;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});