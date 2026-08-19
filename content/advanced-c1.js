window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-inversion',
    title: '10.1 Инверсия для акцента',
    intro: `
      <p>В обычном утверждении подлежащее идёт перед вспомогательным глаголом ("I have never seen
      this"). Когда отрицательное или ограничивающее наречие/выражение выносится в начало
      предложения ради акцента, порядок переворачивается — вспомогательный встаёт перед
      подлежащим, как в вопросе. Это тот же механизм, что строит обычные вопросы, просто
      применённый не к вопросу, а к утвердительному предложению для эффекта.</p>

      <h4>Инверсия с отрицательными наречиями</h4>
      <table>
        <thead><tr><th>Обычный порядок</th><th>С инверсией (акцент)</th></tr></thead>
        <tbody>
          <tr><td>I have never seen such chaos.</td><td><strong>Never have I seen</strong> such chaos.</td></tr>
          <tr><td>He not only finished early, but also helped others.</td><td><strong>Not only did he finish</strong> early, but he also helped others.</td></tr>
          <tr><td>We rarely see such results.</td><td><strong>Rarely do we see</strong> such results.</td></tr>
          <tr><td>I had no sooner arrived than the phone rang.</td><td><strong>No sooner had I arrived</strong> than the phone rang.</td></tr>
        </tbody>
      </table>
      <div class="callout">Механика та же, что в do-support (см. модуль 4): если у смыслового
      глагола своего вспомогательного нет (finish, see), для инверсии тоже подставляется
      do/does/did — "Not only <strong>did</strong> he finish early".</div>

      <h4>Инверсия вместо if — формальное условие</h4>
      <p>В формальном/письменном стиле if можно опустить, переставив вспомогательный перед
      подлежащим — то же смысловое условие, более книжный регистр.</p>
      <table>
        <thead><tr><th>С if</th><th>С инверсией</th></tr></thead>
        <tbody>
          <tr><td>If you need help, call me.</td><td><strong>Should you need</strong> help, call me.</td></tr>
          <tr><td>If I had known, I would have come.</td><td><strong>Had I known</strong>, I would have come.</td></tr>
          <tr><td>If I were you, I'd apologize.</td><td><strong>Were I you</strong>, I'd apologize.</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>Регистр:</strong> инверсия для акцента и инверсия вместо
      if — черта формального письменного стиля (эссе, деловая переписка, ораторская речь,
      художественная литература), в повседневном разговоре она звучит неестественно/театрально.
      Для IELTS Writing Task 2 — уместный инструмент показать диапазон структур; в Speaking лучше
      не форсировать.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: '___ such a difficult problem.',
        options: ['I have never seen', 'Never I have seen', 'Never have I seen', 'Never did I seen'],
        correctIndex: 2,
        explanation: 'Отрицательное наречие в начале → инверсия: вспомогательный (have) перед подлежащим.',
      },
      {
        type: 'mcq',
        prompt: 'Not only ___ late, but he also forgot the documents.',
        options: ['he was', 'was he', 'he did be', 'did he was'],
        correctIndex: 1,
        explanation: 'to be — само себе вспомогательное (Семья 1, модуль 4), инверсия без do: was he.',
      },
      {
        type: 'mcq',
        prompt: '___ any questions, feel free to email me. (формально, без if)',
        options: ['If you have', 'Should you have', 'Have you', 'You should have'],
        correctIndex: 1,
        explanation: 'Формальная инверсия вместо if you have → should you have.',
      },
      {
        type: 'mcq',
        prompt: '___ I known about the traffic, I would have left earlier.',
        options: ['If', 'Should', 'Had', 'Were'],
        correctIndex: 2,
        explanation: 'Инверсия вместо "If I had known" → Had I known.',
      },
      {
        type: 'fill',
        prompt: 'Перестрой с инверсией: "We rarely see such dedication."',
        answers: ['Rarely do we see such dedication'],
        explanation: 'rarely в начале + do-support (see — обычный глагол) → Rarely do we see.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-cleft',
    title: '10.2 Cleft Sentences',
    intro: `
      <p>Cleft sentences ("расщеплённые предложения") берут простое предложение и специально
      разбивают его на две части, чтобы вынести один элемент на первый план для эмфазы или
      контраста. Смысл тот же, что и в исходном простом предложении — меняется только то, что
      подчёркнуто.</p>

      <h4>It-cleft: It was/is X who/that…</h4>
      <p>Выносит вперёд конкретный элемент (подлежащее, дополнение, обстоятельство), которому
      придаётся особый акцент — часто в контексте исправления или контраста ("не он, а именно
      она").</p>
      <table>
        <thead><tr><th>Простое предложение</th><th>It-cleft (акцент на выделенном)</th></tr></thead>
        <tbody>
          <tr><td>John broke the vase.</td><td><strong>It was John who</strong> broke the vase. (не кто-то другой)</td></tr>
          <tr><td>We need more time, not money.</td><td><strong>It's time that</strong> we need, not money.</td></tr>
          <tr><td>I met her at the conference.</td><td><strong>It was at the conference that</strong> I met her.</td></tr>
        </tbody>
      </table>
      <div class="callout">После it was/is для людей чаще используют who, для всего остального —
      that (which реже, но возможно). Конструкция особенно естественна, когда нужно явно
      противопоставить один вариант другому: "It wasn't the price that put me off — it was the
      customer service."</div>

      <h4>Wh-cleft (what-cleft): What I need is…</h4>
      <p>Использует придаточное с what (или другое wh-слово: where/why) как подлежащее, а сама
      выделяемая информация идёт после be — в конце, на самом акцентном месте предложения.</p>
      <table>
        <thead><tr><th>Простое предложение</th><th>Wh-cleft</th></tr></thead>
        <tbody>
          <tr><td>I need a break.</td><td><strong>What I need is</strong> a break.</td></tr>
          <tr><td>This surprised me most.</td><td><strong>What surprised me most was</strong> how calm she stayed.</td></tr>
          <tr><td>She wants to travel more, not to buy things.</td><td><strong>What she wants</strong> is to travel more, not to buy things.</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>Зачем это нужно на практике:</strong> cleft sentences —
      естественный способ явно "заявить свою точку зрения" в аргументации, особенно полезен для
      IELTS Speaking Part 3 (обсуждение мнений) и Writing Task 2: вместо плоского "I think
      education is important" — "What really matters is access to quality education" звучит
      увереннее и структурированнее.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: '(Подчеркнуть, что именно Sarah, не кто-то другой, предложила эту идею) ___',
        options: ["Sarah was who suggested the idea.", "It was Sarah who suggested the idea.", "It Sarah was who suggested the idea."],
        correctIndex: 1,
        explanation: 'It-cleft: It was + выделяемый элемент + who/that.',
      },
      {
        type: 'mcq',
        prompt: '(Подчеркнуть "a break", а не что-то другое) I need a break. →',
        options: ["What I need a break is.", "What I need is a break.", "It is a break what I need."],
        correctIndex: 1,
        explanation: 'What-cleft: What + придаточное + is + выделяемый элемент в конце.',
      },
      {
        type: 'mcq',
        prompt: 'It wasn\'t the price ___ put me off — it was the service.',
        options: ['who', 'that', 'what', 'which who'],
        correctIndex: 1,
        explanation: 'Для неодушевлённого предмета (price) после it was/wasn\'t — that.',
      },
      {
        type: 'fill',
        prompt: 'Перестрой в what-cleft, выделяя "how calm she stayed": "This surprised me most."',
        answers: ['What surprised me most was how calm she stayed'],
        explanation: 'What + surprised me most + was + выделяемая часть в конце.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-subjunctive',
    title: '10.3 Сослагательное наклонение: wish, if only, would rather',
    intro: `
      <p>Группа конструкций для выражения желаний, сожалений и предпочтений — каждая со своей
      "смещённой" грамматикой относительно ожидаемого времени: форма не совпадает с реальным
      временем, о котором идёт речь, потому что весь смысл конструкции — в нереальности/желании
      изменить положение дел.</p>

      <h4>wish / if only — сожаление</h4>
      <table>
        <thead><tr><th>Формула</th><th>Смысл</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>wish + Past Simple</td><td>сожаление о настоящем</td><td>I wish I knew the answer. (но я не знаю сейчас)</td></tr>
          <tr><td>wish + Past Perfect</td><td>сожаление о прошлом</td><td>I wish I had studied harder. (но я не учился усерднее тогда)</td></tr>
          <tr><td>wish + would</td><td>раздражение чужим поведением сейчас</td><td>I wish you would stop interrupting me.</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>wish + would — только про других, не про себя.</strong>
      "I wish I would…" не используется для собственных действий — для себя всегда wish + Past
      Simple/Perfect. wish + would звучит как раздражённая просьба изменить чьё-то поведение,
      которое повторяется и мешает: "I wish it would stop raining", "I wish he would call back."</div>
      <p><code>if only</code> работает по тем же формулам, что wish, но звучит эмоциональнее/сильнее:
      "If only I had listened to you!" (более выразительно, чем "I wish I had listened to you").</p>

      <h4>would rather — предпочтение</h4>
      <p>Про своё собственное предпочтение — просто + инфинитив без to: "I'd rather stay home
      tonight." Но когда речь о предпочтении насчёт действия ДРУГОГО человека — нужен Past Simple,
      та же логика "смещённого времени", что и у wish:</p>
      <ul>
        <li>I'd rather <strong>stay</strong> home. (моё собственное действие — просто инфинитив)</li>
        <li>I'd rather <strong>you left</strong> now. (действие другого человека — Past Simple,
        хотя речь о настоящем/будущем)</li>
      </ul>

      <h4>it's (high) time — давно пора</h4>
      <p><code>it's time + Past Simple</code> — что-то должно уже происходить/произойти, но пока
      не происходит: "It's time we left." (нам уже пора уходить — а мы всё ещё здесь). "high" перед
      time усиливает срочность: "It's high time you apologized."</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'I wish I ___ the answer right now.',
        options: ['know', 'knew', 'had known', 'would know'],
        correctIndex: 1,
        explanation: 'Сожаление о настоящем → wish + Past Simple.',
      },
      {
        type: 'mcq',
        prompt: 'I wish I ___ harder for that exam last year.',
        options: ['studied', 'had studied', 'would study', 'study'],
        correctIndex: 1,
        explanation: 'Сожаление о прошлом → wish + Past Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'I wish you ___ interrupting me all the time!',
        options: ['stop', 'stopped', 'would stop', 'will stop'],
        correctIndex: 2,
        explanation: 'Раздражение чужим повторяющимся поведением → wish + would (не для себя, а про других).',
      },
      {
        type: 'mcq',
        prompt: "I'd rather you ___ now — it's getting late.",
        options: ['leave', 'left', 'would leave', 'to leave'],
        correctIndex: 1,
        explanation: 'Предпочтение насчёт действия другого человека → would rather + Past Simple.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Нам уже пора уходить» (используй it\'s time).',
        answers: ["It's time we left", "It's time to leave"],
        explanation: '"it\'s time + Past Simple" — что-то должно уже происходить, но ещё не происходит.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-gerund-infinitive',
    title: '10.4 Gerund vs Infinitive: глаголы, меняющие смысл',
    focus: 'medium',
    focusNote: 'Правило 22 в rules.md — remember/forget уже встречалось у ученика, здесь расширено на общий C1-паттерн.',
    intro: `
      <p>Некоторые глаголы допускают и герундий (V-ing), и инфинитив (to V) после себя — но с
      разным смыслом. Общий принцип для всей группы: <strong>герундий смотрит назад/на сам факт
      действия</strong> (действие уже произошло или переживается как процесс), а
      <strong>инфинитив смотрит вперёд/на цель</strong> (действие ещё предстоит или является целью
      другого действия).</p>

      <h4>remember / forget — помню ли сам факт vs не забыл сделать</h4>
      <table>
        <thead><tr><th>Конструкция</th><th>Смысл</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>remember/forget + V-ing</td><td>помню/не помню сам факт, что что-то делал (действие уже случилось)</td><td>I don't remember sending this message.</td></tr>
          <tr><td>remember/forget + to V</td><td>не забыл выполнить действие (действие ещё предстоит или должно было произойти)</td><td>Please remember to send the message.</td></tr>
        </tbody>
      </table>
      <div class="callout warn">Конструкция "remember that + придаточное" не ошибка, но
      громоздкая — естественный C1-вариант почти всегда идёт через герундий: не "I don't remember
      that I have sent this message", а <strong>I don't remember sending this message</strong>.</div>

      <h4>stop — прекратить делать vs остановиться, чтобы сделать</h4>
      <table>
        <tbody>
          <tr><td>stop + V-ing</td><td>прекратить занятие (сам процесс останавливается)</td><td>He stopped smoking last year.</td></tr>
          <tr><td>stop + to V</td><td>остановиться, ЧТОБЫ сделать что-то другое (to V — цель остановки, не то, что прекращается)</td><td>He stopped to smoke a cigarette. (шёл, остановился — и закурил)</td></tr>
        </tbody>
      </table>

      <h4>try — эксперимент vs усилие</h4>
      <table>
        <tbody>
          <tr><td>try + V-ing</td><td>попробовать способ, посмотреть, что получится (эксперимент)</td><td>Try restarting the computer — maybe that will fix it.</td></tr>
          <tr><td>try + to V</td><td>прилагать усилие к чему-то трудному, не факт что получится</td><td>I tried to open the door, but it was locked.</td></tr>
        </tbody>
      </table>

      <h4>regret — сожалеть о сделанном vs формальное объявление</h4>
      <table>
        <tbody>
          <tr><td>regret + V-ing</td><td>сожалеть о прошлом действии</td><td>I regret telling him the truth.</td></tr>
          <tr><td>regret + to say/inform/announce</td><td>формальная вводная фраза перед неприятной новостью, которую только предстоит сказать</td><td>We regret to inform you that your application was unsuccessful.</td></tr>
        </tbody>
      </table>
    `,
    mistakes: [
      { wrong: '~~I don\'t remember that I have sent this message~~', right: "I don't remember sending this message", why: 'remember + V-ing = помню ли сам факт, что что-то делал; конструкция "remember that + придаточное" не ошибка, но громоздкая — естественный вариант через герундий.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'I don\'t remember ___ this message — did I really send it?',
        options: ['to send', 'sending', 'send', 'sent'],
        correctIndex: 1,
        explanation: 'Помню ли сам факт прошлого действия → remember + V-ing.',
      },
      {
        type: 'mcq',
        prompt: 'Please remember ___ the door when you leave.',
        options: ['locking', 'to lock', 'lock', 'locked'],
        correctIndex: 1,
        explanation: 'Не забыть выполнить предстоящее действие → remember + to V.',
      },
      {
        type: 'mcq',
        prompt: 'He was walking to work, but he stopped ___ a coffee.',
        options: ['buying', 'to buy', 'buy', 'bought'],
        correctIndex: 1,
        explanation: 'Остановился, чтобы сделать что-то другое → stop + to V (цель остановки).',
      },
      {
        type: 'mcq',
        prompt: 'She finally stopped ___ at midnight — she was exhausted.',
        options: ['to work', 'working', 'work', 'worked'],
        correctIndex: 1,
        explanation: 'Прекратила само занятие (работу) → stop + V-ing.',
      },
      {
        type: 'mcq',
        prompt: 'If the printer isn\'t working, try ___ it off and on again.',
        options: ['to turn', 'turning', 'turn', 'turned'],
        correctIndex: 1,
        explanation: 'Эксперимент — попробовать способ, посмотреть, сработает ли → try + V-ing.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы вынуждены с сожалением сообщить вам, что рейс отменён» (формальная вводная фраза).',
        answers: ['We regret to inform you that the flight has been cancelled', 'We regret to inform you that the flight is cancelled'],
        explanation: 'Формальное объявление неприятной новости → regret + to inform.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-causative',
    title: '10.5 Causative Form: have/get something done',
    intro: `
      <p>Причинно-побудительная конструкция показывает, что действие для тебя выполнил кто-то
      другой — ты организовал/заказал это, но не делал сам. В русском это часто вообще не
      выражено отдельной грамматикой ("я подстригся" — не всегда ясно, сам или у парикмахера), в
      английском разница обязательна.</p>

      <h4>Формула: have/get + object + V3</h4>
      <table>
        <thead><tr><th>Сам сделал</th><th>Организовал, чтобы сделали для тебя</th></tr></thead>
        <tbody>
          <tr><td>I repaired my car. (сам, своими руками)</td><td>I <strong>had</strong> my car <strong>repaired</strong>. (заплатил механику)</td></tr>
          <tr><td>I cut my hair. (сам себя постриг)</td><td>I <strong>had</strong> my hair <strong>cut</strong>. (сходил в парикмахерскую)</td></tr>
          <tr><td>She painted the house.</td><td>She <strong>got</strong> the house <strong>painted</strong>.</td></tr>
        </tbody>
      </table>
      <div class="callout warn">Смысл принципиально разный: "I repaired my car" ≠ "I had my car
      repaired" — в первом случае ты сам механик, во втором — заказчик услуги. Путаница этих двух
      конструкций меняет, кто именно выполнил действие.</div>

      <h4>have vs get</h4>
      <p>Обе конструкции работают одинаково грамматически, но <code>get</code> более разговорный
      и часто подчёркивает усилие или сложность в том, чтобы это организовать: "I finally got the
      boiler fixed" (намекает, что это было непросто устроить). <code>have</code> — нейтральнее,
      более уместен в деловом/формальном регистре.</p>

      <h4>Кто именно сделал — активный инфинитив вместо V3</h4>
      <p>Если нужно назвать КОНКРЕТНОГО исполнителя, а не просто "кто-то сделал это для меня" —
      используется другая конструкция: <code>have + somebody + V (базовая форма, без to)</code>,
      активный залог, потому что теперь исполнитель явно назван как подлежащее действия внутри
      конструкции.</p>
      <ul>
        <li>I had the mechanic <strong>fix</strong> my car. (не "fixed" — исполнитель назван,
        конструкция активная)</li>
        <li>She had her assistant <strong>book</strong> the tickets.</li>
      </ul>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'I don\'t cut my own hair — I ___ it ___ at a salon.',
        options: ['have / cut', 'have / cutting', 'get / to cut', 'have / cuts'],
        correctIndex: 0,
        explanation: 'Причинно-побудительная конструкция: have + object + V3 (cut — уже V3 для этого глагола).',
      },
      {
        type: 'mcq',
        prompt: 'We finally ___ the roof ___ before winter. (сложно было организовать)',
        options: ['got / repaired', 'had / repair', 'got / repairing', 'had / repairing'],
        correctIndex: 0,
        explanation: 'get подчёркивает усилие в организации; V3 (repaired), не V-ing.',
      },
      {
        type: 'mcq',
        prompt: 'I had the mechanic ___ my car. (назван конкретный исполнитель)',
        options: ['fixed', 'to fix', 'fix', 'fixing'],
        correctIndex: 2,
        explanation: 'С названным исполнителем — активный инфинитив без to (базовая форма), не V3.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы наняли дизайнера, чтобы он оформил офис» (заказали услугу, не сделали сами; используй have или get + V3).',
        answers: ['We had the office designed', 'We got the office designed'],
        explanation: 'have/get + object + V3 — организовали, чтобы сделал кто-то другой.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-linking-words',
    title: '10.6 Продвинутые связки: however, whereas, despite',
    intro: `
      <p>Для IELTS Writing Task 2 и любого формального эссе связность (cohesion) — отдельный
      критерий оценки, и один и тот же простой "but" на весь текст сильно её занижает. Ниже —
      набор связок по функциям, с грамматическими различиями внутри каждой группы, которые часто
      путают.</p>

      <h4>Контраст</h4>
      <table>
        <thead><tr><th>Слово</th><th>Грамматика</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>however</td><td>отдельное предложение или после точки с запятой; всегда с запятой после</td><td>The plan looked solid. <strong>However</strong>, it failed within a month.</td></tr>
          <tr><td>nevertheless / nonetheless</td><td>то же, что however, но подчёркивает "несмотря на это всё равно"</td><td>The odds were low. <strong>Nevertheless</strong>, she succeeded.</td></tr>
          <tr><td>whereas / while</td><td>внутри одного предложения, соединяет два противопоставленных факта</td><td>City rents keep rising, <strong>whereas</strong> rural prices remain stable.</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>despite/in spite of vs although — классическая путаница.</strong>
      Оба про контраст, но требуют РАЗНОЙ структуры после себя:
      <ul>
        <li><strong>despite / in spite of</strong> + существительное или V-ing (НЕ полное
        придаточное с подлежащим и глаголом): "Despite the rain, we went for a walk." / "Despite
        working overtime, he missed the deadline."</li>
        <li><strong>although / even though</strong> + полное придаточное (подлежащее + глагол):
        "Although it was raining, we went for a walk."</li>
      </ul>
      Частая ошибка — смешать их: <s>despite it was raining</s> (despite не может стоять перед
      полным придаточным) или <s>although the rain</s> (although не может стоять перед голым
      существительным без глагола).</div>

      <h4>Условие</h4>
      <ul>
        <li><strong>provided that / providing that</strong> = "при условии что", синоним if в
        формальном стиле: "You can leave early, provided that you finish the report."</li>
        <li><strong>unless</strong> = "если не", встроенное отрицание — нельзя добавлять not
        внутри той же условной части: "Unless you hurry, you'll miss the train" (не "unless you
        don't hurry" — двойное отрицание).</li>
      </ul>

      <h4>Добавление и следствие</h4>
      <ul>
        <li><strong>moreover / furthermore / in addition</strong> — добавляют ещё один аргумент,
        обычно в начале нового предложения.</li>
        <li><strong>therefore / consequently / as a result</strong> — вводят логическое следствие
        из только что сказанного.</li>
      </ul>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'The team worked overtime. ___, they still missed the deadline.',
        options: ['Despite', 'However', 'Whereas', 'Provided that'],
        correctIndex: 1,
        explanation: 'Контраст между отдельными предложениями, с запятой после → However.',
      },
      {
        type: 'mcq',
        prompt: 'Sales grew in Europe, ___ they declined in Asia.',
        options: ['however', 'despite', 'whereas', 'although'],
        correctIndex: 2,
        explanation: 'Соединяет два противопоставленных факта в одном предложении → whereas.',
      },
      {
        type: 'mcq',
        prompt: '___ the heavy rain, the match continued.',
        options: ['Although', 'Despite', 'Whereas', 'Unless'],
        correctIndex: 1,
        explanation: 'Перед существительным (rain, без глагола) → despite, не although.',
      },
      {
        type: 'mcq',
        prompt: '___ it was raining heavily, the match continued.',
        options: ['Despite', 'In spite of', 'Although', 'Provided that'],
        correctIndex: 2,
        explanation: 'Перед полным придаточным (it was raining) → although, не despite.',
      },
      {
        type: 'mcq',
        prompt: 'You can join the team, ___ you\'re available on weekends.',
        options: ['unless', 'despite', 'provided that', 'however'],
        correctIndex: 2,
        explanation: '"при условии что" → provided that.',
      },
      {
        type: 'fill',
        prompt: 'Соедини правильной связкой: «Ты опоздаешь, если не поторопишься» (используй unless, без двойного отрицания).',
        answers: ["You'll be late unless you hurry", "You will be late unless you hurry"],
        explanation: 'unless уже содержит отрицание — don\'t внутри той же условной части не нужен.',
      },
    ],
  },

  {
    module: 'Модуль 10. Продвинутый C1',
    id: 'advanced-emphatic-do',
    title: "10.7 Emphatic do / Ellipsis: So do I / Neither did she",
    intro: `
      <h4>Emphatic do — усиление в утвердительном предложении</h4>
      <p>do/does/did обычно нужен только для вопросов и отрицаний (do-support, модуль 4) — но
      может появиться и в утверждении, когда на него падает ударение, чтобы подчеркнуть контраст
      с сомнением или отрицанием, прозвучавшим ранее.</p>
      <ul>
        <li>"You don't seem to like the plan." — "I <strong>do</strong> think it's a good idea,
        I'm just tired." (настойчивое опровержение сомнения)</li>
        <li>"Nobody believes him." — "I <strong>do</strong> believe him." (контрастное
        подтверждение)</li>
      </ul>
      <div class="callout">На письме это часто передаётся курсивом или капсом на do; в устной
      речи — интонационным ударением именно на do, а не на смысловой глагол.</div>

      <h4>Краткое согласие через эллипсис: so / neither</h4>
      <p>Вместо того чтобы повторять целиком чужую фразу, согласие выражается коротким оборотом,
      который "одалживает" вспомогательный глагол из исходной фразы.</p>
      <table>
        <thead><tr><th>Исходная фраза</th><th>Согласие</th><th>Формула</th></tr></thead>
        <tbody>
          <tr><td>"I love coffee."</td><td>"<strong>So do I</strong>."</td><td>So + вспомогательный + подлежащее (согласие с ПОЛОЖИТЕЛЬНЫМ утверждением)</td></tr>
          <tr><td>"I don't like coffee."</td><td>"<strong>Neither do I</strong>." / "<strong>Nor do I</strong>."</td><td>Neither/Nor + вспомогательный + подлежащее (согласие с ОТРИЦАТЕЛЬНЫМ утверждением)</td></tr>
          <tr><td>"She's tired."</td><td>"So am I."</td><td>Вспомогательный подстраивается под подлежащее исходной фразы (is → am для I)</td></tr>
          <tr><td>"He can't swim."</td><td>"Neither can I."</td><td>Вспомогательный "одалживается" из исходной фразы (can)</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Порядок слов фиксирован — без инверсии в русском
      варианте.</strong> После so/neither/nor всегда вспомогательный, ЗАТЕМ подлежащее (как в
      вопросе): "So do I", не <s>So I do</s>. Обратный порядок ("I do too", "I don't either") —
      тоже верный, но другая конструкция, с too/either в конце, без so/neither в начале.</div>

      <h4>too / either — тот же смысл, другая структура</h4>
      <ul>
        <li>"I love coffee." — "<strong>So do I</strong>." = "I do <strong>too</strong>." (оба
        верны, so-вариант чуть более "разговорно-эмфатичный", too-вариант нейтральнее)</li>
        <li>"I don't like coffee." — "<strong>Neither do I</strong>." = "I don't
        <strong>either</strong>." (either для отрицания — never too)</li>
      </ul>
      <p>Ключевая ошибка — смешать элементы двух структур: <s>So I do too</s> или <s>I do so</s>
      не существуют; либо "So do I", либо "I do too" — целиком одна структура или целиком другая.</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: '"You don\'t seem convinced." — "No, I ___ think it\'s a great idea."',
        options: ['am', 'do', 'did', 'will'],
        correctIndex: 1,
        explanation: 'Emphatic do опровергает прозвучавшее сомнение в утвердительном предложении.',
      },
      {
        type: 'mcq',
        prompt: '"I love coffee." — "___"',
        options: ['So I do.', 'So do I.', 'I do so.', 'Do I so.'],
        correctIndex: 1,
        explanation: 'so + вспомогательный + подлежащее, фиксированный порядок.',
      },
      {
        type: 'mcq',
        prompt: '"I don\'t like coffee." — "___"',
        options: ['So don\'t I.', 'Neither do I.', 'Neither I do.', 'So do I.'],
        correctIndex: 1,
        explanation: 'Согласие с отрицанием → neither/nor + вспомогательный + подлежащее.',
      },
      {
        type: 'mcq',
        prompt: '"She\'s exhausted." — "___"',
        options: ['So am I.', 'So do I.', 'So I am.', 'So is I.'],
        correctIndex: 0,
        explanation: 'Вспомогательный подстраивается под своё подлежащее: is → am для I.',
      },
      {
        type: 'fill',
        prompt: 'Перефразируй через too (не so): "I love coffee." — "So do I." → "I ___"',
        answers: ['I do too', 'I love it too', 'I do, too'],
        explanation: 'too-вариант — обратный порядок, без инверсии, too в конце.',
      },
    ],
  }
);
