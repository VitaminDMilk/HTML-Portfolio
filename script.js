// 多语言 & 多主题内容
const content = { 
  /* 和上次相同，不再赘述，保持完整 */ 
};

// 切换主题 & 初始化对应动画
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  initBackground(theme);
}

// 切换语言
function setLanguage(lang) {
  const cfg = content[lang];
  document.getElementById('name').textContent        = cfg.name;
  document.getElementById('tagline').textContent     = cfg.tagline;
  document.getElementById('footer-name').textContent = cfg.footerName;
  document.getElementById('download').textContent    = cfg.nav.download;
  document.querySelectorAll('.nav-link').forEach(el => {
    el.textContent = cfg.nav[el.dataset.key];
  });
  ['education','skills','experience','projects','activities'].forEach(id => {
    document.getElementById(id).innerHTML = cfg[id];
  });
}

// 画布动画
function initBackground(theme) {
  const c = document.getElementById('bgcanvas');
  const ctx = c.getContext('2d');
  c.width = innerWidth; c.height = innerHeight;
  ctx.clearRect(0,0,c.width,c.height);

  if (theme === 'day') {
    // 生成 30 个飘浮气泡
    for (let i = 0; i < 30; i++) {
      const x = Math.random()*c.width;
      const y = Math.random()*c.height;
      const r = 20 + Math.random()*30;
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.beginPath();
      ctx.arc(x, y + (Math.sin(Date.now()/1000+i)*10), r, 0, 2*Math.PI);
      ctx.fill();
    }
  }
  else if (theme === 'night') {
    for (let i=0; i<200; i++) {
      ctx.fillStyle = 'rgba(255,255,255,'+Math.random()+')';
      ctx.beginPath();
      ctx.arc(Math.random()*c.width, Math.random()*c.height, Math.random()*1.5, 0, Math.PI*2);
      ctx.fill();
    }
  }
  // galaxy & cyberpunk 背景由 CSS 管理
}

// 页面加载完毕后初始化
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
  // 自行触发一次背景绘制
  initBackground('day');
});
