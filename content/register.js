window.GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];
window.GRAMMAR_CHAPTERS.push(
  {
    module: 'Модуль 12. Регистр и стиль',
    id: 'register-three-levels',
    title: '12.1 Три регистра и два словарных слоя',
    focus: 'medium',
    focusNote: 'Раздел «Лексические ловушки» в rules.md: thus в бытовом рассказе, invite вместо invitation — обе ошибки регистровые, а не грамматические.',
    intro: `
      <p>На уровне B1 предложение оценивается по одной шкале: правильно или нет. На C1
      добавляется вторая — <strong>уместно ли оно здесь</strong>. Одна и та же мысль в трёх
      регистрах:</p>
      <table>
        <thead><tr><th>Регистр</th><th>Где</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>Разговорный</td><td>друзья, чат, устная речь</td><td>They put the meeting off till Monday.</td></tr>
          <tr><td>Нейтральный</td><td>рабочая переписка, IELTS Speaking</td><td>The meeting was moved to Monday.</td></tr>
          <tr><td>Формальный</td><td>эссе, договор, официальное письмо</td><td>The meeting has been postponed until Monday.</td></tr>
        </tbody>
      </table>
      <p>Ошибка бывает в обе стороны, и вторая — «слишком формально» — у изучающих встречается
      даже чаще, потому что формальные слова кажутся «более правильными».</p>

      <h4>Два словарных слоя английского</h4>
      <p>У английского две родословные. Германский слой — короткие бытовые слова и фразовые
      глаголы. Латинско-французский — длинные однословные глаголы, пришедшие после 1066 года
      вместе с администрацией и правом. Почти на каждое понятие есть пара:</p>
      <table>
        <thead><tr><th>Германский (разговорный)</th><th>Латинский (формальный)</th></tr></thead>
        <tbody>
          <tr><td>put off</td><td>postpone</td></tr>
          <tr><td>find out</td><td>discover, determine</td></tr>
          <tr><td>ask for</td><td>request</td></tr>
          <tr><td>get</td><td>obtain, receive</td></tr>
          <tr><td>go up / go down</td><td>increase / decrease</td></tr>
          <tr><td>cut down on</td><td>reduce</td></tr>
          <tr><td>set up</td><td>establish</td></tr>
          <tr><td>look into</td><td>investigate, examine</td></tr>
          <tr><td>help out</td><td>assist</td></tr>
          <tr><td>need</td><td>require</td></tr>
          <tr><td>buy</td><td>purchase, acquire</td></tr>
          <tr><td>start / end</td><td>commence / conclude, terminate</td></tr>
          <tr><td>show</td><td>demonstrate, indicate</td></tr>
          <tr><td>tell</td><td>inform, notify</td></tr>
          <tr><td>think about</td><td>consider</td></tr>
          <tr><td>a lot of</td><td>a significant number of, considerable</td></tr>
          <tr><td>kids</td><td>children</td></tr>
          <tr><td>get in touch</td><td>contact</td></tr>
        </tbody>
      </table>
      <p>Владеть C1 — значит держать <strong>обе колонки</strong> и переключаться. В IELTS
      Writing Task 2 и деловом письме работает правая, в Speaking и повседневном общении —
      левая. Эссе, целиком написанное фразовыми глаголами, теряет баллы за лексику; разговор,
      целиком составленный из латинских слов, звучит как инструкция к технике.</p>

      <div class="callout warn"><strong>Твои две регистровые ошибки из журнала.</strong>
      <ul>
        <li><s>thus</s> в бытовом рассказе → нужно <strong>so</strong>. <code>thus</code> —
        книжно-юридическое слово, в истории про поездку звучит инородно. (Отдельно:
        <s>thus why</s> — несуществующая склейка, верно <strong>that's why</strong>.)</li>
        <li><s>invite</s> как существительное в деловом контексте → нужно
        <strong>invitation</strong>. <em>An invite</em> существует, но это разговорная форма,
        уместная в чате с коллегой, не в письме клиенту.</li>
      </ul>
      Обе ошибки грамматически безупречны — это чистый регистр.</div>

      <h4>Что ещё выдаёт регистр</h4>
      <ul>
        <li><strong>Сокращения</strong> (<em>don't, it's, we've</em>) — свободно в речи и
        неформальных письмах, недопустимы в IELTS Writing Task 2 и в договоре.</li>
        <li><strong>Начало предложения с And / But / So</strong> — норма в речи, в формальном
        эссе заменяется на <em>Moreover / However / Therefore</em>.</li>
        <li><strong>get</strong> — самый разговорный глагол английского. В формальном тексте
        почти всегда заменяется: <em>get better</em> → improve, <em>get worse</em> → deteriorate,
        <em>get money</em> → receive funding.</li>
        <li><strong>Прямые вопросы к читателю</strong> и восклицательные знаки в академическом
        письме не используются.</li>
      </ul>

      <div class="callout"><strong>Обратная опасность: канцелярит.</strong> Носители не считают
      более длинное слово более удачным. <em>utilize</em> вместо <em>use</em>,
      <em>in order to</em> вместо <em>to</em>, <em>at this point in time</em> вместо
      <em>now</em> — это не C1, а нагромождение. Правило: берём формальное слово тогда, когда
      оно <strong>точнее</strong> (postpone точнее, чем put off — сразу видно, что перенесли на
      более поздний срок), а не когда оно длиннее.</div>
    `,
    mistakes: [
      { wrong: '~~thus~~ (в рассказе о поездке)', right: 'so', why: 'Регистр: thus — книжно-юридическое, в бытовом повествовании звучит инородно.' },
      { wrong: '~~thus why~~', right: "that's why / so", why: 'Несуществующая конструкция — склейка thus и that’s why. Второй заход на то же слово.' },
      { wrong: '~~invite~~ (существительное, деловой контекст)', right: 'invitation', why: 'invite как существительное — разговорное; для делового регистра нужно invitation.' },
    ],
    quiz: [
      {
        type: 'mcq',
        prompt: 'Формальное эссе. Выбери уместный вариант: "The government should ___ spending on fossil fuels."',
        options: ['cut down on', 'reduce', 'slash', 'bring down'],
        correctIndex: 1,
        explanation: 'reduce — нейтрально-формальный однословный глагол. Cut down on и bring down разговорнее, slash — газетный.',
      },
      {
        type: 'mcq',
        prompt: 'Письмо другу. Что звучит естественно?',
        options: ['I was unable to ascertain the departure time.', "I couldn't find out when the train leaves.", 'I failed to determine the scheduled departure.', 'The departure time could not be established.'],
        correctIndex: 1,
        explanation: 'В личном письме работает германский слой: find out, couldn’t. Остальные три — канцелярит не по адресу.',
      },
      {
        type: 'mcq',
        prompt: 'Какое предложение НЕ подходит для IELTS Writing Task 2?',
        options: ['However, this argument has a serious flaw.', "But that's not the whole story, is it?", 'Nevertheless, the evidence remains inconclusive.', 'This trend is likely to continue.'],
        correctIndex: 1,
        explanation: 'Сокращения, But в начале и прямой вопрос к читателю — три разговорных признака сразу.',
      },
      {
        type: 'fill',
        prompt: 'Замени на формальный однословный глагол: "We need to look into the problem." → "We need to ___ the problem."',
        answers: ['investigate', 'examine'],
        explanation: 'look into → investigate / examine.',
      },
      {
        type: 'fill',
        prompt: 'Исправь регистр в деловом письме: "Thanks for the invite." → "Thank you for the ___."',
        answers: ['invitation'],
        explanation: 'invite — разговорная форма существительного; в письме клиенту нужно invitation.',
      },
    ],
  },

  {
    module: 'Модуль 12. Регистр и стиль',
    id: 'register-hedging',
    title: '12.2 Хеджирование: как утверждать осторожно',
    intro: `
      <p><strong>Хеджирование</strong> (hedging) — способ смягчить утверждение так, чтобы оно
      осталось содержательным, но перестало быть категоричным. Для англоязычной академической и
      деловой культуры это не вежливая мелочь, а норма: безоговорочное утверждение читается как
      непродуманное, потому что автор не показал, что видит исключения.</p>

      <p>Русская письменная традиция допускает куда более прямые формулировки, поэтому
      прямой перевод регулярно звучит наивно:</p>
      <ul>
        <li><s>Social media destroys attention spans.</s> — категорично, без опоры.</li>
        <li><strong>Social media may be eroding attention spans, particularly among younger
        users.</strong> — то же содержание, но защищено.</li>
      </ul>
      <p>В IELTS Writing Task 2 это напрямую влияет на балл: критерий Lexical Resource и
      Coherence оценивает в том числе способность выражать степень уверенности.</p>

      <h4>Пять инструментов</h4>
      <table>
        <thead><tr><th>Инструмент</th><th>Средства</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td>Модальные глаголы</td><td>may, might, could, can</td><td>Higher taxes <strong>may</strong> discourage investment.</td></tr>
          <tr><td>Глаголы дистанции</td><td>tend to, appear to, seem to, suggest, indicate</td><td>The data <strong>suggest that</strong> the effect is small. / Costs <strong>tend to</strong> rise in the first year.</td></tr>
          <tr><td>Наречия вероятности</td><td>possibly, arguably, presumably, apparently, seemingly, largely</td><td><strong>Arguably</strong>, the policy achieved the opposite result.</td></tr>
          <tr><td>Осторожные квантификаторы</td><td>many, some, a number of, the majority of, in most cases</td><td><strong>Many</strong> employers now expect this — вместо <s>All employers expect this</s>.</td></tr>
          <tr><td>Безличные обороты</td><td>It could be argued that, It is widely believed that, It would appear that, There is evidence that</td><td><strong>It could be argued that</strong> the benefits outweigh the costs.</td></tr>
        </tbody>
      </table>

      <h4>Шкала уверенности</h4>
      <p>Хеджирование — не только ослабление. C1 предполагает, что ты умеешь выбрать точку на
      всей шкале:</p>
      <table>
        <thead><tr><th>Степень</th><th>Средства</th></tr></thead>
        <tbody>
          <tr><td>Очень слабо</td><td>It is conceivable that, may possibly, in some cases</td></tr>
          <tr><td>Осторожно</td><td>may, might, tend to, arguably, it appears that</td></tr>
          <tr><td>Нейтрально</td><td>is likely to, generally, in most cases, typically</td></tr>
          <tr><td>Уверенно</td><td>clearly, evidently, is widely regarded as, there is strong evidence that</td></tr>
          <tr><td>Категорично</td><td>undoubtedly, without question, invariably</td></tr>
        </tbody>
      </table>

      <div class="callout warn"><strong>Переборщить так же плохо.</strong>
      <s>It could possibly be argued that this may perhaps tend to be somewhat problematic in
      certain cases.</s> — пять хеджей подряд превращают предложение в вату, и на IELTS это
      снижает балл за Coherence. Норма — <strong>один, максимум два</strong> на предложение:
      <em>It could be argued that this approach is problematic.</em></div>

      <h4>В деловой переписке</h4>
      <p>Тот же механизм смягчает конфликтные сообщения — прямое обвинение в англоязычной
      рабочей культуре читается как эскалация:</p>
      <table>
        <thead><tr><th>Прямо (звучит агрессивно)</th><th>Смягчённо (норма)</th></tr></thead>
        <tbody>
          <tr><td>You made a mistake in the invoice.</td><td>There seems to be an issue with the invoice.</td></tr>
          <tr><td>You did not send the report.</td><td>I do not think I have received the report yet.</td></tr>
          <tr><td>This is wrong.</td><td>I am not sure this is quite right.</td></tr>
          <tr><td>We cannot do this by Friday.</td><td>Friday may be difficult for us — would Monday work?</td></tr>
          <tr><td>I disagree.</td><td>I see your point, though I would look at it slightly differently.</td></tr>
        </tbody>
      </table>
      <p>Приём в правой колонке один и тот же: убрать из предложения обвиняемого. Не «ты
      ошибся», а «в счёте, кажется, есть расхождение» — проблема есть, виновного в предложении
      нет.</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'Выбери формулировку, уместную для IELTS Writing Task 2.',
        options: ['Everyone knows that remote work is better.', 'Remote work is arguably more productive for certain roles.', 'Remote work is 100% the best option today.', 'I think remote work is cool and everybody agrees.'],
        correctIndex: 1,
        explanation: 'arguably + сужение до certain roles — утверждение содержательное, но защищённое.',
      },
      {
        type: 'mcq',
        prompt: 'The evidence ___ that the two factors are connected.',
        options: ['proves definitely', 'suggests', 'says for sure', 'must be'],
        correctIndex: 1,
        explanation: 'suggest — стандартный академический глагол дистанции при выводе из данных.',
      },
      {
        type: 'mcq',
        prompt: 'Коллега прислал отчёт с ошибкой. Какое письмо уместно?',
        options: ['You calculated the totals wrong.', 'Your report is incorrect, please fix it.', 'I might be missing something, but the totals look a bit off to me.', 'The report is a disaster.'],
        correctIndex: 2,
        explanation: 'Хедж (might be missing something) плюс формулировка без обвиняемого — стандарт англоязычной деловой переписки.',
      },
      {
        type: 'fill',
        prompt: 'Смягчи: "Automation will destroy millions of jobs." (используй is likely to)',
        answers: ['Automation is likely to eliminate millions of jobs', 'Automation is likely to destroy millions of jobs', 'Automation is likely to displace millions of jobs'],
        explanation: 'is likely to — нейтральная точка шкалы: прогноз есть, категоричности нет.',
      },
      {
        type: 'fill',
        prompt: 'Замени категоричное all: "All students find grammar difficult." → "___ students find grammar difficult."',
        answers: ['Many', 'Most', 'Some', 'A majority of'],
        explanation: 'Осторожный квантификатор снимает уязвимость утверждения к одному контрпримеру.',
      },
    ],
  },

  {
    module: 'Модуль 12. Регистр и стиль',
    id: 'register-business-politeness',
    title: '12.3 Деловая вежливость: непрямые вопросы и просьбы',
    intro: `
      <p>Английская деловая вежливость строится не на специальных вежливых словах, как русское
      «пожалуйста», а на <strong>грамматической непрямоте</strong>: чем длиннее и условнее
      конструкция, тем вежливее просьба. Это системно, поэтому учится как правило, а не как
      набор фраз.</p>

      <h4>Лестница просьбы</h4>
      <table>
        <thead><tr><th>Уровень</th><th>Форма</th><th>Когда</th></tr></thead>
        <tbody>
          <tr><td>Прямо</td><td>Send me the file.</td><td>Только близкому коллеге или подчинённому, и то редко</td></tr>
          <tr><td>Нейтрально</td><td>Can you send me the file?</td><td>Обычная рабочая переписка внутри команды</td></tr>
          <tr><td>Вежливо</td><td>Could you send me the file?</td><td>Универсальный безопасный вариант</td></tr>
          <tr><td>Очень вежливо</td><td>Would you mind sending me the file?</td><td>Просьба к тому, кто не обязан помогать</td></tr>
          <tr><td>Максимально осторожно</td><td>I was wondering if you could send me the file.</td><td>Клиент, начальник, незнакомый человек, крупная просьба</td></tr>
        </tbody>
      </table>
      <div class="callout warn"><strong>Would you mind + V-ing</strong>, не <s>would you mind to
      send</s>. И ответная ловушка: <em>mind</em> = «возражать», поэтому согласие — это
      <strong>Not at all</strong> / <strong>Of course not</strong>, а <em>Yes</em> означает
      «да, возражаю».</div>

      <h4>Непрямые вопросы — и порядок слов в них</h4>
      <p>Прямой вопрос в деловом письме часто звучит резко, поэтому его заворачивают во вводную
      часть. Главное грамматическое следствие: после вводной части <strong>инверсия
      исчезает</strong>, порядок слов становится обычным утвердительным.</p>
      <table>
        <thead><tr><th>Прямой вопрос</th><th>Непрямой</th></tr></thead>
        <tbody>
          <tr><td>Where is the office?</td><td>Could you tell me where <strong>the office is</strong>?</td></tr>
          <tr><td>When will the report be ready?</td><td>Do you know when <strong>the report will be</strong> ready?</td></tr>
          <tr><td>How much does it cost?</td><td>I would like to know how much <strong>it costs</strong>.</td></tr>
          <tr><td>Did they approve the budget?</td><td>Could you confirm <strong>whether they approved</strong> the budget?</td></tr>
        </tbody>
      </table>
      <p>Две типичные ошибки здесь: сохранённая инверсия (<s>Could you tell me where is the
      office?</s>) и лишний do-support (<s>I would like to know how much does it cost.</s>).
      В непрямом вопросе вспомогательный <code>do</code> не нужен вообще — см. Правило 27.
      Для вопросов без вопросительного слова нужен <strong>whether</strong> или
      <strong>if</strong>.</p>

      <h4>Каркас делового письма</h4>
      <table>
        <thead><tr><th>Часть</th><th>Заготовки</th></tr></thead>
        <tbody>
          <tr><td>Открытие</td><td>I hope this email finds you well. / I am writing to ask about... / Following up on our call...</td></tr>
          <tr><td>Просьба</td><td>I would appreciate it if you could... / Would it be possible to...?</td></tr>
          <tr><td>Плохая новость</td><td>Unfortunately, we will not be able to... / I am afraid there has been a delay.</td></tr>
          <tr><td>Напоминание</td><td>Just following up on my previous email. / I wanted to check in on the status of...</td></tr>
          <tr><td>Вложение</td><td>Please find attached... / I have attached...</td></tr>
          <tr><td>Закрытие</td><td>Please let me know if you have any questions. / Looking forward to hearing from you.</td></tr>
          <tr><td>Подпись</td><td>Best regards, / Kind regards, / Best, (менее формально)</td></tr>
        </tbody>
      </table>

      <div class="callout"><strong>I would appreciate it if...</strong> — обрати внимание на
      <code>it</code>. Оно обязательно: <s>I would appreciate if you could</s> — распространённая
      ошибка, глагол appreciate требует дополнения, и роль формального дополнения играет
      <code>it</code> (ср. Правило 33 про обязательное подлежащее — здесь тот же механизм, но
      для объекта).</div>

      <h4>Отказ и несогласие</h4>
      <p>Прямое <em>No</em> и <em>I disagree</em> в деловом контексте почти не звучат.
      Стандартная схема — «признать + смягчить + предложить альтернативу»:</p>
      <ul>
        <li><strong>I see what you mean, but</strong> I am not sure it would work for this
        client. <strong>What if we</strong> tried a shorter pilot first?</li>
        <li><strong>That is a fair point. That said,</strong> the timeline may be too tight.</li>
        <li><strong>I am afraid</strong> Friday will not work for us — <strong>would</strong>
        Monday <strong>be an option</strong>?</li>
      </ul>
      <p><em>I am afraid</em> в этой роли не значит «я боюсь» — это стандартный маркер вежливого
      отказа или плохой новости.</p>
    `,
    quiz: [
      {
        type: 'mcq',
        prompt: 'Выбери верный непрямой вопрос.',
        options: ['Could you tell me where is the meeting room?', 'Could you tell me where the meeting room is?', 'Could you tell me where does the meeting room is?', 'Could you tell me the meeting room where is?'],
        correctIndex: 1,
        explanation: 'После вводной части инверсия снимается — порядок слов утвердительный.',
      },
      {
        type: 'mcq',
        prompt: 'Do you know when ___?',
        options: ['does the store open', 'the store opens', 'is the store open', 'the store does open'],
        correctIndex: 1,
        explanation: 'Непрямой вопрос: без do-support, обычный порядок слов.',
      },
      {
        type: 'mcq',
        prompt: '"Would you mind ___ the window?"',
        options: ['to open', 'open', 'opening', 'that you open'],
        correctIndex: 2,
        explanation: 'После would you mind всегда герундий (V-ing).',
      },
      {
        type: 'mcq',
        prompt: 'Собеседник спрашивает: "Would you mind if I joined the call?" Ты согласен. Что ответить?',
        options: ['Yes, of course.', 'Not at all.', 'Yes, I would.', 'Yes, please mind.'],
        correctIndex: 1,
        explanation: 'mind = возражать, поэтому согласие — Not at all / Of course not. Yes означало бы «возражаю».',
      },
      {
        type: 'fill',
        prompt: 'Исправь: "I would appreciate if you could confirm the date."',
        answers: ['I would appreciate it if you could confirm the date'],
        explanation: 'appreciate требует дополнения — формальное it обязательно.',
      },
      {
        type: 'fill',
        prompt: 'Смягчи отказ: "We cannot deliver by Friday." (начни с I am afraid)',
        answers: ['I am afraid we will not be able to deliver by Friday', "I'm afraid we won't be able to deliver by Friday", 'I am afraid we cannot deliver by Friday', "I'm afraid we can't deliver by Friday"],
        explanation: 'I am afraid — стандартный маркер вежливой плохой новости; will not be able to мягче, чем cannot.',
      },
    ],
  }
);
