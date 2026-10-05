/* Source: Codex_Personal_Website_Content_Brief.txt (October 2026).
   Add only verified URLs and real media. Empty fields are intentionally hidden.
   Use relative asset paths without a leading slash for GitHub Pages.
   Image example: { type: 'image', src: 'assets/projects/vdm-ledger/dashboard.webp',
     alt: { en: 'Dashboard with synthetic demo data', zh: '使用模拟数据的仪表盘' },
     caption: { en: 'Financial dashboard', zh: '财务仪表盘' } }
   Video example: { type: 'video', src: 'assets/projects/vdm-ledger/demo.mp4',
     alt: { en: 'Application walkthrough', zh: '应用操作演示' } }
*/
window.PORTFOLIO_CONFIG = {
  resumeHref: '', // Add the real PDF, then set this to 'resume.pdf'.
  projects: {
    'ai-workspace': { github: '', demo: '', media: [] },
    'vdm-ledger': { github: '', demo: 'https://vdm-ledger.vercel.app/demo', media: [] },
    'smart-locker': { github: '', demo: '', media: [] }
  }
};
window.PORTFOLIO_CONTENT = {
  en: {
    ui: {
      skip: 'Skip to content', navExperience: 'Experience', navProjects: 'Projects', navSkills: 'Skills', navEducation: 'Education', navContact: 'Contact',
      identity: 'COMPUTER ENGINEERING / VIRGINIA TECH', tagline: 'Building across software,\nembedded systems & AI perception.', location: 'Blacksburg, VA · B.S. Computer Engineering · May 2028', viewProjects: 'Explore projects', getInTouch: 'Get in touch', resume: 'Resume ↓',
      focusLabel: 'ENGINEERING FOCUS', focusSoftware: 'Software', focusSystems: 'Embedded systems', focusPerception: 'AI & perception', focusSensing: 'Visible-light / thermal imaging / OCC', latestLabel: 'LATEST INTERNSHIP', latestWork: 'Marine dual-spectrum PTZ solution', latestDate: 'Jun. — Aug. 2026 ↗',
      aboutLabel: 'A LITTLE CONTEXT', aboutTitle: 'Engineering across the stack.', experienceLabel: '01 / EXPERIENCE', experienceTitle: 'Engineering in practice.', experienceIntro: 'From marine sensing and perception to power data and campus IT.', projectsLabel: '02 / SELECTED PROJECTS', projectsTitle: 'What I’m building.', projectsIntro: 'Three projects across desktop software, full-stack development, and embedded firmware.',
      skillsLabel: '03 / TOOLKIT', skillsTitle: 'Tools I work with.', educationLabel: '04 / EDUCATION', educationTitle: 'The foundation.', leadershipLabel: '05 / LEADERSHIP', leadershipTitle: 'Problem solving, together.',
      contactLabel: 'LET’S CONNECT', contactTitle: 'Have something in mind?', contactCopy: 'For engineering opportunities, project discussions, or a conversation about what I’m building.', contactLocation: 'Blacksburg, Virginia', outsideLabel: 'Outside engineering', interests: 'Basketball · Swimming · Climbing / bouldering · Side projects · Languages · Music', backTop: 'Back to top ↑',
      github: 'Source code ↗', demo: 'Live demo ↗', gallery: 'View media', image: 'Project image', video: 'Project video', videoUnsupported: 'Your browser does not support this video.', mediaUnavailable: 'This media file could not be loaded.', close: 'Close', previous: 'Previous', next: 'Next', themeDay: 'Day theme', themeNight: 'Night theme', themeBlush: 'Blush theme', languageLabel: 'Language', themeLabel: 'Color theme', animationLabel: 'Animation effects', pauseAnimation: 'Pause animations', playAnimation: 'Enable animations', navigationLabel: 'Main navigation', focusAria: 'Engineering focus', coursework: 'Relevant coursework', honors: 'Honors', current: 'Current', expected: 'Expected May 2028', softwareSkills: 'Languages', systemsSkills: 'Software & embedded', webSkills: 'Web & data', spokenLanguages: 'Spoken languages'
    },
    about: 'I’m a Computer Engineering student at Virginia Tech, with experience spanning software development, embedded systems, autonomous-driving perception, and technical support. Through projects and work in China and the United States, I connect software with the systems it runs on. I’m interested in software engineering, embedded and firmware development, and AI / computer vision roles.',
    experience: [
      { company: 'COSCO SHIPPING TECHNOLOGY Co., Ltd', role: 'Artificial Intelligence Application Division Intern', date: 'Jun. 2026 – Aug. 2026', location: 'Shanghai, China', featured: true, tags: ['AI perception', 'PTZ', 'Visible + thermal', 'AIS / GNSS / RTK'], bullets: ['Designed a marine dual-spectrum PTZ surveillance solution integrating visible-light and thermal imaging, AIS, GNSS/RTK, and AI perception.', 'Evaluated hardware, optics, and embedded AI configurations; finalized system requirements and product design.', 'Delivered the final camera solution for manufacturing; the prototype is in production.'] },
      { company: 'Beijing Zhongheng Borui Digital Power Technology Co., Ltd.', role: 'Energy Efficiency Division Intern', date: 'Aug. 2025 – Aug. 2025', location: 'Shanghai, China', tags: ['Power systems', 'Data validation', 'Line-loss analysis'], bullets: ['Supported State Grid Shanghai Power Company electricity and line-loss monitoring projects; processed and validated feeder, transformer, and substation datasets.', 'Contributed to line-loss analysis across voltage levels to identify anomalies; improved data-consistency checks to reduce manual reporting errors.'] },
      { company: 'Purdue University Fort Wayne', role: 'Student IT Support Specialist', date: 'Nov. 2024 – May 2025', location: 'Fort Wayne, IN', tags: ['Troubleshooting', 'Windows / macOS', 'Networking'], bullets: ['Delivered front-line technical support to a campus community of 15,000+ students, faculty, and staff, resolving hardware, software, account, and campus-system issues.', 'Diagnosed and troubleshot Windows, macOS, and network connectivity problems.'] },
      { company: 'Shanghai Automotive Industry Corporation – Utopilot', role: 'Perception Department Intern', date: 'Jun. 2024 – Aug. 2024', location: 'Shanghai, China', tags: ['Autonomous driving', 'Point clouds', 'OCC'], bullets: ['Analyzed autonomous-driving perception systems for heavy-duty trucks in port and mining environments, focusing on obstacle detection and environmental mapping.', 'Investigated point-cloud processing and occupancy-grid (OCC) methods for representing camera and sensor data in 3D spatial environments.'] }
    ],
    projects: [
      { id: 'ai-workspace', name: 'AI Workspace', category: 'C++ / DESKTOP SYSTEMS', subtitle: 'Desktop Retrieval & Processing System', date: 'Aug. 2026 – Present', description: 'A modular C++ desktop application for document ingestion, indexing, retrieval, and context construction.', visual: ['INGEST', 'INDEX', 'RETRIEVE'], tags: ['C++', 'Qt', 'IPC', 'TF-IDF', 'CMake', 'Docker'], bullets: ['Developing text chunking and TF-IDF retrieval with an extensible architecture based on polymorphism and strategy patterns.', 'Building an event-driven Qt interface with separate IPC processing services, asynchronous tasks, and automated testing.'] },
      { id: 'vdm-ledger', name: 'VDM Ledger', category: 'FULL-STACK / WEB APPLICATION', subtitle: 'Personal Finance & Banking Application', date: 'Sep. 2026 – Present', description: 'A deployed finance application connecting bank accounts, transaction syncing, dashboards, and Excel reporting.', visual: ['CONNECT', 'SYNC', 'REPORT'], tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Plaid', 'Vercel'], bullets: ['Designed layered UI, business-service, and database-repository architecture with authenticated APIs and PostgreSQL row-level security.', 'Implemented scheduled jobs and GitHub Actions CI with automated tests and production build validation.'] },
      { id: 'smart-locker', name: 'Personal Smart Locker', category: 'EMBEDDED / FIRMWARE', subtitle: 'Embedded Access Control System', date: 'Aug. 2026 – Present', description: 'An ATmega328P access-control system integrating an ADC keypad, servo, LEDs, and buzzer.', visual: ['INPUT', 'STATE', 'CONTROL'], tags: ['C/C++', 'ATmega328P', 'ADC', 'PWM', 'EEPROM', 'FSM'], bullets: ['Developed firmware for keypad calibration, servo PWM, EEPROM password storage, and stall recovery.', 'Uses state-machine-based PIN entry, lock control, and sleep/wake behavior; validated through power-cycle and system testing.'] }
    ],
    education: [
      { school: 'Virginia Tech', fullName: 'Virginia Polytechnic Institute and State University', degree: 'Bachelor of Science in Computer Engineering', date: 'Aug. 2025 – May 2028', location: 'Blacksburg, VA', current: true, courses: ['Machine Learning', 'Principles of Computer Architecture', 'Applied Software Design', 'Signals and Systems'] },
      { school: 'Purdue University Fort Wayne', fullName: '', degree: 'Bachelor of Science in Computer Engineering — coursework', date: 'Aug. 2023 – May 2025', location: 'Fort Wayne, IN', gpa: '3.65 / 4.0', honors: ['Honor Student', 'Dean’s List', 'Honors List'] }
    ],
    leadership: { name: 'IEEEXtreme 17.0 Programming Competition', role: 'Team Leader', date: 'Nov. 2023', description: 'Led a team to 1st place at Purdue University Fort Wayne and 51st in the U.S. in a 24-hour global programming competition.', localLabel: 'at Purdue Fort Wayne', nationalLabel: 'in the United States' }, spoken: ['Mandarin Chinese — Native', 'English — Fluent', 'Spanish — Intermediate']
  },
  zh: {
    ui: {
      skip: '跳转到正文', navExperience: '经历', navProjects: '项目', navSkills: '技能', navEducation: '教育', navContact: '联系', identity: '计算机工程 / 弗吉尼亚理工大学', tagline: '以软件连接系统，\n探索嵌入式与 AI 感知。', location: '美国弗吉尼亚州布莱克斯堡 · 计算机工程本科 · 2028 年 5 月', viewProjects: '查看项目', getInTouch: '联系我', resume: '下载简历 ↓',
      focusLabel: '技术方向', focusSoftware: '软件开发', focusSystems: '嵌入式系统', focusPerception: 'AI 与感知', focusSensing: '可见光 / 热成像 / OCC', latestLabel: '最近的实习', latestWork: '船用双光谱 PTZ 监控方案', latestDate: '2026 年 6 月 — 8 月 ↗', aboutLabel: '关于我', aboutTitle: '从软件到系统的工程实践。', experienceLabel: '01 / 实习与工作', experienceTitle: '在实际场景中解决问题。', experienceIntro: '涵盖船舶感知、自动驾驶、电力数据与校园 IT 技术支持。', projectsLabel: '02 / 精选项目', projectsTitle: '正在构建的项目。', projectsIntro: '围绕 C++ 桌面软件、全栈应用与嵌入式固件的三个项目。',
      skillsLabel: '03 / 技术技能', skillsTitle: '我使用的工具与技术。', educationLabel: '04 / 教育背景', educationTitle: '工程基础。', leadershipLabel: '05 / 领导力', leadershipTitle: '协作与编程竞赛。', contactLabel: '保持联系', contactTitle: '一起聊聊工程与项目。', contactCopy: '欢迎交流工程岗位机会、项目合作，以及我正在开发的作品。', contactLocation: '美国弗吉尼亚州布莱克斯堡', outsideLabel: '工程之外', interests: '篮球 · 游泳 · 攀岩 / 抱石 · 个人编程项目 · 语言学习 · 音乐', backTop: '返回顶部 ↑',
      github: '查看代码 ↗', demo: '在线演示 ↗', gallery: '查看图片与视频', image: '项目图片', video: '项目视频', videoUnsupported: '当前浏览器不支持播放此视频。', mediaUnavailable: '此媒体文件暂时无法加载。', close: '关闭', previous: '上一项', next: '下一项', themeDay: '日间主题', themeNight: '夜间主题', themeBlush: '樱花主题', languageLabel: '语言', themeLabel: '颜色主题', animationLabel: '动画效果', pauseAnimation: '暂停动画效果', playAnimation: '开启动画效果', navigationLabel: '主导航', focusAria: '技术方向', coursework: '相关课程', honors: '荣誉', current: '在读', expected: '预计 2028 年 5 月毕业', softwareSkills: '编程语言', systemsSkills: '软件与嵌入式', webSkills: 'Web 与数据库', spokenLanguages: '语言能力'
    },
    about: '我目前在弗吉尼亚理工大学学习计算机工程，经历涵盖软件开发、嵌入式系统、自动驾驶感知与 IT 技术支持。通过在中国和美国的项目与工作实践，我关注软件与底层系统如何协同运行。我的求职方向包括软件工程、嵌入式与固件开发，以及 AI 和计算机视觉。',
    experience: [
      { company: '中远海运科技股份有限公司', role: '人工智能应用事业部实习生', date: '2026 年 6 月 – 2026 年 8 月', location: '中国上海', featured: true, tags: ['AI 感知', 'PTZ 云台', '可见光 + 热成像', 'AIS / GNSS / RTK'], bullets: ['设计船用双光谱 PTZ 监控方案，整合可见光、热成像、AIS、GNSS/RTK 与 AI 感知。', '评估硬件、光学与嵌入式 AI 配置，确定系统需求与产品设计。', '交付最终摄像机方案供制造使用；原型目前处于生产阶段。'] },
      { company: '北京中恒博瑞数字电力科技有限公司', role: '能效事业部实习生', date: '2025 年 8 月 – 2025 年 8 月', location: '中国上海', tags: ['电力系统', '数据校验', '线损分析'], bullets: ['支持国网上海市电力公司的电量与线损监测项目，处理并校验馈线、变压器及变电站的大规模数据。', '参与不同电压等级的线损分析，识别异常与低效环节；通过数据一致性检查改进报表流程，减少人工错误。'] },
      { company: '普渡大学韦恩堡分校', role: '学生 IT 技术支持专员', date: '2024 年 11 月 – 2025 年 5 月', location: '美国印第安纳州韦恩堡', tags: ['故障排查', 'Windows / macOS', '网络连接'], bullets: ['面向拥有 15,000 多名学生、教职员工的校园群体提供一线技术支持，解决硬件、软件、账户与校园系统问题。', '诊断并排查 Windows、macOS 及网络连接故障。'] },
      { company: '上海汽车集团 — 友道智途（Utopilot）', role: '感知部门实习生', date: '2024 年 6 月 – 2024 年 8 月', location: '中国上海', tags: ['自动驾驶', '点云', 'OCC'], bullets: ['分析港口与矿区重型卡车的自动驾驶感知系统，重点关注障碍物检测与环境建图。', '研究点云处理与占据栅格（OCC）方法，了解如何将相机及传感器数据表示为三维空间环境。'] }
    ],
    projects: [
      { id: 'ai-workspace', name: 'AI Workspace', category: 'C++ / 桌面系统', subtitle: '桌面检索与处理系统', date: '2026 年 8 月 – 至今', description: '模块化 C++ 桌面应用，支持文档导入、索引、检索与上下文构建。', visual: ['文档导入', '建立索引', '内容检索'], tags: ['C++', 'Qt', 'IPC', 'TF-IDF', 'CMake', 'Docker'], bullets: ['开发文本分块与 TF-IDF 检索，利用多态和策略模式构建可扩展架构。', '正在构建事件驱动的 Qt 界面，通过 IPC 连接独立处理服务，结合异步任务与自动化测试。'] },
      { id: 'vdm-ledger', name: 'VDM Ledger', category: '全栈 / WEB 应用', subtitle: '个人财务与银行账户管理应用', date: '2026 年 9 月 – 至今', description: '已部署的财务应用，整合银行账户、交易同步、财务仪表盘与 Excel 报表。', visual: ['连接账户', '同步交易', '生成报表'], tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Plaid', 'Vercel'], bullets: ['设计 UI、业务服务与数据库仓储分层架构，实现经过身份认证的 API 与 PostgreSQL 行级安全策略。', '实现定时任务与 GitHub Actions 持续集成，结合自动化测试和生产构建验证。'] },
      { id: 'smart-locker', name: 'Personal Smart Locker', category: '嵌入式 / 固件', subtitle: '智能储物柜门禁系统', date: '2026 年 8 月 – 至今', description: '基于 ATmega328P 的门禁系统，集成 ADC 键盘、舵机、LED 与蜂鸣器。', visual: ['读取输入', '状态转换', '门锁控制'], tags: ['C/C++', 'ATmega328P', 'ADC', 'PWM', 'EEPROM', 'FSM'], bullets: ['开发键盘校准、舵机 PWM、EEPROM 密码存储与堵转恢复固件。', '使用状态机管理 PIN 输入、门锁控制及休眠/唤醒，通过断电重启与系统测试验证运行。'] }
    ],
    education: [
      { school: '弗吉尼亚理工大学', fullName: 'Virginia Polytechnic Institute and State University', degree: '计算机工程理学学士（在读）', date: '2025 年 8 月 – 2028 年 5 月', location: '美国弗吉尼亚州布莱克斯堡', current: true, courses: ['机器学习', '计算机体系结构原理', '应用软件设计', '信号与系统'] },
      { school: '普渡大学韦恩堡分校', fullName: 'Purdue University Fort Wayne', degree: '计算机工程理学学士课程学习', date: '2023 年 8 月 – 2025 年 5 月', location: '美国印第安纳州韦恩堡', gpa: '3.65 / 4.0', honors: ['荣誉学生', '院长名单（Dean’s List）', '荣誉名单（Honors List）'] }
    ],
    leadership: { name: 'IEEEXtreme 17.0 Programming Competition', role: '队长', date: '2023 年 11 月', description: '带领团队参加全球 24 小时编程竞赛，获得普渡大学韦恩堡分校第 1 名、全美第 51 名。', localLabel: '普渡大学韦恩堡分校', nationalLabel: '全美排名' }, spoken: ['普通话 — 母语', '英语 — 流利', '西班牙语 — 中级']
  }
};
