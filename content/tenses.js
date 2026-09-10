window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 1. Времена',
    id: 'tenses-overview',
    title: '1.1 Общая модель: 2 оси вместо 12 правил',
    intro: `
      <p>12 времён английского — это не 12 отдельных вещей для запоминания, а пересечение
      <strong>двух независимых осей</strong>. Выбор по одной оси никак не влияет на выбор по
      другой — их можно решать по очереди, а не искать сразу "то самое время целиком".</p>
      <ul>
        <li><strong>Ось 1 — КОГДА?</strong> Present / Past / Future. Просто точка на временной
        шкале.</li>
        <li><strong>Ось 2 — КАК я смотрю на действие?</strong> Simple / Continuous / Perfect /
        Perfect Continuous. Это про ракурс, а не про время: факт/точка (Simple), процесс в
        развитии (Continuous), взгляд назад с более поздней точки отсчёта (Perfect), процесс,
        длящийся ДО этой точки отсчёта (Perfect Continuous).</li>
      </ul>
      <p>Практический смысл: если сомневаешься — отвечай на два вопроса ПО ОТДЕЛЬНОСТИ. Сначала
      "когда?" (даёт Present/Past/Future), потом "это факт, процесс, или взгляд назад с более
      поздней точки?" (даёт аспект). Пересечение и есть нужная клетка таблицы.</p>

      <h4>Один и тот же глагол в четырёх режимах (ось 2 отдельно, время зафиксировано на Past)</h4>
      <table>
        <thead><tr><th>Режим</th><th>Что хочу сказать</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>Simple</td><td>факт / событие — просто произошло</td><td>I worked</td></tr>
          <tr><td>Continuous</td><td>процесс, разворачивающийся в конкретный момент</td><td>I was working</td></tr>
          <tr><td>Perfect</td><td>уже произошло / завершилось К этой точке отсчёта</td><td>I had worked</td></tr>
          <tr><td>Perfect Continuous</td><td>процесс длился ДО этой точки отсчёта</td><td>I had been working</td></tr>
        </tbody>
      </table>
      <p>Эта же четвёрка режимов один в один повторяется для Present и Future — меняется только
      "двигатель" (am/is/are ↔ have/has ↔ will), а смысл режима не меняется. Аспект стоит выучить
      один раз как отдельную ось, а не 12 раз.</p>

      <h4>Вся система на одной странице</h4>
      <table>
        <thead><tr><th></th><th>Simple</th><th>Continuous</th><th>Perfect</th><th>Perfect Continuous</th></tr></thead>
        <tbody>
          <tr><td><strong>Present</strong></td><td>V(s) — привычка, факт</td><td>am/is/are + V-ing — сейчас, временно</td><td>have/has + V3 — связь с настоящим</td><td>have/has been + V-ing — процесс до сих пор</td></tr>
          <tr><td><strong>Past</strong></td><td>V2/-ed — законченный факт</td><td>was/were + V-ing — процесс в прошлом</td><td>had + V3 — раньше другого прошлого</td><td>had been + V-ing — процесс до той точки в прошлом</td></tr>
          <tr><td><strong>Future</strong></td><td>will + V — решение/прогноз</td><td>will be + V-ing — процесс в будущем</td><td>will have + V3 — завершится к моменту</td><td>will have been + V-ing — процесс до точки в будущем</td></tr>
        </tbody>
      </table>
      <p>Общий принцип на все 12 клеток: <strong>Simple = факт/точка</strong>,
      <strong>Continuous = процесс/незавершённость</strong>, <strong>Perfect = связь с более
      поздней точкой отсчёта</strong> — Perfect всегда смотрит из "камеры", установленной в
      настоящем/прошлом/будущем, назад — на то, что случилось раньше этой камеры и всё ещё имеет
      значение оттуда.</p>

      <div class="callout">Следующие главы разбирают каждую ось подробно. Начни с
      <strong>«Три корзины»</strong> (1.5), если хочешь сразу практический чек-лист — остальные
      главы дают теорию, которая за этим чек-листом стоит.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'Какая ось отвечает за выбор между Simple и Continuous?',
        options: ['Ось 1 — когда (Present/Past/Future)', 'Ось 2 — как я смотрю на действие (аспект)', 'Обе оси одновременно, отдельно решить нельзя'],
        correctIndex: 1,
        explanation: 'Simple/Continuous/Perfect/Perfect Continuous — это ось аспекта (ось 2), она не зависит от того, Present это, Past или Future.',
      },
      {
        type: 'mcq',
        prompt: '"I had worked" — какой аспект (ось 2) здесь использован?',
        options: ['Simple', 'Continuous', 'Perfect', 'Perfect Continuous'],
        correctIndex: 2,
        explanation: 'had + V3 = Perfect: взгляд назад с точки отсчёта в прошлом.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-present',
    title: '1.2 Present: Simple vs Continuous vs Perfect (Continuous)',
    focus: 'medium',
    focusNote: 'Правила 4, 5, 11, 13 в rules.md — эта развилка встречается почти в каждом тексте.',
    intro: `
      <h4>Present Simple</h4>
      <p><strong>Когда:</strong> привычка, регулярность, факт, расписание, общая истина. Не про
      "сейчас" — про "вообще, всегда, обычно".</p>
      <p><strong>Сигналы:</strong> usually, often, always, every day/week, on Mondays, sometimes,
      never, as a rule.</p>
      <p><strong>Формула:</strong> I/you/we/they + V. He/she/it + V<strong>s</strong>.</p>
      <div class="callout warn"><strong>Ловушка he/she/it (Правило 11):</strong> he/she/it
      забирают себе -s/does/has, а смысловой глагол после них возвращается к базовой форме —
      "he doesn't rest" (не rests), "she works" (не work).</div>
      <p><strong>Глаголы состояния</strong> — know, want, like, believe, own, need, understand,
      belong, seem, love, hate — описывают состояние, а не действие, и <strong>никогда</strong>
      не стоят в Continuous, даже когда речь про "сейчас": "I want it now" (не <s>I'm wanting</s>),
      "I've known her for ten years" (не <s>I've been knowing</s>).</p>

      <h4>Present Continuous</h4>
      <p><strong>Когда:</strong> три случая — (1) происходит прямо сейчас, в эту секунду;
      (2) временное состояние в ограниченный период (эта неделя, этот месяц), даже не в данную
      секунду; (3) договорённость/расписание на будущее.</p>
      <p><strong>Сигналы:</strong> now, right now, at the moment, currently, today, this
      week/month, still, Look! Listen!</p>
      <p><strong>Тест на стыке Simple/Continuous:</strong> это происходит всегда/обычно (факт о
      жизни) или именно сейчас/в этот ограниченный период (временность)? Если сомневаешься —
      спроси себя "а через полгода это так же будет?". Да → Simple. Нет, временно → Continuous.</p>
      <ul>
        <li>I work at an office. (факт — где ты вообще работаешь)</li>
        <li>I'm working from home today. (временно, именно сегодня)</li>
      </ul>

      <h4>Present Perfect (Continuous)</h4>
      <p>Точка отсчёта — сейчас. Present Perfect Simple: (1) опыт за всю жизнь (ever, never,
      before) — "I have been to Paris"; (2) недавнее действие с результатом сейчас — "I've lost
      my keys" (= у меня их нет сейчас); (3) незакончившийся период (for/since) — "I've lived
      here for five years".</p>
      <p>Present Perfect Continuous — та же точка отсчёта, но акцент на процессе/длительности, а
      не на результате: "I've finished the report" (готово) vs "I've been working on the report
      for two hours" (важен процесс, может быть ещё не готово).</p>

      <h4>Тест из 3 шагов: Perfect Simple или Perfect Continuous?</h4>
      <ol>
        <li><strong>Это глагол состояния</strong> (know, want, believe, own, understand, love,
        hate, need, belong)? → всегда только <strong>Simple</strong>. "I've known her for ten
        years" ✅, не <s>I've been knowing</s> — так нельзя никогда.</li>
        <li><strong>Можно посчитать "сколько раз/штук"?</strong> → <strong>Simple</strong>.
        "I've written three emails today" (посчитано) vs "I've been writing emails all morning"
        (без счёта, просто процесс).</li>
        <li><strong>Важен сам процесс, возможно не закончено, или это объясняет что-то заметное
        сейчас</strong> ("почему ты уставший?")? → <strong>Continuous</strong>. "Why are you so
        tired? — I've been running."</li>
      </ol>
      <p>Если ничего из этого явно не работает — обычный глагол действия + for/since, без счёта и
      без "объяснения состояния" — часто годятся оба варианта, разница едва уловима: "I've worked
      here for three years" (факт-резюме) vs "I've been working here for three years" (живой
      процесс, чуть естественнее в разговоре).</p>
    `,
    mistakes: [
      { wrong: '~~usually I came~~', right: 'I usually come', why: 'Past Simple вместо Present Simple — маркер привычки (usually) спутан с формой глагола.' },
      { wrong: '~~today I work at home~~', right: "today I'm working from home", why: '"today" = временный, ограниченный период → Continuous, не привычка.' },
      { wrong: '~~I wait for it for three days~~', right: "I've been waiting for it for three days", why: '`for` = сигнал незакончившегося периода → только Perfect (Continuous), Simple с `for` невозможен.' },
      { wrong: '~~I washed a car~~ (на «почему у тебя грязные руки?»)', right: "I've been fixing the car", why: 'Видимое состояние сейчас объясняется недавним процессом → Present Perfect Continuous, не отдельный факт в прошлом.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'My brother ___ at a bank.',
        options: ['work', 'works', 'is working', 'has worked'],
        correctIndex: 1,
        explanation: 'Факт о жизни (где вообще работает), he/she/it → -s. Present Simple.',
      },
      {
        type: 'mcq',
        prompt: 'Look! The bus ___.',
        options: ['comes', 'is coming', 'has come', 'came'],
        correctIndex: 1,
        explanation: '"Look!" — происходит на глазах в момент речи → Present Continuous.',
      },
      {
        type: 'mcq',
        prompt: 'Why are your clothes dirty? — I ___ the car.',
        options: ['fixed', 'fix', "have been fixing", 'am fixing'],
        correctIndex: 2,
        explanation: 'Заметное состояние сейчас объясняется недавним процессом → Present Perfect Continuous.',
      },
      {
        type: 'mcq',
        prompt: "I've ___ her for ten years.",
        options: ['known', 'been knowing', 'know', 'been known'],
        correctIndex: 0,
        explanation: '`know` — глагол состояния, Continuous с ним невозможен никогда, даже с for.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Она ещё не ответила на моё сообщение» (используй yet).',
        answers: ["She hasn't answered my message yet", "She has not answered my message yet"],
        explanation: 'Present Perfect + yet: ожидалось, но не случилось к этому моменту.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-present-perfect-vs-past',
    title: '1.3 Present Perfect vs Past Simple — развилка №1',
    focus: 'high',
    focusNote: 'Правило 30 в rules.md — исторически главная путаница по временам, статус пока только 🟡.',
    intro: `
      <p>Эта развилка решает 90% путаницы между Present Perfect и Past Simple.</p>
      <div class="callout warn"><strong>Правило:</strong> если есть конкретное законченное время
      в прошлом (yesterday, in 2015, last week, at 5pm, when I was 10) — Perfect использовать
      <strong>нельзя</strong>, только Past Simple. Perfect с конкретным прошлым временем
      грамматически несовместим.</div>
      <ul>
        <li>"I saw that movie yesterday." ✅ (конкретное время → Past Simple)</li>
        <li>"I've seen that movie." ✅ (время не указано, важно "видел ли вообще, и это важно
        сейчас")</li>
        <li>"I have seen that movie yesterday." ❌ — так нельзя никогда.</li>
      </ul>

      <h4>Где это ломается сильнее всего: маркер-год</h4>
      <p><code>in 2020</code> часто НЕ считывается как точка в прошлом — читается как начало
      периода, по аналогии с <code>since 2020</code>, и тянет за собой Perfect. Но год в
      конструкции "in + год" — это ровно такая же закрытая точка, как yesterday или last week:</p>
      <ul>
        <li>"We <strong>moved</strong> here <strong>in</strong> 2020." — момент, закончилось →
        Past Simple.</li>
        <li>"We'<strong>ve been living</strong> here <strong>since</strong> 2020." — точка
        отсчёта, длится по сей день → Present Perfect Continuous.</li>
      </ul>
      <p>Разница только в предлоге (<code>in</code> = точка, <code>since</code> = точка отсчёта
      для периода, тянущегося до сих пор) — само число года ничего не решает само по себе.</p>

      <h4>Как сделать выбор интуитивным, а не "по формуле"</h4>
      <p>Perfect грамматически — это ПРЕЗЕНТ (have/has), даже когда говорит о прошлом действии.
      Он всегда на самом деле про текущую ситуацию, просто объясняет её через более раннее
      событие. Поэтому спрашивай не "когда это было", а <strong>"я сейчас говорю про ТЕКУЩЕЕ
      положение дел, или рассказываю ИСТОРИЮ про момент в прошлом?"</strong></p>
      <ul>
        <li>"I've lost my keys." — волнует, что их нет СЕЙЧАС (ответ на "в чём проблема?").</li>
        <li>"I lost my keys yesterday (but found them)." — просто эпизод-история, фокус на самом
        моменте.</li>
      </ul>

      <h4>Приём "заголовок → детали"</h4>
      <p>Так носители реально строят рассказ, особенно устно: начинают с Perfect как со свежей
      новости, а затем естественно съезжают в Simple, добавляя подробности — потому что как
      только называешь время, Perfect уже физически невозможен.</p>
      <div class="callout">"I've broken my phone. I dropped it in the pool yesterday."<br>
      (заголовок, важно сейчас) → (деталь: когда и как — уже просто история)</div>
      <p>Полезно для монологов/IELTS Speaking: не пытайся решить всё предложение целиком заранее
      — начни с Perfect, а переключение в Simple произойдёт само, как только добавишь
      подробность.</p>

      <h4>Сигнал "уже/до сих пор" в русском</h4>
      <p>Если в переводимой фразе по-русски есть "уже", "до сих пор", "за последние X" — почти
      всегда нужен Present Perfect (Continuous), а не Present Simple, даже если по форме русский
      глагол выглядит как настоящее время ("работаю", "жду", "помогает").</p>
    `,
    mistakes: [
      { wrong: '~~We have been moving here in 2020~~', right: 'We moved here in 2020', why: 'Год-маркер прочитан как начало периода (по аналогии с since), хотя `in 2020` — закрытая точка → нужен Past Simple.' },
      { wrong: '~~I work in IT company three years~~', right: "I've been working at an IT company for three years", why: 'Действие началось в прошлом и длится до сих пор (`уже ... года`) → Present Perfect Continuous, не Present Simple.' },
      { wrong: '~~I have tired after the long work day~~', right: 'I was tired', why: 'Конкретное прошлое состояние, не актуальное именно сейчас → Past Simple, не Perfect.' },
      { wrong: '~~yesterday he had cooked dinner~~', right: 'yesterday he cooked dinner', why: 'Один факт с явным маркером времени не требует Past Perfect — только Past Simple (см. главу 1.4).' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'We ___ to this city in 2015.',
        options: ['have moved', 'moved', 'have been moving', 'move'],
        correctIndex: 1,
        explanation: '`in 2015` — конкретная закрытая точка в прошлом → Past Simple, Perfect невозможен.',
      },
      {
        type: 'mcq',
        prompt: "I ___ that movie. I don't want spoilers.",
        options: ['saw', 'have seen', 'was seeing', 'see'],
        correctIndex: 1,
        explanation: 'Время не указано — важен факт "видел ли вообще" и это влияет на текущую ситуацию (не хочу спойлеров) → Present Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'She ___ here since March.',
        options: ['works', 'worked', "has been working", "was working"],
        correctIndex: 2,
        explanation: '`since March` — точка отсчёта периода, тянущегося до сих пор → Present Perfect Continuous.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Я потерял ключи» (важно, что их нет прямо сейчас — не рассказ-эпизод).',
        answers: ["I've lost my keys", 'I have lost my keys'],
        explanation: 'Недавнее действие с результатом сейчас, время не названо → Present Perfect.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы переехали в этот город в 2015 году».',
        answers: ['We moved to this city in 2015'],
        explanation: '`in 2015` — закрытая точка в прошлом → Past Simple, не Present Perfect.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-past',
    title: '1.4 Past: Simple vs Continuous vs Perfect (Continuous)',
    focus: 'medium',
    focusNote: 'Правила 16 и 32 в rules.md — Past Perfect то пропускается, то ставится там, где не нужен.',
    intro: `
      <h4>Past Simple</h4>
      <p><strong>Когда:</strong> законченное действие в конкретный, названный или подразумеваемый
      момент прошлого. Момент прошёл, к настоящему это не привязано.</p>
      <p><strong>Сигналы:</strong> yesterday, last week/month/year, in 2020, ago, at 5pm, when I
      was 10.</p>
      <p><strong>Формула:</strong> правильные глаголы + -ed (worked, cleaned); неправильные — по
      списку форм (went, saw, bought, wrote…). Не забывай окончание -ed у правильных глаголов —
      время может быть выбрано верно, а форма недописана (<s>switch</s> вместо switched).</p>

      <h4>Past Continuous</h4>
      <p><strong>Когда:</strong> три случая — (1) процесс, который шёл в конкретный момент
      прошлого ("в 5 часов вчера я готовил ужин" — сам процесс, не факт что приготовил); (2) фон
      для другого, более короткого действия, которое его прервало; (3) два параллельных процесса
      одновременно.</p>
      <p><strong>Формула:</strong> was (I/he/she/it) / were (you/we/they) + V-ing.</p>
      <ul>
        <li>I was cooking dinner when he called. (готовка — фон, звонок — короткое прерывающее
        действие)</li>
        <li>While I was working, the power went out. (длинный процесс на фоне, короткое событие
        внутри него)</li>
      </ul>
      <div class="callout"><strong>Тест на стыке Simple/Continuous в прошлом:</strong> что из двух
      действий длинное (фон), а что короткое (перебивает фон)? Короткое = Past Simple,
      фоновое = Past Continuous.
      <br>"When he called, I was cooking." (звонок застал меня в процессе)
      <br>"When he called, I cooked dinner." (сначала звонок, ПОТОМ, как следствие — я приготовил;
      два последовательных факта)</div>

      <h4>Past Perfect (Continuous)</h4>
      <p>Точка отсчёта — момент <strong>в прошлом</strong>, не сейчас. Показывает, что одно
      прошлое событие случилось РАНЬШЕ другого прошлого события — "прошлое прошлого".</p>
      <p>"When I arrived, the meeting had already started." — приход = точка отсчёта (прошлое);
      начало встречи = ещё раньше неё → Past Perfect.</p>
      <p>Past Perfect Continuous — то же самое, но акцент на длительности до той прошлой точки:
      "I had been working on the project for two weeks when it got cancelled."</p>

      <div class="callout warn"><strong>Главная ловушка (Правило 16): Past Perfect нужен ТОЛЬКО
      когда в предложении ДВА действия в прошлом и важен их порядок.</strong> Если факт один и
      есть явный маркер времени (yesterday, last week) — Past Perfect не нужен вообще, только
      Past Simple.
      <ul>
        <li><s>Yesterday he had cooked dinner</s> ❌ — один факт, один маркер → <strong>he cooked
        dinner</strong> ✅</li>
        <li>"When I arrived, he had already cooked dinner." ✅ — здесь ДВА события (мой приход и
        его готовка ДО этого) → Past Perfect оправдан.</li>
      </ul></div>

      <h4>Обратная ошибка: Past Perfect там, где не нужен (Правило 32)</h4>
      <p>Интенсивная тренировка Past Perfect часто даёт гиперкоррекцию: конструкция начинает
      просачиваться в обычный последовательный рассказ, где нужен просто Past Simple.</p>
      <div class="callout"><strong>Каркас нормального нарратива:</strong>
      <br>Основная цепочка событий → <strong>Past Simple</strong> (came, asked, explained, sent)
      <br>Что происходило фоном в это же время → <strong>Past Continuous</strong> (while they
      were discussing…)
      <br>Что случилось раньше точки рассказа → <strong>Past Perfect</strong> (had already
      started, had sent)</div>
      <p><strong>Быстрая проверка:</strong> можно ли вставить «уже к тому моменту» / «до этого»?
      Да → had + V3. Нет, просто «потом», «затем» → Past Simple.</p>
      <p><strong>Важно:</strong> ошибочный тест «сначала X, потом Y → had» не работает — он верен
      для ЛЮБОЙ пары последовательных событий, поэтому не различает ничего. Правильный тест:
      <strong>рассказ идёт вперёд → Past Simple. Рассказ прыгнул назад (упомянул то, что было
      раньше уже названного) → had.</strong></p>
      <ul>
        <li>We <strong>agreed</strong> on a plan and I <strong>got</strong> to work. — рассказано
        в том порядке, в каком произошло → рассказ идёт вперёд, Past Simple дважды.</li>
        <li>It turned out that the client <strong>had changed</strong> the requirements. — то,
        что «выяснилось» — по определению случилось раньше момента выяснения → рассказ прыгнул
        назад, had.</li>
      </ul>

      <div class="callout warn"><strong>Когда лишний и пропущенный had встречаются в одном
      предложении.</strong> Оба симптома правила 16/32 — это одна и та же путаница, и иногда она
      видна в одной фразе сразу:
      <br>❌ <s>When I had arrived, it turned out that I forgot my phone at home.</s>
      <br>✅ When I <strong>arrived</strong>, it turned out that I <strong>had forgotten</strong>
      my phone at home.
      <br>«Приехал» — просто точка отсчёта рассказа (Past Simple). «Забыл» — случилось раньше
      этой точки, поэтому нужен had. Если тянет поставить had на оба глагола или ни на один —
      значит, выбор идёт не по хронологии, а наугад. Рабочий приём: сначала выписать оба факта в
      Past Simple, потом отдельно спросить про каждый — «а это раньше уже названной точки?».</div>
    `,
    mistakes: [
      { wrong: '~~a new employee had come to me and asked~~', right: 'a new employee came up to me and asked', why: 'Простая последовательность событий (пришёл → спросил) → Past Simple, а не Past Perfect.' },
      { wrong: '~~When I got back he has already left~~', right: 'When I got back, he had already left', why: 'Два события в прошлом, важен порядок (ушёл раньше, чем я вернулся) → Past Perfect, не Present Perfect.' },
      { wrong: '~~Last year I switch to another team~~', right: 'Last year I switched to another team', why: 'Правильный глагол, время выбрано верно, но потеряно окончание -ed.' },
      { wrong: '~~When I had arrived, it turned out that I forgot my phone at home~~', right: 'When I arrived, it turned out that I had forgotten my phone at home', why: 'Perfect стоит не на том глаголе: "arrived" — просто точка отсчёта (Past Simple), "forgot" — случилось раньше неё, нужен had forgotten.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'When you called, I ___ dinner.',
        options: ['cooked', 'was cooking', 'had cooked', 'have cooked'],
        correctIndex: 1,
        explanation: 'Звонок застал меня в процессе — Continuous как фон для короткого прерывающего действия.',
      },
      {
        type: 'mcq',
        prompt: 'Yesterday he ___ dinner. (один факт, один маркер времени)',
        options: ['had cooked', 'has cooked', 'cooked', 'was cooking'],
        correctIndex: 2,
        explanation: 'Один факт с явным маркером времени (yesterday) — Past Perfect не нужен, только Past Simple.',
      },
      {
        type: 'mcq',
        prompt: 'She had already left when we ___.',
        options: ['arrive', 'arrived', 'had arrived', 'were arriving'],
        correctIndex: 1,
        explanation: 'Более позднее из двух прошлых событий — обычный Past Simple; более раннее (left) уже получило had.',
      },
      {
        type: 'mcq',
        prompt: 'We agreed on a plan and I ___ to work. (простая последовательность, рассказ идёт вперёд)',
        options: ['had got', 'got', 'have got', 'was getting'],
        correctIndex: 1,
        explanation: 'События идут одно за другим в порядке рассказа — Past Perfect тут не нужен, только Past Simple.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Поезд уже уехал, когда мы добрались до вокзала».',
        answers: ['The train had already left when we got to the station', 'The train had already left when we arrived at the station'],
        explanation: 'Два прошлых события, важен порядок — отъезд поезда раньше → Past Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'When I ___, it turned out that I ___ my phone at home.',
        options: ['had arrived / forgot', 'arrived / had forgotten', 'arrived / forgot', 'had arrived / had forgotten'],
        correctIndex: 1,
        explanation: '«Приехал» — точка отсчёта (Past Simple). «Забыл» — раньше этой точки (had forgotten). Perfect только на более раннем из двух действий.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-three-baskets',
    title: '1.5 Три корзины — универсальный тест выбора времени',
    focus: 'high',
    focusNote: 'Правило 34 в rules.md — синтез правил 5, 9, 16, 30, 32 в одну модель. Самый важный чек-лист модуля.',
    intro: `
      <p>Это не новое время, а модель, которая собирает всё из глав 1.2–1.4 в один практический
      тест. Ключевая идея: обстоятельство времени в предложении не просто "есть или нет" — у него
      есть <strong>тип</strong>, и именно тип решает время, а не сам факт присутствия даты.</p>

      <table>
        <thead><tr><th>Что стоит в предложении</th><th>Примеры</th><th>Время</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Точка в прошлом, закрытая</strong></td>
            <td>yesterday, last night, <code>in 2020</code>, on Friday, in June, three days ago,
            when I arrived</td>
            <td><strong>Past Simple</strong></td>
          </tr>
          <tr>
            <td><strong>Период, идущий до «сейчас»</strong></td>
            <td><code>since</code> March, for five years, so far, yet, lately</td>
            <td><strong>Present Perfect</strong> (Continuous — если процесс и глагол не
            стативный)</td>
          </tr>
          <tr>
            <td><strong>Вторая точка в прошлом</strong></td>
            <td>when we arrived, by the time…, he told me that…, I realized that…, it turned out
            that…</td>
            <td><strong>Past Perfect</strong> — для того, что случилось раньше</td>
          </tr>
        </tbody>
      </table>

      <h4>Проверка в один шаг</h4>
      <p><strong>Сколько моментов в прошлом названо в предложении?</strong></p>
      <ul>
        <li><strong>Один</strong> → Past Simple.</li>
        <li><strong>Один, но он тянется к «сейчас»</strong> → Present Perfect.</li>
        <li><strong>Два</strong> → Past Perfect для более раннего, Past Simple для более
        позднего.</li>
      </ul>
      <div class="callout warn"><strong>Главный ключ:</strong> наличие второй точки отсчёта
      важнее любой даты. Дата запрещает только have/has (Perfect настоящего) — на had (Past
      Perfect) она не влияет вообще.</div>

      <h4>Пара для заучивания — одно число, разные корзины</h4>
      <ul>
        <li>We <strong>moved</strong> here <strong>in</strong> 2020. — момент, закончилось.</li>
        <li>We'<strong>ve been living</strong> here <strong>since</strong> 2020. — точка отсчёта,
        длится.</li>
        <li>When she joined us in 2022, we <strong>had</strong> already <strong>moved</strong>
        here. — вторая точка появилась → had.</li>
      </ul>

      <h4>Оговорка по корзине 2 — стативные глаголы и граница длительности</h4>
      <p>Стативные глаголы (see, know, be, like, understand, have в значении обладания) в
      Continuous не ставятся никогда — только "have seen", не <s>have been seeing</s>. И в
      отрицании с since берётся простая форма: "I haven't seen him since March".</p>
      <p>Perfect Continuous нужен, только если названа <strong>длительность</strong>: "I've been
      working here for a year and a half" ✅ — длительность есть. А "…и до сих пор учусь чему-то
      новому" длительности не содержит → это обычный Present Continuous: "and I'm still
      learning", не <s>have been learning</s>. Проверка: если к глаголу нельзя приписать "сколько
      времени" — корзина 2 не подходит, это обычный Present/Past Continuous.</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'The client already sent the requirements on Friday evening. → нужно исправить время:',
        options: ['ничего менять не нужно', 'had already sent', 'has already sent', 'was sending'],
        correctIndex: 1,
        explanation: 'Само предложение — часть более широкого рассказа с двумя точками в прошлом (в исходном контексте это выяснилось позже) → нужен Past Perfect, дата этому не мешает.',
      },
      {
        type: 'mcq',
        prompt: 'We ___ here since 2020.',
        options: ['moved', "have been living", 'had lived', 'live'],
        correctIndex: 1,
        explanation: '`since` — точка отсчёта периода, тянущегося до сих пор → корзина 2, Present Perfect Continuous.',
      },
      {
        type: 'mcq',
        prompt: 'When she joined us in 2022, we ___ already moved here.',
        options: ['have', 'has', 'had', 'were'],
        correctIndex: 2,
        explanation: 'Появилась вторая точка в прошлом (2022) — переезд случился раньше неё → Past Perfect.',
      },
      {
        type: 'mcq',
        prompt: "I haven't seen him ___ March.",
        options: ['for', 'since', 'from', 'in'],
        correctIndex: 1,
        explanation: 'Точка отсчёта, не длительность в часах/днях/годах → since, не for.',
      },
      {
        type: 'fill',
        prompt: 'Сколько точек в прошлом в предложении "It turned out that the client had changed the requirements"? Ответь цифрой.',
        answers: ['2', 'два', 'две'],
        explanation: '"выяснилось" (turned out) и "изменил" (had changed) — два момента, второй раньше первого → Past Perfect для более раннего.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-future',
    title: '1.6 Future: will vs going to vs Present Continuous vs Future Perfect',
    focus: 'high',
    focusNote: 'Правило 26 в rules.md — статус 🔴, давно не проверялось.',
    intro: `
      <p>В английском нет отдельной "формы будущего времени" как единого способа в русском —
      есть несколько конкурирующих конструкций, и выбор между ними зависит от смысла, а не от
      чистой грамматики.</p>

      <h4>will + V</h4>
      <p><strong>Когда:</strong> решение, принятое ПРЯМО СЕЙЧАС, в момент речи (без
      предварительного плана); прогноз без видимых доказательств (просто мнение); обещания,
      предложения помощи, угрозы.</p>
      <ul>
        <li>"The phone is ringing." — "I'll get it." (спонтанное решение)</li>
        <li>"I think it will rain next week." (прогноз-мнение, без видимых признаков сейчас)</li>
        <li>"I'll help you with that." (предложение помощи в моменте)</li>
      </ul>

      <h4>be going to + V</h4>
      <p><strong>Когда:</strong> заранее принятое намерение/план (решение было принято ДО момента
      речи); прогноз С видимыми доказательствами прямо сейчас.</p>
      <ul>
        <li>"I'm going to call him tomorrow." (уже решил заранее)</li>
        <li>"Look at those clouds — it's going to rain." (вижу тучи прямо сейчас — доказательство
        есть)</li>
      </ul>

      <h4>Present Continuous для будущего</h4>
      <p><strong>Когда:</strong> конкретная договорённость — время, место или оба уже
      зафиксированы, как в календаре.</p>
      <ul>
        <li>"I'm meeting him at 5." (согласованная встреча, время известно)</li>
        <li>"Next week I'm having a meeting" — естественнее, чем "I will have a meeting", если
        встреча уже назначена: это не прогноз и не решение в моменте, а подтверждённый план.</li>
      </ul>

      <div class="callout warn"><strong>Стык всех трёх — задай себе по порядку:</strong>
      <ol>
        <li>Решаю прямо сейчас, экспромтом? → <strong>will</strong></li>
        <li>Решил заранее, но время/место ещё не зафиксированы точно? → <strong>going to</strong></li>
        <li>Это уже согласованная встреча/событие с конкретным временем? → <strong>Present
        Continuous</strong></li>
      </ol></div>
      <p>Одна и та же ситуация тремя способами:</p>
      <ul>
        <li>"I'll probably see a doctor." (просто идея, решаю сейчас)</li>
        <li>"I'm going to see a doctor." (уже решил, ещё не записался)</li>
        <li>"I'm seeing a doctor at 3pm." (запись подтверждена, время есть)</li>
      </ul>
      <div class="callout"><strong>Никогда не смешивать will и going to в одной конструкции:</strong>
      <s>we will going to have a meeting</s> — это два самостоятельных способа образовать
      будущее, каждый со своей структурой (<code>will + базовая форма</code> ИЛИ
      <code>am/is/are going to + базовая форма</code>). Либо "we're going to have a meeting",
      либо "we will have a meeting".</div>

      <h4>Future Perfect (Continuous)</h4>
      <p>Точка отсчёта — момент <strong>в будущем</strong>. Действие будет завершено К этому
      моменту.</p>
      <p>"By next year, I will have finished my degree." Триггер-фраза: <strong>by + будущее
      время</strong> (by next month, by the time we arrive, by 2030).</p>
      <p>Future Perfect Continuous добавляет акцент на длительности: "By next month, I will have
      been working here for five years."</p>

      <h4>Бонус — First Conditional (тесно связан с будущим)</h4>
      <p><strong>Формула:</strong> if + Present Simple, … will + V. (НЕ will после if — частая
      ошибка обратного направления.)</p>
      <div class="callout">"If I don't sleep, I will be tired" ✅ — Present Simple в if-части,
      will только во второй.</div>
    `,
    mistakes: [
      { wrong: '~~we will going to have a meeting~~', right: "we're going to have a meeting / we will have a meeting", why: 'Смешаны две самостоятельные конструкции будущего времени в одну.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'The phone is ringing! — I ___ it.',
        options: ["'m going to get", "'ll get", "'m getting", 'get'],
        correctIndex: 1,
        explanation: 'Спонтанное решение прямо в момент речи → will.',
      },
      {
        type: 'mcq',
        prompt: "Look at those clouds — it ___ rain.",
        options: ['will', "is going to", "is raining", 'rains'],
        correctIndex: 1,
        explanation: 'Прогноз с видимым доказательством прямо сейчас (тучи) → going to.',
      },
      {
        type: 'mcq',
        prompt: 'I ___ a client at three tomorrow. (встреча уже в календаре)',
        options: ['will meet', "am going to meet", "am meeting", 'meet'],
        correctIndex: 2,
        explanation: 'Согласованная договорённость с конкретным временем → Present Continuous для будущего.',
      },
      {
        type: 'mcq',
        prompt: 'By next year, I ___ university.',
        options: ['will finish', "will have finished", "am finishing", "have finished"],
        correctIndex: 1,
        explanation: 'Триггер "by + будущее время" — действие завершится к моменту в будущем → Future Perfect.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Если завтра будет солнечно, мы пойдём на пляж».',
        answers: ["If it's sunny tomorrow, we'll go to the beach", 'If it is sunny tomorrow, we will go to the beach'],
        explanation: 'if + Present Simple, ... will — will никогда не ставится внутри if-части.',
      },
    ],
  },

  {
    module: 'Модуль 1. Времена',
    id: 'tenses-self-check',
    title: '1.7 Итоговая самопроверка по временам',
    intro: `
      <p>Смешанный тест по всем главам модуля 1 — без подсказки, какое время из какой главы.
      Это ближе к тому, как ошибки реально всплывают в связном тексте: развилки перемешаны, и
      сначала нужно самому понять, о какой развилке вообще идёт речь, и только потом выбрать
      время.</p>
      <div class="callout">Если сомневаешься — вернись к главе 1.5 («Три корзины») и задай
      практический вопрос: сколько точек в прошлом названо в предложении?</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'I ___ this movie already — let\'s watch something else.',
        options: ['saw', "have seen", "was seeing", "had seen"],
        correctIndex: 1,
        explanation: 'Время не названо, важен факт "видел ли вообще" и это влияет на решение сейчас → Present Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'When I arrived at the station, the train ___.',
        options: ['already left', "has already left", "had already left", "was already leaving"],
        correctIndex: 2,
        explanation: 'Два прошлых события, отправление раньше прибытия → Past Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'She usually ___ up at seven, but this week she ___ up at six because of the new project.',
        options: ['gets / is getting', "get / gets", "is getting / gets", "got / is getting"],
        correctIndex: 0,
        explanation: 'Привычка вообще (usually) → Present Simple (he/she → -s); временное отклонение на этой неделе → Present Continuous.',
      },
      {
        type: 'mcq',
        prompt: 'By the time you arrive, I ___ dinner.',
        options: ['will cook', "will have cooked", "cook", "am cooking"],
        correctIndex: 1,
        explanation: 'by the time — триггер завершённости к будущему моменту → Future Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'We ___ to this city in 2015, and we ___ here ever since.',
        options: ['moved / have lived', "have moved / lived", "moved / lived", "had moved / have lived"],
        correctIndex: 0,
        explanation: '`in 2015` — закрытая точка → Past Simple; `ever since` — период до сих пор → Present Perfect.',
      },
      {
        type: 'mcq',
        prompt: 'He explained everything, sent the file, and ___ home.',
        options: ['had gone', "went", "has gone", "was going"],
        correctIndex: 1,
        explanation: 'Простая последовательность событий (рассказ идёт вперёд) → Past Simple, не Past Perfect.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы работаем над этим проектом уже два часа» (акцент на процессе).',
        answers: ["We've been working on this project for two hours", 'We have been working on this project for two hours'],
        explanation: 'Незакончившийся период + акцент на процессе, не на счёте результата → Present Perfect Continuous.',
      },
    ],
  }
);
