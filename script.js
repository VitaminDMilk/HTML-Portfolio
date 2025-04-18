// 语言 & 文本内容
const content = {
  en: {
    nav: {
      education: "Education",
      skills:    "Skills",
      experience:"Experience",
      projects:  "Projects",
      activities:"Activities",
      download:  "Download Resume"
    },
    name:    "Wei (David) Dai",
    tagline: "Aspiring Embedded & AI Engineer",
    footerName: "Wei Dai",
    education: `
      <h2>Education</h2>
      <div>
        <strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
        <p>Major: Computer Engineering · Minor: Computer Science · GPA 3.65/4.0 · Dean’s List & Honors</p>
      </div>
      <div>
        <strong>Wyoming Seminary Prep School 2020‑08 – 2023‑05</strong>
        <p>High School Diploma · GPA 3.65/4.0</p>
      </div>
    `,
    skills: `
      <h2>Skills</h2>
      <p>
        <strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br>
        <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br>
        <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)
      </p>
    `,
    experience: `
      <h2>Internships & Work Experience</h2>
      <div>
        <strong>Utopilot Internship – SAIC Summer 2024</strong>
        <p>Worked on perception for autonomous vehicles · Point‑cloud & OCC visual conversion.</p>
      </div>
      <div>
        <strong>IT Helpdesk – Purdue Fort Wayne 2024 – 2025</strong>
        <p>Front‑line tech support · Managed loaner laptops · Troubleshooting & escalation.</p>
      </div>
    `,
    projects: `
      <h2>Projects</h2>
      <div>
        <strong>Black Jack Simulator</strong>
        <p>JavaFX GUI Blackjack game featuring OOP, UML, event‑driven logic, custom styling.</p>
      </div>
    `,
    activities: `
      <h2>Activities & Competitions</h2>
      <ul>
        <li>IEEE Xtreme 2023–2024: Team leader, placed Top 50</li>
        <li>National Cyber League 2023–2024</li>
        <li>Global Game Jam 2024</li>
        <li>Community Service 2018–2021</li>
        <li>Varsity Cross Country & Swim 2021–2023</li>
      </ul>
    `
  },
  zh: {
    nav: {
      education: "教育",
      skills:    "技能",
      experience:"实习与工作经历",
      projects:  "项目",
      activities:"活动与竞赛",
      download:  "下载简历"
    },
    name:    "戴维",
    tagline: "嵌入式与人工智能工程师",
    footerName: "戴维",
    education: `
      <h2>教育</h2>
      <div>
        <strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
        <p>主修：计算机工程 · 辅修：计算机科学 · GPA 3.65/4.0 · 荣誉名单</p>
      </div>
      <div>
        <strong>怀俄明预备中学 2020年8月 – 2023年5月</strong>
        <p>高中毕业 · GPA 3.65/4.0</p>
      </div>
    `,
    skills: `
      <h2>技能</h2>
      <p>
        <strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br>
        <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br>
        <strong>语言：</strong>中文（母语）、英文（托福101分）、西班牙语（中级）
      </p>
    `,
    experience: `
      <h2>实习与工作经历</h2>
      <div>
        <strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
        <p>参与点云与 OCC 图像转换项目</p>
      </div>
      <div>
        <strong>IT技术支持 – 普渡大学韦恩堡分校 2024 – 2025</strong>
        <p>一线技术支持 · 设备管理 · 故障排查</p>
      </div>
    `,
    projects: `
      <h2>项目</h2>
      <div>
        <strong>二十一点游戏模拟器</strong>
        <p>使用 JavaFX 构建的图形界面游戏，应用 OOP、UML、事件驱动逻辑。</p>
      </div>
    `,
    activities: `
      <h2>活动与竞赛</h2>
      <ul>
        <li>IEEE Xtreme 编程竞赛 2023–2024</li>
        <li>全国网络联盟赛 2023–2024</li>
        <li>Global Game Jam 2024</li>
        <li>社区志愿服务 2018–2021</li>
        <li>越野与游泳校队 2021–2023</li>
      </ul>
    `
  }
};

// 切换主题
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
}

// 切换语言
function setLanguage(lang) {
  const cfg = content[lang];
  // 头部
  document.getElementById('name').textContent = cfg.name;
  document.getElementById('tagline').textContent = cfg.tagline;
  // 导航
  document.querySelectorAll('.nav-link').forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = cfg.nav[key];
  });
  document.getElementById('download').textContent = cfg.nav.download;
  // 底部
  document.getElementById('footer-name').textContent = cfg.footerName;
  // 各区块
  document.getElementById('education').innerHTML  = cfg.education;
  document.getElementById('skills').innerHTML     = cfg.skills;
  document.getElementById('experience').innerHTML = cfg.experience;
  document.getElementById('projects').innerHTML   = cfg.projects;
  document.getElementById('activities').innerHTML = cfg.activities;
}

// DOM 准备好后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 默认语言、主题
  setLanguage('en');
  setTheme('light');
  // ScrollReveal 动画
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
});
