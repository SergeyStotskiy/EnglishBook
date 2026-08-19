// Рендеринг учебника: навигация, прогресс (localStorage), проверка квизов.
// Контент приходит из content/*.js — каждый файл делает window.GRAMMAR_CHAPTERS.push(...).
//
// Схема главы (см. content/README.md):
//   module   — заголовок модуля для группировки в сайдбаре (порядок = порядок первого появления)
//   id       — уникальный slug, используется как #hash
//   title    — заголовок главы (с номером, напр. "1.2 Present Simple vs Continuous vs Perfect")
//   focus    — 'high' | 'medium' | undefined — приоритет по личным слабым местам ученика
//   focusNote — короткая строка для бейджа, напр. "Правила 6, 30"
//   intro    — HTML-строка с объяснением
//   mistakes — необязательно: [{wrong, right, why}]
//   quiz     — необязательно: [{type:'mcq', prompt, options, correctIndex, explanation} |
//                              {type:'fill', prompt, answers, explanation}]

(function () {
  const CHAPTERS = window.GRAMMAR_CHAPTERS || [];

  function storageGet(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function storageSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* private mode / storage full — silently ignore */
    }
  }

  function loadDone() {
    return storageGet('c1-textbook-done', {});
  }
  function saveDone(done) {
    storageSet('c1-textbook-done', done);
  }
  function isDone(id) {
    return !!loadDone()[id];
  }
  function toggleDone(id) {
    const done = loadDone();
    done[id] = !done[id];
    saveDone(done);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ---------- Icons (inline SVG, stroke-based — no emoji in UI chrome) ----------

  const ICONS = {
    home: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    circleEmpty: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>',
    circleDone: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5l-7 7 7 7"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5l7 7-7 7"/></svg>',
  };

  function focusChip(focus, label) {
    if (focus === 'high') return `<span class="chip chip-high"><i class="dot"></i>${label || 'частая ошибка'}</span>`;
    if (focus === 'medium') return `<span class="chip chip-medium"><i class="dot"></i>${label || 'внимание'}</span>`;
    return '';
  }

  // ---------- Navigation ----------

  function moduleOrder() {
    const order = [];
    CHAPTERS.forEach((c) => {
      if (!order.includes(c.module)) order.push(c.module);
    });
    return order;
  }

  function renderNav(activeId) {
    const nav = document.getElementById('chapter-nav');
    const done = loadDone();
    const modules = moduleOrder();
    let html = `<li><a href="#home" class="${activeId === 'home' ? 'active' : ''}"><span class="nav-check">${ICONS.home}</span><span>Оглавление</span></a></li>`;
    modules.forEach((mod) => {
      html += `<li class="sidebar-module"><h3>${escapeHtml(mod)}</h3><ul>`;
      CHAPTERS.filter((c) => c.module === mod).forEach((c) => {
        const active = c.id === activeId ? 'active' : '';
        const check = done[c.id] ? ICONS.circleDone : ICONS.circleEmpty;
        const badge = c.focus === 'high' ? '<i class="dot dot-high"></i>' : c.focus === 'medium' ? '<i class="dot dot-medium"></i>' : '';
        html += `<li><a href="#${c.id}" class="${active}"><span class="nav-check">${check}</span><span>${escapeHtml(
          c.title
        )}</span>${badge}</a></li>`;
      });
      html += '</ul></li>';
    });
    nav.innerHTML = html;
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => closeSidebar());
    });
  }

  function renderOverallChip() {
    const done = loadDone();
    const total = CHAPTERS.length;
    const doneCount = CHAPTERS.filter((c) => done[c.id]).length;
    document.getElementById('overall-progress-chip').textContent = `${doneCount} / ${total} пройдено`;
  }

  // ---------- Home page ----------

  function renderHome() {
    const modules = moduleOrder();
    const done = loadDone();
    let html = `
      <p class="chapter-module-label">English C1</p>
      <h2 class="chapter-title">Оглавление</h2>
      <div class="chapter-intro">
        <p>Грамматика, нужная для перехода с B1 до C1: от базовых времён и артиклей до
        инверсии и cleft-конструкций. Главы с красной отметкой — твои личные частые ошибки
        (из <code>rules.md</code>), с ними стоит начать.</p>
      </div>`;
    modules.forEach((mod) => {
      const chs = CHAPTERS.filter((c) => c.module === mod);
      const doneInMod = chs.filter((c) => done[c.id]).length;
      html += `<h3 class="mistakes-heading">${escapeHtml(mod)} <span class="chip">${doneInMod}/${chs.length}</span></h3>`;
      html += '<div class="home-grid">';
      chs.forEach((c) => {
        const badge = focusChip(c.focus, c.focus === 'high' ? 'слабое место' : 'внимание');
        const doneBadge = done[c.id] ? `<span class="chip chip-done">${ICONS.check} пройдено</span>` : '';
        html += `<a class="home-card" href="#${c.id}"><h4>${escapeHtml(c.title)}</h4><p>${badge} ${doneBadge}</p></a>`;
      });
      html += '</div>';
    });
    document.getElementById('main-content').innerHTML = html;
  }

  // ---------- Chapter rendering ----------

  function renderMistakes(mistakes) {
    if (!mistakes || !mistakes.length) return '';
    let html = '<h3 class="mistakes-heading">Твои реальные ошибки</h3>';
    mistakes.forEach((m) => {
      html += `<div class="mistake-row">
        <div><span class="mistake-wrong">${m.wrong}</span> → <span class="mistake-right">${m.right}</span></div>
        <div class="mistake-why">${m.why}</div>
      </div>`;
    });
    return html;
  }

  function renderQuizItem(item, idx, chapterId) {
    const inputId = `quiz-${chapterId}-${idx}`;
    if (item.type === 'mcq') {
      let opts = '';
      item.options.forEach((opt, i) => {
        opts += `<button class="quiz-option" data-idx="${i}" data-correct="${item.correctIndex}">${escapeHtml(
          opt
        )}</button>`;
      });
      return `<div class="quiz-item" id="${inputId}">
        <p class="quiz-prompt">${item.prompt}</p>
        <div class="quiz-options">${opts}</div>
        <div class="quiz-feedback hidden"></div>
      </div>`;
    }
    if (item.type === 'fill') {
      return `<div class="quiz-item" id="${inputId}">
        <p class="quiz-prompt">${item.prompt}</p>
        <div class="quiz-fill-row">
          <input type="text" class="quiz-input" autocomplete="off" spellcheck="false" />
          <button class="btn quiz-check">Проверить</button>
        </div>
        <div class="quiz-feedback hidden"></div>
      </div>`;
    }
    return '';
  }

  function wireQuiz(chapter) {
    if (!chapter.quiz) return;
    chapter.quiz.forEach((item, idx) => {
      const el = document.getElementById(`quiz-${chapter.id}-${idx}`);
      if (!el) return;
      const feedback = el.querySelector('.quiz-feedback');
      if (item.type === 'mcq') {
        const buttons = el.querySelectorAll('.quiz-option');
        buttons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const chosen = Number(btn.dataset.idx);
            const correct = Number(btn.dataset.correct);
            buttons.forEach((b) => (b.disabled = true));
            buttons[correct].classList.add('correct');
            if (chosen !== correct) btn.classList.add('incorrect');
            feedback.classList.remove('hidden');
            feedback.classList.add(chosen === correct ? 'correct' : 'incorrect');
            feedback.innerHTML =
              `<span class="feedback-icon">${chosen === correct ? ICONS.check : ICONS.cross}</span>` +
              escapeHtml((chosen === correct ? 'Верно. ' : 'Не совсем. ') + (item.explanation || ''));
          });
        });
      } else if (item.type === 'fill') {
        const input = el.querySelector('.quiz-input');
        const btn = el.querySelector('.quiz-check');
        const check = () => {
          const val = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
          const ok = item.answers.some((a) => a.trim().toLowerCase().replace(/\s+/g, ' ') === val);
          input.classList.remove('correct', 'incorrect');
          input.classList.add(ok ? 'correct' : 'incorrect');
          feedback.classList.remove('hidden', 'correct', 'incorrect');
          feedback.classList.add(ok ? 'correct' : 'incorrect');
          feedback.innerHTML =
            `<span class="feedback-icon">${ok ? ICONS.check : ICONS.cross}</span>` +
            escapeHtml((ok ? 'Верно. ' : `Ожидалось: ${item.answers[0]}. `) + (item.explanation || ''));
        };
        btn.addEventListener('click', check);
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') check();
        });
      }
    });
  }

  function renderChapter(chapter) {
    const idx = CHAPTERS.indexOf(chapter);
    const prev = CHAPTERS[idx - 1];
    const next = CHAPTERS[idx + 1];
    const focusBanner = chapter.focus
      ? `<div class="callout ${chapter.focus === 'high' ? 'warn' : ''}">${focusChip(
          chapter.focus,
          chapter.focus === 'high' ? 'частая ошибка' : 'внимание'
        )} ${chapter.focusNote || 'Это одно из твоих слабых мест по rules.md.'}</div>`
      : '';

    let html = `
      <p class="chapter-module-label">${escapeHtml(chapter.module)}</p>
      <h2 class="chapter-title">${escapeHtml(chapter.title)}</h2>
      ${focusBanner}
      <div class="chapter-intro">${chapter.intro}</div>
      ${renderMistakes(chapter.mistakes)}
    `;

    if (chapter.quiz && chapter.quiz.length) {
      html += '<h3 class="quiz-heading">Проверь себя</h3>';
      chapter.quiz.forEach((item, i) => {
        html += renderQuizItem(item, i, chapter.id);
      });
    }

    const doneNow = isDone(chapter.id);
    html += `<div class="chapter-footer">
      <button id="mark-done-btn" class="btn mark-done-btn ${doneNow ? 'done' : ''}">${
      doneNow ? ICONS.check + ' Пройдено' : ICONS.circleEmpty + ' Отметить как пройдено'
    }</button>
    </div>`;

    html += '<div class="pager">';
    html += prev
      ? `<a href="#${prev.id}"><span class="pager-dir">${ICONS.arrowLeft} Назад</span>${escapeHtml(prev.title)}</a>`
      : '<span></span>';
    html += next
      ? `<a href="#${next.id}" class="pager-next"><span class="pager-dir">Далее ${ICONS.arrowRight}</span>${escapeHtml(
          next.title
        )}</a>`
      : '<span></span>';
    html += '</div>';

    document.getElementById('main-content').innerHTML = html;

    document.getElementById('mark-done-btn').addEventListener('click', () => {
      toggleDone(chapter.id);
      renderOverallChip();
      renderNav(chapter.id);
      const btn = document.getElementById('mark-done-btn');
      const nowDone = isDone(chapter.id);
      btn.classList.toggle('done', nowDone);
      btn.innerHTML = nowDone ? ICONS.check + ' Пройдено' : ICONS.circleEmpty + ' Отметить как пройдено';
    });

    wireQuiz(chapter);
  }

  // ---------- Router ----------

  function route() {
    const hash = (location.hash || '#home').replace('#', '');
    renderNav(hash);
    renderOverallChip();
    if (hash === 'home') {
      renderHome();
      return;
    }
    const chapter = CHAPTERS.find((c) => c.id === hash);
    if (!chapter) {
      renderHome();
      return;
    }
    renderChapter(chapter);
    window.scrollTo(0, 0);
  }

  // ---------- Mobile sidebar ----------

  function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('open');
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
  }

  document.getElementById('menu-btn').addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  window.addEventListener('hashchange', route);
  route();
})();
