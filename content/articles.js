window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 2. Артикли и определители',
    id: 'articles-core',
    title: '2.1 a/an vs the — две половины',
    focus: 'high',
    focusNote: 'Правило 6 в rules.md — самое частое и самое долгоиграющее слабое место всего проекта.',
    intro: `
      <p>В русском артиклей нет вообще, поэтому ошибки здесь — не ошибка "перевода", а системный
      пробел: мозг не привык маркировать существительное как "одно из многих, впервые
      упомянутое" либо, наоборот, как "то самое". Правило удобно тренировать как две отдельные,
      не связанные друг с другом половины.</p>

      <h4>Половина 1 — нужен the, а он пропущен</h4>
      <p>Ситуативно конкретный референт: предмет или место, который в этой ситуации ровно один и
      собеседнику понятен, какой именно. <code>the office</code>, <code>the keys</code>,
      <code>the door</code>, <code>the details</code>, <code>the price</code> — или притяжательное
      <code>my/his</code>, если речь о принадлежности, а не об уникальности в ситуации.</p>
      <div class="callout"><strong>the ≠ личное знакомство.</strong> the не требует, чтобы
      собеседник лично знал референт (имя, лицо) — требует только, чтобы референт был
      однозначно определим в рамках уже понятного контекста. Роли, уникальные в рамках
      организации/ситуации — <strong>director, CEO, boss, president</strong> — автоматически
      становятся the, как только ясно, о какой компании речь, даже если собеседник конкретного
      человека не знает (аналогия: the sun, the weather — единственные в своём роде). Отличай от
      ролей, которых может быть много (<strong>client, colleague, supplier</strong>) — они a при
      первом упоминании и the только после того, как стало ясно, какой именно.</div>

      <h4>Половина 2 — the лишний</h4>
      <p>Первое упоминание, референт новый: <code>a new supplier</code>, <code>a cafe</code>,
      <code>a new employee</code>. Особая ловушка — <strong>новое лицо с ролью</strong>
      (consultant, supplier, designer, client): по-русски «встретились с новым поставщиком»
      звучит как речь о конкретном известном человеке, и рука тянется к the.</p>

      <div class="callout warn"><strong>Доп. нюанс:</strong> если существительное уточнено
      конструкцией <code>of + существительное</code> (the delivery <strong>of a laptop</strong>,
      the beginning <strong>of the movie</strong>), оно становится конкретным → the, даже при
      первом упоминании.</div>

      <h4>Третья грань — пропущенное притяжательное</h4>
      <p><s>I grabbed a laptop</s> · <s>boss asked me</s> → <strong>my</strong> laptop,
      <strong>my</strong> boss. Механизм похож, но это не совсем артикль: русский спокойно
      опускает указатель принадлежности («взял ноутбук», «начальник попросил»), а английский
      обязан его иметь — иначе получается «какой-то ноутбук» и «какой-то начальник».</p>
      <p><strong>Проверка:</strong> если по-русски можно мысленно вставить «мой/свой» и смысл не
      изменится — в английском нужно my, а не a.</p>
    `,
    mistakes: [
      { wrong: '~~for delivery~~ / ~~at new company~~', right: 'for a delivery / at a new company', why: 'Половина 2 — первое упоминание нового референта, нужен a.' },
      { wrong: '~~the new supplier~~ / ~~the cafe~~', right: 'a new supplier / a cafe', why: 'Обратное направление той же половины 2 — the лишний при первом упоминании.' },
      { wrong: '~~Director hasn\'t signed~~', right: 'The director hasn\'t signed', why: 'Половина 1 — уникальная роль в рамках уже понятной ситуации (эта компания) → the.' },
      { wrong: '~~I grabbed a laptop~~ (свой)', right: 'I grabbed my laptop', why: 'Русское «взял ноутбук» подразумевает «свой» — третья грань, нужно my, не a.' },
      { wrong: '~~we met with the new supplier~~', right: 'we met with a new supplier', why: 'Новое лицо с ролью, первое упоминание — типичная ловушка половины 2.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'I left ___ keys on ___ kitchen table.',
        options: ['a / a', "the / the", "a / the", "the / a"],
        correctIndex: 1,
        explanation: 'Оба референта ситуативно конкретны — свои ключи, свой кухонный стол → the / the.',
      },
      {
        type: 'mcq',
        prompt: 'After the meeting, ___ new employee came up to me.',
        options: ['a', 'the', 'this', '—'],
        correctIndex: 0,
        explanation: 'Новое лицо с ролью, первое упоминание → a, несмотря на инстинкт "a конкретный человек — значит the".',
      },
      {
        type: 'mcq',
        prompt: '___ director hasn\'t signed the report yet. (речь о директоре этой компании)',
        options: ['A', 'The', '—', 'This'],
        correctIndex: 1,
        explanation: 'Уникальная роль в рамках уже понятной ситуации (эта компания) → the, даже если собеседник лично директора не знает.',
      },
      {
        type: 'mcq',
        prompt: 'I grabbed ___ laptop and headed to the meeting. (свой ноутбук)',
        options: ['a', 'the', 'my', '—'],
        correctIndex: 2,
        explanation: 'По-русски можно вставить «мой» без потери смысла — нужно притяжательное, не артикль.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Клиент ещё не ответил» (клиент уже упоминался раньше в разговоре).',
        answers: ["The client hasn't answered yet", 'The client has not answered yet'],
        explanation: 'Референт уже введён в контекст — половина 1, нужен the.',
      },
    ],
  },

  {
    module: 'Модуль 2. Артикли и определители',
    id: 'articles-ordinals-possessive',
    title: '2.2 the с порядковыми словами и "тот же X"',
    focus: 'high',
    focusNote: 'Правило 6 (порядковая грань) в rules.md — 0/2 в первом дрилле, 3/5 во втором, но 0/3 в связном тексте — перенос ещё не устойчив.',
    intro: `
      <p>Слова <code>first / second / next / last / same / only</code> перед существительным
      почти всегда тянут <strong>the</strong> (или притяжательное): the first meeting, the next
      morning, the same problem, the only option. Формально это часть половины 1 из главы 2.1
      (ситуативная конкретность — "первый/следующий/тот же" сам по себе делает референт
      уникальным), но на практике это отдельная зона риска: список из шести слов известен в
      теории, но плохо всплывает сам в продакшене, особенно в связном тексте, а не в изолированных
      фразах.</p>

      <table>
        <thead><tr><th>Русский</th><th>Английский</th></tr></thead>
        <tbody>
          <tr><td>первая встреча</td><td>the first meeting / <strong>my</strong> first meeting</td></tr>
          <tr><td>на следующий день</td><td>the next day</td></tr>
          <tr><td>последний шанс</td><td>the last chance</td></tr>
          <tr><td>та же проблема</td><td>the same problem</td></tr>
          <tr><td>единственный вариант</td><td>the only option</td></tr>
        </tbody>
      </table>

      <div class="callout"><strong>Смежное:</strong> "the first meeting" грамматически верно, но
      если встреча первая <em>для тебя лично</em> — естественнее <strong>my first meeting</strong>.
      Английский предпочитает притяжательное там, где русский обходится порядковым числительным.</div>

      <h4>"Тот же X, что и Y" → the same X as Y, не relative clause</h4>
      <p>Русское «тот же X, что и Y» — сравнительная конструкция, а не относительное придаточное.
      Английский эквивалент — <code>the same X as Y</code>, где Y — целое предложение (as I do, as
      you did) или обстоятельство (as before, as earlier).</p>
      <ul>
        <li>❌ <s>the house that I live</s> (слово "same" вообще потеряно, а придаточное осталось
        без предлога)</li>
        <li>✅ <strong>the same house as I do</strong> / the same house I live in</li>
        <li>❌ <s>the same conditions that an earlier</s> (слово same на месте, но хвост
        конструкции сломан)</li>
        <li>✅ <strong>the same conditions as before</strong></li>
      </ul>
      <p>Два разных места, где эта конструкция может сломаться: (1) слово <code>same</code>
      вообще не приходит на ум, и вместо сравнения строится relative clause; (2) слово
      <code>same</code> на месте, но после него нужно <code>as</code> + сравнение, а не
      <code>that</code> + придаточное.</p>

      <h4>Притяжательный 's с день-словами перед событием</h4>
      <p><code>tomorrow / yesterday / next week / Friday</code> сами по себе наречия времени, но
      перед существительным-событием они работают как определение по принадлежности и требуют
      притяжательного 's, как у обычного существительного:</p>
      <ul>
        <li>❌ <s>tomorrow meeting</s> → ✅ <strong>tomorrow's meeting</strong></li>
        <li>yesterday's call, Friday's presentation, next week's deadline</li>
      </ul>
      <div class="callout warn"><strong>Не путать со смежной, но противоположной ловушкой:</strong>
      день + <em>часть суток</em> (не событие) работает как устойчивое сочетание БЕЗ 's:
      <s>on Friday's evening</s> → <strong>on Friday evening</strong>, Monday morning, Sunday
      night. Различай: день + событие → нужен 's (tomorrow's meeting); день + часть суток → 's не
      нужен (Friday evening).</div>
    `,
    mistakes: [
      { wrong: '~~Next day I called him again~~', right: 'The next day, I called him again', why: 'Порядковое слово next перед существительным-временем требует the.' },
      { wrong: '~~This is not a first event like this~~', right: "It wasn't the first time like this", why: 'first требует the, не a — и заодно связка была неверно в настоящем времени (см. главу 4.4).' },
      { wrong: '~~The one problem it\'s a price~~', right: 'The only problem is the price', why: '`only` (единственный) спутано с `one` (числительное «один») — разные слова, не взаимозаменяемы.' },
      { wrong: '~~He lives in the house that I live~~', right: 'He lives in the same house as I do', why: 'Слово `same` потеряно из перевода целиком, вместо сравнения — сломанное relative clause.' },
      { wrong: '~~I need to prepare for tomorrow meeting~~', right: "I need to prepare for tomorrow's meeting", why: 'День-слово перед событием требует притяжательного \'s.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: '___ next day, I sent him the revised contract.',
        options: ['A', 'The', '—', 'This'],
        correctIndex: 1,
        explanation: '`next` перед существительным-временем всегда тянет the.',
      },
      {
        type: 'mcq',
        prompt: 'This was ___ very last chance to fix it.',
        options: ['a', 'the', '—', 'this'],
        correctIndex: 1,
        explanation: '`last` — порядковый триггер, требует the, даже с усилителем `very`.',
      },
      {
        type: 'mcq',
        prompt: 'He agreed to the same conditions ___ before.',
        options: ['that', 'as', 'like', 'than'],
        correctIndex: 1,
        explanation: '`the same X as Y` — сравнительная конструкция, хвост оформляется через as, не that.',
      },
      {
        type: 'mcq',
        prompt: "Unfortunately, ___ problem was the price.",
        options: ['the one', 'a only', 'the only', 'an only'],
        correctIndex: 2,
        explanation: '`only` = единственный (не `one` = числительное «один»), и требует the.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мне нужно подготовиться к завтрашней встрече» (день + событие, не часть суток).',
        answers: ["I need to prepare for tomorrow's meeting"],
        explanation: 'День-слово + существительное-событие → притяжательный \'s, не голое tomorrow meeting.',
      },
    ],
  },

  {
    module: 'Модуль 2. Артикли и определители',
    id: 'articles-zero-and-singular',
    title: '2.3 Нулевой артикль и "a/an только с единственным числом"',
    intro: `
      <h4>Приёмы пищи — без артикля в общем смысле</h4>
      <p><code>breakfast / lunch / dinner</code> в общем значении ведут себя как неисчисляемые —
      артикль не нужен. Это противоположное направление ошибки к главе 2.1 — здесь, наоборот,
      артикль лишний.</p>
      <ul>
        <li>❌ <s>cooking a dinner</s> → ✅ <strong>cooking dinner</strong></li>
        <li>have lunch, make breakfast</li>
      </ul>

      <h4>next / this / last + период времени — БЕЗ предлога И без артикля</h4>
      <p>next/this/last сами по себе уже работают как указатель времени, второй предлог (и
      лишний артикль) не нужен. В русском наоборот — «НА следующей неделе», «В прошлом месяце» —
      предлог обязателен, поэтому рука тянется его добавить и в английском.</p>
      <table>
        <thead><tr><th>Ошибка</th><th>Верно</th></tr></thead>
        <tbody>
          <tr><td><s>on next week</s></td><td>next week</td></tr>
          <tr><td><s>in the last month</s></td><td>last month</td></tr>
          <tr><td><s>the last year I had a meeting</s></td><td>Last year I had a meeting</td></tr>
        </tbody>
      </table>
      <div class="callout"><strong>Как запомнить:</strong> next/this/last "съедают" и предлог, и
      артикль — если видишь один из них перед week/month/year/time, ничего перед ними стоять не
      может.</div>

      <h4>a/an — только перед существительным в единственном числе</h4>
      <p><code>a/an</code> исторически восходит к "one" — сочетается только с единственным
      числом. Множественное существительное либо без артикля (в общем смысле), либо с
      <code>some/the</code>.</p>
      <ul>
        <li>❌ <s>an old documents</s> → ✅ some old documents / old documents</li>
        <li>❌ <s>a new requirements</s> → ✅ new requirements</li>
      </ul>
      <div class="callout warn"><strong>Где ломается:</strong> когда между артиклем и
      существительным вклинивается прилагательное (<s>a new requirements</s>) — рука ставит a по
      инерции от прилагательного, не доходя до числа существительного.
      <strong>Проверяй последнее слово в группе, а не первое.</strong></div>
    `,
    mistakes: [
      { wrong: '~~cooking a dinner~~', right: 'cooking dinner', why: 'Приёмы пищи в общем смысле — без артикля, как неисчисляемые.' },
      { wrong: '~~on next week~~', right: 'next week', why: 'next/this/last сами маркируют время — предлог не нужен вообще.' },
      { wrong: '~~The last year I had a meeting~~', right: 'Last year I had a meeting', why: 'Тот же принцип — лишний артикль перед last, не только лишний предлог.' },
      { wrong: '~~a new requirements~~', right: 'new requirements', why: 'requirements — множественное число, a/an с ним невозможен даже через прилагательное.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'Let\'s have ___ lunch together.',
        options: ['a', 'the', '—', 'this'],
        correctIndex: 2,
        explanation: 'Приём пищи в общем смысле — без артикля.',
      },
      {
        type: 'mcq',
        prompt: '___ next week, we\'re launching the new version.',
        options: ['On', 'In', 'At', '—'],
        correctIndex: 3,
        explanation: 'next week не требует предлога вообще — next сам работает как указатель времени.',
      },
      {
        type: 'mcq',
        prompt: 'The client sent us ___ new requirements yesterday.',
        options: ['a', 'an', '—', 'the a'],
        correctIndex: 2,
        explanation: 'requirements — множественное число, a/an невозможен; в общем смысле — без артикля.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «В прошлом году я сменил команду» (без лишнего предлога/артикля перед last year).',
        answers: ['Last year I switched teams', 'Last year I changed teams', 'Last year I switched my team'],
        explanation: 'last year — без предлога и без артикля.',
      },
    ],
  }
);
