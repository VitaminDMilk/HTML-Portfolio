// 文本内容
const content = {
  en: {
    name:     "Wei (David) Dai",
    tagline:  "Aspiring Embedded & AI Engineer",
    education:`<h2>Education</h2>
      <div><strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
      <p>Major: Computer Engineering • Minor: Computer Science • GPA: 3.65/4.0 • Dean’s List & Honors</p></div>
      <div><strong>Wyoming Seminary Prep School 2020‑08 – 2023‑05</strong>
      <p>High School Diploma • GPA: 3.65/4.0</p></div>`,
    skills:   `<h2>Skills</h2>
      <p><strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
      <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br>
      <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)</p>`,
    experience:`<h2>Internships & Work Experience</h2>
      <div><strong>Utopilot Internship – SAIC Summer 2024</strong>
      <p>Worked on perception for autonomous vehicles • Point‑cloud & OCC visual conversion.</p></div>
      <div><strong>IT Helpdesk – Purdue Fort Wayne 2024–2025</strong>
      <p>Front‑line tech support • Managed loaner laptops • Troubleshooting & escalation.</p></div>`,
    projects: `<h2>Projects</h2>
      <div><strong>Black Jack Simulator</strong>
      <p>JavaFX GUI Blackjack game featuring OOP, UML, event‑driven logic, custom styling.</p></div>
      <div><strong>Auto Loan Calculator</strong>
      <p>JavaFX GUI app to compute loan payments based on price, tax rate, and financing details.</p></div>
      <div><strong>Bank Simulator</strong>
      <p>Console‑based Java app for checking balances, deposits, and loan requests.</p></div>`,
    activities:`<h2>Activities & Competitions</h2>
      <ul>
        <li>IEEE Xtreme 2023–2024: Team leader; placed Top 50</li>
        <li>National Cyber League 2023–2024</li>
        <li>Global Game Jam 2024</li>
        <li>Community Service 2018–2021</li>
        <li>Varsity Cross Country & Swim 2021–2023</li>
      </ul>`,
    download: "Download Resume"
  },
  zh: {
    name:     "戴维",
    tagline:  "嵌入式与人工智能工程师",
    education:`<h2>教育</h2>
      <div><strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
      <p>主修：计算机工程 • 辅修：计算机科学 • GPA 3.65/4.0 • 荣誉名单</p></div>
      <div><strong>怀俄明中学 2020年8月 – 2023年5月</strong>
      <p>高中毕业 • GPA 3.65/4.0</p></div>`,
    skills:   `<h2>技能</h2>
      <p><strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
      <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br>
      <strong>语言：</strong>中文（母语）、英文（托福101分）、西班牙语（中级）</p>`,
    experience:`<h2>实习与工作经历</h2>
      <div><strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
      <p>参与点云与OCC图像转换的自动驾驶感知项目。</p></div>
      <div><strong>IT技术支持 – 普渡大学韦恩堡分校 2024–2025</strong>
      <p>技术支持 • 设备管理 • 故障排查。</p></div>`,
    projects: `<h2>项目</h2>
      <div><strong>二十一点模拟器</strong>
      <p>使用JavaFX构建图形界面游戏，应用OOP、UML、事件驱动逻辑。</p></div>
      <div><strong>汽车贷款计算器</strong>
      <p>基于JavaFX的GUI应用，根据车价、税率等计算月供。</p></div>
      <div><strong>银行模拟器</strong>
      <p>基于控制台的Java应用，模拟存取款与贷款请求流程。</p></div>`,
    activities:`<h2>活动与竞赛</h2>
      <ul>
        <li>IEEE Xtreme编程竞赛 (2023–2024)</li>
        <li>全国网络联赛 (2023–2024)</li>
        <li>全球游戏创作节 (2024)</li>
        <li>社区志愿服务 (2018–2021)</li>
        <li>越野与游泳校队 (2021–2023)</li>
      </ul>`,
    download: "下载简历"
  }
};

// 切语言
function setLanguage(lang) {
  document.getElementById("name").textContent       = content[lang].name;
  document.getElementById("tagline").textContent    = content[lang].tagline;
  document.getElementById("footer-name").textContent= content[lang].name;
  document.querySelectorAll(".nav-link").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = content[lang][key];
  });
  document.getElementById("download").textContent = content[lang].download;
  ["education","skills","experience","projects","activities"].forEach(id => {
    document.getElementById(id).innerHTML = content[lang][id];
  });
}

// 初始化背景动画
function initBackground(theme) {
  const canvas = document.getElementById('bgcanvas');
  const ctx    = canvas.getContext('2d');
  cancelAnimationFrame(canvas._anim);
  canvas.width = innerWidth;
  canvas.height= innerHeight;
  const objs = [];

  if (theme === 'night') {
    // 星空闪烁
    for (let i=0; i<200; i++) {
      objs.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*1.5 + 0.5,
        a: Math.random(),
        da: Math.random()*0.02 + 0.005
      });
    }
    (function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      objs.forEach(s => {
        ctx.globalAlpha = s.a;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fill();
        s.a += s.da;
        if (s.a<0 || s.a>1) s.da = -s.da;
      });
      ctx.globalAlpha = 1;
      canvas._anim = requestAnimationFrame(draw);
    })();

  } else if (theme === 'ocean') {
    // 流动波浪
    const lines = [];
    for (let i=0; i<5; i++) {
      lines.push({
        phase: Math.random()*Math.PI*2,
        amp:    20 + i*10,
        speed:  0.005 + i*0.002,
        y:      canvas.height*(0.2 + i*0.15)
      });
    }
    (function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 2;
      lines.forEach(L => {
        ctx.beginPath();
        for (let x=0; x<canvas.width; x+=10) {
          const y = L.y + Math.sin(x*0.02 + L.phase)*L.amp;
          x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        ctx.stroke();
        L.phase += L.speed;
      });
      canvas._anim = requestAnimationFrame(draw);
    })();

  } else {
    // day/blush 气泡
    const color = theme==='blush'?'rgba(255,182,193,0.3)':'rgba(100,149,237,0.3)';
    const bubbles = [];
    for (let i=0; i<40; i++) {
      bubbles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: 10 + Math.random()*40,
        vx: (Math.random()-0.5)*0.5,
        vy: (Math.random()-0.5)*0.5
      });
    }
    (function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = color;
      bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
        ctx.fill();
        b.x += b.vx;
        b.y += b.vy;
        if (b.x-b.r>canvas.width) b.x = -b.r;
        if (b.x+b.r<0) b.x = canvas.width+b.r;
        if (b.y-b.r>canvas.height) b.y = -b.r;
        if (b.y+b.r<0) b.y = canvas.height+b.r;
      });
      canvas._anim = requestAnimationFrame(draw);
    })();
  }
}

// 切主题
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  initBackground(theme);
}

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  setTheme('day');
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
});
