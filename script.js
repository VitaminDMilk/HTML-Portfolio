'use strict';

const content = window.PORTFOLIO_CONTENT;
const config = window.PORTFOLIO_CONFIG;
let language = 'en';
let theme = 'day';
let gallery = null;
let backgroundFrame = null;
let startBackground = null;
let revealObserver = null;
const entranceAnimations = new Set();
const revealedElements = new WeakSet();
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let tiltTarget = null;
let tiltFrame = null;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let animationPreference = recalled('animation', 'auto');
const petal = new Image();
petal.src = 'petal.png';
petal.addEventListener('load', () => { if (theme === 'blush' && document.readyState !== 'loading') initBackground(); });

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function safeURL(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value.trim(), document.baseURI);
    return ['https:', 'http:', 'file:'].includes(url.protocol) && !url.username && !url.password ? value.trim() : '';
  } catch { return ''; }
}

function localized(value, fallback = '') {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.en || fallback;
}

function getMedia(id) {
  return (config.projects[id]?.media || []).filter(item => ['image', 'video'].includes(item.type) && safeURL(item.src));
}

function list(items, className = '') {
  return `<ul${className ? ` class="${escapeHTML(className)}"` : ''}>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
}

function sectionHeading(id, label, title, intro = '') {
  return `<div class="section-heading"><p class="section-label">${escapeHTML(label)}</p><h2 id="${id}-title">${escapeHTML(title)}</h2>${intro ? `<p class="section-intro">${escapeHTML(intro)}</p>` : ''}</div>`;
}

function projectCover(project, index) {
  const media = getMedia(project.id);
  const ui = content[language].ui;
  if (media.length) {
    const first = media[0];
    const alt = localized(first.alt, `${project.name} — ${ui[first.type]}`);
    const preview = first.type === 'image'
      ? `<img src="${escapeHTML(safeURL(first.src))}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async">`
      : `<video src="${escapeHTML(safeURL(first.src))}" preload="metadata" muted playsinline aria-label="${escapeHTML(alt)}"></video>`;
    return `<div class="project-cover has-media"><button class="media-open" type="button" data-gallery="${project.id}" aria-label="${escapeHTML(`${ui.gallery}: ${project.name}`)}">${preview}<span class="media-badge">${escapeHTML(ui.gallery)} ↗</span></button></div>`;
  }
  const initials = { 'ai-workspace': 'AI / WS', 'vdm-ledger': 'VDM / L', 'smart-locker': 'PIN / IO' };
  return `<div class="project-cover" aria-hidden="true"><div class="cover-top"><span>PROJECT / 0${index + 1}</span><span>↗</span></div><span class="cover-monogram">${initials[project.id]}</span><div class="cover-flow">${project.visual.map(word => `<span>${escapeHTML(word)}</span>`).join('')}</div></div>`;
}

function renderSections() {
  const data = content[language];
  const ui = data.ui;
  document.getElementById('experience').innerHTML = sectionHeading('experience', ui.experienceLabel, ui.experienceTitle, ui.experienceIntro) + `<div class="experience-list">${data.experience.map(entry => `
    <article class="experience-entry${entry.featured ? ' featured' : ''}"><div class="entry-meta"><p>${escapeHTML(entry.date)}</p><p>${escapeHTML(entry.location)}</p></div><div><h3>${escapeHTML(entry.company)}</h3><p class="role">${escapeHTML(entry.role)}</p>${list(entry.bullets)}${list(entry.tags, 'tags')}</div></article>`).join('')}</div>`;

  document.getElementById('projects').innerHTML = sectionHeading('projects', ui.projectsLabel, ui.projectsTitle, ui.projectsIntro) + `<div class="project-grid">${data.projects.map((project, index) => {
    const links = config.projects[project.id] || {};
    const actions = ['github', 'demo'].map(key => {
      const href = safeURL(links[key]);
      return href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ui[key])}</a>` : '';
    }).join('') + (getMedia(project.id).length ? `<button type="button" data-gallery="${project.id}">${escapeHTML(ui.gallery)}</button>` : '');
    return `<article class="project-card" id="project-${project.id}">${projectCover(project, index)}<div class="project-copy"><p class="project-category">${escapeHTML(project.category)}</p><h3>${escapeHTML(project.name)}</h3><p class="project-subtitle">${escapeHTML(project.subtitle)}</p><p class="project-date">${escapeHTML(project.date)}</p><p class="project-description">${escapeHTML(project.description)}</p>${list(project.tags, 'tags')}${list(project.bullets, 'project-highlights')}<div class="project-actions">${actions}</div></div></article>`;
  }).join('')}</div>`;

  const groups = [
    [ui.softwareSkills, ['C++', 'C', 'Python', 'Java', 'JavaScript / TypeScript', 'SQL']],
    [ui.systemsSkills, ['Qt', 'Git', 'Docker', 'CMake', 'Arduino']],
    [ui.webSkills, ['Next.js', 'Supabase', 'PostgreSQL', 'GitHub Actions', 'Vercel']]
  ];
  document.getElementById('skills').innerHTML = sectionHeading('skills', ui.skillsLabel, ui.skillsTitle) + `<div class="skills-grid">${groups.map(([title, tools]) => `<div class="skill-group"><h3>${escapeHTML(title)}</h3>${list(tools, 'tags')}</div>`).join('')}</div><div class="spoken-languages"><strong>${escapeHTML(ui.spokenLanguages)}</strong>${data.spoken.map(item => `<span>${escapeHTML(item)}</span>`).join('')}</div>`;

  document.getElementById('education').innerHTML = sectionHeading('education', ui.educationLabel, ui.educationTitle) + `<div class="education-grid">${data.education.map(entry => `<article class="education-card"><div class="education-top"><span>${escapeHTML(entry.date)}</span>${entry.current ? `<span class="current-badge">${escapeHTML(ui.current)}</span>` : ''}</div><h3>${escapeHTML(entry.school)}</h3>${entry.fullName ? `<p class="school-full-name">${escapeHTML(entry.fullName)}</p>` : ''}<p class="degree">${escapeHTML(entry.degree)}</p><p class="education-location">${escapeHTML(entry.location)}</p>${entry.current ? `<p class="education-location">${escapeHTML(ui.expected)}</p>` : ''}${entry.gpa ? `<p class="role">GPA ${escapeHTML(entry.gpa)}</p>` : ''}<div class="education-detail"><strong>${escapeHTML(entry.courses ? ui.coursework : ui.honors)}</strong><p>${(entry.courses || entry.honors).map(escapeHTML).join(' · ')}</p></div></article>`).join('')}</div>`;

  const leadership = data.leadership;
  document.getElementById('activities').innerHTML = sectionHeading('activities', ui.leadershipLabel, ui.leadershipTitle) + `<article class="leadership-card"><div><h3>${escapeHTML(leadership.name)}</h3><p class="role">${escapeHTML(leadership.role)} · ${escapeHTML(leadership.date)}</p><p>${escapeHTML(leadership.description)}</p></div><div class="competition-results"><div><strong>#1</strong><span>${escapeHTML(leadership.localLabel)}</span></div><div><strong>#51</strong><span>${escapeHTML(leadership.nationalLabel)}</span></div></div></article>`;
}

function remember(key, value) {
  try { localStorage.setItem(`wd-portfolio-${key}`, value); } catch { /* Preferences also work without storage. */ }
}

function recalled(key, fallback) {
  try { return localStorage.getItem(`wd-portfolio-${key}`) || fallback; } catch { return fallback; }
}

function setLanguage(nextLanguage) {
  language = Object.hasOwn(content, nextLanguage) ? nextLanguage : 'en';
  const ui = content[language].ui;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = ui[element.dataset.i18n]; });
  document.getElementById('about-copy').textContent = content[language].about;
  document.getElementById('footer-name').textContent = language === 'zh' ? '戴维 / Wei (David) Dai' : 'Wei (David) Dai';
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('nav').setAttribute('aria-label', ui.navigationLabel);
  document.querySelector('.language-switcher').setAttribute('aria-label', ui.languageLabel);
  document.querySelector('.theme-switcher').setAttribute('aria-label', ui.themeLabel);
  document.querySelector('.animation-switcher').setAttribute('aria-label', ui.animationLabel);
  updateAnimationControl();
  document.querySelector('.focus-panel').setAttribute('aria-label', ui.focusAria);
  document.querySelectorAll('[data-theme]').forEach(button => {
    const key = `theme${button.dataset.theme[0].toUpperCase()}${button.dataset.theme.slice(1)}`;
    button.setAttribute('aria-label', ui[key]); button.title = ui[key];
  });
  document.querySelector('meta[name="description"]').content = language === 'zh'
    ? '戴维（Wei / David Dai）— 弗吉尼亚理工大学计算机工程学生。C++ 软件、嵌入式系统、全栈应用与 AI 感知项目。'
    : 'Wei (David) Dai — Computer Engineering student at Virginia Tech. C++ software, embedded systems, full-stack applications, and AI perception.';
  renderSections();
  syncPageEffects();
  const resume = document.getElementById('download');
  const resumeURL = safeURL(config.resumeHref);
  resume.hidden = !resumeURL;
  if (resumeURL) resume.href = resumeURL;
  remember('language', language);
}

function setTheme(nextTheme) {
  theme = ['day', 'night', 'blush'].includes(nextTheme) ? nextTheme : 'day';
  document.body.classList.remove('theme-day', 'theme-night', 'theme-blush');
  document.body.classList.add(`theme-${theme}`);
  document.querySelectorAll('[data-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === theme)));
  remember('theme', theme);
  initBackground();
}

function animationEnabled() {
  return animationPreference === 'on' || (animationPreference !== 'off' && !motionPreference.matches);
}

function updateAnimationControl() {
  const button = document.getElementById('toggle-animation');
  const enabled = animationEnabled();
  const label = content[language].ui[enabled ? 'pauseAnimation' : 'playAnimation'];
  button.textContent = enabled ? 'Ⅱ' : '▶';
  button.setAttribute('aria-label', label);
  button.setAttribute('aria-pressed', String(enabled));
  button.title = label;
}

function toggleAnimation() {
  animationPreference = animationEnabled() ? 'off' : 'on';
  remember('animation', animationPreference);
  updateAnimationControl();
  syncBackgroundAnimation();
  syncPageEffects();
}

function effectsEnabled() {
  return animationEnabled() && !motionPreference.matches;
}

function animateEntrance(element, delay = 0) {
  if (revealedElements.has(element) || !effectsEnabled() || !element.animate) return;
  revealedElements.add(element);
  const animation = element.animate([
    { opacity: 0, transform: 'translateY(24px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 700, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  entranceAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => entranceAnimations.delete(animation));
}

function clearTilt() {
  cancelAnimationFrame(tiltFrame);
  tiltFrame = null;
  if (tiltTarget) {
    ['--tilt-x', '--tilt-y', '--glow-x', '--glow-y'].forEach(name => tiltTarget.style.removeProperty(name));
    tiltTarget.classList.remove('pointer-active');
  }
  tiltTarget = null;
}

function syncPageEffects() {
  clearTilt();
  const enabled = effectsEnabled();
  document.body.classList.toggle('effects-enabled', enabled);
  document.documentElement.classList.toggle('motion-paused', !enabled);
  revealObserver?.disconnect();
  if (!enabled) {
    entranceAnimations.forEach(animation => animation.cancel());
    entranceAnimations.clear();
    clearTilt();
    return;
  }
  const hero = document.querySelectorAll('.hero .eyebrow, .hero h1, .hero-tagline, .hero-location, .hero-actions, .focus-panel');
  hero.forEach((element, index) => animateEntrance(element, index * 70));
  const sections = document.querySelectorAll('.about-section, .section-heading, .experience-entry, .project-card, .skill-group, .education-card, .leadership-card, .contact-section');
  if (!('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateEntrance(entry.target);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: '0px 0px -32px 0px' });
  sections.forEach(element => {
    // Content is visible by default, including without JavaScript or motion.
    if (element.getBoundingClientRect().bottom < 0) revealedElements.add(element);
    if (!revealedElements.has(element)) revealObserver.observe(element);
  });
}

function initPageEffects() {
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  let scrollFrame = null;
  function updateScroll() {
    scrollFrame = null;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--progress', distance > 0 ? String(Math.min(1, Math.max(0, window.scrollY / distance))) : '0');
    const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
    let current = null;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section && section.getBoundingClientRect().top <= headerBottom + 100) current = link;
    });
    links.forEach(link => {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleScroll() {
    if (scrollFrame === null) scrollFrame = requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.querySelector('main'));
  updateScroll();
  document.querySelector('main').addEventListener('pointermove', event => {
    if (!effectsEnabled() || !finePointer.matches || event.pointerType === 'touch') return;
    const card = event.target.closest('.project-card, .focus-panel');
    if (!card) { clearTilt(); return; }
    if (tiltTarget !== card) { clearTilt(); tiltTarget = card; }
    const bounds = card.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    cancelAnimationFrame(tiltFrame);
    tiltFrame = requestAnimationFrame(() => {
      card.classList.add('pointer-active');
      card.style.setProperty('--glow-x', `${x * 100}%`);
      card.style.setProperty('--glow-y', `${y * 100}%`);
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
      tiltFrame = null;
    });
  }, { passive: true });
  document.querySelector('main').addEventListener('pointerleave', clearTilt);
  window.addEventListener('blur', clearTilt);
  finePointer.addEventListener('change', clearTilt);
  syncPageEffects();
}

function syncBackgroundAnimation() {
  cancelAnimationFrame(backgroundFrame);
  backgroundFrame = null;
  if (animationEnabled() && !document.hidden && startBackground) startBackground();
}

function initBackground() {
  cancelAnimationFrame(backgroundFrame);
  backgroundFrame = null;
  startBackground = null;
  const canvas = document.getElementById('bgcanvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * ratio; canvas.height = height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  // Restore the original site's particle types, counts, sizes, and velocities.
  const count = theme === 'night' ? 200 : theme === 'blush' ? 100 : 80;
  const items = Array.from({ length: count }, () => {
    const position = { x: Math.random() * width, y: Math.random() * height };
    if (theme === 'night') return { ...position, size: 1 + Math.random() * 2, blink: .02 + Math.random() * .05, alpha: Math.random() };
    if (theme === 'blush') return { ...position, size: 20 + Math.random() * 20, vx: Math.random() * .5 - .25, vy: Math.random() + .5, angle: Math.random() * Math.PI * 2, rotation: Math.random() * .02 - .01 };
    return { ...position, radius: 10 + Math.random() * 40, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 };
  });

  function paint(movement) {
    context.clearRect(0, 0, width, height);
    if (theme === 'night') {
      context.fillStyle = '#fff';
      items.forEach(star => {
        star.alpha = Math.max(0, Math.min(1, star.alpha + star.blink * (Math.random() > .5 ? 1 : -1) * movement));
        context.globalAlpha = star.alpha;
        context.fillRect(star.x, star.y, star.size, star.size);
      });
    } else if (theme === 'blush') {
      items.forEach(flower => {
        context.save();
        context.globalAlpha = .8;
        context.translate(flower.x, flower.y); context.rotate(flower.angle);
        if (petal.complete && petal.naturalWidth > 0) {
          context.drawImage(petal, -flower.size / 2, -flower.size / 2, flower.size, flower.size);
        } else {
          context.fillStyle = '#e78da7'; context.beginPath();
          context.ellipse(0, 0, flower.size / 3, flower.size / 6, 0, 0, Math.PI * 2); context.fill();
        }
        context.restore();
        flower.x += flower.vx * movement; flower.y += flower.vy * movement; flower.angle += flower.rotation * movement;
        if (flower.y > height) flower.y = -flower.size;
        if (flower.x > width + flower.size) flower.x = -flower.size;
        if (flower.x < -flower.size) flower.x = width + flower.size;
      });
    } else {
      context.fillStyle = 'rgba(100, 149, 237, 0.3)';
      items.forEach(bubble => {
        context.beginPath(); context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2); context.fill();
        bubble.x += bubble.vx * movement; bubble.y += bubble.vy * movement;
        if (bubble.x - bubble.radius > width) bubble.x = -bubble.radius;
        if (bubble.x + bubble.radius < 0) bubble.x = width + bubble.radius;
        if (bubble.y - bubble.radius > height) bubble.y = -bubble.radius;
        if (bubble.y + bubble.radius < 0) bubble.y = height + bubble.radius;
      });
    }
    context.globalAlpha = 1;
  }

  // A still background remains visible when motion is disabled.
  paint(0);
  let previousTime = 0;
  function draw(time) {
    if (document.hidden || !animationEnabled()) { backgroundFrame = null; return; }
    const movement = previousTime ? Math.min((time - previousTime) / 16.67, 2) : 1;
    previousTime = time;
    paint(movement);
    backgroundFrame = requestAnimationFrame(draw);
  }
  startBackground = () => {
    previousTime = 0;
    backgroundFrame = requestAnimationFrame(draw);
  };
  syncBackgroundAnimation();
}

function renderGallery() {
  if (!gallery) return;
  const { media, index, name } = gallery;
  const item = media[index];
  const ui = content[language].ui;
  const container = document.getElementById('media-content');
  container.replaceChildren();
  document.getElementById('media-title').textContent = name;
  const element = document.createElement(item.type === 'video' ? 'video' : 'img');
  element.src = safeURL(item.src);
  if (item.type === 'video') {
    element.controls = true; element.playsInline = true; element.preload = 'metadata';
    element.textContent = ui.videoUnsupported;
    element.setAttribute('aria-label', localized(item.alt, `${name} — ${ui.video}`));
  } else { element.alt = localized(item.alt, `${name} — ${ui.image}`); }
  element.addEventListener('error', () => { if (!element.isConnected) return; const error = document.createElement('p'); error.setAttribute('role', 'status'); error.textContent = ui.mediaUnavailable; container.replaceChildren(error); }, { once: true });
  container.append(element);
  const caption = localized(item.caption);
  if (caption) { const paragraph = document.createElement('p'); paragraph.textContent = caption; container.append(paragraph); }
  document.getElementById('media-counter').textContent = `${index + 1} / ${media.length}`;
  document.getElementById('previous-media').disabled = index === 0;
  document.getElementById('next-media').disabled = index === media.length - 1;
}

function openGallery(id) {
  const project = content[language].projects.find(item => item.id === id);
  const media = getMedia(id);
  if (!project || !media.length) return;
  gallery = { media, index: 0, name: project.name };
  renderGallery();
  document.getElementById('media-dialog').showModal();
}

function moveGallery(direction) {
  if (!gallery) return;
  const nextIndex = Math.max(0, Math.min(gallery.media.length - 1, gallery.index + direction));
  if (nextIndex === gallery.index) return;
  gallery.index = nextIndex;
  renderGallery();
}

function closeGallery() {
  document.getElementById('media-content').replaceChildren();
  gallery = null;
  document.getElementById('media-dialog').close();
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(recalled('language', 'en'));
  setTheme(recalled('theme', 'day'));
  initPageEffects();
  document.getElementById('year').textContent = String(new Date().getFullYear());
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.theme)));
  document.getElementById('toggle-animation').addEventListener('click', toggleAnimation);
  document.getElementById('projects').addEventListener('click', event => {
    const trigger = event.target.closest('[data-gallery]');
    if (trigger) openGallery(trigger.dataset.gallery);
  });
  const dialog = document.getElementById('media-dialog');
  document.getElementById('close-media').addEventListener('click', closeGallery);
  document.getElementById('previous-media').addEventListener('click', () => moveGallery(-1));
  document.getElementById('next-media').addEventListener('click', () => moveGallery(1));
  dialog.addEventListener('close', () => { document.getElementById('media-content').replaceChildren(); gallery = null; });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeGallery(); });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeGallery();
  });
  dialog.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); moveGallery(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveGallery(-1); }
  });
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(initBackground, 120); });
  document.addEventListener('visibilitychange', () => {
    syncBackgroundAnimation();
    document.body.classList.toggle('page-hidden', document.hidden);
    if (document.hidden) clearTilt();
  });
  motionPreference.addEventListener('change', () => { updateAnimationControl(); syncBackgroundAnimation(); syncPageEffects(); });
});
