document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.className = "theme-" + btn.dataset.theme;
  });
});

ScrollReveal().reveal('.reveal-section', {
  delay: 200,
  distance: '20px',
  origin: 'bottom',
  interval: 100
});

tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff" }
  }
});