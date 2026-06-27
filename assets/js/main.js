/* ═══════════════════════════════════════════════
   吴闯 · 个人品牌网站 — 数据 + 动画控制
   ═══════════════════════════════════════════════ */

// ─── RESUME DATA ─────────────────────────────
const DATA = {
  meta: { lastUpdated: '2026-06-27', version: '3.0' },

  about: [
    '拥有3年汽车零部件行业质量管理与工艺工程经验，精通 IATF16949 质量管理体系及 VDA6.3 过程审核标准，熟练运用 PPAP、APQP、FMEA、SPC、MSA 等五大核心工具。具备从新项目导入、过程审核到体系认证的全链路质量管理能力，擅长基于数据分析驱动质量改进与跨部门系统性解决问题。',
    '积极运用 AI 与自动化工具提升工作效率，熟练使用 AI 智能体（Hermes Agent）进行复杂任务编排、代码开发与项目构建，具备 Python 脚本编写、Git 版本控制及自动化部署的实际操作经验。'
  ],

  skills: {
    quality: [
      { name: 'IATF16949', pct: 92 },
      { name: 'VDA6.3 过程审核', pct: 90 },
      { name: 'PPAP / APQP', pct: 88 },
      { name: 'FMEA (PFMEA/DFMEA)', pct: 85 },
      { name: '8D / 5-Why / 鱼骨图', pct: 82 },
      { name: 'SPC / MSA', pct: 80 }
    ],
    software: [
      { name: 'AI 智能体 (Hermes Agent)', pct: 80 },
      { name: 'CAD / CATIA', pct: 75 },
      { name: 'Python 脚本开发', pct: 72 },
      { name: 'Git 版本控制', pct: 70 }
    ]
  },

  experience: [
    {
      company: '埃尔科汽车系统（宁波）有限公司',
      role: '质量工程师',
      period: '2024.12 — 至今',
      details: [
        '主导 IATF16949 体系文件审核与管理，<span class="tl-highlight">全年审核通过率 100%</span>',
        '策划年度审核计划，跨部门协调，推动 <span class="tl-highlight">20+ 项不符合项</span> 跟踪整改与闭环',
        '基于生产过程数据识别 TOP 问题，联合多部门整改，<span class="tl-highlight">关键问题复发率降低 30%</span>',
        '协助第三方认证及客户审核 <span class="tl-highlight">5+ 次，均一次通过</span>',
        '主导 3 个新项目 PPAP 编制与过程风险评估，确保顺利进入批量生产'
      ]
    },
    {
      company: '宁波拓普集团股份有限公司',
      role: '焊接工艺员',
      period: '2023.11 — 2024.12',
      details: [
        '负责副车架项目工厂导入前期准备，独立编制控制计划、PFMEA、过程流程图及作业指导书',
        '主导现场问题解决（焊接缺陷/尺寸偏差/夹具调试/涂装不良等），<span class="tl-highlight">一次合格率提升约 8%</span>'
      ]
    },
    {
      company: '义乌吉利变速器有限公司',
      role: '质量体系管理助理专员',
      period: '2022.07 — 2023.11',
      details: [
        '负责全流程质量体系管理策划与运行监督，推动 IATF16949 标准落地，<span class="tl-highlight">内部审核不符合项同比减少 25%</span>',
        '策划并主导 VDA6.3 制造过程审核，跟踪纠正措施及有效性验证',
        '独立出具审核报告并监督整改闭环，持续提升公司质量管理能力'
      ]
    }
  ],

  projects: [
    {
      title: '🎵 MusicDecrypt — 加密音乐文件解密工具',
      body: '利用 AI 智能体从零到一独立完成的全栈软件项目。Python + FastAPI 构建后端，支持 NCM、MFLAC、MGG、QMC 等多种主流加密格式解密为 MP3/FLAC。配备 Web 交互界面，使用 PyInstaller 打包为独立可执行文件（零依赖运行）。',
      tags: ['Python', 'FastAPI', 'PyInstaller']
    },
    {
      title: '🔄 双机数据自动同步方案',
      body: '利用 Git 裸仓库 + Shell 脚本搭建个人工作电脑与家庭电脑间的数据自动同步系统，覆盖技能文件、会话记录、定时任务等核心数据，体系统化思维与自动化运维意识。',
      tags: ['Git', 'Shell', 'Automation']
    }
  ],

  contact: {
    phone: '132-5099-3668',
    email: '1923689620@qq.com'
  },

  footer: '© 2026 吴闯 · 最后更新 2026-06-27'
};

// ─── RENDER ──────────────────────────────────
function render() {
  // About
  const aboutEl = document.getElementById('about-content');
  if (aboutEl) aboutEl.innerHTML = DATA.about.map(p => `<p>${p}</p>`).join('');

  // Skills — quality
  const sq = document.getElementById('skills-quality-list');
  if (sq) sq.innerHTML = DATA.skills.quality.map(s =>
    `<div class="skill-row">
      <div class="skill-label"><span>${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="${s.pct}"></div></div>
    </div>`
  ).join('');

  // Skills — software
  const ss = document.getElementById('skills-software-list');
  if (ss) ss.innerHTML = DATA.skills.software.map(s =>
    `<div class="skill-row">
      <div class="skill-label"><span>${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="${s.pct}"></div></div>
    </div>`
  ).join('');

  // Experience
  const exp = document.getElementById('experience-list');
  if (exp) exp.innerHTML = DATA.experience.map(e =>
    `<div class="tl-item">
      <div class="tl-company">${e.company}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-period">${e.period}</div>
      <div class="tl-detail">${e.details.map(d => `▸ ${d}`).join('<br>')}</div>
    </div>`
  ).join('');

  // Projects
  const proj = document.getElementById('projects-list');
  if (proj) proj.innerHTML = DATA.projects.map(p =>
    `<div class="proj-card">
      <div class="proj-title">${p.title}</div>
      <div class="proj-body">${p.body}</div>
      <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
    </div>`
  ).join('');

  // Contact
  const cp = document.getElementById('contact-phone');
  if (cp) cp.textContent = `📞 ${DATA.contact.phone}`;
  const ce = document.getElementById('contact-email');
  if (ce) ce.textContent = `✉ ${DATA.contact.email}`;

  // Footer
  const ft = document.getElementById('footer-text');
  if (ft) ft.textContent = DATA.footer;
}

// ─── ANIMATIONS ──────────────────────────────

// 技能条动画
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach((bar, i) => {
    const w = bar.dataset.width;
    setTimeout(() => { bar.style.width = w + '%'; }, i * 60);
  });
}

// ② 区块滚动进入动画
function observeSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (entry.target.id === 'sec-skills') {
          setTimeout(animateSkillBars, 200);
        }

        if (entry.target.id === 'sec-experience') {
          entry.target.querySelectorAll('.tl-item').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 150);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.section').forEach(s => observer.observe(s));
}

// ─── INIT ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  render();
  observeSections();
  // Hero sticky shrink (throttled)
  const hero = document.getElementById('hero');
  let ticking = false;
  if (hero) {
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.scrollY > 80) {
            hero.classList.add('shrunk');
          } else {
            hero.classList.remove('shrunk');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  const btnExp = document.getElementById('btn-experience');
  if (btnExp) {
    btnExp.addEventListener('click', function() {
      document.getElementById('sec-experience').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
