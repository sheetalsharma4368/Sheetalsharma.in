// Typing Animation
new Typed("#typing", {
  strings: [
    "QMS Executive",
    "Digital Marketing Learner",
    "Web Developer",
    "Excel Expert"
  ],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1200,
  loop: true
});

// Particle Background
tsParticles.load("particles", {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    number: {
      value: 70
    },
    color: {
      value: "#38bdf8"
    },
    links: {
      enable: true,
      color: "#38bdf8",
      distance: 150
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 3
    },
    opacity: {
      value: 0.5
    }
  },
  background: {
    color: "#0f172a"
  }
});

// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});
