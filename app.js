'use strict';

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const filters = document.querySelectorAll('.filter');
const projectDisclosure = document.querySelector('#project-disclosure');
const projectToggle = document.querySelector('#project-toggle');
let projectsExpanded = false;
let lastProjectButton = null;

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const tagsHtml = tags => tags.map(tag => '<span>' + escapeHtml(tag) + '</span>').join('');
function researchDetailsHtml(research) {
  if (!research) return '';
  return '<dl class="research-facts">' + research.facts.map(fact =>
    '<div><dt>' + escapeHtml(fact.label) + '</dt><dd>' + escapeHtml(fact.value) + '</dd></div>'
  ).join('') + '</dl><section class="research-comparison" aria-label="' + escapeHtml(research.heading || '프로젝트 구성') + '"><h3>' + escapeHtml(research.heading || '프로젝트 구성') + '</h3><div class="research-approaches">' + research.approaches.map(approach =>
    '<section class="research-approach"><p class="research-label">' + escapeHtml(approach.label) + '</p><h4>' + escapeHtml(approach.title) + '</h4><p>' + escapeHtml(approach.description) + '</p><ul>' + approach.points.map(point => '<li>' + escapeHtml(point) + '</li>').join('') + '</ul></section>'
  ).join('') + '</div></section>';
}
function backtestFigureHtml(backtest) {
  if (!backtest) return '';
  return '<figure class="backtest-figure"><h3>' + escapeHtml(backtest.title || '백테스트 결과') + '</h3>' +
    '<a href="' + escapeHtml(backtest.source || backtest.image) + '" target="_blank" rel="noopener noreferrer"><img src="' + escapeHtml(backtest.image) + '" alt="' + escapeHtml(backtest.title || '백테스트 결과 차트') + '" loading="lazy"></a>' +
    (backtest.caption ? '<figcaption>' + escapeHtml(backtest.caption) +
      (backtest.source ? ' <a href="' + escapeHtml(backtest.source) + '" target="_blank" rel="noopener noreferrer">원본 자료 ↗</a>' : '') + '</figcaption>' : '') +
    '</figure>';
}
function renderProjects(filter = 'all') {
  const entries = Object.entries(projects).filter(([, project]) => filter === 'all' || (project.categories || []).includes(filter)).sort(([, a], [, b]) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.date.localeCompare(a.date));
  const previewEntries = [
    ...entries.filter(([, project]) => project.featured),
    ...entries.filter(([, project]) => !project.featured).slice(0, 3)
  ];
  const canExpand = filter === 'all' && entries.length > previewEntries.length;
  const visibleEntries = canExpand && !projectsExpanded ? previewEntries : entries;
  grid.innerHTML = visibleEntries.map(([id, project]) => {
    return '<article class="project-card' + (project.featured ? ' project-featured' : '') + '"><div class="project-date">' + escapeHtml(project.date) + '</div>' +
      '<div class="project-content">' +
      (project.featured ? '<p class="project-type">' + escapeHtml(project.typeLabel || '대표 프로젝트') + '</p>' : '') +
      '<h3>' + escapeHtml(project.title) + '</h3>' +
      (!project.featured ? '<p class="project-type">' + escapeHtml(project.typeLabel || '연구 프로젝트') + '</p>' : '') +
      '<p class="card-description">' + escapeHtml(project.abstract || project.desc) + '</p>' +
      '<p class="project-methods"><span>Topics:</span> ' + (project.cardTags || project.tags).map(escapeHtml).join(', ') + '</p>' +
      (project.logo && project.caseStudy ? '<a class="project-logo-link" href="' + escapeHtml(project.caseStudy) + '" aria-label="Research Desk 상세 페이지 보기"><img src="' + escapeHtml(project.logo) + '" width="174" height="42" alt="ResearchDesk — Your Research Workspace"></a>' : '') +
      '<div class="project-links"><button type="button" class="project-button" data-project="' + escapeHtml(id) + '" aria-haspopup="dialog" aria-label="' + escapeHtml(project.title) + ' 상세 보기">상세 내용</button>' +
      (project.caseStudy ? '<a class="case-study-link" href="' + escapeHtml(project.caseStudy) + '">' + (id === '2' ? '연구·결과 살펴보기 ↗' : '화면·구현 살펴보기 ↗') + '</a>' : '') +
      (project.github ? '<a href="' + escapeHtml(project.github) + '" target="_blank" rel="noopener noreferrer">Code ↗</a>' : '') + '</div></div></article>';
  }).join('');
  document.querySelector('#project-count').textContent = visibleEntries.length < entries.length
    ? '전체 ' + entries.length + '개 중 ' + visibleEntries.length + '개 표시'
    : entries.length + '개 프로젝트';
  projectDisclosure.hidden = !canExpand;
  projectToggle.setAttribute('aria-expanded', String(canExpand && projectsExpanded));
  projectToggle.textContent = projectsExpanded ? '프로젝트 접기' : '전체 프로젝트 ' + entries.length + '개 보기';
}

