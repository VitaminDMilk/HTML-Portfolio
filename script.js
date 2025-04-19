// 文本 & 导航翻译与各区块 HTML
const content = {
  en: {
    nav: {
      education: 'Education',
      skills:    'Skills',
      experience:'Experience',
      projects:  'Projects',
      activities:'Activities',
      download:  'Download Resume'
    },
    name:    'Wei (David) Dai',
    tagline:'Aspiring Embedded & AI Engineer',
    sections: {
      education: `
        <h2>Education</h2>
        <div>
          <strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
          <p>Major: Computer Engineering · Minor: Computer Science · GPA 3.65/4.0 · Dean’s List & Honors</p>
        </div>
        <div>
          <strong>Wyoming Seminary Prep School 2020‑08 – 2023‑05</strong>
          <p>High School Diploma · GPA 3.65/4.0</p>
        </div>`,
      skills: `
        <h2>Skills</h2>
        <p>
          <strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br/>
          <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br/>
          <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)
        </p>`,
      experience: `
        <h2>Internships & Work Experience</h2>
        <div>
          <strong>Utopilot Internship – SAIC Summer 2024</strong>
          <p>Worked on perception for autonomous vehicles · Point‑cloud & OCC visual conversion.</p>
        </div>
        <div>
          <strong>IT Helpdesk – Purdue Fort Wayne 2024 – 2025</strong>
          <p>Front‑line tech support · Managed loaner laptops · Troubleshooting & escalation.</p>
        </div>`,
      projects: `
        <h2>Projects</h2>
        <div>
          <strong>Black Jack Simulator</strong>
          <p>JavaFX GUI Blackjack game featuring OOP, UML, event‑driven logic, custom styling.</p>
        </div>
        <div>
          <strong>Auto Loan Calculator</strong>
          <p>JavaFX GUI app to compute loan payments based on price, tax rate, and financing details.</p>
        </div>
        <div>
          <strong>Bank Simulator</strong>
          <p>Console‑based Java app for checking balances, deposits, and loan requests.</p>
        </div>`,
      activities: `
        <h2>Activities & Competitions</h2>
        <ul>
          <li>IEEE Xtreme 2023–2024: Team leader; placed Top 50.</li>
          <li>National Cyber League 2023–2024: Participated in cybersecurity events.</li>
          <li>Global Game Jam 2024: Led a 48‑hour game dev challenge.</li>
          <li>Community Service 2018–2021: Taught basketball to children with special needs in Karachi.</li>
          <li>Varsity Cross Country & Swim 2021–2023: Weekly meets & district championships.</li>
        </ul>`
    }
  },
  zh: {
    nav: {
      education: '教育',
      skills:    '技能',
      experience:'经历',
      projects:  '项目',
      activities:'活动',
      download:  '下载简历'
    },
    name:    '戴维',
    tagline:'嵌入式与人工智能工程师',
    sections: {
      education: `
        <h2>教育</h2>
        <div>
          <strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
          <p>主修：计算机工程 · 辅修：计算机科学 · GPA 3.65/4.0 · 荣誉名单</p>
        </div>
        <div>
          <strong>怀俄明中学 2020年8月 – 2023年5月</strong>
          <p>高中毕业 · GPA 3.65/4.0</p>
        </div>`,
      skills: `
        <h2>技能</h2>
        <p>
          <strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br/>
          <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br/>
          <strong>语言：</strong>中文（母语）、英文（托福 101分）、西班牙语（中级）
        </p>`,
      experience: `
        <h2>实习与工作经历</h2>
        <div>
          <strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
          <p>参与点云与 OCC 图像转换的自动驾驶感知项目。</p>
        </div>
        <div>
          <strong>IT技术支持 – 普渡大学韦恩堡分校 2024–2025</strong>
          <p>一线技术支持 · 笔记本管理 · 故障排查与升级。</p>
        </div>`,
      projects: `
        <h2>项目</h2>
        <div>
          <strong>二十一点游戏模拟器</strong>
          <p>使用 JavaFX 构建图形界面游戏，应用 OOP、UML、事件驱动逻辑。</p>
        </div>
        <div>
          <strong>汽车贷款计算器</strong>
          <p>JavaFX GUI 应用，根据价格、税率和融资详情计算月供。</p>
        </div>
        <div>
          <strong>银行模拟器</strong>
          <p>基于控制台的 Java 应用，用于检查余额、存款和贷款请求。</p>
        </div>`,
      activities: `
        <h2>活动与竞赛</h2>
        <ul>
          <li>IEEE Xtreme 编程竞赛 (2023–2024)</li>
          <li>全国网络联盟赛 (2023–2024)</li>
          <li>全球游戏创作节 (2024)</li>
          <li>社区志愿服务 (2018–2021)</li>
          <li>越野与游泳校队 (2021–2023)</li>
        </ul>`
    }
  }
};

// 切换语言
function setLanguage(lang) {
  document.getElementById('name').textContent = content[lang].name;
  document.getElementById('tagline').textContent = content[lang].tagline;
  // 导航文字
  document.querySelectorAll('.nav-link[data-section]').forEach(el => {
    const sec = el.dataset.section;
    el.textContent = content[lang].nav[sec];
  });
  // 主内容
  Object.keys(content[lang].sections).forEach(sec => {
    document.getElementById(sec).innerHTML = content[lang].sections[sec];
  });
  // 页脚
  document.getElementById('footer-name').textContent = content[lang].name;
  const emailEl = document.getElementById('footer-email');
  emailEl.textContent = 'david0322v@gmail.com';
  emailEl.href = 'mailto:david0322v@gmail.com';
}

// 切换主题 & 重绘背景
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  initBackground(theme);
}

// Canvas 气泡动画
function initBackground(theme) {
  const canvas = document.getElementById('bgcanvas');
  const ctx = canvas.getContext('2d');
  cancelAnimationFrame(canvas._anim);
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const bubbles = [];
  const colors = {
    day:   'rgba(100,149,237,0.3)',
    night: 'rgba(255,255,255,0.3)',
    ocean: 'rgba(72,209,204,0.3)',
    blush: 'rgba(255,182,193,0.3)'
  };

  for (let i = 0; i < 40; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 10 + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colors[theme] || colors.day;
    bubbles.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
      ctx.fill();
      b.x += b.vx; b.y += b.vy;
      if (b.x - b.r > canvas.width) b.x = -b.r;
      if (b.x + b.r < 0) b.x = canvas.width + b.r;
      if (b.y - b.r > canvas.height) b.y = -b.r;
      if (b.y + b.r < 0) b.y = canvas.height + b.r;
    });
    canvas._anim = requestAnimationFrame(draw);
  }
  draw();
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
  // 默认：英文 + 白天
  setLanguage('en');
  setTheme('day');

  // ScrollReveal 滑动出现
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });

  // 主题按钮
  document.querySelectorAll('.theme-switcher button').forEach(b => {
    b.addEventListener('click', () => setTheme(b.dataset.theme));
  });
  // 语言按钮
  document.querySelectorAll('.language-switcher button').forEach(b => {
    b.addEventListener('click', () => setLanguage(b.dataset.lang));
  });
  // 窗口 resize 时重置背景
  window.addEventListener('resize', () => {
    const current = document.body.className.split('-')[1];
    initBackground(current);
  });
});

