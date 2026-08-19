window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 8. Modals',
    id: 'modals-speculation',
    title: "8.1 Modals of Speculation: must / might / could / can't have been",
    intro: `
      <p>Модальные глаголы для предположений показывают, насколько говорящий уверен в своей
      догадке — от почти-уверенности до почти-исключения. Работают отдельно для настоящего и для
      прошлого.</p>

      <h4>Предположения о настоящем</h4>
      <table>
        <thead><tr><th>Модальный</th><th>Степень уверенности</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td><strong>must be</strong></td><td>уверенная догадка ("наверняка")</td><td>His light is on — he must be at home.</td></tr>
          <tr><td><strong>might/could be</strong></td><td>возможно, не уверен</td><td>She might be at the gym right now.</td></tr>
          <tr><td><strong>can't be</strong></td><td>уверен, что это НЕ так</td><td>That can't be John — he's on vacation.</td></tr>
        </tbody>
      </table>

      <h4>Предположения о прошлом — тот же смысл, + have + V3</h4>
      <p>Формула сдвигается на <code>must/might/could/can't + have + V3</code> — сама степень
      уверенности не меняется, меняется только то, что догадка теперь про прошлое действие.</p>
      <table>
        <thead><tr><th>Модальный</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td><strong>must have + V3</strong></td><td>He must have left already — his desk is empty.</td></tr>
          <tr><td><strong>might/could have + V3</strong></td><td>She might have missed the train.</td></tr>
          <tr><td><strong>can't have + V3</strong></td><td>He can't have finished already — it's only been five minutes.</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Не путать с обязанностью:</strong> "must have V3" здесь —
      это ДОГАДКА о прошлом ("наверное, он это сделал"), а не обязанность что-то сделать в
      прошлом (у "must" вообще нет формы прошедшей обязанности — для этого нужен had to, см.
      главу 8.2). "He must have left" ≠ "он был должен уйти", это значит "он, наверное, ушёл".</div>

      <h4>Контраст настоящее vs прошлое на одном примере</h4>
      <ul>
        <li>"He <strong>must be</strong> at work." — сейчас, наверное, на работе.</li>
        <li>"He <strong>must have left</strong> already." — наверное, уже ушёл (в какой-то момент
        до сейчас).</li>
      </ul>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: "His light is on — he ___ at home.",
        options: ['must be', 'must have been', 'can be', "can't be"],
        correctIndex: 0,
        explanation: 'Уверенная догадка о настоящем → must be.',
      },
      {
        type: 'mcq',
        prompt: "His desk is empty — he ___ already.",
        options: ['must leave', 'must have left', 'must be leaving', 'must left'],
        correctIndex: 1,
        explanation: 'Догадка о прошлом действии → must have + V3.',
      },
      {
        type: 'mcq',
        prompt: "That ___ John — he's on vacation this week.",
        options: ["can't be", "mustn't be", "shouldn't be", "may not be"],
        correctIndex: 0,
        explanation: 'Уверенность в обратном → can\'t be, не mustn\'t (mustn\'t = запрет, другое значение).',
      },
      {
        type: 'mcq',
        prompt: "It's only been five minutes — he ___ finished already.",
        options: ["can't have", "mustn't have", "couldn't", "shouldn't have"],
        correctIndex: 0,
        explanation: 'Уверенность, что прошлое действие НЕ произошло → can\'t have + V3.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Она, возможно, опоздала на поезд» (не уверен, только возможность, о прошлом).',
        answers: ['She might have missed the train', 'She could have missed the train'],
        explanation: 'Возможность о прошлом действии → might/could have + V3.',
      },
    ],
  },

  {
    module: 'Модуль 8. Modals',
    id: 'modals-obligation',
    title: '8.2 Modals of Obligation & Advice: must / have to / should',
    intro: `
      <h4>must vs have to — кто решил, что это обязательно</h4>
      <p>Оба переводятся как «должен», но источник обязанности разный:</p>
      <ul>
        <li><strong>must</strong> — обязанность, которую говорящий формулирует сам, личное
        решение/убеждение: "I must call my mother today" (я сам так решил, это важно для меня).</li>
        <li><strong>have to</strong> — обязанность, навязанная извне: правилами, законом,
        обстоятельствами: "I have to wear a uniform at work" (это требование компании, не моё
        личное решение).</li>
      </ul>
      <div class="callout">В реальной речи, особенно американской, have to гораздо частотнее и
      постепенно вытесняет must даже там, где формально уместнее must — но для C1 полезно уметь
      различать оттенок, особенно в письменной речи и на экзамене.</div>

      <h4 style="color:var(--fail)">Главная ловушка: mustn't vs don't have to</h4>
      <div class="callout warn">Эти две формы выглядят как отрицания одного и того же, но значат
      <strong>противоположные вещи</strong>:
      <ul>
        <li><strong>mustn't</strong> = ЗАПРЕЩЕНО, нельзя ни в коем случае. "You mustn't tell
        anyone about this." (строгий запрет)</li>
        <li><strong>don't have to</strong> = НЕ ОБЯЗАТЕЛЬНО, но можно, если хочешь. "You don't
        have to come to the meeting if you're busy." (свобода выбора, обязанности просто нет)</li>
      </ul>
      Русское «не должен» покрывает оба смысла одним словом, поэтому в переводе легко случайно
      поставить mustn't там, где нужно "не обязательно" — и получить прямо противоположный по
      смыслу запрет.</div>

      <h4>should / ought to — совет, не обязанность</h4>
      <p><code>should</code> и <code>ought to</code> взаимозаменяемы почти всегда (ought to чуть
      более формальный/книжный) и выражают совет или ожидание, а не жёсткую обязанность: "You
      should see a doctor" — рекомендация, не приказ.</p>

      <h4>had better — совет с ощутимым последствием</h4>
      <p><code>had better + V</code> сильнее, чем should — подразумевает конкретное нежелательное
      последствие, если совет не выполнить: "You'd better hurry, or you'll miss the train." Не
      путать по форме с would (оба сокращаются как 'd) — had better всегда с базовой формой
      глагола без to.</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'Employees ___ wear safety helmets on this site. (правило компании, не личное решение)',
        options: ['must', 'have to', 'should', 'had better'],
        correctIndex: 1,
        explanation: 'Обязанность, навязанная извне (правилами компании) → have to.',
      },
      {
        type: 'mcq',
        prompt: 'You ___ tell anyone about this — it\'s strictly confidential.',
        options: ["don't have to", "mustn't", "shouldn't have to", "haven't to"],
        correctIndex: 1,
        explanation: 'Строгий запрет → mustn\'t, не don\'t have to (которое означает "необязательно").',
      },
      {
        type: 'mcq',
        prompt: 'You ___ come to the party if you\'re tired — it\'s totally optional.',
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correctIndex: 1,
        explanation: 'Отсутствие обязанности, свобода выбора → don\'t have to, не mustn\'t (запрет — противоположный смысл).',
      },
      {
        type: 'mcq',
        prompt: 'You ___ see a doctor about that cough. (совет, не строгая обязанность)',
        options: ['must', 'have to', 'should', "mustn't"],
        correctIndex: 2,
        explanation: 'Рекомендация → should.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Тебе не обязательно приходить на встречу, если ты занят» (свобода выбора, не запрет).',
        answers: ["You don't have to come to the meeting if you're busy"],
        explanation: 'Отсутствие обязанности → don\'t have to, не mustn\'t.',
      },
    ],
  },

  {
    module: 'Модуль 9. Relative & Participle Clauses',
    id: 'relative-clauses',
    title: '9.1 Relative Clauses: who / which / that и предлог в конце',
    focus: 'medium',
    focusNote: 'Правило 38 в rules.md — потеря предлога в конце придаточного, часть той же ошибки, что и с "the same X as Y".',
    intro: `
      <h4>Defining vs non-defining — определяет референт или добавляет деталь</h4>
      <p><strong>Defining (ограничительное)</strong> — без запятых, отвечает на вопрос "какой
      именно?", без него непонятно, о ком/чём речь: "The woman <strong>who called you</strong> is
      my sister." (без придаточного неясно, о какой женщине речь)</p>
      <p><strong>Non-defining (описательное)</strong> — с запятыми, добавляет дополнительную
      информацию о уже понятном референте, можно убрать без потери смысла: "My sister, <strong>who
      lives in Boston</strong>, is visiting next week." (сестра уже понятна — она одна, придаточное
      просто добавляет факт)</p>
      <div class="callout warn"><code>that</code> работает только в defining-придаточных.
      Non-defining требует who/which — "My sister, <s>that</s> lives in Boston" неверно.</div>

      <h4>Кто есть кто: who / which / that / whose / where / when</h4>
      <table>
        <tbody>
          <tr><td><strong>who</strong></td><td>люди (подлежащее или дополнение)</td></tr>
          <tr><td><strong>which</strong></td><td>предметы, животные, целые ситуации</td></tr>
          <tr><td><strong>that</strong></td><td>люди или предметы, только в defining-придаточных</td></tr>
          <tr><td><strong>whose</strong></td><td>принадлежность ("чей") — и для людей, и для предметов</td></tr>
          <tr><td><strong>where</strong></td><td>место (= in/at which)</td></tr>
          <tr><td><strong>when</strong></td><td>время (= at/in which)</td></tr>
        </tbody>
      </table>

      <h4>Когда можно убрать относительное местоимение</h4>
      <p>Только в defining-придаточных, и только когда местоимение — <strong>дополнение</strong>
      придаточного (а не подлежащее):</p>
      <ul>
        <li>✅ "The book (that/which) I'm reading is great." — I'm reading THE BOOK → книга =
        дополнение → местоимение можно убрать.</li>
        <li>❌ "The man <s>—</s> called you is my boss." — нужно оставить "who": он сам звонил, он
        = подлежащее придаточного, местоимение убрать нельзя.</li>
      </ul>

      <h4 style="color:var(--fail)">Предлог в конце придаточного — не пропадает, а переезжает</h4>
      <div class="callout warn">Когда глагол внутри придаточного требует предлог (live IN a house,
      work FOR a company, wait FOR somebody), а объект этого предлога становится относительным
      местоимением — предлог никуда не девается. У него два законных места:
      <ul>
        <li><strong>Неформально (конец придаточного):</strong> "the house (that/which) I live
        <strong>in</strong>" / с опущенным местоимением: "the house I live <strong>in</strong>"</li>
        <li><strong>Формально (перед which/whom):</strong> "the house <strong>in which</strong> I
        live"</li>
      </ul>
      Реальная ошибка из практики: «тот же дом, что и я» переведено как <s>the house that I
      live</s> — предлог <code>in</code> потерян полностью, а не переехал в конец. Без него
      конструкция грамматически сломана: "live" в этом значении не работает без предлога (нельзя
      просто "жить дом"), и потеря предлога — не стилистическая мелочь, а поломанное предложение.</div>
    `,
    mistakes: [
      { wrong: '~~the house that I live~~', right: 'the house that I live in / the house I live in / the house in which I live', why: 'live требует предлога in; когда его объект становится относительным местоимением, предлог переезжает в конец (неформально) или остаётся перед which (формально) — но никогда не исчезает.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'The woman ___ called you yesterday is my colleague. (кто ей звонил — она сама, подлежащее придаточного)',
        options: ['—  (можно убрать)', 'who', 'whose', 'which'],
        correctIndex: 1,
        explanation: 'who — подлежащее придаточного (она звонила), местоимение убрать нельзя.',
      },
      {
        type: 'mcq',
        prompt: 'The book ___ I bought last week is amazing. (местоимение можно убрать — оно дополнение)',
        options: ['who', 'whose', 'that / which / —', 'where'],
        correctIndex: 2,
        explanation: 'I bought THE BOOK — книга дополнение придаточного, местоимение можно опустить или использовать that/which.',
      },
      {
        type: 'mcq',
        prompt: 'This is the company ___ I used to work.',
        options: ['that I used to work', 'that I used to work for', 'who I used to work', 'which I work'],
        correctIndex: 1,
        explanation: 'work требует предлога for; он должен остаться (в конце придаточного), не исчезать.',
      },
      {
        type: 'mcq',
        prompt: 'My sister, ___ lives in Boston, is visiting next week.',
        options: ['that', 'who', '—', 'which'],
        correctIndex: 1,
        explanation: 'Non-defining придаточное (запятые) — that здесь невозможен, нужен who.',
      },
      {
        type: 'fill',
        prompt: 'Переведи (формальный вариант, предлог перед which): «Компания, в которой я работаю, растёт быстро».',
        answers: ['The company in which I work is growing fast', 'The company in which I work is growing quickly'],
        explanation: 'work требует предлога in; формальный регистр — предлог перед which, не в конце.',
      },
    ],
  },

  {
    module: 'Модуль 9. Relative & Participle Clauses',
    id: 'participle-clauses',
    title: '9.2 Participle Clauses — сжатие придаточных для C1',
    intro: `
      <p>Participle clauses — способ сократить громоздкое придаточное до причастного оборота.
      Это не новый смысл, а более компактная, "письменная"/литературная форма того же
      предложения — типичный признак C1-уровня против B2, где чаще используются полные
      придаточные.</p>

      <h4>-ing clauses — активное значение</h4>
      <p>Заменяют либо <code>who/which + активный глагол</code>, либо придаточные причины/времени
      (<code>because/while/after</code> + подлежащее совпадает с главным предложением).</p>
      <ul>
        <li>"The man <strong>sitting</strong> by the window is my boss." = "…who is sitting…"</li>
        <li>"<strong>Feeling</strong> tired, she went to bed early." = "Because she felt
        tired…"</li>
        <li>"<strong>Walking</strong> home, I noticed a strange car outside." = "While/As I was
        walking home…"</li>
      </ul>

      <h4>-ed / V3 clauses — пассивное значение</h4>
      <p>Заменяют придаточное со страдательным залогом (<code>which was/were + V3</code>).</p>
      <ul>
        <li>"The documents <strong>left</strong> on the table were confidential." = "…which were
        left…"</li>
        <li>"<strong>Written</strong> in 1920, the novel is still widely read today." = "The novel,
        which was written in 1920, …"</li>
      </ul>

      <h4>having + V3 — действие, завершённое ДО другого</h4>
      <p>Показывает, что одно действие полностью завершилось перед тем, как началось следующее —
      письменный эквивалент Past Perfect в связке двух действий.</p>
      <ul>
        <li>"<strong>Having finished</strong> the report, she sent it to her boss." = "After she
        had finished the report, she sent it…"</li>
      </ul>

      <div class="callout warn"><strong>Ловушка: подлежащее должно совпадать.</strong> Participle
      clause без собственного подлежащего "наследует" подлежащее главного предложения — если оно
      разное, получается двусмысленная или откровенно неверная конструкция ("dangling
      participle"): <s>Walking home, a strange car passed me.</s> — по грамматике получается, что
      машина шла домой, не "я". Правильно: "Walking home, I saw a strange car pass me."</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'The man ___ by the window is my boss.',
        options: ['sitting', 'sat', 'who sat', 'is sitting'],
        correctIndex: 0,
        explanation: 'Активное значение (он сам сидит) → -ing clause.',
      },
      {
        type: 'mcq',
        prompt: 'The documents ___ on the table were confidential.',
        options: ['leaving', 'left', 'having left', 'that leave'],
        correctIndex: 1,
        explanation: 'Пассивное значение (документы были оставлены кем-то) → -ed/V3 clause.',
      },
      {
        type: 'mcq',
        prompt: '___ the report, she sent it to her boss. (сначала закончила, потом отправила)',
        options: ['Finishing', 'Having finished', 'Finished', 'Having finish'],
        correctIndex: 1,
        explanation: 'Действие завершено до следующего → having + V3.',
      },
      {
        type: 'mcq',
        prompt: 'Which sentence has a "dangling participle" problem?',
        options: ['Walking home, I saw a strange car.', 'Walking home, a strange car passed me.', 'Having finished the report, she sent it.'],
        correctIndex: 1,
        explanation: 'В варианте "a strange car passed me" подлежащее главного предложения (car) не совпадает со смыслом причастия — получается, что машина шла домой.',
      },
      {
        type: 'fill',
        prompt: 'Сожми в participle clause: "Because she felt tired, she went to bed early."',
        answers: ['Feeling tired, she went to bed early'],
        explanation: 'Причина + совпадающее подлежащее → -ing clause.',
      },
    ],
  }
);
