/* ═══════════════════════════════════════════════
   吴闯 · 个人品牌网站 — 中英双语版
   ═══════════════════════════════════════════════ */

const DATA = {
  zh: {
    meta: { lastUpdated: '2026-06-30' },
    name: '吴闯',
    title: '质量工程师',
    desc: '3年汽车零部件质量管理经验，精通IATF16949 体系与 VDA6.3 过程审核，擅长数据驱动质量改进。',
    greeting: '你好，我是',
    info: '<span>🚹 男 · 26岁</span><span class="hero-dot">·</span><span>📍 现居宁波</span><span class="hero-dot">·</span><span>🏠 家乡辽宁</span>',
    about: [
      '拥有3年汽车零部件行业质量管理与工艺工程经验，精通 IATF16949 质量管理体系及 VDA6.3 过程审核标准，熟练运用 PPAP、APQP、FMEA、SPC、MSA 等五大核心工具。具备从新项目导入、过程审核到体系认证的全链路质量管理能力，擅长基于数据分析驱动质量改进与跨部门系统性解决问题。',
      '积极运用 AI 与自动化工具提升工作效率，熟练使用 AI 智能体（Hermes Agent）进行复杂任务编排、代码开发与项目构建，具备 Python 脚本编写、Git 版本控制及自动化部署的实际操作经验。'
    ],
    sections: { about: '关于我', skills: '专业技能', quality: '质量管理与体系', software: '数字化工具', experience: '工作经历', projects: '项目成果', contact: '联系方式' },
    skills: {
      quality: [
        { name: 'IATF16949', pct: 92 }, { name: 'VDA6.3 过程审核', pct: 90 },
        { name: 'PPAP / APQP', pct: 88 }, { name: 'FMEA (PFMEA/DFMEA)', pct: 85 },
        { name: '8D / 5-Why / 鱼骨图', pct: 82 }, { name: 'SPC / MSA', pct: 80 }
      ],
      software: [
        { name: 'AI 智能体 (Hermes Agent)', pct: 80 }, { name: 'CAD / CATIA', pct: 75 },
        { name: 'Python 脚本开发', pct: 72 }, { name: 'Git 版本控制', pct: 70 }
      ]
    },
    experience: [
      { company: '埃尔科汽车系统（宁波）有限公司', role: '质量工程师', period: '2024.12 — 至今',
        details: [
          '主导 IATF16949 体系文件审核与管理，<span class="tl-highlight">全年审核通过率 100%</span>',
          '策划年度审核计划，跨部门协调，推动 <span class="tl-highlight">20+ 项不符合项</span> 跟踪整改与闭环',
          '基于生产过程数据识别 TOP 问题，联合多部门整改，<span class="tl-highlight">关键问题复发率降低 30%</span>',
          '协助第三方认证及客户审核 <span class="tl-highlight">5+ 次，均一次通过</span>',
          '主导 3 个新项目 PPAP 编制与过程风险评估，确保顺利进入批量生产'
        ] },
      { company: '宁波拓普集团股份有限公司', role: '焊接工艺员', period: '2023.11 — 2024.12',
        details: [
          '负责副车架项目工厂导入前期准备，独立编制控制计划、PFMEA、过程流程图及作业指导书',
          '主导现场问题解决（焊接缺陷/尺寸偏差/夹具调试/涂装不良等），<span class="tl-highlight">一次合格率提升约 8%</span>'
        ] },
      { company: '义乌吉利变速器有限公司', role: '质量体系管理助理专员', period: '2022.07 — 2023.11',
        details: [
          '负责全流程质量体系管理策划与运行监督，推动 IATF16949 标准落地，<span class="tl-highlight">内部审核不符合项同比减少 25%</span>',
          '策划并主导 VDA6.3 制造过程审核，跟踪纠正措施及有效性验证',
          '独立出具审核报告并监督整改闭环，持续提升公司质量管理能力'
        ] }
    ],
    projects: [
      { title: '🔄 5M变化点管理系统',
        body: '基于 AGCN.AA01.046 5M变化点管理指导书开发的 Web 端变化点全生命周期管理系统。覆盖末件确认→首件确认→持续监控→关闭的完整闭环，支持5M1E分类（人机料法环测）、产线维度管理、RBAC权限矩阵及仪表盘可视化。FastAPI + Jinja2 + SQLite SSR 全栈架构。',
        tags: ['Python', 'FastAPI', 'Jinja2', 'SQLite', 'IATF16949'],
        img: 'assets/images/project-change-point.png' },
      { title: '📋 汽车质量体系审核工具',
        body: '面向 IATF 16949 / VDA 6.3 / VDA 6.5 三大审核标准的全功能审核管理平台。支持审核计划制定、条款检查清单、不符合项管理、纠正措施跟踪及仪表盘分析。FastAPI + Vue3 前后端分离架构，PostgreSQL 数据持久化。',
        tags: ['Python', 'FastAPI', 'Vue3', 'PostgreSQL', 'VDA6.3'] },
      { title: '📁 汽车质量体系文件管理系统',
        body: '严格对齐 IATF 16949:2016 第 7.5 条「成文信息」要求的文件全生命周期管理系统。覆盖创建→审批→发布→受控→变更→作废→归档完整闭环，支持 RBAC、版本追溯、全文检索和在线预览。FastAPI + Jinja2 SSR 架构。',
        tags: ['Python', 'FastAPI', 'Jinja2', 'SQLite', 'IATF16949'],
        img: 'assets/images/project-doc-mgmt.png' },
      { title: '🎵 MusicDecrypt — 加密音乐文件解密工具',
        body: '利用 AI 智能体从零到一独立完成的全栈软件项目。Python + FastAPI 构建后端，支持 NCM、MFLAC、MGG、QMC 等多种主流加密格式解密为 MP3/FLAC。配备 Web 交互界面，使用 PyInstaller 打包为独立可执行文件（零依赖运行）。',
        tags: ['Python', 'FastAPI', 'PyInstaller'] },
      { title: '🔄 双机数据自动同步方案',
        body: '利用 Git 裸仓库 + Shell 脚本搭建个人工作电脑与家庭电脑间的数据自动同步系统，覆盖技能文件、会话记录、定时任务等核心数据，体系统化思维与自动化运维意识。',
        tags: ['Git', 'Shell', 'Automation'] }
    ],
    contact: { phone: '📞 132-5099-3668', email: '✉ 1923689620@qq.com' },
    btnExperience: '查看工作经历',
    footer: '© 2026 吴闯 · 最后更新 2026-06-30'
  },

  en: {
    meta: { lastUpdated: '2026-06-30' },
    name: 'Charles Wu',
    title: 'Quality Engineer',
    desc: 'Quality Engineer with 3 years of automotive industry experience. Proficient in IATF16949 and VDA6.3 process audits.',
    greeting: 'Hello, I am',
    info: '<span>🚹 Male · 26</span><span class="hero-dot">·</span><span>📍 Ningbo</span><span class="hero-dot">·</span><span>🏠 Liaoning</span>',
    about: [
      'Quality Management & Process Engineering professional with 3 years of automotive components industry experience. Proficient in IATF16949 quality systems and VDA6.3 process audits, with strong command of Core Tools (PPAP, APQP, FMEA, SPC, MSA). End-to-end quality capabilities from new project launch through system certification. Skilled in data-driven quality improvement and cross-functional systematic problem solving.',
      'Actively leverages AI and automation tools — proficient in using AI agents (Hermes Agent) for complex task orchestration, code development, and project builds. Hands-on experience with Python scripting, Git version control, and automated deployment.'
    ],
    sections: { about: 'About Me', skills: 'Skills', quality: 'Quality & Systems', software: 'Digital Tools', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    skills: {
      quality: [
        { name: 'IATF16949', pct: 92 }, { name: 'VDA6.3 Process Audit', pct: 90 },
        { name: 'PPAP / APQP', pct: 88 }, { name: 'FMEA (PFMEA/DFMEA)', pct: 85 },
        { name: '8D / 5-Why / Fishbone', pct: 82 }, { name: 'SPC / MSA', pct: 80 }
      ],
      software: [
        { name: 'AI Agent (Hermes Agent)', pct: 80 }, { name: 'CAD / CATIA', pct: 75 },
        { name: 'Python Scripting', pct: 72 }, { name: 'Git Version Control', pct: 70 }
      ]
    },
    experience: [
      { company: 'Alco Automotive Systems (Ningbo) Co., Ltd.', role: 'Quality Engineer', period: 'Dec 2024 — Present',
        details: [
          'Led IATF16949 quality system documentation and control, <span class="tl-highlight">100% audit pass rate</span>',
          'Planned annual audits, coordinated cross-departmental efforts, closed <span class="tl-highlight">20+ non-conformities</span>',
          'Identified top quality issues through production data analysis, <span class="tl-highlight">reduced critical defect recurrence by 30%</span>',
          'Supported <span class="tl-highlight">5+ certification and customer audits — all passed first time</span>',
          'Led PPAP documentation and risk assessments for 3 new projects transitioning to mass production'
        ] },
      { company: 'Ningbo Tuopu Group Co., Ltd.', role: 'Welding Process Engineer', period: 'Nov 2023 — Dec 2024',
        details: [
          'Managed subframe project factory launch — independently authored Control Plan, PFMEA, process flow diagrams and SOPs',
          'Resolved on-site welding defects, dimensional deviations and fixture issues, <span class="tl-highlight">improved first-pass yield by ~8%</span>'
        ] },
      { company: 'Yiwu Geely Transmission Co., Ltd.', role: 'Quality System Associate', period: 'Jul 2022 — Nov 2023',
        details: [
          'Managed end-to-end quality system planning and oversight, <span class="tl-highlight">reduced audit non-conformities by 25% YoY</span>',
          'Planned and led VDA6.3 manufacturing process audits, tracked corrective actions and verified effectiveness',
          'Independently authored audit reports and monitored corrective actions for continuous improvement'
        ] }
    ],
    projects: [
      { title: '🔄 5M Change Point Management System',
        body: 'A web-based change point lifecycle management system built on AGCN.AA01.046 5M Change Point Guideline. Covers full closed loop: Last Part Confirmation → First Piece Confirmation → Continuous Monitoring → Closure. Supports 5M1E categorization, production line management, RBAC permission matrix and dashboard visualization. FastAPI + Jinja2 + SQLite SSR.',
        tags: ['Python', 'FastAPI', 'Jinja2', 'SQLite', 'IATF16949'],
        img: 'assets/images/project-change-point.png' },
      { title: '📋 Automotive Quality System Audit Tool',
        body: 'A full-featured audit management platform for IATF 16949 / VDA 6.3 / VDA 6.5 standards. Supports audit planning, clause checklists, non-conformity management, corrective action tracking, and dashboard analytics. FastAPI + Vue3 separated architecture, PostgreSQL persistence.',
        tags: ['Python', 'FastAPI', 'Vue3', 'PostgreSQL', 'VDA6.3'] },
      { title: '📁 Automotive QMS Document Management System',
        body: 'A web-based document lifecycle management system aligned with IATF 16949:2016 Clause 7.5 "Documented Information". Covers Create → Approve → Publish → Control → Revise → Obsolete → Archive full lifecycle, with RBAC, version history & diff, full-text search and online preview. FastAPI + Jinja2 SSR.',
        tags: ['Python', 'FastAPI', 'Jinja2', 'SQLite', 'IATF16949'],
        img: 'assets/images/project-doc-mgmt.png' },
      { title: '🎵 MusicDecrypt — Encrypted Music Decryption Tool',
        body: 'Full-stack software project built independently using AI agents. Python + FastAPI backend supporting NCM, MFLAC, MGG, QMC decryption to MP3/FLAC. Web UI included, packaged as standalone executable (zero dependencies) with PyInstaller.',
        tags: ['Python', 'FastAPI', 'PyInstaller'] },
      { title: '🔄 Cross-Device Data Sync Solution',
        body: 'Built a personal data sync system using Git bare repos and Shell scripts for automatic sync between work and home computers — covering skills, sessions, and scheduled tasks.',
        tags: ['Git', 'Shell', 'Automation'] }
    ],
    contact: { phone: '📞 +86 132-5099-3668', email: '✉ 1923689620@qq.com' },
    btnExperience: 'View Experience',
    footer: '© 2026 Charles Wu · Last updated 2026-06-30'
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  render();
  document.querySelectorAll('.skill-fill').forEach(function(b) { b.style.width = '0%'; });
  // Re-animate after re-render
  setTimeout(function() { observeSections(); }, 100);
}

function render() {
  var d = DATA[currentLang];

  // Hero
  setText('hero-greeting', d.greeting);
  setText('hero-name', d.name);
  setText('hero-title', d.title);
  setText('hero-desc', d.desc);
  document.getElementById('hero-info').innerHTML = d.info;
  setText('btn-experience', d.btnExperience);

  // Section titles
  setText('title-about', d.sections.about);
  setText('title-skills', d.sections.skills);
  setText('label-quality', d.sections.quality);
  setText('label-software', d.sections.software);
  setText('title-experience', d.sections.experience);
  setText('title-projects', d.sections.projects);
  setText('title-contact', d.sections.contact);

  // About
  var a = document.getElementById('about-content');
  if (a) a.innerHTML = d.about.map(function(p) { return '<p>' + p + '</p>'; }).join('');

  // Skills
  renderSkills('skills-quality-list', d.skills.quality);
  renderSkills('skills-software-list', d.skills.software);

  // Experience
  var exp = document.getElementById('experience-list');
  if (exp) exp.innerHTML = d.experience.map(function(e) {
    return '<div class="tl-item"><div class="tl-company">' + e.company + '</div><div class="tl-role">' + e.role + '</div><div class="tl-period">' + e.period + '</div><div class="tl-detail">' + e.details.map(function(dd) { return '▸ ' + dd; }).join('<br>') + '</div></div>';
  }).join('');

  // Projects
  var proj = document.getElementById('projects-list');
  if (proj) proj.innerHTML = d.projects.map(function(p) {
    var imgHtml = p.img ? '<img class="proj-img" src="' + p.img + '" alt="' + p.title + '" loading="lazy">' : '';
    return '<div class="proj-card">' + imgHtml + '<div class="proj-title">' + p.title + '</div><div class="proj-body">' + p.body + '</div><div class="proj-tags">' + p.tags.map(function(t) { return '<span class="proj-tag">' + t + '</span>'; }).join('') + '</div></div>';
  }).join('');

  // Contact & Footer
  setText('contact-phone', d.contact.phone);
  setText('contact-email', d.contact.email);
  setText('footer-text', d.footer);

  // Toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderSkills(id, items) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(function(s) {
    return '<div class="skill-row"><div class="skill-label"><span>' + s.name + '</span><span class="skill-pct">' + s.pct + '%</span></div><div class="skill-bar"><div class="skill-fill" data-width="' + s.pct + '"></div></div></div>';
  }).join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(function(bar, i) {
    setTimeout(function() { bar.style.width = bar.dataset.width + '%'; }, i * 60);
  });
}

function observeSections() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.id === 'sec-skills') setTimeout(animateSkillBars, 200);
        if (entry.target.id === 'sec-experience') {
          entry.target.querySelectorAll('.tl-item').forEach(function(item, i) {
            setTimeout(function() { item.classList.add('visible'); }, i * 150);
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.section').forEach(function(s) { observer.observe(s); });
}

document.addEventListener('DOMContentLoaded', function() {
  render();
  observeSections();

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.dataset.lang); });
  });

  // Hero sticky shrink
  var hero = document.getElementById('hero'), ticking = false;
  if (hero) {
    var photo = hero.querySelector('.hero-photo');
    if (photo) photo.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.scrollY > 80) hero.classList.add('shrunk');
          else hero.classList.remove('shrunk');
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Button
  var btnExp = document.getElementById('btn-experience');
  if (btnExp) btnExp.addEventListener('click', function() {
    document.getElementById('sec-experience').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
