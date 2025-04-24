const content = {
  en: {
    nav: {
      education:  'Education',
      skills:     'Skills',
      experience: 'Experience',
      projects:   'Projects',
      activities: 'Activities',
      download:   'Download Resume'
    },
    name:    'Wei (David) Dai',
    tagline: 'Currently a sophomore',
    sections: {
      education: `
        <h2>Education</h2>
        <div>
          <strong>Purdue University Fort Wayne 2023/08 – 2027/05</strong>
          <p>Major: Computer Engineering · Minor: Computer Science · GPA 3.65/4.0 · Dean’s List & Honors</p>
        </div>
        <div>
          <strong>Wyoming Seminary Prep 2020/08 – 2023/05</strong>
          <p>High School Diploma</p>
        </div>`,
      skills: `
        <h2>Skills</h2>
        <p>
          <strong>Programming:</strong> Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br/>
          <strong>Tools:</strong> Unity, AutoCAD, MATLAB, Arduino<br/>
          <strong>Languages:</strong> Chinese (Native), English (TOEFL 101), Spanish (Intermediate)
        </p>`,
      experience: `
        <h2>Internships & Work Experience</h2>
        <div>
          <strong>Utopilot Internship – SAIC Summer 2024</strong>
          <p>Worked on perception for autonomous vehicles · Point-cloud & OCC visual conversion.</p>
        </div>
        <div>
          <strong>IT Helpdesk – Purdue Fort Wayne 2024-2025</strong>
          <p>Front-line tech support · Managed loaner laptops · Troubleshooting & escalation.</p>
        </div>`,
      projects: `
        <h2>Projects</h2>
        <div>
          <strong>Black Jack Simulator</strong>
          <p>A JavaFX-based Blackjack game where players compete against a computerized dealer to achieve a hand value closest to 21. The project showcases event-driven programming, GUI interactions, class inheritance, UML diagramming, structured game logic, and custom styling features.
.</p>
        </div>
        <div>
          <strong>Bank Simulator</strong>
          <p>a JavaFX GUI application for calculating monthly car loan payments based on price, taxes, and financing inputs, alongside a console-based banking system supporting account operations like deposits, withdrawals, and loan applications. The project covers GUI design, event-driven programming, financial formulas, decision structures, loops, ArrayLists, file output, and custom styling.</p>
        </div>
        <div>
          <strong>MATLAB–Arduino Embedded Control Panel</strong>
          <p>A MATLAB App Designer project that connects to a PEEB via Arduino Uno to control and monitor components like LEDs, servos, buzzers, and LDRs. Features GUI interaction, timer-based polling, and real-time data visualization.</p>
        </div>
        <div>
          <strong>HarmonyOS To-Do List App</strong>
          <p>A lightweight to-do list app built with ArkTS and DevEco Studio for HarmonyOS. Features component-based UI, @State-driven state management, and conditional rendering for dynamic task interactions. Users can toggle tasks as complete or incomplete with responsive visual feedback.</p>
        </div>
        <div>
          <strong>Personal Portfolio Website</strong>
          <p>GitHub Pages portfolio showcasing projects, resume, and contact info, implemented with HTML, CSS, and JavaScript. Features theme switching, multi-language support, and dynamic background animations for a modern presentation.</p>
        </div>`,
      activities: `
        <h2>Activities & Competitions</h2>
        <ul>
          <li>IEEE Xtreme 2023–2024: Team leader; placed Top 50.</li>
          <li>National Cyber League 2023–2024</li>
          <li>Global Game Jam 2024</li>
          <li>Community Service 2018–2021</li>
          <li>Varsity Cross Country & Swim 2021–2023</li>
        </ul>`
    }
  },
  zh: {
    nav: {
      education:  '教育',
      skills:     '技能',
      experience: '经历',
      projects:   '项目',
      activities: '活动',
      download:   '下载简历'
    },
    name:    '戴维',
    tagline: '大二在读中',
    sections: {
      education: `
        <h2>教育</h2>
        <div>
          <strong>普渡大学韦恩堡分校 2023年8月 – 2027年5月</strong>
          <p>主修：计算机工程 · 辅修：计算机科学 · GPA 3.65/4.0 · 荣誉名单</p>
        </div>
        <div>
          <strong>怀俄明中学 2020年8月 – 2023年5月</strong>
          <p>高中毕业</p>
        </div>`,
      skills: `
        <h2>技能</h2>
        <p>
          <strong>编程语言：</strong>Java, Python, C++, JavaFX, SceneBuilder, HTML, CSS<br/>
          <strong>工具：</strong>Unity, AutoCAD, MATLAB, Arduino<br/>
          <strong>语言：</strong>中文（母语）、英文（托福 101）、西班牙语（中级）
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
          <p>一个基于 JavaFX 的二十一点纸牌游戏，玩家与计算机发牌员对战，目标是使手牌总点数尽可能接近 21。项目展示了事件驱动编程、图形界面交互、类继承结构、UML 类图设计、游戏逻辑实现和自定义界面样式。</p>
        </div>
        <div>
          <strong>JAVA简易银行系统</strong>
          <p>该项目包含一个基于 JavaFX 的图形界面贷款计算器，可根据车辆价格、税率及融资信息计算月供，以及一个控制台银行系统，支持余额查询、存取款、贷款申请等功能。项目涵盖图形界面设计、事件驱动编程、金融计算、决策结构、循环、数组列表、文件输出与界面样式定制。</p>
        </div>
        <div>
          <strong>MATLAB–Arduino 嵌入式控制面板</strong>
          <p>基于 MATLAB App Designer 的项目，通过 Arduino Uno 连接 PEEB，实现对 LED、舵机、蜂鸣器和 LDR 的控制与监测。支持图形界面交互、定时轮询和实时数据可视化。</p>
        </div>
        <div>
          <strong>HarmonyOS 待办事项应用</strong>
          <p>使用 ArkTS 和 DevEco Studio 开发的轻量级待办事项应用，适用于 HarmonyOS。支持基于组件的 UI 架构、@State 状态管理以及任务交互的条件渲染，用户可切换任务完成状态，并获得直观的视觉反馈。</p>
        </div>
        <div>
          <strong>个人作品集网站</strong>
          <p>基于 GitHub Pages 的个人网站，使用 HTML、CSS 和 JS，支持主题切换、多语言和动态背景动画。</p>
        </div>`,
      activities: `
        <h2>活动与竞赛</h2>
        <ul>
          <li>IEEE Xtreme 编程竞赛（2023–2024）</li>
          <li>全国网络联盟赛（2023–2024）</li>
          <li>全球游戏创作节（2024）</li>
          <li>社区志愿服务（2018–2021）</li>
          <li>越野跑与游泳校队（2021–2023）</li>
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
