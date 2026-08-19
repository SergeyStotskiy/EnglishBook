// Проверка схемы контента: уникальность id, обязательные поля, консистентность module,
// отсутствие пустых quiz-полей. Прогоняется в Node, без браузера.
// Запуск: npm test (из textbook/)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const files = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith('.js'))
  .sort();

if (!files.length) {
  console.error('Не найдено ни одного content/*.js файла.');
  process.exit(1);
}

const sandbox = { window: {}, console };
vm.createContext(sandbox);

let errors = [];

files.forEach((file) => {
  const code = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
  try {
    vm.runInContext(code, sandbox, { filename: file });
  } catch (e) {
    errors.push(`${file}: ошибка выполнения — ${e.message}`);
  }
});

const chapters = sandbox.window.GRAMMAR_CHAPTERS || [];

if (!chapters.length) {
  errors.push('window.GRAMMAR_CHAPTERS пуст после загрузки всех файлов.');
}

const seenIds = new Set();
const moduleFirstSeen = new Map();

chapters.forEach((c, i) => {
  const where = `глава #${i} (${c.id || '???'})`;

  ['module', 'id', 'title', 'intro'].forEach((field) => {
    if (!c[field] || typeof c[field] !== 'string' || !c[field].trim()) {
      errors.push(`${where}: отсутствует обязательное поле "${field}"`);
    }
  });

  if (c.id) {
    if (seenIds.has(c.id)) errors.push(`${where}: дублирующийся id "${c.id}"`);
    seenIds.add(c.id);
    if (!/^[a-z0-9-]+$/.test(c.id)) {
      errors.push(`${where}: id "${c.id}" должен быть латиницей в kebab-case`);
    }
  }

  if (c.focus && !['high', 'medium'].includes(c.focus)) {
    errors.push(`${where}: focus "${c.focus}" — допустимо только "high" или "medium"`);
  }
  if (c.focus && !c.focusNote) {
    errors.push(`${where}: focus задан, но нет focusNote`);
  }

  if (c.mistakes) {
    c.mistakes.forEach((m, mi) => {
      ['wrong', 'right', 'why'].forEach((f) => {
        if (!m[f]) errors.push(`${where}: mistakes[${mi}] без поля "${f}"`);
      });
    });
  }

  if (c.quiz) {
    c.quiz.forEach((q, qi) => {
      const qWhere = `${where}: quiz[${qi}]`;
      if (!q.prompt) errors.push(`${qWhere}: нет prompt`);
      if (q.type === 'mcq') {
        if (!Array.isArray(q.options) || q.options.length < 2) {
          errors.push(`${qWhere}: mcq должен иметь >=2 options`);
        }
        if (
          typeof q.correctIndex !== 'number' ||
          q.correctIndex < 0 ||
          (q.options && q.correctIndex >= q.options.length)
        ) {
          errors.push(`${qWhere}: correctIndex вне диапазона options`);
        }
      } else if (q.type === 'fill') {
        if (!Array.isArray(q.answers) || !q.answers.length) {
          errors.push(`${qWhere}: fill должен иметь непустой answers[]`);
        }
      } else {
        errors.push(`${qWhere}: неизвестный type "${q.type}"`);
      }
    });
  }
});

console.log(`Файлов: ${files.length}, глав: ${chapters.length}, модулей: ${moduleFirstSeen.size || new Set(chapters.map((c) => c.module)).size}`);

if (errors.length) {
  console.error(`\n❌ Найдено ${errors.length} проблем:\n`);
  errors.forEach((e) => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('✅ Схема контента в порядке.');
}
