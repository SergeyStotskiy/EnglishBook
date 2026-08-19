window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 3. Предлоги',
    id: 'prepositions-time-place',
    title: '3.1 Предлоги времени: in / on / at',
    focus: 'medium',
    focusNote: 'Правила 18 и 24 в rules.md.',
    intro: `
      <p>Три уровня "крупности" времени — и у каждого свой предлог. Ошибка почти всегда идёт от
      русского, где один и тот же предлог "в" работает универсально ("в понедельник", "в марте",
      "в 5 часов").</p>
      <table>
        <thead><tr><th>Уровень</th><th>Предлог</th><th>Примеры</th></tr></thead>
        <tbody>
          <tr><td>Годы, месяцы, времена года, части суток (кроме ночи)</td><td><strong>in</strong></td><td>in 2020, in March, in summer, in the morning</td></tr>
          <tr><td>Дни, даты, особые дни</td><td><strong>on</strong></td><td>on Monday, on 5 May, on my birthday</td></tr>
          <tr><td>Точное время, ночь, границы</td><td><strong>at</strong></td><td>at 5pm, at night, at the weekend (AmE: on the weekend)</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Ночь — исключение из группы частей суток:</strong>
      morning/afternoon/evening идут с <code>in</code>, а night — с <code>at</code>: at night.
      Дни недели идут с <code>on</code>, не <code>at</code> (at — только для точного времени), и
      всегда с большой буквы: on Saturday, since March.</div>

      <h4>at night vs that night — форма верна, значение перепутано</h4>
      <p><code>at night</code> = «по ночам, в ночное время» вообще (I don't work at night).
      Конкретная ночь внутри рассказа — <strong>that night</strong> / <strong>last night</strong>:
      "I slept badly that night". Готовый чанк "at night" запоминается легко, но подставляется не
      в то значение — это отдельная ошибка поверх верной формы.</p>

      <h4>Список готовых форм — учить целиком, не разбирать логику</h4>
      <table>
        <tbody>
          <tr><td>вчера утром</td><td><strong>yesterday morning</strong> — без артикля, без предлога</td></tr>
          <tr><td>позавчера</td><td><strong>the day before yesterday</strong></td></tr>
          <tr><td>на следующее утро</td><td><strong>the next morning</strong></td></tr>
          <tr><td>накануне вечером</td><td><strong>the night before</strong></td></tr>
        </tbody>
      </table>
      <p>Асимметрия артиклей здесь нелогична (yesterday morning без the, the next morning с the)
      — эффективнее выучить списком, чем искать закономерность.</p>
    `,
    mistakes: [
      { wrong: '~~At Saturday~~', right: 'On Saturday', why: 'Дни недели — всегда с on, at только для точного времени.' },
      { wrong: '~~reminded him on morning~~', right: 'reminded him in the morning', why: 'Части суток (кроме ночи) идут с in.' },
      { wrong: '~~At night I slept badly~~ (про конкретную ночь)', right: 'I slept badly that night', why: 'at night = вообще, по ночам; конкретная ночь внутри рассказа — that night.' },
      { wrong: '~~day before yesterday~~', right: 'the day before yesterday', why: 'Фиксированное выражение, the — часть идиомы.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'The meeting is ___ Monday ___ 9am.',
        options: ['on / at', 'at / on', 'in / at', 'on / in'],
        correctIndex: 0,
        explanation: 'День недели → on; точное время → at.',
      },
      {
        type: 'mcq',
        prompt: 'I usually check email ___ the morning, but I don\'t work ___ night.',
        options: ['in / at', 'at / in', 'on / at', 'in / on'],
        correctIndex: 0,
        explanation: 'Части суток (кроме ночи) → in; ночь как исключение → at.',
      },
      {
        type: 'mcq',
        prompt: 'We moved here ___ 2020.',
        options: ['on', 'at', 'in', '—'],
        correctIndex: 2,
        explanation: 'Годы идут с in.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Я плохо спал в ту ночь» (конкретная ночь внутри рассказа).',
        answers: ['I slept badly that night', 'I slept badly last night'],
        explanation: 'Конкретная ночь — that night/last night, не at night (это про ночи вообще).',
      },
    ],
  },

  {
    module: 'Модуль 3. Предлоги',
    id: 'prepositions-verbs',
    title: '3.2 Глагол + предлог: кто требует, кто нет',
    focus: 'high',
    focusNote: 'Правила 15, 21, 29 в rules.md — answer/thank без предлога всё ещё 🔴.',
    intro: `
      <p>Русский почти всегда подсказывает предлог по смыслу ("отвечать НА", "обсуждать О"), но в
      английском часть таких глаголов — обычные переходные, объект идёт сразу после них БЕЗ
      предлога, а другая часть, наоборот, требует предлог там, где по-русски он не ощущается.
      Единственный рабочий способ — учить не по логике, а списком, парами "похожий, но
      противоположный".</p>

      <h4>Группа А — предлог НЕ нужен (обычные переходные глаголы)</h4>
      <table>
        <thead><tr><th>Глагол</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>answer</td><td>answer <strong>the</strong> letter (не answer <s>on</s> the letter)</td></tr>
          <tr><td>discuss</td><td>discuss <strong>the</strong> project (не discuss <s>about</s>)</td></tr>
          <tr><td>marry</td><td>marry <strong>him</strong> (не marry <s>with</s> him)</td></tr>
          <tr><td>reach</td><td>reach <strong>the</strong> airport</td></tr>
          <tr><td>attend</td><td>attend <strong>the</strong> meeting</td></tr>
          <tr><td>thank</td><td>thank <strong>him</strong> (не thank <s>to</s> him)</td></tr>
        </tbody>
      </table>
      <p>Если очень хочется предлог — есть альтернативный глагол с предлогом:
      <strong>reply TO</strong> (вместо answer), <strong>talk ABOUT</strong> (вместо discuss).</p>

      <h4>Группа Б — предлог ОБЯЗАТЕЛЕН</h4>
      <table>
        <thead><tr><th>Глагол</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>wait <strong>for</strong></td><td>waiting for the report</td></tr>
          <tr><td>prepare <strong>for</strong></td><td>preparing for the presentation</td></tr>
          <tr><td>agree <strong>on</strong></td><td>agreed on the price/date/terms (договориться о чём-то)</td></tr>
          <tr><td>agree <strong>to</strong></td><td>agreed to the proposal (согласиться на предложение)</td></tr>
          <tr><td>agree <strong>with</strong></td><td>agree with somebody (соглашаться с человеком)</td></tr>
          <tr><td>explain <strong>to</strong></td><td>explained to me (никогда не <s>explain me</s>)</td></tr>
          <tr><td>search <strong>for</strong></td><td>search for somebody = искать. Без for — обыскать человека!</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Пара agree:</strong> agree <strong>ON</strong> a
      price/date/terms — договориться о чём-то совместно. agree <strong>TO</strong> a proposal —
      согласиться на уже предложенные условия. agree <strong>WITH</strong> somebody —
      соглашаться с человеком. По-русски «о/об» тянет за собой about — это и есть источник
      ошибки, about тут не подходит вообще ни в одном из трёх случаев.</div>
      <div class="callout"><strong>Пара explain:</strong> нельзя <s>explain me</s> — только
      <strong>explain to me</strong>. Учи парой с обратным примером: <strong>tell me</strong>
      (без to) vs <strong>explain to me</strong> (с to). Та же схема: say TO, describe TO,
      suggest TO — но tell/show/send <strong>me</strong> без предлога.</div>

      <h4>Обход незнакомой конструкции — не бесплатная стратегия</h4>
      <p>Если нужное слово вроде бы известно, но неуверенно — рискнуть с ним обычно дешевле, чем
      подставлять приблизительный синоним. «Договорились о новом сроке» через <s>discussed about
      a new term</s> вместо agree on стоило сразу двух ошибок (лишний предлог + не то слово) —
      попытка использовать agree on с ошибкой в предлоге дала бы только одну.</p>
    `,
    mistakes: [
      { wrong: '~~answered on our letter~~', right: 'answered our letter / replied to our letter', why: 'answer — обычный переходный глагол, без предлога; альтернатива с предлогом — reply to.' },
      { wrong: '~~thanked to him~~', right: 'thanked him', why: 'thank — переходный, без предлога.' },
      { wrong: '~~discussed about a new term~~', right: 'agreed on a new deadline', why: 'discuss — без предлога; и обход незнакомого agree on через discuss дал сразу две ошибки.' },
      { wrong: '~~waiting a report~~', right: 'waiting for the report', why: 'wait — непереходный в этом значении, обязателен предлог for.' },
      { wrong: '~~preparing to a presentation~~', right: 'preparing for the presentation', why: 'prepare требует for, не to.' },
      { wrong: '~~agreed the price~~', right: 'agreed on the price', why: 'agree в значении "договориться о чём-то" требует on.' },
      { wrong: '~~explained all him~~', right: 'explained everything to him', why: 'explain никогда не работает без to перед адресатом.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'Have you ___ my email yet?',
        options: ['answered', "answered to", "answered on", "replied"],
        correctIndex: 0,
        explanation: 'answer — переходный, без предлога.',
      },
      {
        type: 'mcq',
        prompt: 'I\'m still waiting ___ the delivery.',
        options: ['—', 'for', 'to', 'on'],
        correctIndex: 1,
        explanation: 'wait требует обязательный предлог for.',
      },
      {
        type: 'mcq',
        prompt: 'We finally agreed ___ a new deadline.',
        options: ['to', 'with', 'on', 'about'],
        correctIndex: 2,
        explanation: 'Договориться о чём-то (совместное решение) → agree on.',
      },
      {
        type: 'mcq',
        prompt: 'He agreed ___ the terms we offered him.',
        options: ['on', 'to', 'with', 'about'],
        correctIndex: 1,
        explanation: 'Согласиться на уже предложенные условия → agree to.',
      },
      {
        type: 'mcq',
        prompt: 'Can you explain this ___ me?',
        options: ['—', 'to', 'for', 'at'],
        correctIndex: 1,
        explanation: 'explain никогда не работает без to перед адресатом (explain me — невозможно).',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы обсудили новый проект с коллегой» (без лишнего предлога у discuss).',
        answers: ['We discussed the new project with a colleague', 'We discussed a new project with a colleague'],
        explanation: 'discuss — переходный, объект сразу после глагола, без about.',
      },
    ],
  },

  {
    module: 'Модуль 3. Предлоги',
    id: 'prepositions-phrasal',
    title: '3.3 Фразовые глаголы и порядок слов с местоимением',
    focus: 'medium',
    focusNote: 'Правило 25 в rules.md.',
    intro: `
      <p>У разделяемых (separable) фразовых глаголов — <code>mix up, pick up, turn off, sort
      out, fill in</code> — дополнение можно поставить в двух местах, если это существительное, но
      только в ОДНОМ, если это местоимение.</p>
      <table>
        <thead><tr><th>Дополнение</th><th>Допустимо</th></tr></thead>
        <tbody>
          <tr><td>существительное</td><td>mix up <strong>the files</strong> ИЛИ mix <strong>the files</strong> up — оба варианта работают</td></tr>
          <tr><td>местоимение</td><td>только mix <strong>them</strong> up — <s>mix up them</s> невозможно</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Правило одной фразой:</strong> местоимение-дополнение у
      разделяемого фразового глагола обязано стоять МЕЖДУ глаголом и частицей, никогда после
      частицы.</div>
      <ul>
        <li>❌ <s>mixed up me</s> → ✅ <strong>mixed me up</strong></li>
        <li>❌ <s>turned on it</s> → ✅ <strong>turned it on</strong></li>
        <li>❌ <s>started sort out</s> (местоимение вообще потеряно) → ✅ started sorting
        <strong>them</strong> out</li>
      </ul>
      <p>Частая скрытая форма этой же ошибки — не перепутанный порядок, а вообще потерянное
      местоимение: разделяемый фразовый глагол произносится как будто дополнение не нужно вовсе,
      хотя по смыслу оно обязательно (что именно "sort out"?).</p>
    `,
    mistakes: [
      { wrong: '~~mixed up me~~', right: 'mixed me up', why: 'Местоимение обязано стоять между глаголом и частицей.' },
      { wrong: '~~started sort out~~', right: 'started sorting them out', why: 'Местоимение-дополнение потеряно целиком, хотя по смыслу обязательно.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'Sorry, I ___.',
        options: ['mixed up you', 'mixed you up', 'mixed up', 'mixed you'],
        correctIndex: 1,
        explanation: 'Местоимение you между глаголом и частицей.',
      },
      {
        type: 'mcq',
        prompt: 'The light was off, so I ___.',
        options: ['turned on it', 'turned it on', 'turned on', 'turned it'],
        correctIndex: 1,
        explanation: 'it обязано стоять между turned и on.',
      },
      {
        type: 'mcq',
        prompt: 'Which is also correct with a noun (not a pronoun)?',
        options: ['mix up the files ⟺ mix the files up (оба варианта верны)', 'только mix up the files', 'только mix the files up'],
        correctIndex: 0,
        explanation: 'С существительным допустимы оба порядка — ограничение только для местоимений.',
      },
    ],
  }
);
