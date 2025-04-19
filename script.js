const content = {
  en: {
    nav: {
      education:'Education',
      skills:'Skills',
      experience:'Experience',
      projects:'Projects',
      activities:'Activities',
      download:'Download Resume'
    },
    name:'Wei (David) Dai',
    tagline:'Currently a sophomore',
    sections:{
      education: `
        <h2>Education</h2>
        <div>
          <strong>Purdue University Fort Wayne 2023‑08 – 2027‑05</strong>
          <p>Major: Computer Engineering · Minor: Computer Science · GPA 3.65/4.0 · Dean’s List & Honors</p>
        </div>
        <div>
          <strong>Wyoming Seminary Prep 2020‑08 – 2023‑05</strong>
          <p>High School Diploma</p>
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
          <strong>IT Helpdesk – Purdue Fort Wayne 2024‑2025</strong>
          <p>Front‑line tech support · Managed loaner laptops · Troubleshooting & escalation.</p>
        </div>`,
      projects: `
        <h2>Projects</h2>
        <div>
          <strong>Black Jack Simulator</strong>
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
          <li>National Cyber League 2023–2024</li>
          <li>Global Game Jam 2024</li>
          <li>Community Service 2018–2021</li>
          <li>Varsity Cross Country & Swim 2021–2023</li>
        </ul>`
    }
  },
  zh: {
    nav:{ education:'教育', skills:'技能', experience:'经历', projects:'项目', activities:'活动', download:'下载简历' },
    name:'戴维',
    tagline:'大二在读中',
    sections:{
      education: `
        <h2>教育</h2>
        <div>
          <strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
          <p>主修：计算机工程 · 辅修：计算机科学 · GPA 3.65/4.0 · 荣誉名单</p>
        </div>
        <div>
          <strong>怀俄明中学 2020年8月 – 2023年5月</strong>
          <p>高中毕业</p>
        </div>`,
      skills: `
        <h2>技能</h2>
        <p>
          <strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br/>
          <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br/>
          <strong>语言：</strong>中文（母语）、英文（托福 101）、西班牙语（中级）
        </p>`,
      experience: `
        <h2>实习与工作经历</h2>
        <div>
          <strong>自动驾驶实习 – 上汽集团 2024年夏</strong>
          <p>参与点云与 OCC 图像转换的自动驾驶感知项目。</p>
        </div>
        <div>
          <strong>IT技术支持 – 普渡大学韦恩堡分校 2024–2025</strong>
          <p>一线技术支持 · 笔记本管理 · 故障排查与升级。</p>
        </div>`,
      projects: `
        <h2>项目</h2>
        <div>
          <strong>二十一点游戏模拟器</strong>
          <p>使用 JavaFX 构建图形界面游戏，应用 OOP、UML、事件驱动逻辑。</p>
        </div>
        <div>
          <strong>汽车贷款计算器</strong>
          <p>JavaFX GUI 应用，根据价格、税率和融资详情计算月供。</p>
        </div>
        <div>
          <strong>银行模拟器</strong>
          <p>基于控制台的 Java 应用，用于检查余额、存款和贷款请求。</p>
        </div>`,
      activities: `
        <h2>活动与竞赛</h2>
        <ul>
          <li>IEEE Xtreme 编程竞赛 (2023–2024)</li>
          <li>全国网络联盟赛 (2023–2024)</li>
          <li>全球游戏创作节 (2024)</li>
          <li>社区志愿服务 (2018–2021)</li>
          <li>越野与游泳校队 (2021–2023)</li>
        </ul>`
    }
  }
};

function setLanguage(lang) {
  document.getElementById('name').textContent    = content[lang].name;
  document.getElementById('tagline').textContent = content[lang].tagline;
  document.querySelectorAll('.nav-link[data-section]').forEach(el => {
    el.textContent = content[lang].nav[el.dataset.section];
  });
  for (let sec in content[lang].sections) {
    document.getElementById(sec).innerHTML = content[lang].sections[sec];
  }
  document.getElementById('footer-name').textContent = content[lang].name;
  const e = document.getElementById('footer-email');
  e.textContent = 'david0322v@gmail.com';
  e.href = 'mailto:david0322v@gmail.com';
}

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  initBackground(theme);
}

function initBackground(theme) {
  const c = document.getElementById('bgcanvas');
  const ctx = c.getContext('2d');
  cancelAnimationFrame(c._anim);
  c.width = innerWidth; c.height = innerHeight;

  let items = [], count;
  if (theme==='night') {
    count = 200;
    for (let i=0;i<count;i++){
      items.push({
        x:Math.random()*c.width,
        y:Math.random()*c.height,
        size:Math.random()*2+1,
        blink:Math.random()*0.05+0.02,
        alpha:Math.random()
      });
    }
  } else if (theme==='blush') {
    count = 100;
    for (let i=0;i<count;i++){
      items.push({
        x:Math.random()*c.width,
        y:Math.random()*c.height,
        img:new Image(),
        vx:Math.random()*0.5-0.25,
        vy:Math.random()*1+0.5,
        angle:Math.random()*2*Math.PI,
        rot:Math.random()*0.02-0.01,
        size:20+Math.random()*20
      });
      items[i].img.src = 'petal.png';
    }
  } else {
    count = 80;
    for (let i=0;i<count;i++){
      items.push({
        x:Math.random()*c.width,
        y:Math.random()*c.height,
        r:10+Math.random()*40,
        vx:(Math.random()-0.5)*0.5,
        vy:(Math.random()-0.5)*0.5
      });
    }
  }

  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    if (theme==='night') {
      ctx.fillStyle='#fff';
      items.forEach(s=>{
        s.alpha+=s.blink*(Math.random()>0.5?1:-1);
        s.alpha=Math.max(0,Math.min(1,s.alpha));
        ctx.globalAlpha=s.alpha;
        ctx.fillRect(s.x,s.y,s.size,s.size);
      });
      ctx.globalAlpha=1;
    }
    else if(theme==='blush'){
      items.forEach(p=>{
        ctx.save();
        ctx.globalAlpha=0.8;
        ctx.translate(p.x,p.y);
        ctx.rotate(p.angle);
        ctx.drawImage(p.img,-p.size/2,-p.size/2,p.size,p.size);
        ctx.restore();
        p.x+=p.vx; p.y+=p.vy; p.angle+=p.rot;
        if(p.y>c.height) p.y=-p.size;
        if(p.x>c.width) p.x=-p.size;
        if(p.x<-p.size) p.x=c.width+p.size;
      });
    } else {
      ctx.fillStyle='rgba(100,149,237,0.3)';
      items.forEach(b=>{
        ctx.beginPath();
        ctx.arc(b.x,b.y,b.r,0,2*Math.PI);
        ctx.fill();
        b.x+=b.vx; b.y+=b.vy;
        if(b.x-b.r>c.width)b.x=-b.r;
        if(b.x+b.r<0)b.x=c.width+b.r;
        if(b.y-b.r>c.height)b.y=-b.r;
        if(b.y+b.r<0)b.y=c.height+b.r;
      });
    }
    c._anim = requestAnimationFrame(draw);
  }
  draw();
}

window.addEventListener('DOMContentLoaded',()=>{
  setLanguage('en');
  setTheme('day');
  ScrollReveal().reveal('.reveal',{distance:'40px',duration:800,easing:'ease-in-out',origin:'bottom',interval:200});
  document.querySelectorAll('.theme-switcher button')
    .forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.theme)));
  document.querySelectorAll('.language-switcher button')
    .forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  window.addEventListener('resize',()=>{
    const t=document.body.className.split('-')[1];
    initBackground(t);
  });
});