projectToggle.addEventListener('click', () => {
  const scrollPosition = window.scrollY;
  projectsExpanded = !projectsExpanded;
  renderProjects();
  if (projectsExpanded) {
    window.scrollTo({top: scrollPosition, behavior: 'instant'});
  } else {
    projectToggle.scrollIntoView({block: 'nearest', behavior: 'instant'});
  }
});

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  projectsExpanded = false;
  renderProjects(button.dataset.filter);
}));

function openProject(id, trigger) {
  const project = projects[id];
  if (!project) return;
  lastProjectButton = trigger;
  document.querySelector('#dialog-content').innerHTML =
    '<div class="dialog-body"><p class="eyebrow">' + escapeHtml(project.date) + ' / ' + escapeHtml(project.discipline || 'RESEARCH') + '</p><h2 id="dialog-title">' + escapeHtml(project.title) + '</h2><p class="dialog-description">' + escapeHtml(project.desc) + '</p>' +
    researchDetailsHtml(project.research) +
    backtestFigureHtml(project.backtest) +
    (project.image ? '<img class="dialog-image" src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.title) + ' 원본 자료">' : '') +
    '<h3>' + escapeHtml(project.highlightsTitle || '주요 내용') + '</h3><ul>' + project.highlights.map(item => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul>' +
    '<h3>분석 방법 및 도구</h3><div class="tags">' + tagsHtml(project.tags) + '</div>' +
    (project.caseStudy ? '<a class="button button-primary case-study-button" href="' + escapeHtml(project.caseStudy) + '">' + (String(id) === '2' ? '연구 설계와 결과 보기 ↗' : '실제 화면과 구현 설명 보기 ↗') + '</a>' : '') +
    (project.github ? '<a class="button button-primary" href="' + escapeHtml(project.github) + '" target="_blank" rel="noopener noreferrer">GitHub에서 프로젝트 보기 <span aria-hidden="true">↗</span></a>' : '') + '</div>';
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus({preventScroll:true});
}

grid.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project, button);
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href]')];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
let backdropPointerDown = false;
function outsideDialog(event) {
  const rect = dialog.getBoundingClientRect();
  return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
}
dialog.addEventListener('pointerdown', event => { backdropPointerDown = event.target === dialog && outsideDialog(event); });
dialog.addEventListener('click', event => {
  if (backdropPointerDown && event.target === dialog && outsideDialog(event)) dialog.close();
  backdropPointerDown = false;
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  lastProjectButton?.focus({preventScroll:true});
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
      if (entry.isIntersecting) {
        navLinks.forEach(item => item.removeAttribute('aria-current'));
        link?.setAttribute('aria-current', 'location');
      } else if (link?.hasAttribute('aria-current')) link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-15% 0px -55% 0px', threshold:0});
  sections.forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('.filter[data-filter="all"] span').textContent = String(Object.keys(projects).length);
renderProjects();
