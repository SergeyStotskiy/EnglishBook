window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 11. Коллокации и естественность',
    id: 'collocations-delexical',
    title: '11.1 make / do / take / have / give — делексические глаголы',
    intro: `
      <p>Коллокация — это сочетание слов, которое носитель произносит автоматически, а любое
      другое, логически не менее правильное, звучит для него неверно. Грамматика тут ни при чём:
      <s>do a mistake</s> разбирается без труда, но выдаёт неносителя мгновенно — нужно
      <strong>make a mistake</strong>.</p>

      <p>Самая частотная группа — <strong>делексические глаголы</strong>. Русский обходится одним
      глаголом («решить», «ошибиться», «сфотографировать»), английский часто разбивает смысл на
      пустой глагол + существительное: <em>make a decision, make a mistake, take a photo</em>.
      Сам глагол здесь почти ничего не значит (отсюда «делексический») — он подбирается по
      традиции, а не по смыслу.</p>

      <h4>make vs do — главная развилка</h4>
      <table>
        <thead><tr><th></th><th>Смысл</th><th>Примеры</th></tr></thead>
        <tbody>
          <tr><td><strong>make</strong></td><td>создать, произвести результат — что-то появляется, чего не было</td><td>make a decision, make a mistake, make progress, make an offer, make an appointment, make money, make a suggestion, make an effort, make sure</td></tr>
          <tr><td><strong>do</strong></td><td>выполнить работу, деятельность, обязанность — процесс без нового объекта</td><td>do the dishes, do homework, do business, do research, do a favor, do damage, do your best, do exercise</td></tr>
        </tbody>
      </table>
      <p>Проверка, которая срабатывает в большинстве случаев: если после действия <em>появился
      новый объект или результат</em> (решение, ошибка, деньги, предложение) — <code>make</code>.
      Если действие — это просто «выполнить положенное» — <code>do</code>.</p>

      <h4>Остальные четыре</h4>
      <table>
        <thead><tr><th>Глагол</th><th>Устойчивые сочетания</th></tr></thead>
        <tbody>
          <tr><td><strong>take</strong></td><td>take a photo, take a break, take a look, take notes, take a risk, take responsibility, take action, take place (= состояться), take advantage of</td></tr>
          <tr><td><strong>have</strong></td><td>have a look, have a chat, have breakfast, have an impact on, have trouble doing smth, have a point, have an argument</td></tr>
          <tr><td><strong>give</strong></td><td>give a presentation, give someone a call, give advice, give a hand (= помочь), give an example, give priority to</td></tr>
          <tr><td><strong>pay</strong></td><td>pay attention to, pay a visit, pay a compliment, pay tribute to</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>Русский подсказывает неверный глагол чаще всего здесь:</strong>
      <ul>
        <li>«сделать фото» → <strong>take</strong> a photo (не make)</li>
        <li>«сделать ошибку» → <strong>make</strong> a mistake (не do)</li>
        <li>«сделать вывод» → <strong>draw</strong> a conclusion / come to a conclusion</li>
        <li>«принять решение» → <strong>make</strong> a decision (take a decision — британский вариант, в AmE звучит чужеродно)</li>
        <li>«принять меры» → <strong>take</strong> action / take steps</li>
        <li>«провести исследование» → <strong>do</strong> / <strong>conduct</strong> research</li>
        <li>«провести встречу» → <strong>hold</strong> / <strong>have</strong> a meeting</li>
        <li>«оказать влияние» → <strong>have</strong> an impact on / influence smth</li>
        <li>«обратить внимание» → <strong>pay</strong> attention to</li>
      </ul></div>

      <h4>Обратная ошибка: лишняя обёртка</h4>
      <p>Конструкция «глагол + существительное» иногда, наоборот, строится там, где английскому
      хватает одного глагола. Русское «у нас был визит к клиенту» тянет за собой
      <s>have a visit a new client</s>, но <code>visit</code> — обычный переходный глагол:
      <strong>we visited a new client</strong>. То же с <s>make a call to him</s> при живом
      <strong>call him</strong> (хотя <em>give him a call</em> существует и звучит естественно —
      именно в этой форме, с <code>give</code>).</p>

      <h4>Как это учить</h4>
      <p>Коллокации не выводятся правилом — их запоминают <strong>блоками</strong>. Практический
      вывод для словаря: записывать не <em>decision — решение</em>, а <em>to make a decision —
      принять решение</em>. Слово в одиночку почти бесполезно, слово в паре сразу готово к
      употреблению.</p>
    `,
    mistakes: [
      { wrong: '~~have a visit a new client~~', right: 'visit a new client', why: 'Лишняя делексическая обёртка — калька с русского «у нас был визит»; visit сам по себе переходный глагол. Есть в таблице лексических ловушек rules.md.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'We need to ___ a decision before Friday.',
        options: ['do', 'make', 'take', 'give'],
        correctIndex: 1,
        explanation: 'Решение — новый результат, которого не было → make. Take a decision — британский вариант, для AmE берём make.',
      },
      {
        type: 'mcq',
        prompt: 'Could you ___ me a favor?',
        options: ['make', 'give', 'do', 'take'],
        correctIndex: 2,
        explanation: 'do a favor — устойчивое сочетание: это выполнение действия, а не создание объекта.',
      },
      {
        type: 'mcq',
        prompt: 'The new policy will ___ a serious impact on small businesses.',
        options: ['have', 'make', 'do', 'give'],
        correctIndex: 0,
        explanation: 'have an impact on — фиксированная коллокация. «Оказать влияние» через make не строится.',
      },
      {
        type: 'fill',
        prompt: 'Вставь глагол: "Let me ___ a look at the contract."',
        answers: ['take', 'have'],
        explanation: 'take a look (AmE предпочтительнее) или have a look — обе формы устойчивы.',
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Мы сделали фото на память».',
        answers: ['We took a photo', 'We took a picture', 'We took photos', 'We took a photo to remember it'],
        explanation: 'Фото именно take, не make — русское «сделать» здесь ложный ориентир.',
      },
      {
        type: 'mcq',
        prompt: 'She ___ a lot of progress this quarter.',
        options: ['did', 'made', 'took', 'gave'],
        correctIndex: 1,
        explanation: 'make progress — прогресс появляется как результат, значит make.',
      },
    ],
  },

  {
    module: 'Модуль 11. Коллокации и естественность',
    id: 'collocations-adj-adv',
    title: '11.2 Прилагательные и усилители: heavy rain, highly unlikely',
    intro: `
      <p>Вторая большая группа коллокаций — «какое прилагательное к какому существительному» и
      «каким наречием усиливать какое прилагательное». Здесь тоже нет логики, только узус:
      дождь бывает <strong>heavy</strong>, а кофе <strong>strong</strong>, хотя по смыслу оба
      просто «сильные».</p>

      <h4>Прилагательное + существительное</h4>
      <table>
        <thead><tr><th>Русское «сильный/большой»</th><th>Верно</th><th>Неверно</th></tr></thead>
        <tbody>
          <tr><td>сильный дождь</td><td>heavy rain</td><td><s>strong rain</s></td></tr>
          <tr><td>плотное движение</td><td>heavy traffic</td><td><s>big traffic</s></td></tr>
          <tr><td>крепкий кофе / чай</td><td>strong coffee</td><td><s>heavy coffee</s></td></tr>
          <tr><td>заядлый курильщик</td><td>heavy smoker</td><td><s>strong smoker</s></td></tr>
          <tr><td>твёрдое мнение</td><td>strong opinion</td><td><s>hard opinion</s></td></tr>
          <tr><td>большая разница</td><td>a big / huge difference</td><td><s>a large difference</s></td></tr>
          <tr><td>высокая вероятность</td><td>a high probability</td><td><s>a big probability</s></td></tr>
          <tr><td>серьёзная ошибка</td><td>a serious / costly mistake</td><td><s>a hard mistake</s></td></tr>
          <tr><td>жёсткий дедлайн</td><td>a tight deadline</td><td><s>a hard deadline</s> (существует, но значит «непереносимый», другой смысл)</td></tr>
          <tr><td>глубокие знания</td><td>a thorough / in-depth knowledge</td><td><s>deep knowledge</s></td></tr>
        </tbody>
      </table>

      <h4>Градуируемые и неградуируемые прилагательные</h4>
      <p>Это уже не узус, а системное правило, и оно даёт заметный прирост естественности.
      Прилагательные делятся на два класса:</p>
      <ul>
        <li><strong>Градуируемые</strong> — признак бывает сильнее или слабее: <em>cold, tired,
        good, big, interesting</em>. Усиливаются словами <code>very, quite, extremely,
        fairly</code>.</li>
        <li><strong>Неградуируемые (абсолютные)</strong> — признак уже доведён до предела:
        <em>freezing, exhausted, perfect, huge, fascinating, impossible, essential</em>.
        С ними <code>very</code> не сочетается — нужны <code>absolutely, completely, utterly,
        totally</code>.</li>
      </ul>
      <table>
        <thead><tr><th>Градуируемое</th><th>Абсолютное</th></tr></thead>
        <tbody>
          <tr><td>very cold</td><td>absolutely freezing</td></tr>
          <tr><td>very tired</td><td>absolutely exhausted</td></tr>
          <tr><td>very good</td><td>absolutely perfect</td></tr>
          <tr><td>very big</td><td>absolutely huge</td></tr>
          <tr><td>very surprised</td><td>absolutely astonished</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><s>very perfect</s>, <s>very impossible</s>, <s>very excellent</s> —
      частая ошибка: нельзя усилить то, что уже на пределе. Верно: <strong>absolutely perfect</strong>,
      <strong>completely impossible</strong>. Слово <code>really</code> — универсальное, работает с
      обоими классами: really cold, really freezing.</div>

      <h4>Наречие + прилагательное: набор для C1</h4>
      <p>Один <code>very</code> на весь текст — самый заметный признак уровня B1. Ниже пары,
      которые действительно употребляются вместе:</p>
      <table>
        <tbody>
          <tr><td><strong>highly</strong></td><td>highly likely / unlikely, highly recommended, highly controversial, highly qualified, highly effective</td></tr>
          <tr><td><strong>deeply</strong></td><td>deeply concerned, deeply rooted, deeply personal, deeply regret</td></tr>
          <tr><td><strong>bitterly</strong></td><td>bitterly disappointed, bitterly cold, bitterly divided</td></tr>
          <tr><td><strong>widely</strong></td><td>widely used, widely regarded as, widely available, widely criticized</td></tr>
          <tr><td><strong>heavily</strong></td><td>heavily dependent on, heavily criticized, heavily invested</td></tr>
          <tr><td><strong>strongly</strong></td><td>strongly recommend, strongly disagree, strongly suggest</td></tr>
          <tr><td><strong>perfectly</strong></td><td>perfectly clear, perfectly reasonable, perfectly capable</td></tr>
          <tr><td><strong>fully</strong></td><td>fully aware, fully booked, fully committed</td></tr>
          <tr><td><strong>vitally / critically</strong></td><td>vitally important, critically ill, critically acclaimed</td></tr>
        </tbody>
      </table>
      <p>Обрати внимание на асимметрию: говорят <strong>highly unlikely</strong>, но
      <s>highly possible</s> — там нужно <strong>quite possible</strong> или
      <strong>entirely possible</strong>. Пары запоминаются целиком.</p>

      <div class="callout"><strong>Про quite — американская ловушка.</strong> В британском
      <em>quite good</em> = «неплохо, так себе» (ослабление). В американском <em>quite good</em>
      ближе к «весьма хорошо» (усиление). Поскольку целевой вариант — American English, можно
      пользоваться как усилителем, но в разговоре с британцем смысл перевернётся.</div>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'We were stuck in ___ traffic for two hours.',
        options: ['strong', 'heavy', 'big', 'thick'],
        correctIndex: 1,
        explanation: 'heavy traffic — фиксированная коллокация, как и heavy rain.',
      },
      {
        type: 'mcq',
        prompt: 'It is ___ unlikely that the deal will close this year.',
        options: ['very', 'highly', 'deeply', 'strongly'],
        correctIndex: 1,
        explanation: 'highly unlikely / highly likely — устойчивая пара. Very unlikely возможно, но highly звучит уровнем выше.',
      },
      {
        type: 'mcq',
        prompt: 'After the flight I was ___ exhausted.',
        options: ['very', 'absolutely', 'highly', 'quite a lot'],
        correctIndex: 1,
        explanation: 'exhausted — абсолютное прилагательное, very с ним не сочетается; нужен absolutely/completely.',
      },
      {
        type: 'mcq',
        prompt: 'The company is ___ dependent on a single supplier.',
        options: ['deeply', 'heavily', 'bitterly', 'widely'],
        correctIndex: 1,
        explanation: 'heavily dependent on — устойчивое сочетание.',
      },
      {
        type: 'fill',
        prompt: 'Вставь наречие: "I would ___ recommend this course." (настоятельно)',
        answers: ['strongly', 'highly'],
        explanation: 'strongly recommend и highly recommend — обе пары рабочие и естественные.',
      },
      {
        type: 'fill',
        prompt: 'Исправь: "The plan was very perfect."',
        answers: ['The plan was perfect', 'The plan was absolutely perfect'],
        explanation: 'perfect — абсолютное прилагательное: либо без усилителя, либо absolutely.',
      },
    ],
  },

  {
    module: 'Модуль 11. Коллокации и естественность',
    id: 'collocations-traps',
    title: '11.3 Твои личные ловушки: all / whole / everything и соседи',
    focus: 'high',
    focusNote: 'Раздел «Лексические ловушки» в rules.md — семья all/everything повторилась уже четыре раза, any-/every- дважды.',
    intro: `
      <p>Эта глава — не общая теория, а разбор конкретных сочетаний, которые в твоих текстах
      ломаются повторно. Все примеры взяты из <code>errors_log.md</code>.</p>

      <h4>Ловушка 1: all / the whole / everything — три разных слова</h4>
      <p>Русское «весь / всё» покрывает все три случая, английский их разводит жёстко.</p>
      <table>
        <thead><tr><th>Что нужно</th><th>Конструкция</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>«весь X» перед исчисляемым существительным в ед. числе</td><td><strong>the whole</strong> + сущ.</td><td>the whole family, the whole match, the whole time</td></tr>
          <tr><td>«всё» как самостоятельное дополнение</td><td><strong>everything</strong></td><td>We fixed everything. / We settled everything.</td></tr>
          <tr><td>«все» про множество людей/вещей</td><td><strong>all</strong> + мн. число / all of</td><td>all the documents, all of them, all my friends</td></tr>
        </tbody>
      </table>
      <p>Ключ: <code>all</code> <strong>не умеет стоять в одиночку</strong> как объект и
      <strong>не умеет заменять the whole</strong> перед единственным числом. Устойчивые
      исключения существуют — <em>all day, all night, all week, all year</em> — но это
      закрытый список фиксированных выражений с периодами времени, а не рабочая модель.</p>

      <h4>Ловушка 2: any- в утверждении</h4>
      <p>Слова семьи <code>any-</code> (anything, anyone, anywhere) живут в вопросах, отрицаниях
      и условиях. В обычном утвердительном предложении нужна семья <code>every-</code>:</p>
      <ul>
        <li><s>We decided anything.</s> → <strong>We settled everything.</strong></li>
        <li>Did you decide <strong>anything</strong>? — вопрос, any- уместно.</li>
        <li>We didn't decide <strong>anything</strong>. — отрицание, any- уместно.</li>
      </ul>
      <p>Отдельно: <code>anything</code> в утверждении всё-таки возможно, но означает совсем
      другое — «что угодно»: <em>I'll eat anything</em> = «съем что угодно», не «съел всё».</p>

      <h4>Ловушка 3: not перед прилагательным после смыслового глагола</h4>
      <p><s>Negotiations went not easy.</s> Здесь смешаны две разные конструкции. Выбирать надо
      одну:</p>
      <ul>
        <li><strong>go + наречие</strong>: The negotiations <strong>didn't go smoothly</strong>.</li>
        <li><strong>be + прилагательное</strong>: The negotiations <strong>weren't easy</strong>.</li>
      </ul>
      <p>Частица <code>not</code> присоединяется к глаголу (через do-support или к формам be) —
      см. Правило 27. Свободно поставить её перед прилагательным, как в русском «прошли
      непросто», нельзя.</p>

      <h4>Ловушка 4: глагол выбирается под объект</h4>
      <table>
        <thead><tr><th>Ошибка</th><th>Верно</th><th>Почему</th></tr></thead>
        <tbody>
          <tr><td><s>a fixed version</s> (документа)</td><td>a <strong>revised</strong> / corrected / updated version</td><td>fix = починить сломанное (баг, устройство). Документ правят, а не чинят</td></tr>
          <tr><td><s>watching my notes</s></td><td><strong>going through</strong> / looking through my notes</td><td>watch = следить за движущимся (a movie, the kids). Документ просматривают</td></tr>
          <tr><td><s>the one problem</s> (единственная)</td><td>the <strong>only</strong> problem</td><td>one = числительное «один», only = «единственный»</td></tr>
          <tr><td><s>sign up a contract</s></td><td><strong>sign</strong> a contract</td><td>sign up = зарегистрироваться; подписать документ — просто sign</td></tr>
          <tr><td><s>spoke up for an hour</s></td><td><strong>talked</strong> for an hour</td><td>speak up = говорить громче / высказаться публично</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>Общий механизм всех четырёх ловушек.</strong> Русское
      слово покрывает более широкий диапазон, чем любое из английских соответствий, и рука
      выбирает первое попавшееся. Приём на будущее: если в русском оригинале стоит
      <em>«весь / всё»</em>, <em>«сделать»</em>, <em>«посмотреть»</em>, <em>«исправить»</em> —
      это сигнал остановиться и выбрать английское слово по объекту, а не по словарному
      соответствию.</div>
    `,
    mistakes: [
      { wrong: '~~for all family~~ · ~~all match~~ · ~~all time~~', right: 'for the whole family · the whole match · the whole time', why: 'Три рецидива одного паттерна: all X вместо the whole X перед единственным числом.' },
      { wrong: '~~fix all~~', right: 'fix everything / fix it all', why: 'all не может быть самостоятельным объектным местоимением «всё».' },
      { wrong: '~~We decided anything~~', right: 'We settled everything', why: 'any- слова — для вопросов и отрицаний; в утверждении нужна семья every-.' },
      { wrong: '~~negotiations went not easy~~', right: "the negotiations weren't easy / didn't go smoothly", why: 'not не встаёт перед прилагательным после смыслового глагола — либо go + наречие, либо be + прилагательное (Правило 27).' },
      { wrong: '~~a fixed contract version~~', right: 'a revised version of the contract', why: 'fix = починить сломанное; документ — revised/corrected/updated. Рецидив.' },
      { wrong: '~~watching my notes~~', right: 'going through my notes', why: 'watch = следить за движущимся объектом, не «просматривать документ».' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'We waited ___ afternoon and nobody showed up.',
        options: ['all the', 'the whole', 'everything', 'all of'],
        correctIndex: 1,
        explanation: 'the whole afternoon перед единственным числом. (Устойчивое all afternoon тоже верно, но варианта "all the" в списке нет.)',
      },
      {
        type: 'mcq',
        prompt: 'By Friday we had sorted out ___.',
        options: ['all', 'anything', 'everything', 'whole'],
        correctIndex: 2,
        explanation: 'Самостоятельное дополнение «всё» — только everything; all в одиночку так не работает.',
      },
      {
        type: 'mcq',
        prompt: 'The meeting ___ — we ran out of time before the main item.',
        options: ["went not well", "didn't go well", "was not go well", "not went well"],
        correctIndex: 1,
        explanation: "Отрицание строится через do-support: didn't go well. Not перед наречием/прилагательным здесь невозможно.",
      },
      {
        type: 'fill',
        prompt: 'Переведи: «Он прислал мне исправленную версию договора».',
        answers: ['He sent me a revised version of the contract', 'He sent me the revised version of the contract', 'He sent me a corrected version of the contract', 'He sent me an updated version of the contract'],
        explanation: 'Документ — revised / corrected / updated, не fixed.',
      },
      {
        type: 'fill',
        prompt: 'Исправь: «The one problem was a price.»',
        answers: ['The only problem was the price'],
        explanation: 'only вместо one (единственный, не «один»); the price — конкретная цена в обсуждаемой сделке (Правило 6).',
      },
      {
        type: 'mcq',
        prompt: 'I spent the evening ___ my notes before the exam.',
        options: ['watching', 'going through', 'seeing', 'fixing'],
        correctIndex: 1,
        explanation: 'go through / look through — «просматривать» текст или записи.',
      },
    ],
  }
);
