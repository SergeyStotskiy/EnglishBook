window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 4. Структура предложения',
    id: 'structure-be-vs-do',
    title: '4.1 to be vs do-support — два семейства глаголов',
    focus: 'high',
    focusNote: 'Правило 2 в rules.md — статус 🟡 больше 20 сессий подряд, самая долгоиграющая ошибка проекта. Всплывает в новой синтаксической позиции каждый раз, когда кажется закрытой.',
    intro: `
      <p>Главная идея: в английском не "прилепи not куда-нибудь", а два разных механизма в
      зависимости от того, какой глагол в предложении.</p>

      <h4>Семья 1 — у глагола уже есть свой встроенный оператор</h4>
      <p>Для вопроса он сам переставляется с подлежащим, для отрицания к нему просто добавляется
      not/n't. Вставлять сюда <code>do</code> нельзя никогда.</p>
      <table>
        <thead><tr><th>Кто сюда входит</th><th>Утверждение</th><th>Вопрос</th><th>Отрицание</th></tr></thead>
        <tbody>
          <tr><td>to be — главный глагол (перед прилагательным/сущ./местом)</td><td>He <strong>is</strong> tired.</td><td><strong>Is</strong> he tired?</td><td>He <strong>isn't</strong> tired.</td></tr>
          <tr><td>to be — вспомогательный, Continuous</td><td>He <strong>is</strong> working.</td><td><strong>Is</strong> he working?</td><td>He <strong>isn't</strong> working.</td></tr>
          <tr><td>to be — вспомогательный, Passive</td><td>The door <strong>is</strong> locked.</td><td><strong>Is</strong> the door locked?</td><td>The door <strong>isn't</strong> locked.</td></tr>
          <tr><td>have/has/had — вспомогательный, Perfect</td><td>He <strong>has</strong> finished.</td><td><strong>Has</strong> he finished?</td><td>He <strong>hasn't</strong> finished.</td></tr>
          <tr><td>модальные (can/will/should/must…)</td><td>He <strong>can</strong> come.</td><td><strong>Can</strong> he come?</td><td>He <strong>can't</strong> come.</td></tr>
        </tbody>
      </table>
      <p>Общее: сам этот глагол — единственный "рычаг", которым строится и вопрос, и отрицание.
      <code>do</code> тут физически лишний.</p>

      <h4>Семья 2 — обычный смысловой глагол в Simple</h4>
      <p>like, work, sleep, cook, sign… — своего оператора нет. В утверждении справляется сам. Но
      для вопроса/отрицания менять не с чем — и тогда подставляется фиктивный
      <code>do/does/did</code>, только ради этой работы.</p>
      <table>
        <thead><tr><th>Утверждение</th><th>Вопрос</th><th>Отрицание</th></tr></thead>
        <tbody>
          <tr><td>He <strong>likes</strong> coffee.</td><td><strong>Does</strong> he <strong>like</strong> coffee?</td><td>He <strong>doesn't like</strong> coffee.</td></tr>
          <tr><td>He <strong>slept</strong> well.</td><td><strong>Did</strong> he <strong>sleep</strong> well?</td><td>He <strong>didn't sleep</strong> well.</td></tr>
        </tbody>
      </table>
      <p>Как только появился do/does/did — смысловой глагол ОБЯЗАН вернуться в базовую форму
      (like, не likes; sleep, не slept). Именно do берёт на себя время/лицо, глаголу это уже не
      нужно.</p>

      <div class="callout warn"><strong>Тест на легальность — что может стоять сразу после
      is/am/are.</strong> Возьми слово сразу после is/am/are и сравни его со словарной (начальной)
      формой:
      <table>
        <thead><tr><th>После is/am/are</th><th>Легально?</th><th>Почему</th></tr></thead>
        <tbody>
          <tr><td>прилагательное (tired, hungry)</td><td>✅</td><td>это работа to be как главного глагола</td></tr>
          <tr><td>существительное (a teacher)</td><td>✅</td><td>то же самое</td></tr>
          <tr><td>V-ing (working, sleeping)</td><td>✅</td><td>Continuous</td></tr>
          <tr><td>V3 (locked, finished, invited)</td><td>✅</td><td>Passive — форма изменена относительно словарной</td></tr>
          <tr><td>точная словарная форма глагола (like, work, sleep)</td><td>❌ никогда</td><td>это работа Семьи 2, туда is не подставляется вообще</td></tr>
        </tbody>
      </table>
      <strong>Правило одной фразой:</strong> после is/am/are никогда не может стоять голый
      смысловой глагол в его словарной форме. Если слово справа от is/am/are совпадает 1-в-1 со
      словом из словаря — это стопроцентно неправильно, без исключений.</div>

      <h4>Где это путается с соседними правилами</h4>
      <ol>
        <li><strong>he/she/it → -s/has/does.</strong> Семью выбрать мало — внутри Семьи 1 ещё
        нужно верное лицо (has, не have), внутри Семьи 2 — верное окончание (likes, не like в
        утверждении). Это два разных шага, ошибка может быть в любом из них по отдельности.</li>
        <li><strong>Present Simple vs Continuous.</strong> Прежде чем выбирать is или do, нужно
        решить, какая это категория — по сигнальным словам (usually/every day → Simple; now/at
        the moment → Continuous). Если категория выбрана неверно, is/do после этого будет
        "правильным для неправильной категории" — ошибка не в механизме, а на шаг раньше.</li>
        <li><strong>Задвоение операторов в вопросах.</strong> Отдельный сбой: при инверсии в
        голове одновременно всплывают оба способа, и оба остаются в предложении —
        <s>Why are your hands is dirty?</s> вместо "Why are your hands dirty?"</li>
      </ol>
    `,
    mistakes: [
      { wrong: '~~I tired~~', right: 'I am tired', why: 'to be вообще пропущен — а он тут ГЛАВНЫЙ глагол (Семья 1), не опция.' },
      { wrong: '~~If you aren\'t sleep~~', right: "If you don't sleep", why: 'sleep — Семья 2 (обычный глагол), своего be у него нет, нужен do-support.' },
      { wrong: '~~Her hands [] in paint~~', right: 'Her hands are in paint', why: 'Семья 1 (перед предложной группой), to be пропущен целиком.' },
      { wrong: '~~Why are your hands is dirty?~~', right: 'Why are your hands dirty?', why: 'Задвоение — оставлены оба кандидата на роль оператора вместо одного.' },
      { wrong: '~~Why is he doesn\'t answer calls?~~', right: "Why doesn't he answer calls?", why: 'То же задвоение: правильный кандидат — do (answer — Семья 2), is лишний.' },
      { wrong: '~~He doesn\'t make dinner now~~', right: "He isn't cooking dinner now", why: 'do выбран правильно для СВОЕЙ категории, но категория выбрана не та: "now" требует Continuous, а не Simple.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'She ___ tired today.',
        options: ["don't", "isn't", "doesn't", "not"],
        correctIndex: 1,
        explanation: 'tired — прилагательное, Семья 1 (to be), не Семья 2.',
      },
      {
        type: 'mcq',
        prompt: '___ he like coffee?',
        options: ['Is', 'Does', 'Has', 'Do'],
        correctIndex: 1,
        explanation: 'like — обычный смысловой глагол в Simple, Семья 2, he/she/it → does.',
      },
      {
        type: 'mcq',
        prompt: 'The door ___ locked.',
        options: ["don't", "isn't", "doesn't", "hasn't"],
        correctIndex: 1,
        explanation: 'locked — V3, Passive, Семья 1 (be).',
      },
      {
        type: 'mcq',
        prompt: 'Which is grammatically ILLEGAL right after "is"?',
        options: ['tired', 'working', 'locked', 'sleep'],
        correctIndex: 3,
        explanation: 'sleep — точная словарная форма глагола, после is/am/are невозможна никогда.',
      },
      {
        type: 'mcq',
        prompt: 'If you ___ sleep, you will be tired tomorrow.',
        options: ["aren't", "don't", "won't", "isn't"],
        correctIndex: 1,
        explanation: 'sleep — Семья 2, отрицание строится через do-support, be тут ни при чём.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Он ещё не закончил отчёт» (has или have — выбери верную форму).',
        answers: ["He hasn't finished the report yet", 'He has not finished the report yet'],
        explanation: 'finished — Perfect, Семья 1 (has), do-support здесь не нужен и невозможен.',
      },
    ],
  },

  {
    module: 'Модуль 4. Структура предложения',
    id: 'structure-subject-and-it-there',
    title: '4.2 Обязательное подлежащее и формальные it / there',
    focus: 'medium',
    focusNote: 'Правила 33, 20 и 7 в rules.md.',
    intro: `
      <h4>Подлежащее обязательно</h4>
      <p>Русский глагол сам несёт лицо в окончании («приехал» = я/он мужского рода, прошедшее),
      поэтому подлежащее можно опустить. Английский глагол лица не показывает вообще, и без
      подлежащего предложение просто не собирается.</p>
      <ul>
        <li>❌ <s>Yesterday morning had come to office</s> → ✅ Yesterday morning
        <strong>I</strong> got to the office</li>
        <li>❌ <s>and then went to the kitchen</s> → ✅ and then <strong>I</strong> went to the
        kitchen</li>
      </ul>
      <div class="callout"><strong>Где ломается чаще всего:</strong> (1) после обстоятельства в
      начале предложения ("Yesterday morning…") — обстоятельство "занимает место" подлежащего в
      ощущении; (2) во второй части сложного предложения после "and", где по-русски подлежащее не
      повторяют.</div>
      <p><strong>Нюанс:</strong> после and подлежащее можно опустить, если оно то же самое и
      глагол идёт сразу: "I got to the office <strong>and went</strong> to the kitchen" — это
      верно. Нельзя только тогда, когда в первой части подлежащего не было вообще.</p>

      <h4>Формальное it — для безличных оборотов</h4>
      <p>Русские безличные конструкции ("холодно", "трудно сказать") в английском тоже требуют
      подлежащего — формального <strong>it</strong>, которое ничего конкретного не обозначает,
      просто занимает синтаксическое место.</p>
      <ul>
        <li>❌ <s>Was cold</s> → ✅ <strong>It</strong> was cold.</li>
        <li>❌ <s>Is difficult to say</s> → ✅ <strong>It</strong> is difficult to say.</li>
      </ul>

      <h4>there is/was no X — не it is/was no X</h4>
      <p>Русская безличная конструкция "не было времени" тянет за собой перевод через it, но в
      английском для утверждения о существовании/отсутствии используется <code>there is/was</code>
      — а <code>it</code> нужен только когда речь о конкретном уже упомянутом предмете.</p>
      <ul>
        <li>❌ <s>it is no time to go</s> → ✅ <strong>there was</strong> no time to go</li>
        <li>❌ <s>it was no email from him</s> → ✅ <strong>there was</strong> no email from him</li>
      </ul>
      <div class="callout warn"><strong>Согласование числа:</strong> глагол после there
      согласуется с существительным, которое идёт ПОСЛЕ него: there <strong>were</strong> no free
      room<strong>s</strong>, не "there was… rooms".</div>

      <h4>"мне нужен X" → subject переворачивается</h4>
      <p>Русская безличная конструкция "X мне нужен" ставит предмет в подлежащее, а нуждающегося
      — в дательный падеж. В английском наоборот: тот, кто нуждается, — подлежащее (I need…),
      предмет — дополнение.</p>
      <ul>
        <li>❌ <s>it hard needed for me</s> → ✅ <strong>I really need it</strong>.</li>
      </ul>
    `,
    mistakes: [
      { wrong: '~~Yesterday morning had come to office~~', right: 'Yesterday morning I got to the office', why: 'Английское предложение не бывает без подлежащего — русский опускает его по окончанию глагола, английский нет.' },
      { wrong: '~~it is no time to go~~', right: 'there was no time to go', why: '"не было X" переводится через there is/was, it — только для уже упомянутого конкретного предмета.' },
      { wrong: '~~it hard needed for me~~', right: 'I really need it', why: 'Нуждающийся — подлежащее (I need), а не предмет; русская безличная конструкция переворачивает порядок.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'Yesterday morning ___ got to the office late.',
        options: ['—', 'I', 'was', 'it'],
        correctIndex: 1,
        explanation: 'Подлежащее нельзя опустить даже после обстоятельства времени в начале.',
      },
      {
        type: 'mcq',
        prompt: '___ was cold outside.',
        options: ['—', 'This', 'It', 'There'],
        correctIndex: 2,
        explanation: 'Безличный оборот про погоду — формальное it.',
      },
      {
        type: 'mcq',
        prompt: '___ no free rooms in the hotel.',
        options: ['It was', 'There was', 'There were', 'It were'],
        correctIndex: 2,
        explanation: 'there + отсутствие + множественное число (rooms) → were, глагол согласуется с тем, что после there.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мне очень нужен этот отчёт».',
        answers: ['I really need this report', 'I really need that report'],
        explanation: 'Нуждающийся (я) — подлежащее, предмет — дополнение; русская безличная структура переворачивается.',
      },
    ],
  },

  {
    module: 'Модуль 4. Структура предложения',
    id: 'structure-word-order',
    title: '4.3 Порядок слов: наречия частоты и степень',
    focus: 'medium',
    focusNote: 'Правила 14 и 3 в rules.md.',
    intro: `
      <h4>Наречия частоты — перед смысловым глаголом, не в конце</h4>
      <p><code>usually / often / always / never</code> встают ПОСЛЕ подлежащего и ПЕРЕД смысловым
      глаголом — не в конце предложения, как естественно хочется по аналогии с русским порядком
      слов.</p>
      <ul>
        <li>❌ <s>I eat at office usually</s> → ✅ I <strong>usually</strong> eat at the office.</li>
        <li>He <strong>usually</strong> eats at the office. (не "eats at the office usually")</li>
      </ul>
      <div class="callout">Исключение — с глаголом to be наречие встаёт ПОСЛЕ него: "He is
      <strong>usually</strong> late", не "He usually is late".</div>

      <h4>a bit / a little — ПЕРЕД прилагательным</h4>
      <p>Порядок слов в русском свободнее ("нервничаю немного" и "немного нервничаю" оба
      нормальны), в английском степень (a bit/a little/very/quite) всегда стоит перед
      прилагательным, которое усиливает.</p>
      <ul>
        <li>❌ <s>nervous a bit</s> → ✅ <strong>a bit</strong> nervous / <strong>a little</strong>
        nervous</li>
      </ul>
    `,
    mistakes: [
      { wrong: '~~I eat at office usually~~', right: 'I usually eat at the office', why: 'Наречие частоты — перед смысловым глаголом, не в конце.' },
      { wrong: '~~nervous a bit~~', right: 'a bit nervous', why: 'Степень (a bit/a little) всегда перед прилагательным.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'He ___ eats at the office.',
        options: ['usually', 'is usually', '(в конце предложения)', 'usually is'],
        correctIndex: 0,
        explanation: 'usually встаёт перед смысловым глаголом (eats), после подлежащего.',
      },
      {
        type: 'mcq',
        prompt: 'He is ___ late for meetings.',
        options: ['usually', '(в конце)', 'usual', 'usually is'],
        correctIndex: 0,
        explanation: 'С to be наречие частоты идёт ПОСЛЕ него: is usually, не usually is.',
      },
      {
        type: 'mcq',
        prompt: "I'm ___ nervous before presentations.",
        options: ['nervous a bit', 'a bit nervous', 'a bit of nervous', 'bit a nervous'],
        correctIndex: 1,
        explanation: 'a bit всегда перед прилагательным.',
      },
    ],
  },

  {
    module: 'Модуль 4. Структура предложения',
    id: 'structure-c1-nuances',
    title: '4.4 Связка was/is, неправильные глаголы и без лишнего it\'s',
    focus: 'high',
    focusNote: 'Правила 37, 39 и 8 в rules.md — три свежих наблюдения (08-2026), ещё не закреплены.',
    intro: `
      <h4>«Это был/была» → связка was, не is</h4>
      <p>Русская конструкция «это был/была X» по звучанию похожа на настоящее время («это X»), и
      рука по инерции ставит is — связка перестаёт согласовываться с прошедшим временем, заданным
      всем остальным предложением/контекстом.</p>
      <ul>
        <li>❌ <s>This is my very first meeting with this client</s> (при «Это была моя первая
        встреча») → ✅ <strong>This was</strong> my very first meeting with this client.</li>
        <li>❌ <s>This is not a first event like this</s> → ✅ It <strong>wasn't</strong> the first
        time like this.</li>
      </ul>
      <div class="callout warn"><strong>Как проверить себя:</strong> если по-русски перед
      существительным/прилагательным стоит «был/была/было/были» — по-английски там
      <strong>was/were</strong>, никогда is/are. Если же в русском оригинале прошедшего маркера
      нет («Это последний шанс») — is остаётся верным, ошибка именно в распознавании
      временнóго триггера, а не в слепом избегании is.</div>

      <h4>«X — это Y» → просто X is Y, без лишнего it's</h4>
      <p>В русском «X — это Y» связка «это» синтаксически ощущается как отдельное звено между
      подлежащим и сказуемым. При переводе рука вставляет <code>it's</code> как копию этого «это»
      — но в английском подлежащее уже требует ровно одного сказуемого, второе подлежащее+глагол
      избыточны и ломают структуру предложения.</p>
      <ul>
        <li>❌ <s>The one problem it's a price</s> → ✅ <strong>The only problem is the
        price.</strong></li>
      </ul>

      <h4>Неправильные глаголы — проверять, не образовывать по шаблону -ed</h4>
      <p>Ошибка приходит на «бытовых» глаголах, которые кажутся слишком простыми, чтобы быть
      неправильными.</p>
      <table>
        <thead><tr><th>Базовая форма</th><th>Past Simple / V3</th></tr></thead>
        <tbody>
          <tr><td>sleep</td><td><strong>slept</strong> (не <s>sleeped</s>)</td></tr>
          <tr><td>keep</td><td><strong>kept</strong></td></tr>
          <tr><td>feel</td><td><strong>felt</strong></td></tr>
          <tr><td>leave</td><td><strong>left</strong></td></tr>
          <tr><td>mean</td><td><strong>meant</strong></td></tr>
          <tr><td>catch</td><td><strong>caught</strong></td></tr>
          <tr><td>teach</td><td><strong>taught</strong></td></tr>
          <tr><td>buy</td><td><strong>bought</strong> (не <s>buyed</s>)</td></tr>
          <tr><td>hear</td><td><strong>heard</strong> (не <s>heared</s>)</td></tr>
        </tbody>
      </table>
    `,
    mistakes: [
      { wrong: '~~This is my very first meeting with this client~~', right: 'This was my very first meeting with this client', why: 'Русский оригинал в прошедшем ("была") — связка должна согласоваться, was, не is.' },
      { wrong: '~~The one problem it\'s a price~~', right: 'The only problem is the price', why: 'Лишнее it\'s дублирует уже названное подлежащее (the only problem).' },
      { wrong: '~~heared~~', right: 'heard', why: 'hear — неправильный глагол, не образуется по шаблону -ed.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: '«Это была важная встреча» →',
        options: ["This is an important meeting", "This was an important meeting", "It's an important meeting"],
        correctIndex: 1,
        explanation: 'Русский оригинал в прошедшем времени ("была") — связка was.',
      },
      {
        type: 'mcq',
        prompt: '«Единственная проблема — это цена» →',
        options: ["The only problem it's the price", "The only problem is the price", "It's the only problem is the price"],
        correctIndex: 1,
        explanation: 'Одно подлежащее — одно сказуемое, лишнее it\'s не нужно.',
      },
      {
        type: 'mcq',
        prompt: 'I ___ a strange noise last night.',
        options: ['heared', 'heard', 'hear', 'have heared'],
        correctIndex: 1,
        explanation: 'hear — неправильный глагол: hear-heard-heard.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Это был не первый такой случай» (используй wasn\'t).',
        answers: ["It wasn't the first time like this", "It wasn't the first such case", "This wasn't the first time like this"],
        explanation: 'Прошедшее «был» → wasn\'t, не isn\'t.',
      },
    ],
  }
);
