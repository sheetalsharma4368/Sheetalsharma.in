// Typing Effect
const text = [
  "QMS Executive",
  "Digital Marketing",
  "BBA Student",
  "Excel & Quality Analyst"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      current.substring(0, j++);
  } else {
    document.getElementById("typing").textContent =
      current.substring(0, j--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === current.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === text.length) i = 0;
  }

  setTimeout(type, speed);
}

type();


// Scroll Reveal Animation
const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveal.forEach((sec) => {
    let top = sec.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

reveal.forEach((sec) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(80px)";
  sec.style.transition = "1s";
});


// Smooth Navbar Active Link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1800);
});
