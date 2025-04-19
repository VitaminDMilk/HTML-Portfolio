// —— 文本内容 JSON ——
const content = {
  en: {
    name:    "Wei (David) Dai",
    tagline: "Aspiring Embedded & AI Engineer",
    education: `<h2>Education</h2>
      <div><strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
        <p>Major: Computer Engineering • Minor: Computer Science • GPA 3.65/4.0 • Dean’s List & Honors</p>
      </div>
      <div><strong>Wyoming Seminary Prep 2020‑08 – 2023‑05</strong>
        <p>High School Diploma • GPA 3.65/4.0</p>
      </div>`,
    skills: `<h2>Skills</h2>
      <p><strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
      <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br>
      <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)</p>`,
    experience: `<h2>Internships & Work Experience</h2>
      <div><strong>Utopilot Internship – SAIC Summer 2024</strong>
        <p>Worked on perception for autonomous vehicles • Point-cloud & OCC visual conversion.</p>
      </div>
      <div><strong>IT Helpdesk – Purdue Fort Wayne 2024–2025</strong>
        <p>Front-line tech support • Managed loaner laptops • Troubleshooting & escalation.</p>
      </div>`,
    projects: `<h2>Projects</h2>
      <div><strong>Black Jack Simulator</strong>
        <p>JavaFX GUI Blackjack game featuring OOP, UML, event-driven logic, custom styling.</p>
      </div>
      <div><strong>Auto Loan Calculator</strong>
        <p>JavaFX GUI app to compute loan payments based on price, tax rate, and financing details.</p>
      </div>
      <div><strong>Bank Simulator</strong>
        <p>Console-based Java app for checking balances, deposits, and loan requests.</p>
      </div>`,
    activities: `<h2>Activities & Competitions</h2>
      <ul>
        <li>IEEE Xtreme 2023–2024: Team leader; placed Top 50</li>
        <li>National Cyber League 2023–2024</li>
        <li>Global Game Jam 2024</li>
        <li>Community Service 2018–2021</li>
        <li>Varsity Cross Country & Swim 2021–2023</li>
      </ul>`,
    download: "Download Resume"
  },
  zh: {
    name:    "戴维",
    tagline: "嵌入式与人工智能工程师",
    education: `<h2>教育</h2>
      <div><strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
        <p>主修：计算机工程 • 辅修：计算机科学 • GPA 3.65/4.0 • 荣誉名单</p>
      </div>
      <div><strong>怀俄明中学 2020年8月 – 2023年5月</strong>
        <p>高中毕业 • GPA 3.65/4.0</p>
      </div>`,
    skills: `<h2>技能</h2>
      <p><strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML/CSS<br>
      <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br>
      <strong>语言：</strong>中文（母语）、英文（托福101分）、西班牙语（中级）</p>`,
    experience: `<h2>实习与工作经历</h2>
      <div><strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
        <p>参与点云与OCC视觉转化的自动驾驶感知项目。</p>
      </div>
      <div><strong>IT技术支持 – 普渡大学韦恩堡分校 2024–2025</strong>
        <p>技术支持 • 设备管理 • 故障排查。</p>
      </div>`,
    projects: `<h2>项目</h2>
      <div><strong>二十一点游戏模拟器</strong>
        <p>使用JavaFX构建的图形界面游戏，应用OOP、UML、事件驱动逻辑。</p>
      </div>
      <div><strong>汽车贷款计算器</strong>
        <p>JavaFX GUI应用，根据价格、税率和融资信息计算月供。</p>
      </div>
      <div><strong>银行模拟器</strong>
        <p>基于控制台的Java应用，实现账户查询、存取款和贷款请求。</p>
      </div>`,
    activities: `<h2>活动与竞赛</h2>
      <ul>
        <li>IEEE Xtreme 编程竞赛（2023–2024）</li>
        <li>国家网络联盟赛（2023–2024）</li>
        <li>全球游戏创作节（2024）</li>
        <li>社区志愿服务（2018–2021）</li>
        <li>越野跑与游泳校队（2021–2023）</li>
      </ul>`,
    download: "下载简历"
  }
};

// —— 注入 & 切换  ——
function setLanguage(lang) {
  document.getElementById("name").textContent    = content[lang].name;
  document.getElementById("tagline").textContent = content[lang].tagline;
  document.querySelectorAll(".nav-link").forEach(el=>{
    el.textContent = content[lang][el.dataset.key];
  });
  document.getElementById("download").textContent = content[lang].download;
  ["education","skills","experience","projects","activities"]
    .forEach(id => document.getElementById(id).innerHTML = content[lang][id]);
  document.getElementById("footer-name").textContent = content[lang].name;
}

function setTheme(theme) {
  document.body.className = "theme-" + theme;
  initBackground(theme);
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
  setTheme("day");
  ScrollReveal().reveal(".reveal", {
    distance: "40px", duration: 800,
    easing: "ease-in-out", origin: "bottom", interval: 200
  });

  document.querySelectorAll(".theme-switcher button")
    .forEach(btn => btn.addEventListener("click", ()=>{
      setTheme(btn.dataset.theme);
      document.querySelectorAll(".theme-switcher button")
        .forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
  }));

  document.querySelectorAll(".language-switcher button")
    .forEach(btn => btn.addEventListener("click", ()=>{
      setLanguage(btn.dataset.lang);
      document.querySelectorAll(".language-switcher button")
        .forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
  }));
});

// —— 背景动画 初始化 ——
function initBackground(theme) {
  const c = document.getElementById("bgcanvas"),
        ctx = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  // 清除所有动态元素
  document.querySelectorAll(".bubble, .star, .wave, .petal")
    .forEach(el=>el.remove());

  if (theme === "day") {
    // 生成气泡
    for (let i=0;i<30;i++){
      const b=document.createElement("div");
      b.className="bubble";
      b.style.width = b.style.height = `${20+Math.random()*80}px`;
      b.style.left = `${Math.random()*100}%`;
      b.style.animationDelay = `${-Math.random()*15}s`;
      document.body.appendChild(b);
    }
  }
  else if (theme === "night") {
    // 生成星星
    for (let i=0;i<100;i++){
      const s=document.createElement("div");
      s.className="star";
      const size = Math.random()*3+1;
      s.style.width = s.style.height = `${size}px`;
      s.style.top = `${Math.random()*100}%`;
      s.style.left = `${Math.random()*100}%`;
      s.style.animationDelay = `${Math.random()*2}s`;
      document.body.appendChild(s);
    }
  }
  else if (theme === "blue") {
    // 生成波浪圆
    for (let i=0;i<20;i++){
      const w=document.createElement("div");
      w.className="wave";
      w.style.width = w.style.height = `${100+Math.random()*200}px`;
      w.style.left = `${Math.random()*100}%`;
      w.style.top = `${Math.random()*100}%`;
      w.style.animationDelay = `${-Math.random()*3}s`;
      document.body.appendChild(w);
    }
  }
  else if (theme === "pink") {
    // 生成樱花花瓣
    for (let i=0;i<30;i++){
      const p=document.createElement("div");
      p.className="petal";
      p.style.left = `${Math.random()*100}%`;
      p.style.animationDelay = `${-Math.random()*8}s`;
      p.style.width = `${30+Math.random()*40}px`;
      p.style.height = `${30+Math.random()*40}px`;
      document.body.appendChild(p);
    }
  }
}
