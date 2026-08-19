window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 5. Conditionals',
    id: 'conditionals-zero-first',
    title: '5.1 Zero & First Conditional',
    intro: `
      <h4>Zero Conditional — общие истины и факты</h4>
      <p>Формула: <code>if + Present Simple, ... Present Simple</code>. Речь не про конкретную
      будущую ситуацию, а про то, что происходит всегда, при любом повторении условия — законы
      природы, факты, привычные причинно-следственные связи.</p>
      <ul>
        <li>If you heat water to 100°C, it boils. (всегда, физический факт)</li>
        <li>If I drink coffee late at night, I can't sleep. (общая закономерность про себя)</li>
      </ul>
      <p>Здесь if можно заменить на "when" почти без потери смысла — это признак zero
      conditional: "When you heat water to 100°C, it boils."</p>

      <h4>First Conditional — реальная возможность в будущем</h4>
      <p>Формула: <code>if + Present Simple, ... will + V</code>. Конкретная, реалистичная
      ситуация, у которой есть реальный шанс случиться.</p>
      <ul>
        <li>If it's sunny tomorrow, we'll go to the beach.</li>
        <li>If you don't hurry up, you'll be late.</li>
      </ul>
      <div class="callout warn"><strong>Главная ловушка:</strong> will НИКОГДА не ставится внутри
      if-части, только в главной. <s>If it will rain</s> — так нельзя. If-часть всегда в Present
      Simple, даже когда по смыслу речь о будущем.</div>
      <p>Порядок частей можно менять свободно — смысл не меняется, только пунктуация: если
      if-часть идёт первой, после неё запятая ("If it rains, we'll stay in"); если if-часть идёт
      второй — запятая не нужна ("We'll stay in if it rains").</p>

      <div class="callout">Zero и First conditional легко перепутать, потому что оба используют
      Present Simple в if-части. Разница — в главной части: если там тоже Present Simple, это
      общая закономерность (zero); если will — это конкретный прогноз на будущее (first).</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'If you heat ice, it ___.',
        options: ['will melt', 'melts', 'would melt', 'melted'],
        correctIndex: 1,
        explanation: 'Физический факт, происходит всегда → Zero Conditional, Present Simple в обеих частях.',
      },
      {
        type: 'mcq',
        prompt: "If it ___ tomorrow, we'll cancel the picnic.",
        options: ['will rain', 'rains', 'would rain', 'rained'],
        correctIndex: 1,
        explanation: 'will никогда не ставится в if-части — только Present Simple, даже говоря о будущем.',
      },
      {
        type: 'mcq',
        prompt: "If you don't submit the form today, you ___ miss the deadline.",
        options: ["'ll", 'would', "don't", "'d"],
        correctIndex: 0,
        explanation: 'Реальная будущая возможность → First Conditional, will в главной части.',
      },
      {
        type: 'mcq',
        prompt: 'Which sentence is Zero Conditional (a general truth, not one future event)?',
        options: [
          "If I have time this weekend, I'll call you.",
          'If you mix blue and yellow, you get green.',
          "If she finishes early, she'll join us.",
        ],
        correctIndex: 1,
        explanation: 'Общая закономерность (смешивание цветов) — Present Simple в обеих частях, а не конкретное будущее событие.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Если ты не поторопишься, ты опоздаешь».',
        answers: ["If you don't hurry up, you'll be late", "If you don't hurry, you'll be late"],
        explanation: 'Реальная будущая возможность → if + Present Simple, ... will.',
      },
    ],
  },

  {
    module: 'Модуль 5. Conditionals',
    id: 'conditionals-second-third',
    title: '5.2 Second & Third Conditional',
    intro: `
      <h4>Second Conditional — гипотетическое настоящее/будущее</h4>
      <p>Формула: <code>if + Past Simple, ... would + V</code>. Речь о ситуации, которая
      маловероятна, невозможна прямо сейчас или вообще выдумана — "если бы". Past Simple здесь не
      про прошлое время, это грамматический маркер гипотетичности.</p>
      <ul>
        <li>If I had more time, I would learn Spanish. (сейчас времени нет — гипотеза)</li>
        <li>If I were you, I would talk to him. (никогда не могу буквально "быть тобой" — чистая
        гипотеза)</li>
        <li>What would you do if you won the lottery? (маловероятно, но не невозможно
        принципиально)</li>
      </ul>
      <div class="callout warn"><strong>were вместо was — для всех лиц в гипотезе.</strong> В
      формальном/книжном стиле (и в устойчивом обороте "if I were you") после if с Past Simple от
      to be для всех лиц (I/he/she/it) используется <strong>were</strong>, не was — это архаичный
      остаток отдельного сослагательного наклонения. "If I were rich..." звучит более грамотно/
      формально, чем "If I was rich...", хотя последнее тоже встречается в разговорной речи.</div>

      <h4>Third Conditional — гипотетическое прошлое, уже нельзя изменить</h4>
      <p>Формула: <code>if + Past Perfect, ... would have + V3</code>. Ситуация в прошлом, которая
      НЕ случилась — сожаление или рассуждение "а что, если бы тогда было иначе".</p>
      <ul>
        <li>If I had known about the traffic, I would have left earlier. (не знал → не выехал
        раньше → факт прошлого, изменить нельзя)</li>
        <li>If she had studied harder, she would have passed the exam. (не училась усерднее → не
        сдала — оба факта уже случились и зафиксированы)</li>
      </ul>
      <div class="callout">Ключевое отличие Second от Third: Second — про "сейчас/вообще" (можно
      вообразить другой исход только гипотетически, вне времени), Third — про КОНКРЕТНЫЙ момент
      прошлого, который уже прошёл и не может измениться никаким образом, даже гипотетически.</div>

      <table>
        <thead><tr><th></th><th>If-часть</th><th>Главная часть</th><th>Смысл</th></tr></thead>
        <tbody>
          <tr><td>2nd</td><td>Past Simple</td><td>would + V</td><td>гипотеза про настоящее/будущее</td></tr>
          <tr><td>3rd</td><td>Past Perfect</td><td>would have + V3</td><td>гипотеза про прошлое, уже нельзя изменить</td></tr>
        </tbody>
      </table>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'If I ___ more time, I would learn Spanish.',
        options: ['have', 'had', 'will have', 'would have'],
        correctIndex: 1,
        explanation: 'Second Conditional: if + Past Simple, ... would + V.',
      },
      {
        type: 'mcq',
        prompt: 'If I ___ you, I would apologize.',
        options: ['was', 'am', 'were', 'would be'],
        correctIndex: 2,
        explanation: 'Формальная/устойчивая гипотетическая форма — were для всех лиц, не was.',
      },
      {
        type: 'mcq',
        prompt: 'If she ___ harder, she would have passed the exam.',
        options: ['studied', 'had studied', 'has studied', 'would study'],
        correctIndex: 1,
        explanation: 'Third Conditional: if + Past Perfect, ... would have + V3.',
      },
      {
        type: 'mcq',
        prompt: 'If I had known about the traffic, I ___ earlier.',
        options: ['would leave', 'left', 'would have left', 'had left'],
        correctIndex: 2,
        explanation: 'Гипотетическое прошлое — главная часть требует would have + V3.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Если бы я знал, я бы сказал тебе» (речь о прошлом моменте, который уже нельзя изменить).',
        answers: ['If I had known, I would have told you'],
        explanation: 'Гипотеза про уже случившееся прошлое → Third Conditional.',
      },
    ],
  },

  {
    module: 'Модуль 5. Conditionals',
    id: 'conditionals-mixed',
    title: '5.3 Mixed Conditionals',
    intro: `
      <p>Иногда условие и результат относятся к РАЗНЫМ временным пластам — тогда две половины
      Second и Third Conditional комбинируются в одном предложении.</p>

      <h4>Тип 1: гипотетическое прошлое → результат в настоящем</h4>
      <p>Формула: <code>if + Past Perfect, ... would + V</code> (без have).</p>
      <ul>
        <li>If I had taken that job (тогда, в прошлом), I would be living in New York now
        (сейчас). — не взял работу тогда → живу не в Нью-Йорке сейчас</li>
        <li>If she hadn't missed the flight (тогда), she would be here with us right now
        (сейчас).</li>
      </ul>
      <div class="callout">Условие относится к прошлому моменту (had + V3), а результат
      описывает текущее состояние дел, которое из-за этого условия сложилось иначе — поэтому
      главная часть не получает have, только would + V.</div>

      <h4>Тип 2: общее/настоящее условие → результат в прошлом</h4>
      <p>Формула: <code>if + Past Simple, ... would have + V3</code>.</p>
      <ul>
        <li>If I weren't so bad with directions (это про меня вообще, не только тогда), I
        wouldn't have gotten lost yesterday (конкретный случай в прошлом).</li>
        <li>If he were more careful (это его обычная черта), he wouldn't have made that mistake
        last week.</li>
      </ul>
      <div class="callout">Условие описывает постоянное свойство/факт (Past Simple, как во
      Second Conditional), а результат — конкретное прошлое событие, на которое это свойство
      повлияло, поэтому главная часть получает would have + V3, как в Third Conditional.</div>

      <table>
        <thead><tr><th>Тип</th><th>If-часть</th><th>Главная часть</th><th>Логика</th></tr></thead>
        <tbody>
          <tr><td>Прошлое → настоящее</td><td>Past Perfect</td><td>would + V</td><td>другое решение тогда изменило бы, как обстоят дела сейчас</td></tr>
          <tr><td>Настоящее → прошлое</td><td>Past Simple</td><td>would have + V3</td><td>другое постоянное свойство/факт изменило бы конкретный случай в прошлом</td></tr>
        </tbody>
      </table>
      <div class="callout warn">Смешанные условные — не отдельная "третья формула", а логическое
      следствие того, что условие и результат в реальной жизни не всегда синхронизированы по
      времени. Если сомневаешься, какой тип — определи ВРЕМЯ условия и ВРЕМЯ результата по
      отдельности, а не ищи заранее готовую формулу.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: "If I had taken that job, I ___ in New York now.",
        options: ['would live', 'would have lived', 'live', 'had lived'],
        correctIndex: 0,
        explanation: 'Условие в прошлом (had taken), результат в настоящем → would + V, без have.',
      },
      {
        type: 'mcq',
        prompt: "If he ___ more careful in general, he wouldn't have made that mistake last week.",
        options: ['had been', 'were', 'was', 'is'],
        correctIndex: 1,
        explanation: 'Условие описывает постоянное свойство (не конкретный прошлый момент) → Past Simple/were, как во Second Conditional.',
      },
      {
        type: 'mcq',
        prompt: "If she hadn't missed the flight, she ___ here with us right now.",
        options: ['would have been', 'would be', 'was', 'had been'],
        correctIndex: 1,
        explanation: 'Условие в прошлом, результат описывает текущую ситуацию → would + V (без have).',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Если бы я не боялся высоты (это моя обычная черта), я бы не отказался от того похода на прошлой неделе» (условие — общее свойство, результат — конкретный прошлый случай).',
        answers: ["If I weren't afraid of heights, I wouldn't have refused that hike last week", "If I wasn't afraid of heights, I wouldn't have refused that hike last week"],
        explanation: 'Общее свойство (Past Simple/were) → конкретный результат в прошлом (would have + V3).',
      },
    ],
  },

  {
    module: 'Модуль 6. Passive Voice',
    id: 'passive-voice',
    title: '6.1 Passive Voice — когда и как',
    intro: `
      <p>Пассивный залог переносит фокус с того, кто выполняет действие, на само действие или на
      его объект. Формула одна для всех времён: <code>be + V3</code> — меняется только форма
      be.</p>

      <h4>Когда использовать passive вместо active</h4>
      <ul>
        <li><strong>Исполнитель неизвестен или неважен:</strong> "My wallet was stolen."
        (неважно/неизвестно, кто украл — важен сам факт)</li>
        <li><strong>Фокус на объекте действия, а не на исполнителе:</strong> "The bridge was
        built in 1889." (важен мост, а не строители)</li>
        <li><strong>Формальный/научный/деловой регистр:</strong> "Mistakes were made" вместо "We
        made mistakes" — снимает акцент с личной ответственности, характерно для отчётов и
        научных статей ("The samples were analyzed…").</li>
      </ul>

      <h4>be + V3 через времена</h4>
      <table>
        <thead><tr><th>Время</th><th>Active</th><th>Passive</th></tr></thead>
        <tbody>
          <tr><td>Present Simple</td><td>They clean the office every day.</td><td>The office <strong>is cleaned</strong> every day.</td></tr>
          <tr><td>Past Simple</td><td>They cleaned the office yesterday.</td><td>The office <strong>was cleaned</strong> yesterday.</td></tr>
          <tr><td>Present Perfect</td><td>They have cleaned the office.</td><td>The office <strong>has been cleaned</strong>.</td></tr>
          <tr><td>Future (will)</td><td>They will clean the office.</td><td>The office <strong>will be cleaned</strong>.</td></tr>
          <tr><td>Present Continuous</td><td>They are cleaning the office.</td><td>The office <strong>is being cleaned</strong>.</td></tr>
        </tbody>
      </table>
      <div class="callout">Аспект (Simple/Continuous/Perfect) сохраняется тот же, что и в active
      — passive не меняет ось "когда" или "как я смотрю на действие" (см. модуль 1), только
      переставляет местами subject и object и добавляет be + V3 вместо обычной формы глагола.</div>

      <h4>by + agent — только когда исполнитель важен</h4>
      <p>Указывать исполнителя через <code>by</code> нужно, только если это добавляет реально
      значимую информацию — иначе agent просто опускается.</p>
      <ul>
        <li>"The novel was written <strong>by Tolstoy</strong>." — имя автора важно, стоит
        назвать.</li>
        <li>"The window was broken." — не "by someone" — исполнитель неизвестен/неважен, добавка
        by кого-то была бы избыточной.</li>
      </ul>
      <div class="callout warn">Частая ошибка неносителей — добавлять "by someone/by people" там,
      где по-английски agent просто опускается. Если не можешь назвать конкретное лицо/причину —
      скорее всего, by-часть вообще не нужна.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'My car ___ last week. (неизвестно кем)',
        options: ['stole', 'was stolen', 'has stolen', 'is stealing'],
        correctIndex: 1,
        explanation: 'Исполнитель неизвестен, важен факт → Past Simple Passive: was + V3.',
      },
      {
        type: 'mcq',
        prompt: 'The report ___ by the time you arrive.',
        options: ['will finish', 'will be finished', 'is finished', 'was finished'],
        correctIndex: 1,
        explanation: 'Future Passive: will be + V3.',
      },
      {
        type: 'mcq',
        prompt: 'The bridge ___ in 1889.',
        options: ['built', 'was built', 'has built', 'is building'],
        correctIndex: 1,
        explanation: 'Конкретное прошлое время (1889), фокус на мосте, не на строителях → Past Simple Passive.',
      },
      {
        type: 'mcq',
        prompt: 'Right now, the new office ___.',
        options: ['is cleaning', 'is being cleaned', 'cleans', 'was being cleaned'],
        correctIndex: 1,
        explanation: 'Present Continuous Passive: is being + V3 — процесс, происходящий прямо сейчас.',
      },
      {
        type: 'fill',
        prompt: 'Переведи в пассив: «Эта картина написана известным художником» (используй be + V3, автор важен).',
        answers: ['This painting was painted by a famous artist', 'This painting was painted by a well-known artist'],
        explanation: 'Исполнитель важен и назван → by + agent.',
      },
    ],
  },

  {
    module: 'Модуль 7. Reported Speech',
    id: 'reported-speech',
    title: '7.1 Reported Speech — косвенная речь',
    intro: `
      <p>Ты уже сталкивался с этим механизмом на практике — просто без формального названия. В
      обычном рассказе о прошлом ("вчера мне позвонили и сказали, что завтра будет встреча")
      слова-указатели времени сдвигаются: не "завтра", а "на следующий день", потому что точка
      отсчёта переехала в прошлое. Reported speech — это ровно тот же сдвиг, только формализованный
      в грамматическое правило с чёткой таблицей соответствий.</p>

      <h4>Backshift — сдвиг времени на один шаг назад</h4>
      <p>Когда глагол-репортёр (said, told) стоит в прошедшем времени, время внутри цитируемой
      части сдвигается на один шаг назад по общей системе времён (см. модуль 1).</p>
      <table>
        <thead><tr><th>Прямая речь</th><th>Косвенная речь</th></tr></thead>
        <tbody>
          <tr><td>Present Simple: "I work here."</td><td>Past Simple: He said (that) he worked there.</td></tr>
          <tr><td>Present Continuous: "I'm working."</td><td>Past Continuous: He said he was working.</td></tr>
          <tr><td>Present Perfect: "I've finished."</td><td>Past Perfect: He said he had finished.</td></tr>
          <tr><td>Past Simple: "I worked there."</td><td>Past Perfect: He said he had worked there.</td></tr>
          <tr><td>will: "I'll call you."</td><td>would: He said he would call me.</td></tr>
          <tr><td>can: "I can help."</td><td>could: He said he could help.</td></tr>
          <tr><td>must: "I must go."</td><td>had to: He said he had to go.</td></tr>
        </tbody>
      </table>
      <div class="callout">Если глагол-репортёр в настоящем времени (say/says) — backshift не
      нужен вообще: "He says he works here" (без изменений), это типично для пересказа только что
      сказанного или общих фактов, которые остаются верными.</div>

      <h4>say vs tell — кому нужен объект</h4>
      <ul>
        <li><strong>say</strong> — объект (слушатель) не обязателен, а если нужен — через to:
        "He said (to me) that he was tired."</li>
        <li><strong>tell</strong> — объект (слушатель) обязателен, без предлога: "He told
        <strong>me</strong> that he was tired." (не <s>told to me</s>)</li>
      </ul>

      <h4>Сдвиг дейксиса — слов времени и места</h4>
      <p>Это ровно тот же механизм, что ты уже применял в обычном рассказе о прошлом
      (см. таблицу "готовых форм" в модуле 3 — the day before yesterday, the next morning).
      Reported speech сводит все такие сдвиги в одну таблицу:</p>
      <table>
        <thead><tr><th>Прямая речь</th><th>Косвенная речь</th></tr></thead>
        <tbody>
          <tr><td>this</td><td>that</td></tr>
          <tr><td>here</td><td>there</td></tr>
          <tr><td>now</td><td>then</td></tr>
          <tr><td>today</td><td>that day</td></tr>
          <tr><td>tomorrow</td><td>the next day / the following day</td></tr>
          <tr><td>yesterday</td><td>the day before / the previous day</td></tr>
          <tr><td>next week</td><td>the following week</td></tr>
          <tr><td>... ago</td><td>... before</td></tr>
        </tbody>
      </table>
      <div class="callout warn">Точка отсчёта "сейчас" переехала из момента произнесения фразы в
      момент пересказа — все слова, которые указывали на время/место ОТНОСИТЕЛЬНО говорящего в
      момент речи, должны пересчитаться относительно новой точки отсчёта. "Tomorrow" сказанное во
      вторник и пересказанное в среду — уже не "завтра" для рассказчика, а "the next day".</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: '"I work here." → He said ___.',
        options: ['he works here', 'he worked here', 'he has worked here', 'he is working here'],
        correctIndex: 1,
        explanation: 'Present Simple → Past Simple (backshift на один шаг назад).',
      },
      {
        type: 'mcq',
        prompt: '"I\'ll call you tomorrow." → She said she ___ me the next day.',
        options: ['will call', 'would call', 'called', 'calls'],
        correctIndex: 1,
        explanation: 'will → would при backshift.',
      },
      {
        type: 'mcq',
        prompt: 'He ___ me that he was busy.',
        options: ['said', 'said to', 'told to', 'told'],
        correctIndex: 3,
        explanation: 'tell требует прямого объекта без предлога: told me.',
      },
      {
        type: 'mcq',
        prompt: '"I saw her yesterday." (сказано во вторник, пересказано в среду) → He said he had seen her ___.',
        options: ['yesterday', 'the day before', 'the previous day', 'both "the day before" and "the previous day" work'],
        correctIndex: 3,
        explanation: 'yesterday сдвигается на the day before / the previous day — оба варианта верны.',
      },
      {
        type: 'fill',
        prompt: 'Переведи в косвенную речь: "I need this today." → He said ___.',
        answers: ['he needed that that day', 'he needed it that day'],
        explanation: 'this→that, today→that day, need сдвигается в Past Simple.',
      },
    ],
  },

  {
    module: 'Модуль 7. Reported Speech',
    id: 'reported-speech-questions-commands',
    title: '7.2 Reported Questions & Commands',
    intro: `
      <h4>Reported yes/no questions — через if/whether, без инверсии</h4>
      <p>Прямой вопрос строится с инверсией (вспомогательный перед подлежащим). В reported speech
      инверсия убирается, и предложение возвращается к обычному порядку слов утверждения — плюс
      добавляется <code>if</code> или <code>whether</code>.</p>
      <ul>
        <li>"Do you like coffee?" → He asked me <strong>if</strong> I liked coffee. (не
        <s>He asked me did I like coffee</s>)</li>
        <li>"Are you coming?" → She asked <strong>whether</strong> I was coming.</li>
      </ul>
      <div class="callout warn"><strong>Do/does/did полностью исчезает</strong> при переносе в
      reported speech — он был нужен только для построения прямого вопроса (do-support, см. модуль
      4), а в придаточном предложении своя do-support-конструкция уже не строится: "Do you like
      coffee?" → if I liked coffee (не "if did I like").</div>

      <h4>Reported wh-questions — wh-слово остаётся, порядок слов меняется</h4>
      <p>wh-слово (what/where/when/why/who/how) сохраняется, но после него — обычный порядок слов
      утверждения, без инверсии и без do-support.</p>
      <ul>
        <li>"Where do you live?" → He asked me <strong>where I lived</strong>. (не
        <s>where did I live</s>)</li>
        <li>"What time does the meeting start?" → She asked <strong>what time the meeting
        started</strong>.</li>
      </ul>

      <h4>Reported commands and requests</h4>
      <p>Приказы и просьбы (в прямой речи — повелительное наклонение) передаются через
      <code>told/asked + object + to-infinitive</code>, без "that" и без backshift времени (тут
      и так нет времени, которое можно было бы сдвигать).</p>
      <ul>
        <li>"Close the door." → He told me <strong>to close</strong> the door.</li>
        <li>"Please wait here." → She asked us <strong>to wait</strong> there.</li>
        <li>"Don't be late." → He told me <strong>not to be</strong> late.</li>
      </ul>
      <div class="callout"><strong>ask vs tell:</strong> tell используется для приказов/инструкций
      (told me to close), ask — для просьб (asked me to wait), а также для reported questions
      (asked if/whether/wh-). Оба требуют объекта (told <strong>me</strong>, asked <strong>us</strong>)
      — в отличие от say, который объекта не требует (said that…).</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: '"Do you like coffee?" → He asked me ___ coffee.',
        options: ['did I like', 'if I liked', 'if I like', 'do I like'],
        correctIndex: 1,
        explanation: 'yes/no вопрос → if + обычный порядок слов, do-support исчезает.',
      },
      {
        type: 'mcq',
        prompt: '"Where do you live?" → He asked me ___.',
        options: ['where did I live', 'where I lived', 'where do I live', 'where I live'],
        correctIndex: 1,
        explanation: 'wh-слово остаётся, но порядок слов — как в утверждении, без do-support; плюс backshift (live → lived).',
      },
      {
        type: 'mcq',
        prompt: '"Close the door," he said. → He ___ me to close the door.',
        options: ['said', 'told', 'asked that', 'spoke'],
        correctIndex: 1,
        explanation: 'Приказ → told + object + to-infinitive.',
      },
      {
        type: 'mcq',
        prompt: '"Don\'t be late," she said. → She told me ___ late.',
        options: ['don\'t be', 'to not be', 'not to be', 'no to be'],
        correctIndex: 2,
        explanation: 'Отрицательная команда: not to + V (not встаёт перед to, не после).',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Она спросила, идёт ли дождь» (whether/if — на выбор).',
        answers: ['She asked if it was raining', 'She asked whether it was raining'],
        explanation: 'yes/no вопрос → if/whether + обычный порядок слов + backshift (is → was).',
      },
    ],
  }
);
