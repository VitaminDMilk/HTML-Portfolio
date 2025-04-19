// 文本内容
const content = {
  en: {
    name: "Wei (David) Dai",
    tagline: "Aspiring Embedded & AI Engineer",
    education: `
      <h2>Education</h2>
      <div>
        <strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
        <p>Major: Computer Engineering • Minor: Computer Science • GPA 3.65/4.0 • Dean’s List & Honors</p>
      </div>
      <div>
        <strong>Wyoming Seminary Prep 2020‑08 – 2023‑05</strong>
        <p>High School Diploma • GPA 3.65/4.0</p>
      </div>
    `,
    skills: `
      <h2>Skills</h2>
      <p>
        <strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
        <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br>
        <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)
      </p>
    `,
    experience: `
      <h2>Internships & Work Experience</h2>
      <div>
        <strong>Utopilot Internship – SAIC Summer 2024</strong>
        <p>Worked on perception for autonomous vehicles • Point‑cloud & OCC visual conversion.</p>
      </div>
      <div>
        <strong>IT Helpdesk – Purdue Fort Wayne 2024‑2025</strong>
        <p>Front‑line tech support • Managed loaner laptops • Troubleshooting & escalation.</p>
      </div>
    `,
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
      </div>
    `,
    activities: `
      <h2>Activities & Competitions</h2>
      <ul>
        <li>IEEE Xtreme 2023–2024: Team leader; placed Top 50</li>
        <li>National Cyber League 2023–2024</li>
        <li>Global Game Jam 2024</li>
        <li>Community Service 2018–2021</li>
        <li>Varsity Cross Country & Swim 2021–2023</li>
      </ul>
    `,
    download: "Download Resume"
  },
  zh: {
    name: "戴维",
    tagline: "嵌入式与人工智能工程师",
    education: `
      <h2>教育</h2>
      <div>
        <strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
        <p>主修：计算机工程 • 辅修：计算机科学 • GPA 3.65/4.0 • 荣誉名单</p>
      </div>
      <div>
        <strong>怀俄明中学 2020年8月 – 2023年5月</strong>
        <p>高中毕业 • GPA 3.65/4.0</p>
      </div>
    `,
    skills: `
      <h2>技能</h2>
      <p>
        <strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
        <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br>
        <strong>语言：</strong>中文（母语）、英文（托福101分）、西班牙语（中级）
      </p>
    `,
    experience: `
      <h2>实习与工作经历</h2>
      <div>
        <strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
        <p>参与点云与 OCC 图像转换的自动驾驶感知项目。</p>
      </div>
      <div>
        <strong>IT技术支持 – 普渡大学韦恩堡分校 2024–2025</strong>
        <p>技术支持 • 设备管理 • 故障排查</p>
      </div>
    `,
    projects: `
      <h2>项目</h2>
      <div>
        <strong>二十一点游戏模拟器</strong>
        <p>使用 JavaFX 构建的图形界面游戏，应用 OOP、UML、事件驱动逻辑。</p>
      </div>
      <div>
        <strong>汽车贷款计算器</strong>
        <p>JavaFX GUI 应用，根据车辆价格、税率等计算月供。</p>
      </div>
      <div>
        <strong>银行模拟器</strong>
        <p>基于控制台的 Java 应用，支持查看余额、存取款和贷款申请。</p>
      </div>
    `,
    activities: `
      <h2>活动与竞赛</h2>
      <ul>
        <li>IEEE Xtreme 编程竞赛 (2023–2024)</li>
        <li>国家网络联盟赛 (2023–2024)</li>
        <li>全球游戏创作节 (2024)</li>
        <li>社区志愿服务 (2018–2021)</li>
        <li>越野与游泳校队 (2021–2023)</li>
      </ul>
    `,
    download: "下载简历"
  }
};

let petalTimer = [];

function setLanguage(lang) {
  document.getElementById("name").textContent        = content[lang].name;
  document.getElementById("tagline").textContent     = content[lang].tagline;
  document.getElementById("footer-name").textContent = content[lang].name;
  document.querySelectorAll(".nav-link").forEach(el=>{
    el.textContent = content[lang][ el.dataset.key ];
  });
  document.getElementById("download").textContent = content[lang].download;
  // 填充各段落
  ["education","skills","experience","projects","activities"]
    .forEach(id=> document.getElementById(id).innerHTML = content[lang][id]);
}

function setTheme(theme) {
  // 切换 class
  document.body.className = "theme-" + theme;
  // 重建背景动画
  initBackground(theme);
}

// 背景动画
function initBackground(theme) {
  // 清掉旧的 petals
  petalTimer.forEach(el=> clearTimeout(el));
  document.querySelectorAll(".petal").forEach(el=> el.remove());

  const canvas = document.getElementById("bgcanvas");
  const ctx = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  if (theme === "blush") {
    // 隐藏 canvas，改用 petals
    canvas.style.display = "none";
    for (let i = 0; i < 25; i++) {
      let p = document.createElement("div");
      p.className = "petal";
      p.style.left = Math.random() * window.innerWidth + "px";
      p.style.animationDuration = (4 + Math.random()*4) + "s";
      p.style.animationDelay = Math.random() * 4 + "s";
      document.body.appendChild(p);
    }
    return;
  }

  // 其它都用 canvas 泡泡动画
  canvas.style.display = "block";
  let particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: 10 + Math.random()*20,
      dx: (Math.random()-0.5)*0.5,
      dy: (Math.random()-0.5)*0.5
    });
  }
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = (theme==="day"?"rgba(100,180,255,0.2)":"rgba(200,200,255,0.1)");
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if(p.x< -p.r) p.x=canvas.width+p.r;
      if(p.x>canvas.width+p.r) p.x=-p.r;
      if(p.y< -p.r) p.y=canvas.height+p.r;
      if(p.y>canvas.height+p.r) p.y=-p.r;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// 首次初始化
document.addEventListener("DOMContentLoaded", ()=>{
  setLanguage("en");
  setTheme("day");
  ScrollReveal().reveal('.reveal', {
    distance: '40px', duration: 800, easing: 'ease-in-out',
    origin: 'bottom', interval: 200
  });
});

// 视口大小变动时，重置 canvas
window.addEventListener("resize", ()=> {
  const theme = document.body.className.replace("theme-","");
  initBackground(theme);
});

