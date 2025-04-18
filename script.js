const content = {
    en: {
        name: "Wei (David) Dai",
        tagline: "Aspiring Embedded & AI Engineer",
        nav: ["Education", "Skills", "Experience", "Projects", "Activities", "Download Resume"],
        education: `<h2>Education</h2><div><strong>Purdue University Fort Wayne</strong><p>Computer Engineering · Minor: CS · GPA 3.65/4.0 · Dean's List & Honors</p></div><div><strong>Wyoming Seminary</strong><p>High School Diploma · GPA 3.65/4.0</p></div>`,
        skills: `<h2>Skills</h2><p><strong>Programming:</strong> Java, Python, C++, JavaFX, HTML, CSS<br><strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br><strong>Languages:</strong> Chinese, English (TOEFL 101), Spanish</p>`,
        experience: `<h2>Internships & Work Experience</h2><div><strong>Utopilot – SAIC</strong><p>Point-cloud & OCC visual processing</p></div><div><strong>IT Helpdesk – Purdue Fort Wayne</strong><p>Tech support · Troubleshooting · Escalation</p></div>`,
        projects: `<h2>Projects</h2><div><strong>Black Jack Simulator</strong><p>JavaFX Blackjack with OOP, UML, styling</p></div>`,
        activities: `<h2>Activities & Competitions</h2><ul><li>IEEE Xtreme</li><li>Cyber League</li><li>Global Game Jam</li><li>Community Service</li><li>Varsity Sports</li></ul>`,
        footer: `© 2025 Wei Dai | <a href="mailto:david0322v@gmail.com">david0322v@gmail.com</a> | <a href="https://github.com/VitaminDMilk">GitHub</a> 📞 +1 2605640301 / +86 13636501825`
    },
    zh: {
        name: "戴维",
        tagline: "嵌入式与人工智能工程师",
        nav: ["教育", "技能", "经历", "项目", "活动", "下载简历"],
        education: `<h2>教育</h2><div><strong>普渡大学韦恩堡</strong><p>主修计算机工程 · GPA 3.65/4.0 · 荣誉名单</p></div><div><strong>怀俄明中学</strong><p>高中毕业 · GPA 3.65/4.0</p></div>`,
        skills: `<h2>技能</h2><p><strong>编程语言：</strong>Java, Python, C++ 等<br><strong>工具：</strong>Unity, MATLAB 等<br><strong>语言：</strong>中文, 英文 (托福101), 西班牙语</p>`,
        experience: `<h2>实习与工作经历</h2><div><strong>自动驾驶实习 – 上汽</strong><p>点云和图像处理</p></div><div><strong>IT技术支持 – 普渡韦恩堡</strong><p>支持服务 · 故障排查</p></div>`,
        projects: `<h2>项目</h2><div><strong>二十一点模拟器</strong><p>JavaFX 构建的黑杰克游戏</p></div>`,
        activities: `<h2>活动与竞赛</h2><ul><li>IEEE Xtreme</li><li>网络联赛</li><li>全球游戏创作</li><li>社区服务</li><li>校队运动</li></ul>`,
        footer: `© 2025 戴维 | <a href="mailto:david0322v@gmail.com">david0322v@gmail.com</a> | <a href="https://github.com/VitaminDMilk">GitHub</a> 📞 +1 2605640301 / +86 13636501825`
    }
};

function setTheme(theme) {
    document.body.className = 'theme-' + theme;
}

function setLanguage(lang) {
    const langData = content[lang];
    document.getElementById("name").textContent = langData.name;
    document.getElementById("tagline").textContent = langData.tagline;

    const navKeys = ["education", "skills", "experience", "projects", "activities", "download"];
    const nav = document.getElementById("navbar");
    nav.innerHTML = "";
    navKeys.forEach((key, i) => {
        nav.innerHTML += \`<a href="#\${key}" class="nav-link" id="nav-\${key}">\${langData.nav[i]}</a>\`;
    });

    document.getElementById("education").innerHTML = langData.education;
    document.getElementById("skills").innerHTML = langData.skills;
    document.getElementById("experience").innerHTML = langData.experience;
    document.getElementById("projects").innerHTML = langData.projects;
    document.getElementById("activities").innerHTML = langData.activities;
    document.getElementById("footer").innerHTML = langData.footer;
}

ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
});

setTheme('galaxy');
setLanguage('zh');
