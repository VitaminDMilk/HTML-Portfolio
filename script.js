// —— 省略 content 对象 ——
// 和之前完全一样，只要保持“en/zh”两套内容齐全即可

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  initBackground(theme);
}

function setLanguage(lang) {
  const cfg = content[lang];
  document.getElementById('name').textContent = cfg.name;
  document.getElementById('tagline').textContent = cfg.tagline;
  document.getElementById('footer-name').textContent = cfg.footerName;
  document.getElementById('download').textContent = cfg.nav.download;
  document.querySelectorAll('.nav-link').forEach(el => {
    el.textContent = cfg.nav[el.dataset.key];
  });
  ['education','skills','experience','projects','activities'].forEach(id => {
    document.getElementById(id).innerHTML = cfg[id];
  });
}

function initBackground(theme) {
  const c = document.getElementById('bgcanvas');
  const ctx = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  ctx.clearRect(0, 0, c.width, c.height);

  if (theme === 'day') {
    // 浅蓝色气泡
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * c.width;
      const y0 = Math.random() * c.height;
      const r = 20 + Math.random() * 30;
      ctx.fillStyle = 'rgba(0,150,255,0.15)';
      ctx.beginPath();
      ctx.arc(x, y0 + Math.sin((Date.now() / 1000) + i) * 20, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (theme === 'night') {
    // 星点
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.8})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * c.width,
        Math.random() * c.height,
        Math.random() * 1.5,
        0, Math.PI * 2
      );
      ctx.fill();
    }
  }
  // galaxy & cyberpunk 关掉脚本动画，背景已由 CSS 处理
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  setTheme('day');
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 150
  });
  initBackground('day');
});
