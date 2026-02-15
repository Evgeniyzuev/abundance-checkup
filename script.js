const screens = [
    {
        id: 1,
        type: "intro",
        title: "Кто определяет твоё будущее?",
        subtitle:
            "\nПредставь свою настоящую жизнь,\nгде каждый вдох — это лёгкость и радость.\n\nЭтот короткий чек‑ап покажет, куда ты движешься,\nи поможет выбрать свой путь.\n\nЗдесь нет правильных или неправильных ответов.\n\nВыбирай то, что тебе ближе."
    },
    {
        id: 2,
        type: "question",
        title: "Какой источник дохода выбираешь?",
        subtitle: "Не «как правильно», а как ты чувствуешь.",
        options: [
            "Карьерный рост в компании",
            "Стабильная работа + комфорт",
            "Любимое дело и работа на себя",
            "Известность и узнаваемость",
            "Свой бизнес и проекты",
            "Другой путь"
        ],
        images: [
            "https://i.pinimg.com/1200x/ee/53/e0/ee53e0560198ec039e7695960f740ab7.jpg",
            "https://i.pinimg.com/1200x/5d/96/95/5d96955316b9ffbaf8d7de44f50e30d4.jpg",
            "https://i.pinimg.com/736x/1b/15/2a/1b152abede11ac8a15110ba044f55a2c.jpg",
            "https://i.pinimg.com/736x/0e/16/d8/0e16d844b40b1a8ad8c4dff2fa62e8a7.jpg",
            "https://i.pinimg.com/1200x/a3/14/38/a31438cefc77b34fa5bea84852d02402.jpg",
            "https://i.pinimg.com/736x/95/0d/2c/950d2cb74314939436b405159715129e.jpg"
        ],
        feedbacks: [
            "Карьерный рост даёт ощущение веса решений.\nВажны ясные ступени, ответственность и влияние.\nДеньги здесь звучат как признание вклада и результата.",
            "Стабильность и комфорт создают опору.\nХочется понятных правил, спокойствия и предсказуемости.\nТак легче сохранять энергию и не распыляться.",
            "Любимое дело и самостоятельность соединяют смысл и ритм.\nВажно заниматься тем, что откликается, и жить в своём темпе.\nСвобода ощущается как пространство выбора, а не хаос.",
            "Известность и публичность дают чувство резонанса.\nВажны отклик и ощущение, что тебя слышат.\nПризнание здесь — как контакт с миром, а не самоцель.",
            "Свой бизнес и проекты открывают долгий горизонт.\nХочется строить системы, которые работают и растут.\nЕсть интерес к масштабу и самостоятельности.",
            "Другой путь — это поиск собственного маршрута.\nВажно не вписываться в готовые сценарии и дать себе право на эксперимент.\nВнутри может быть и сомнение, и любопытство — и это нормально."
        ],
        miniChoices: [
            {
                question: "Что для тебя сейчас важнее?",
                options: [
                    "Новая работа",
                    "Возможность повысить должность",
                    "Сначала повысить опыт и навыки",
                    "Закрыть текущие задачи",
                    "Другой вариант"
                ],
                hint: "Как получить новые возможности ➡️"
            },
            {
                question: "Что сейчас важнее?",
                options: [
                    "Больше дохода без роста нагрузки",
                    "Больше интереса в работе",
                    "Сохранить баланс и энергию"
                ],
                hint: "Иногда устойчивость можно усилить\nне увеличивая часы работы ➡️"
            },
            {
                question: "Сейчас ты ближе к…",
                options: [
                    "Идее, но без системы",
                    "Первым стабильным доходам",
                    "Потоку клиентов на месяцы вперёд"
                ],
                hint: "Системы могут взять на себя рутину,\nоставив тебе творчество ➡️"
            },
            {
                question: "Что тебе ближе?",
                options: [
                    "Экспертность и польза",
                    "Личность и стиль",
                    "Идеи и смыслы"
                ],
                hint: "Рост не случайность, а внимание ➡️"
            },
            {
                question: "На каком этапе ты сейчас?",
                options: [
                    "Идея или поиск ниши",
                    "Первые продажи",
                    "Масштабирование и команда"
                ],
                hint: "Какие действия\nускоряют рост в разы? ➡️"
            },
            {
                question: "Что сейчас ближе?",
                options: [
                    "Поиск своего формата",
                    "Переосмысление и пауза",
                    "Новый этап и перезапуск"
                ],
                hint: "Гибкие системы умеют подстраиваться под уникальные траектории ➡️"
            }
        ]
    },
    {
        id: 3,
        type: "question",
        title: "Какая сфера для тебя сейчас важнее?",
        subtitle: "То, куда хочется направить энергию в первую очередь.",
        options: [
            "Здоровье и физическое состояние",
            "Яркость жизни, опыт, впечатления",
            "Отношения, семья, любовь",
            "Обеспеченность и материальный уровень",
            "Призвание и самореализация",
            "Баланс и гармония"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Yoga%20wellness%20practice%20at%20sunset.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Couple%20holding%20hands%20%2828619046534%29.jpg?width=800",
            "https://i.pinimg.com/736x/b7/8b/fb/b78bfb047759f01727ef60733a6f3b7b.jpg",
            "https://i.pinimg.com/1200x/7b/56/2d/7b562ddcfbd1ea081d4eff26ed738b59.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Yoga%20wellness%20practice%20at%20sunset.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Couple%20holding%20hands%20%2828619046534%29.jpg?width=1200",
            "https://i.pinimg.com/736x/b7/8b/fb/b78bfb047759f01727ef60733a6f3b7b.jpg",
            "https://i.pinimg.com/1200x/7b/56/2d/7b562ddcfbd1ea081d4eff26ed738b59.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=1200"
        ],
        feedbacks: [
            "Здоровье и физическое состояние — про опору в теле.\nЕсть чувство, что без запаса сил остальное даётся тяжелее.\nХочется устойчивости, лёгкости и уверенности в себе.",
            "Яркость жизни — это вкус момента.\nВажны движение, впечатления и ощущения, чтобы жизнь не откладывалась.\nЭто живой отклик на то, что происходит.",
            "Отношения и любовь дают ощущение близости.\nЦенны доверие, тепло и чувство «мы».\nЭто источник поддержки и внутренней опоры.",
            "Материальный уровень приносит спокойствие за базу.\nХочется знать, что вопросы закрыты и есть запас прочности.\nДеньги здесь — как фундамент и свобода от тревоги.",
            "Призвание и самореализация дают ощущение своего места.\nВажно делать то, что соответствует внутренним ценностям.\nОт этого приходит смысл и тихая уверенность.",
            "Баланс и гармония собирают жизнь в целое.\nВажно, чтобы разные сферы не тянули в разные стороны.\nХочется внутреннего порядка и согласия с собой."
        ],
        miniChoices: [
            {
                question: "Что сейчас хочется больше?",
                options: [
                    "Больше энергии каждый день",
                    "Сильное, выносливое тело",
                    "Уверенность в себе"
                ],
                hint: "Малые системные изменения\nмогут давать большой эффект ➡️"
            },
            {
                question: "Что притягивает сильнее?",
                options: [
                    "Путешествия",
                    "Эмоции и события",
                    "Новые ощущения"
                ],
                hint: "Когда система убирает лишнее,\nвпечатлений становится больше ➡️"
            },
            {
                question: "Что сейчас важнее?",
                options: [
                    "Партнёрство и любовь",
                    "Семья и дом",
                    "Глубокие связи"
                ],
                hint: "Когда появляется устойчивость,\nблизости становится больше ➡️"
            },
            {
                question: "Что для тебя главное?",
                options: [
                    "Финансовая подушка",
                    "Свобода тратить без тревоги",
                    "Уровень жизни"
                ],
                hint: "Системный рост снижает тревогу ➡️"
            },
            {
                question: "Что сейчас откликается?",
                options: [
                    "Найти своё направление",
                    "Развить потенциал",
                    "Оставить след"
                ],
                hint: "Когда путь ясен,\nэнергия перестаёт распыляться ➡️"
            },
            {
                question: "Где сейчас дисбаланс?",
                options: [
                    "Работа и личная жизнь",
                    "Энергия и нагрузка",
                    "Хочу многое, но не знаю как"
                ],
                hint: "Целостные системы\nупрощают выбор ➡️"
            }
        ]
    },
    {
        id: 4,
        type: "question",
        title: "Что для тебя деньги?",
        subtitle: "В первую очередь это…",
        options: [
            "Награда за сложную работу",
            "Победа",
            "Свобода и интерес",
            "Деньги как цель",
            "Стабильность и безопасность",
            "Инструмент возможностей"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Billionaires%20NY.jpg?width=800",
            "https://i.pinimg.com/736x/17/31/09/173109147d260b33e2b58a175fc3a4a2.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Path%20and%20mountains.jpg?width=800",
            "https://i.pinimg.com/736x/5e/9a/c9/5e9ac9c30bc5996650cf9bdd062232a0.jpg",
            "https://i.pinimg.com/736x/f2/ba/2b/f2ba2b2bb2be7d427e5c2df30852d7e2.jpg"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Billionaires%20NY.jpg?width=1200",
            "https://i.pinimg.com/736x/17/31/09/173109147d260b33e2b58a175fc3a4a2.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Path%20and%20mountains.jpg?width=1200",
            "https://i.pinimg.com/736x/5e/9a/c9/5e9ac9c30bc5996650cf9bdd062232a0.jpg",
            "https://i.pinimg.com/736x/f2/ba/2b/f2ba2b2bb2be7d427e5c2df30852d7e2.jpg"
        ],
        feedbacks: [
            "Награда за сложную работу — про справедливый обмен.\nХочется, чтобы усилия и ответственность были признаны.\nДеньги воспринимаются как подтверждение ценности вклада.",
            "Победа — это драйв и вкус вершины.\nХочется игры на высоких ставках\nи ощущения «я смог(ла)».\nДеньги здесь — как метка уровня\nи силы движения.",
            "Свобода и интерес — это про выбор и живую жизнь.\nНе хочется менять время только на цифры.\nДеньги — средство поддерживать желаемый стиль жизни.",
            "Главная цель — про фокус и направление.\nЕсть готовность идти далеко, если в пути есть смысл.\nДеньги могут быть ресурсом для движения, а не центром.",
            "Стабильность и безопасность дают предсказуемость.\nВажно видеть постепенный рост и понимать, что всё под контролем.\nДеньги приносят спокойствие и устойчивость.",
            "Деньги как инструмент возможностей расширяют горизонты.\nХочется выбирать место, людей, обучение, форматы.\nДеньги ощущаются как инструмент гибкости."
        ],
        miniChoices: [
            {
                question: "Что сейчас важнее?",
                options: [
                    "Больше масштаба",
                    "Больше влияния",
                    "Больше признания"
                ],
                hint: "Иногда рост ускоряется,\nкогда система работает вместе с тобой ➡️"
            },
            {
                question: "Что тебя привлекает больше?",
                options: [
                    "Скорость",
                    "Свобода от ограничений",
                    "Новый уровень жизни"
                ],
                hint: "Если прежние правила не дают роста,\nможно менять игру ➡️"
            },
            {
                question: "Что сейчас важнее?",
                options: [
                    "Время",
                    "Энергия",
                    "Смысл"
                ],
                hint: "Когда процессы упрощаются,\nсвободы становится больше ➡️"
            },
            {
                question: "Что для тебя цель сейчас?",
                options: [
                    "Развитие",
                    "Вклад",
                    "Новый этап"
                ],
                hint: "Системы могут подстраиваться\nпод разные смыслы и цели ➡️"
            },
            {
                question: "Что даёт уверенность?",
                options: [
                    "Прозрачные правила",
                    "Видимый прогресс",
                    "Поддержка системы"
                ],
                hint: "Когда рост измерим,\nим легче управлять ➡️"
            },
            {
                question: "Где тебе важнее свобода?",
                options: [
                    "В решениях",
                    "В перемещениях",
                    "В развитии"
                ],
                hint: "Системы могут усиливать этот выбор ➡️"
            }
        ]
    },
    {
        id: 5,
        type: "question",
        title: "Как ты относишься к тому,\nкак сегодня устроен мир и деньги?",
        subtitle: "Не «правильно», а как ты это чувствуешь.",
        options: [
            "Подняться выше",
            "Чувство несправедливости",
            "Своя территория",
            "Общее процветание",
            "Фокус на своём",
            "Менять правила"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Demonstrator%20with%20sign%20and%20crowd%20in%20background.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Cottage%20house.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/World%20Archery%20target.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chess%20pieces.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Demonstrator%20with%20sign%20and%20crowd%20in%20background.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Cottage%20house.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/World%20Archery%20target.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chess%20pieces.jpg?width=1200"
        ],
        feedbacks: [
            "Подняться выше — про стремление к сильной позиции.\nЕсть желание уменьшить ограничения и увеличить доступ к возможностям.\nВнутри — настрой на рост и расчёт.",
            "Чувство несправедливости — про чувствительность к перекосам.\nОщущается, что правила работают не одинаково.\nЕсть переживание и желание ясности.",
            "Своя территория — про внутренний покой и своё пространство.\nХочется меньше соревнования и больше спокойствия.\nВажно сохранять свой ритм и границы.",
            "Общее процветание — про заботу об общем поле.\nВажно, чтобы рост не был за счёт других.\nЕсть надежда на более гармоничные правила.",
            "Фокус на своём — про концентрацию на зоне влияния.\nХочется меньше распыления и больше управляемости.\nЭто про ясность, фокус и личную ответственность.",
            "Менять правила — про участие в новых моделях.\nЕсть интерес быть частью изменений, а не только адаптироваться.\nЭто про влияние и участие."
        ],
        miniChoices: [
            {
                question: "Что для тебя важнее?",
                options: [
                    "Скорость",
                    "Доступ к возможностям",
                    "Защищённость"
                ],
                hint: "Есть системы,\nгде рост не обязательно означает борьбу ➡️"
            },
            {
                question: "Что задевает сильнее?",
                options: [
                    "Неравные возможности",
                    "Чужой контроль",
                    "Отсутствие прозрачности"
                ],
                hint: "Иногда вместо борьбы\nможно менять саму логику ➡️"
            },
            {
                question: "Что сейчас важнее?",
                options: [
                    "Спокойствие",
                    "Предсказуемость",
                    "Минимум стресса"
                ],
                hint: "Есть модели,\nгде давление меньше ➡️"
            },
            {
                question: "Что для тебя ключевое?",
                options: [
                    "Доступность возможностей",
                    "Честные правила",
                    "Взаимная выгода"
                ],
                hint: "Системы могут усиливать общее,\nне обесценивая личное ➡️"
            },
            {
                question: "Что сейчас в фокусе?",
                options: [
                    "Результат",
                    "Эффективность",
                    "Свой путь"
                ],
                hint: "Иногда системы могут работать\nкак усилитель личных целей ➡️"
            },
            {
                question: "В чём ты видишь свой вклад?",
                options: [
                    "Идеи",
                    "Участие",
                    "Поддержка"
                ],
                hint: "Выбор существует\nблагодаря таким людям ➡️"
            }
        ]
    },
    {
        id: 6,
        type: "question",
        title: "Что в других людях цепляет сильнее всего?",
        subtitle: "Что вызывает самый сильный отклик?",
        options: [
            "Свобода и независимость",
            "Честность и открытость",
            "Положение и возможности",
            "Комфорт и позитив",
            "Общие интересы",
            "Энергичность и амбициозность"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Light%20through%20open%20door.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20Room.JPG?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Friends%20sharing%20a%20conversation%20%2840546574695%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Starting%20Line%20of%20the%202016%20Falmouth%20Road%20Race.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Light%20through%20open%20door.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20Room.JPG?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Friends%20sharing%20a%20conversation%20%2840546574695%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Starting%20Line%20of%20the%202016%20Falmouth%20Road%20Race.jpg?width=1200"
        ],
        feedbacks: [
            "Ощущение свободы делает жизнь шире.\nЭто притягивает и вдохновляет,\nдаёт воздух и желание идти своим путём.",
            "Честность и открытость создают ясность.\nЭто вызывает доверие и спокойствие,\nкогда всё прозрачно и без напряжения.",
            "Масштаб и возможности дают ощущение размаха.\nЭто заводит, пробуждает интерес\nи показывает, что границы можно сдвигать.",
            "Комфорт и позитив создают тёплый фон.\nЭто расслабляет, наполняет и делает жизнь приятнее.",
            "Общие интересы дают чувство «своего круга».\nЭто соединяет, вдохновляет на близость\nи делает общение живым.",
            "Энергия и амбиция задают импульс.\nЭто заряжает, ускоряет ритм\nи вызывает желание двигаться вперёд."
        ],
        miniChoices: [
            {
                question: "Где тебе важнее свобода?",
                options: [
                    "В решениях",
                    "В ритме жизни",
                    "В перемещениях"
                ],
                hint: "Когда есть пространство,\nпоявляется свой темп ➡️"
            },
            {
                question: "Что для тебя признак честности?",
                options: [
                    "Прямые слова",
                    "Прозрачные действия",
                    "Совпадение слов и дел"
                ],
                hint: "Ясность часто снимает внутреннее напряжение ➡️"
            },
            {
                question: "Что в положении цепляет сильнее?",
                options: [
                    "Влияние",
                    "Доступ к возможностям",
                    "Чувство масштаба"
                ],
                hint: "Возможности растут,\nкогда понятно, на что опираться ➡️"
            },
            {
                question: "Что в комфорте главное?",
                options: [
                    "Тёплая атмосфера",
                    "Лёгкий быт",
                    "Доброжелательность"
                ],
                hint: "Комфорт — это не роскошь,\nа устойчивость ➡️"
            },
            {
                question: "Что сближает сильнее всего?",
                options: [
                    "Общие ценности",
                    "Схожие увлечения",
                    "Одинаковый взгляд на жизнь"
                ],
                hint: "Когда совпадают смыслы,\nсвязи становятся глубже ➡️"
            },
            {
                question: "Что в энергии важнее?",
                options: [
                    "Скорость",
                    "Смелые цели",
                    "Постоянное движение"
                ],
                hint: "Энергию легче удерживать,\nкогда понятно — ради чего ➡️"
            }
        ]
    },
    {
        id: 7,
        type: "question",
        title: "Как ты чаще чувствуешь себя сейчас?",
        subtitle: "Выбери то состояние, которое ближе.",
        options: [
            "Усталость и напряжение",
            "Поиск и неопределённость",
            "Что-то мешает воплотить планы",
            "Ожидание возможности",
            "Спокойствие и принятие",
            "Тревога о будущем"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20Fog%20%28113979787%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Abandoned%20House%20%28129401613%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empty%20bench%20%2814825538372%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Theater%20Mask%20%2848465400462%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20Fog%20%28113979787%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Abandoned%20House%20%28129401613%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empty%20bench%20%2814825538372%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Theater%20Mask%20%2848465400462%29.jpg?width=1200"
        ],
        feedbacks: [
            "Усталость и напряжение — состояние, когда всё держится на усилии.\nХочется выдохнуть, снизить давление\nи вернуть себе ресурс.",
            "Поиск и неопределённость ощущаются как туман.\nЕсть тревога и надежда вместе,\nкогда хочется ясности, но путь ещё складывается.",
            "Когда что-то мешает планам,\nэто рождает внутреннее сопротивление.\nХочется убрать препятствия\nи снова почувствовать движение.",
            "Ожидание возможности — это пауза перед шагом.\nВнутри есть готовность и интерес,\nно нужна точка, с которой начнётся движение.",
            "Спокойствие и принятие дают устойчивость.\nЭто про доверие своему ритму\nи ощущение опоры внутри.",
            "Тревога о будущем — понятное чувство,\nкогда много неопределённости.\nХочется больше контроля и ясности,\nчтобы стало спокойнее."
        ],
        miniChoices: [
            {
                question: "Что сейчас важнее всего?",
                options: [
                    "Отдохнуть и восстановиться",
                    "Снизить нагрузку",
                    "Навести порядок в делах"
                ],
                hint: "Когда появляется ресурс,\nдвигаться становится легче ➡️"
            },
            {
                question: "Что помогает в неопределённости?",
                options: [
                    "Маленькие шаги",
                    "План на неделю",
                    "Опора на людей"
                ],
                hint: "Ясность часто приходит через движение ➡️"
            },
            {
                question: "Что больше всего мешает сейчас?",
                options: [
                    "Время и дедлайны",
                    "Недостаток ресурсов",
                    "Отсутствие ясного плана"
                ],
                hint: "Когда видно препятствие,\nего легче обойти ➡️"
            },
            {
                question: "Что даст шанс сдвинуться?",
                options: [
                    "Новый импульс",
                    "Поддержка среды",
                    "Конкретная возможность"
                ],
                hint: "Иногда один шаг запускает цепочку ➡️"
            },
            {
                question: "Что помогает сохранять спокойствие?",
                options: [
                    "Рутина и порядок",
                    "Природа и тишина",
                    "Близкие люди"
                ],
                hint: "Опора возвращает устойчивость ➡️"
            }
        ]
    },
    {
        id: 8,
        type: "question",
        title: "Какой ты видишь свою жизнь через 5–10 лет?",
        subtitle: "Не как мечту, а как естественное продолжение себя.",
        options: [
            "Внутренний покой",
            "Свобода решений",
            "Полнота ощущений",
            "Быть на своём месте",
            "Расширенный горизонт",
            "Оставить след"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/RoadMap.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20on%20the%20Beach%20%2835074409645%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Earthen%20Potter%20Hands.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/RoadMap.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20on%20the%20Beach%20%2835074409645%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Earthen%20Potter%20Hands.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=1200"
        ],
        feedbacks: [
            "Внутренний покой — это жизнь без постоянной тревоги.\nХочется устойчивости, ясности и своего ритма.\nЭто про тихую уверенность и ощущение опоры.",
            "Свобода решений — это гибкость и выбор.\nВажно самому решать, где жить, как работать\nи чему отдавать время. Это даёт лёгкость.",
            "Полнота ощущений — про жизнь, которая происходит.\nЕсть тяга к впечатлениям, эмоциям и открытиям,\nкогда хочется чувствовать вкус момента.",
            "Быть на своём месте — это согласие с собой.\nХочется делать то, что откликается,\nи видеть смысл в том, что ты делаешь.",
            "Расширенный горизонт — про больше возможностей.\nПритягивает качество жизни, доступ и комфорт\nбез демонстрации. Это ощущение выбора.",
            "Оставить след — про вклад и значимость.\nХочется, чтобы результаты жили в людях,\nидеях или проектах, которые меняют что-то важное."
        ],
        miniChoices: [
            {
                question: "Что для тебя символ покоя?",
                options: [
                    "Предсказуемость",
                    "Финансовая защита",
                    "Свой ритм"
                ],
                hint: "Тишина внутри часто начинается с опоры ➡️"
            },
            {
                question: "Где свобода важнее всего?",
                options: [
                    "Место",
                    "Время",
                    "Выбор проектов"
                ],
                hint: "Гибкость делает жизнь легче ➡️"
            },
            {
                question: "Что создаёт насыщенность?",
                options: [
                    "Путешествия",
                    "Эмоции",
                    "Новые люди"
                ],
                hint: "Опыт складывается в ощущение жизни ➡️"
            },
            {
                question: "Что для тебя реализация?",
                options: [
                    "Талант",
                    "Польза другим",
                    "Самовыражение"
                ],
                hint: "Когда смысл ясен,\nпоявляется энергия ➡️"
            },
            {
                question: "Что для тебя показатель уровня?",
                options: [
                    "Качество жизни",
                    "Возможности",
                    "Комфорт и время"
                ],
                hint: "Уровень — это про выбор,\nа не про демонстрацию ➡️"
            },
            {
                question: "Где для тебя вклад?",
                options: [
                    "Люди",
                    "Проекты",
                    "Идеи"
                ],
                hint: "Значимость рождается из действия ➡️"
            }
        ]
    },
    {
        id: 9,
        type: "question",
        title: "Что кажется более тревожным?",
        subtitle: "Иногда важно честно увидеть страх,\nчтобы он перестал управлять.",
        options: [
            "Перемены и неизвестность",
            "Быть заменённым",
            "Потерять то, что имеешь",
            "Одиночество",
            "Не достичь успеха",
            "Потерять себя"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20Fog%20%28113979787%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Factory%20Automation%20Robotics%20Palettizing%20Bread.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Abandoned%20House%20%28129401613%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empty%20bench%20%2814825538372%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Finish%20Line%20%2816199071533%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Theater%20Mask%20%2848465400462%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20Fog%20%28113979787%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Factory%20Automation%20Robotics%20Palettizing%20Bread.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Abandoned%20House%20%28129401613%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empty%20bench%20%2814825538372%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Finish%20Line%20%2816199071533%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Theater%20Mask%20%2848465400462%29.jpg?width=1200"
        ],
        feedbacks: [
            "Мир меняется всё быстрее,\nи впереди много тумана.\nНеясно, что будет дальше,\nкакие правила останутся,\nна что можно опереться.\n\nЭто ощущение отсутствия ориентиров\nи постоянной нестабильности.",
            "Технологии развиваются стремительно,\nи рынки меняются на глазах.\nМногие люди могут стать ненужными\nи потерять свои доходы.\n\nЭто беспокойство о месте в будущем\nи собственной востребованности.",
            "Когда есть что терять,\nкаждое изменение ощущается остро.\nМожно лишиться накопленного,\nпривычного уровня жизни или опоры.\n\nЭто переживание за сохранность\nи чувство незащищённости.",
            "Одиночество пугает тишиной.\nЕсть риск остаться без близких,\nбез «своих» людей и понимания.\n\nЭто про нехватку связи\nи ощущение пустоты рядом.",
            "Можно много стараться,\nно так и не дойти до результата.\nПланка растёт,\nвремени становится меньше.\n\nЭто тревога о нереализованности\nи упущенных возможностях.",
            "Есть страх потерять внутренние ориентиры\nи перестать быть собой.\nОшибки и давление\nмогут размыть ценности.\n\nЭто про личную целостность\nи верность собственному выбору."
        ],
        miniChoices: [
            {
                question: "Что тревожит сильнее?",
                options: [
                    "Неясный план",
                    "Смена правил",
                    "Чувство «я отстаю»",
                    "Риск ошибиться",
                    "Слишком много вариантов"
                ],
                hint: "Ясность — это то,\nчто можно постепенно выстраивать ➡️"
            },
            {
                question: "Что в этом беспокоит?",
                options: [
                    "Потеря дохода",
                    "Потеря роли",
                    "Сложно переучиться",
                    "Непонятно, где быть полезным",
                    "Зависимость от решений других"
                ],
                hint: "Технологии могут не заменять,\nа усиливать людей ➡️"
            },
            {
                question: "Что важнее сохранить?",
                options: [
                    "Доход и подушка",
                    "Дом и быт",
                    "Отношения",
                    "Статус и уважение",
                    "Стабильный ритм"
                ],
                hint: "Устойчивость можно выстраивать постепенно ➡️"
            },
            {
                question: "Чего не хватает рядом?",
                options: [
                    "Близости",
                    "Честного разговора",
                    "«Свои» люди",
                    "Тёплой поддержки",
                    "Совместных дел"
                ],
                hint: "Общность можно создавать осознанно ➡️"
            },
            {
                question: "Что истощает сильнее?",
                options: [
                    "Ритм",
                    "Ответственность",
                    "Отсутствие результата",
                    "Постоянное сравнение",
                    "Слишком высокая планка"
                ],
                hint: "Энергию можно возвращать,\nесли менять систему ➡️"
            },
            {
                question: "Что важнее всего не потерять?",
                options: [
                    "Честность",
                    "Доброту",
                    "Уважение к людям",
                    "Верность себе",
                    "Спокойную совесть"
                ],
                hint: "Забота о себе —\nтоже часть системы ➡️"
            }
        ]
    },

    {
        id: 10,
        type: "question",
        title: "Что сейчас больше всего мешает тебе продвинуться?",
        subtitle: "Иногда достаточно одного недостающего элемента.",
        options: [
            "Правильные люди",
            "Ресурсы",
            "Первый результат",
            "Компетенции",
            "Быть замеченным",
            "Ясность"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Brainstorming%20%2816819367408%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Coins.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Trophy%20%28CH%2018169223%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Spotlights%20on%20a%20stage.png?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Brainstorming%20%2816819367408%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Coins.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Trophy%20%28CH%2018169223%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Spotlights%20on%20a%20stage.png?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=1200"
        ],
        feedbacks: [
            "Тебе важна среда, где есть опора и движение.\nКогда рядом люди с похожим маршрутом,\nстановится легче держать фокус и ритм.\n\nЭто не про «зависеть»,\nа про здоровую поддержку.\nОкружение действительно ускоряет.",
            "Ты уже видишь, куда можно вырасти,\nно чувствуешь узкое место в ресурсе.\nХочется не только идти,\nа ускоряться без лишней суеты.\n\nЭто про масштабирование,\nа не про слабость.\nРесурс — это топливо.",
            "Тебе нужно короткое подтверждение:\nвот оно — работает.\nПусть небольшое,\nно настоящее и измеримое.\n\nТак появляется доверие к себе\nи желание продолжать.\nПервый результат часто запускает всё.",
            "Ты ощущаешь потенциал,\nно не хватает конкретного инструмента:\nчто делать и как.\nХочется ясного набора действий\nи уверенности в них.\n\nЭто про осознанный рост.\nНавыки дают спокойствие.",
            "Тебе важно, чтобы твой вклад был виден.\nЕсть ощущение, что ценность есть,\nно отклика — мало.\n\nЭто про резонанс,\nа не про тщеславие.\nКогда тебя замечают, появляется движение.",
            "Ты готов двигаться,\nно нужна точка приложения усилий.\nХочется меньше распыления\nи больше фокуса.\n\nЭто не сомнение,\nа запрос на направление.\nЯсность делает шаги легче."
        ],
        miniChoices: [
            {
                question: "Что сейчас важнее всего?",
                options: [
                    "Наставник",
                    "Партнёр",
                    "Среда единомышленников",
                    "Поддержка сообщества"
                ],
                hint: "Окружение можно выстраивать осознанно ➡️"
            },
            {
                question: "Что тебе нужно в ресурсе?",
                options: [
                    "Небольшой старт",
                    "Инвестиции в рост",
                    "Финансовая подушка",
                    "Время и фокус"
                ],
                hint: "Иногда ресурс появляется\nкак результат системы ➡️"
            },
            {
                question: "Что дало бы уверенность?",
                options: [
                    "Маленькая победа",
                    "Пример другого человека",
                    "Обратная связь",
                    "Первые стабильные шаги"
                ],
                hint: "Малые результаты\nбыстро накапливаются ➡️"
            },
            {
                question: "Какого навыка не хватает?",
                options: [
                    "Технического",
                    "Коммуникационного",
                    "Стратегического",
                    "Системного",
                    "Продаж/монетизации"
                ],
                hint: "Навыки быстрее растут в практике ➡️"
            },
            {
                question: "Где нужна видимость?",
                options: [
                    "В профессиональной среде",
                    "В интернете",
                    "В нужном сообществе",
                    "Для клиентов",
                    "Для партнёров"
                ],
                hint: "Видимость можно усиливать системно ➡️"
            },
            {
                question: "Что сейчас неясно?",
                options: [
                    "С чего начать",
                    "Куда двигаться дальше",
                    "Что из этого моё",
                    "Как связать шаги",
                    "Где точка роста"
                ],
                hint: "Ясность часто появляется\nв процессе движения ➡️"
            }
        ]
    },

    {
        id: 11,
        type: "question",
        title: "Что у тебя уже есть и может стать опорой?",
        subtitle: "Даже если это пока кажется небольшим.",
        options: [
            "Время и энергия",
            "Захватывающая идея",
            "Капитал для старта",
            "Ценные навыки",
            "Подходящий опыт",
            "Главное — желание"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Brainstorming%20%2816819367408%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Coins.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Trophy%20%28CH%2018169223%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Brainstorming%20%2816819367408%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Coins.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Trophy%20%28CH%2018169223%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=1200"
        ],
        feedbacks: [
            "Время и энергия нужны в любом деле.\nЕсли они есть — это уже опора.\n\nВажно понимать,\nво что именно их вкладывать,\nчтобы движение шло без выгорания.\n\nТемп можно выстроить так,\nчтобы рост был устойчивым,\nа не случайным.",
            "Идея — это внутренний вектор.\nДаже если она пока «сырая»,\nв ней уже есть потенциал.\n\nКогда появляется форма,\nидея быстро набирает силу.\n\nВсе большие истории\nначинаются с такого импульса.",
            "Финансовый ресурс даёт свободу выбора.\nОн позволяет ускоряться\nи не ждать «идеальных условий».\n\nЭто не про деньги ради денег,\nа про возможность инвестировать\nв себя, шаги и систему.",
            "Компетенции — это реальная ценность.\nНавыки остаются с тобой,\nдаже когда меняются правила.\n\nЕсли есть сильная сторона,\nеё можно превращать в опору\nи источник уверенности.",
            "Опыт — это доказательство,\nчто путь уже был пройден.\n\nТо, что получилось однажды,\nостаётся как знание:\n«я умею доходить до результата».\n\nЭта база даёт спокойствие\nи внутреннюю опору.",
            "Желание — это внутренний двигатель.\nЕсли оно есть, путь находится быстрее.\n\nМожно начать с маленьких шагов,\nчтобы желание стало движением,\nа движение — результатом."
        ],
        miniChoices: [
            {
                question: "Как ты можешь использовать время?",
                options: [
                    "Обучение",
                    "Проекты",
                    "Поиск направления",
                    "Отдых и восстановление",
                    "Глубокая работа без спешки"
                ],
                hint: "Темп — тоже стратегия ➡️"
            },
            {
                question: "Что это за идея?",
                options: [
                    "Проект",
                    "Продукт",
                    "Направление",
                    "Новая роль",
                    "Личная практика"
                ],
                hint: "Идеи растут, когда есть форма ➡️"
            },
            {
                question: "Как ты готов использовать деньги?",
                options: [
                    "Обучение",
                    "Проекты",
                    "Создание системы",
                    "Команда или партнёрства",
                    "Тестирование гипотез"
                ],
                hint: "Ресурс работает лучше с фокусом ➡️"
            },
            {
                question: "В чём твоя сила?",
                options: [
                    "Технические навыки",
                    "Коммуникация",
                    "Аналитика и мышление",
                    "Креатив и идеи",
                    "Организация и системность"
                ],
                hint: "Сильная сторона — это точка роста ➡️"
            },
            {
                question: "Где был успех?",
                options: [
                    "Работа",
                    "Проект",
                    "Личная цель",
                    "Сложный период",
                    "Командная история"
                ],
                hint: "Опыт можно превращать в стратегию ➡️"
            },
            {
                question: "Что это за система?",
                options: [
                    "Работа",
                    "Бизнес",
                    "Проект",
                    "Партнёрство",
                    "Регулярная практика"
                ],
                hint: "Опора усиливается, когда её осознаёшь ➡️"
            }
        ]
    },
    {
        id: 12,
        type: "question",
        title: "Что больше зажигает сейчас?",
        subtitle: "Выбери то, что отзывается.",
        options: [
            "Новый автомобиль",
            "Путешествие мечты",
            "Дом или квартира",
            "Финансовая подушка",
            "Образ жизни «могу себе позволить»",
            "Другое / свой вариант"
        ],
        images: [
            "https://i.pinimg.com/736x/ae/c5/d4/aec5d4fb1426863ecb4ba0fb2fd058bd.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=800",
            "https://i.pinimg.com/736x/8b/71/e6/8b71e605f2542591e6ede31978ec2dcf.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piggy%20bank%20%281120756160%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel%20lobby%20%2813634874233%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20on%20the%20Beach%20%2835074409645%29.jpg?width=800"
        ],
        resultImages: [
            "https://i.pinimg.com/736x/ae/c5/d4/aec5d4fb1426863ecb4ba0fb2fd058bd.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=1200",
            "https://i.pinimg.com/736x/8b/71/e6/8b71e605f2542591e6ede31978ec2dcf.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piggy%20bank%20%281120756160%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel%20lobby%20%2813634874233%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20on%20the%20Beach%20%2835074409645%29.jpg?width=1200"
        ],
        feedbacks: [
            "Представь, как забираешь свой новый автомобиль —\nименно тот, который ты хочешь.\nВпервые садишься за руль\nи чувствуешь: это реально,\nу тебя получилось.\n\nЭто про свободу движения,\nконтроль над временем\nи удовольствие от пути.\n\nТакие желания хорошо превращаются\nв конкретные финансовые цели.",
            "Представь поездку мечты:\nновые места, воздух,\nощущение «я живу по-настоящему».\n\nЭто про впечатления,\nперезагрузку\nи вкус к жизни.\n\nКогда есть система,\nсвободы передвижения становится больше.",
            "Представь своё пространство —\nместо, где спокойно и по-настоящему твоё.\n\nЭто про безопасность,\nустойчивость\nи ощущение базы под ногами.\n\nТакие решения рождаются\nиз долгосрочного роста и ясного плана.",
            "Представь утро без тревоги о деньгах.\nКогда есть подушка,\nрешения принимаются спокойно.\n\nЭто не про жадность,\nа про внутреннюю тишину\nи чувство защищённости.\n\nИзобилие начинается\nс безопасности.",
            "Представь жизнь, где можно выбирать:\nпо желанию, а не по цене.\nКомфорт, сервис, детали —\nвсё на своём уровне.\n\nЭто про качество жизни\nи ощущение «я могу».\n\nТакое приходит как результат\nвыстроенной системы.",
            "Представь желание,\nкоторое важно именно тебе.\nБез чужих сценариев,\nбез «как принято».\n\nЭто про свободу формулировать свои цели\nи идти своим маршрутом.\n\nСистема умеет работать\nи с уникальными желаниями."
        ],
        miniChoices: [
            {
                question: "Что в этом важнее всего?",
                options: [
                    "Именно тот автомобиль",
                    "Комфорт и удобство",
                    "Бренд и статус",
                    "Драйв и скорость",
                    "Безопасность"
                ],
                hint: "Чёткая цель ускоряет движение ➡️"
            },
            {
                question: "Что в путешествии главное?",
                options: [
                    "Новые места",
                    "Свобода и спонтанность",
                    "Комфорт и сервис",
                    "Компания",
                    "Перезагрузка"
                ],
                hint: "Мечта становится реальностью через систему ➡️"
            },
            {
                question: "Что в доме важнее?",
                options: [
                    "Своё пространство",
                    "Локация",
                    "Уют и дизайн",
                    "Безопасность",
                    "Инвестиция"
                ],
                hint: "Когда есть ясность, решение приходит легче ➡️"
            },
            {
                question: "Что даёт финансовая подушка?",
                options: [
                    "Спокойствие",
                    "Подушка на 6–12 месяцев",
                    "Свободу решений",
                    "Закрыть долги",
                    "Инвестиции"
                ],
                hint: "Безопасность — основа роста ➡️"
            },
            {
                question: "Что в образе жизни важнее?",
                options: [
                    "Качество и сервис",
                    "Свобода выбирать",
                    "Эстетика и детали",
                    "Статус и признание",
                    "Время для себя"
                ],
                hint: "Качество жизни рождается из устойчивости ➡️"
            },
            {
                question: "Что ближе всего твоему желанию?",
                options: [
                    "Свой сценарий",
                    "Новый опыт",
                    "Забота о близких",
                    "Переезд",
                    "Творческий проект"
                ],
                hint: "Уникальные цели тоже можно выстроить ➡️"
            }
        ]
    },

    {
        id: 13,
        type: "question",
        title: "Какое действие ты хочешь сделать прямо сейчас?",
        subtitle: "Даже маленький шаг — это уже движение.",
        options: [
            "Сделать паузу",
            "Разобраться глубже",
            "Проговорить",
            "Зафиксировать",
            "Наметить шаги",
            "Начать сейчас"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Friends%20sharing%20a%20conversation%20%2840546574695%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Notebook%20with%20pen%2C%20August%2C%202019.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/RoadMap.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Starting%20Line%20of%20the%202016%20Falmouth%20Road%20Race.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20books.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Friends%20sharing%20a%20conversation%20%2840546574695%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Notebook%20with%20pen%2C%20August%2C%202019.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/RoadMap.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Starting%20Line%20of%20the%202016%20Falmouth%20Road%20Race.jpg?width=1200"
        ],
        feedbacks: [
            "Иногда пауза —\nэто тоже действие.\nЕсли сейчас важно не торопиться,\nэто нормально.\n\nТы можешь вернуться позже,\nкогда появится отклик.\nСистема сохранит твой прогресс.",
            "Желание разобраться глубже —\nпро стремление к ясности.\nТы хочешь понимать логику,\nа не просто «верить».\n\nМожно начать с короткого обзора\nбез обязательств.",
            "Диалог помогает увидеть картину шире.\nТы ценишь разные точки зрения\nи не хочешь принимать решения в вакууме.\n\nЭто уважение к себе и процессу.\nЕсть пространство для общения и вопросов.",
            "Фиксация — это способ\nсохранить ясность.\nКогда мысли оформлены,\nих легче превратить в шаги.\n\nЭто про внутренний порядок.\nМожно сохранить личную заметку внутри системы.",
            "Наметить шаги —\nэто перевод мыслей в действие.\nТы хочешь, чтобы появившаяся энергия\nстала движением.\n\nМы можем помочь разбить путь на этапы\nи сделать его понятным.",
            "Начать сейчас —\nзначит дать себе шанс почувствовать,\nкак это работает на практике.\n\nПервый шаг может быть простым\nи займет пару минут,\nно даст реальный результат."
        ],
        miniChoices: [
            {
                question: "Какой формат паузы тебе ближе?",
                options: [
                    "День тишины",
                    "Неделя без решений",
                    "Переключиться на отдых",
                    "Просто не спешить",
                    "Вернуться позже"
                ],
                hint: "Пауза тоже может быть осознанной ➡️"
            },
            {
                question: "Что тебе важно понять?",
                options: [
                    "Как устроена система",
                    "Сколько это занимает времени",
                    "Какие есть уровни",
                    "С чего начать",
                    "Что даст результат"
                ],
                hint: "Ясность снижает тревогу ➡️"
            },
            {
                question: "С кем хочется обсудить?",
                options: [
                    "С близким человеком",
                    "С экспертом",
                    "С наставником",
                    "С теми, кто уже прошёл путь",
                    "В сообществе"
                ],
                hint: "Разговор может ускорить решение ➡️"
            },
            {
                question: "Как тебе удобнее фиксировать?",
                options: [
                    "Короткая заметка",
                    "Список мыслей",
                    "План на неделю",
                    "Голосовые заметки",
                    "Визуальная схема"
                ],
                hint: "Любой формат — уже шаг ➡️"
            },
            {
                question: "Какие шаги важнее?",
                options: [
                    "Самые простые",
                    "Самые полезные",
                    "Самые быстрые",
                    "Самые понятные",
                    "Самые вдохновляющие"
                ],
                hint: "Путь становится легче, когда он разбит ➡️"
            },
            {
                question: "Что станет первым шагом?",
                options: [
                    "Мини‑действие на 5 минут",
                    "Проверка идеи",
                    "Создание плана",
                    "Один звонок",
                    "Один конкретный шаг сегодня"
                ],
                hint: "Малый старт запускает движение ➡️"
            }
        ]
    },

    {
        id: 14,
        type: "final",
        title: "Это финал чекапа и один шаг к цели",
        finalMessage:
            "Эмоции — топливо на нашем пути.\nТеперь можно позволить себе больше!",
        finalQuestions: [
            "Стало ли немного яснее?",
            "Что-то откликнулось внутри?"
        ],
        finalShareText:
            "Можно поделиться с человеком, которому желаешь успеха.\nВам будет что обсудить потом.",
        shareUrl: "https://abundance-checkup.vercel.app/",
        shareMessage: "Прошёл(ла) чек‑ап Abundance Checkup. Посмотри, может быть откликнется.",
        shareHint: "Ссылка скопирована.",
        finalNextTitle: "Какой можно сделать следующий шаг?",
        finalNextText: "Забрать награду и определить следующий шаг",
        nextProductTitle: "Abundance Effect! 🎯",
        nextProductSubtitle: "Инструмент для роста и исполнения желаний.",
        nextSiteUrl: "https://abundance-effect.vercel.app/",
        nextTelegramUrl: "https://t.me/AbundanceEffectBot/Abundance"
    }
];

const progressBar = document.getElementById("progressBar");
const screenTitle = document.getElementById("screenTitle");
const screenSubtitle = document.getElementById("screenSubtitle");
const optionsGrid = document.getElementById("optionsGrid");
const screenQuestion = document.getElementById("screenQuestion");
const screenResult = document.getElementById("screenResult");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const resultImage = document.getElementById("resultImage");
const resultReactions = document.getElementById("resultReactions");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const aiBadge = document.getElementById("aiBadge");
const miniChoice = document.getElementById("miniChoice");
const miniTitle = document.getElementById("miniTitle");
const miniOptions = document.getElementById("miniOptions");
const miniHint = document.getElementById("miniHint");
const inviteLink = document.getElementById("inviteLink");
const finalPanel = document.getElementById("finalPanel");
const finalMessage = document.getElementById("finalMessage");
const finalQuestions = document.getElementById("finalQuestions");
const finalShareText = document.getElementById("finalShareText");
const shareMainBtn = document.getElementById("shareMainBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const shareTelegram = document.getElementById("shareTelegram");
const shareWhatsapp = document.getElementById("shareWhatsapp");
const shareVk = document.getElementById("shareVk");
const shareHint = document.getElementById("shareHint");
const finalNextTitle = document.getElementById("finalNextTitle");
const finalNextText = document.getElementById("finalNextText");
const nextProductTitle = document.getElementById("nextProductTitle");
const nextProductSubtitle = document.getElementById("nextProductSubtitle");
const nextSiteBtn = document.getElementById("nextSiteBtn");
const nextTelegramBtn = document.getElementById("nextTelegramBtn");

let currentIndex = 0;
let pendingAdvance = null;

const fallbackImages = [
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=1200"
    },
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20room%20%2815246771173%29.jpg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20room%20%2815246771173%29.jpg?width=1200"
    },
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Compass%20%281430707180%29.jpg?width=1200"
    },
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Hands%20Together%20%287270379440%29.jpg?width=1200"
    },
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=1200"
    },
    {
        card: "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=600",
        result: "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane%20Wing.jpg?width=1200"
    }
];

const reactionEmojis = ["❤️", "😍", "🥰", "🥳", "💵", "😱", "😰"];
let reactionPresets = [];
let hasReacted = false;
let selectedReactionIndex = null;

function getRandomReactionCount(index) {
    const roll = Math.random();
    const bias = (7 - index);
    const base =
        roll < 0.3 & (index > 3) ? 0 : roll < 0.6 & (index > 1) ? Math.floor(1 + Math.random() * 3) : Math.floor(4 + Math.random() * 9);
    return Math.round(base * bias);
}

function buildReactionPresets() {
    reactionPresets = reactionEmojis.map((emoji, index) => ({
        emoji,
        count: getRandomReactionCount(index)
    }));
}

function renderReactions() {
    if (!resultReactions) return;
    resultReactions.innerHTML = "";
    reactionPresets.forEach((item, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "reaction-chip";
        btn.dataset.index = String(index);
        btn.innerHTML = `
            <span class="reaction-emoji">${item.emoji}</span>
            <span class="reaction-count">${item.count}</span>
        `;
        btn.addEventListener("click", () => {
            if (hasReacted) return;
            item.count += 1;
            const countEl = btn.querySelector(".reaction-count");
            if (countEl) {
                countEl.textContent = String(item.count);
            }
            resultReactions.querySelectorAll(".reaction-chip").forEach((chip) => {
                chip.classList.remove("is-selected");
            });
            btn.classList.add("is-bumped");
            btn.classList.add("is-selected");
            hasReacted = true;
            selectedReactionIndex = index;
            setTimeout(() => btn.classList.remove("is-bumped"), 180);
        });
        resultReactions.appendChild(btn);
    });
}

function renderQuestionScreen() {
    const screen = screens[currentIndex];
    progressBar.style.width = `${(screen.id / screens.length) * 100}%`;
    screenTitle.textContent = screen.title;
    screenSubtitle.textContent = screen.subtitle || "";
    nextBtn.style.display = "";

    optionsGrid.innerHTML = "";
    screenQuestion.classList.add("is-active");
    screenQuestion.classList.toggle("is-intro", screen.type === "intro");
    screenResult.classList.remove("is-active");

    if (screen.type === "intro") {
        startBtn.classList.add("is-visible");
        inviteLink.classList.remove("is-visible");
        return;
    }

    startBtn.classList.remove("is-visible");

    if (screen.type === "final") {
        optionsGrid.innerHTML = "";
        showFinal();
        return;
    }

    screen.options.forEach((label, optionIndex) => {
        const card = document.createElement("button");
        card.className = "house-card";
        card.type = "button";
        card.dataset.option = optionIndex + 1;
        const fallback = fallbackImages[optionIndex];
        const cardImage =
            (screen.images && screen.images[optionIndex]) ||
            (fallback && fallback.card) ||
            "";
        card.innerHTML = `
            <img src="${cardImage}" alt="${label}" loading="lazy" decoding="async">
            <div class="house-info">
                <span class="house-title">${label}</span>
            </div>
        `;
        card.addEventListener("click", () => {
            if (pendingAdvance) {
                clearTimeout(pendingAdvance);
            }
            optionsGrid.querySelectorAll(".house-card").forEach((item) => {
                item.classList.remove("is-selected");
            });
            card.classList.add("is-selected");
            showResult(screen, optionIndex);
        });
        optionsGrid.appendChild(card);
    });
}

function showResult(screen, optionIndex) {
    const title = screen.options[optionIndex];
    const feedback =
        (screen.feedbacks && screen.feedbacks[optionIndex]) ||
        screen.feedback ||
        "";

    const fallback = fallbackImages[optionIndex];
    resultImage.src =
        (screen.resultImages && screen.resultImages[optionIndex]) ||
        (screen.images && screen.images[optionIndex]) ||
        (fallback && (fallback.result || fallback.card)) ||
        "";
    resultImage.alt = title;
    resultImage.loading = "lazy";
    resultImage.decoding = "async";
    resultTitle.textContent = title;
    resultText.textContent = feedback;
    aiBadge.textContent = "Отклик AI";
    hasReacted = false;
    selectedReactionIndex = null;
    buildReactionPresets();
    renderReactions();
    inviteLink.classList.remove("is-visible");
    nextBtn.style.display = "";

    miniOptions.innerHTML = "";
    if (screen.miniChoices && screen.miniChoices[optionIndex]) {
        const choice = screen.miniChoices[optionIndex];
        miniTitle.textContent = choice.question;
        miniHint.textContent = choice.hint || "";
        choice.options.forEach((optionText) => {
            const optionBtn = document.createElement("button");
            optionBtn.type = "button";
            optionBtn.className = "mini-option";
            optionBtn.textContent = optionText;
            optionBtn.addEventListener("click", () => {
                miniOptions.querySelectorAll(".mini-option").forEach((btn) => {
                    btn.classList.remove("is-selected");
                });
                optionBtn.classList.add("is-selected");
            });
            miniOptions.appendChild(optionBtn);
        });
        miniChoice.classList.add("is-visible");
    } else {
        miniChoice.classList.remove("is-visible");
    }
    finalPanel.classList.remove("is-visible");
    if (shareHint) {
        shareHint.textContent = "";
    }

    screenQuestion.classList.remove("is-active");
    screenResult.classList.add("is-active");
}

function showFinal() {
    const finalScreen = screens[currentIndex];
    resultImage.src =
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20Sunset%20%28157351571%29.jpeg?width=1200";
    resultImage.alt = "Финальный экран";
    resultImage.loading = "lazy";
    resultImage.decoding = "async";
    aiBadge.textContent = "Благодарю";
    miniChoice.classList.remove("is-visible");
    resultTitle.textContent = finalScreen.title;
    resultText.textContent = finalScreen.subtitle;
    nextBtn.textContent = "Ок";
    nextBtn.style.display = "none";
    inviteLink.classList.remove("is-visible");

    finalMessage.textContent = finalScreen.finalMessage || "";
    finalQuestions.innerHTML = "";
    if (finalScreen.finalQuestions) {
        finalScreen.finalQuestions.forEach((question) => {
            const item = document.createElement("div");
            item.className = "final-question";
            item.textContent = question;
            finalQuestions.appendChild(item);
        });
    }
    finalShareText.textContent = finalScreen.finalShareText || "";
    if (shareHint) {
        shareHint.textContent = "";
    }
    finalNextTitle.textContent = finalScreen.finalNextTitle || "";
    finalNextText.textContent = finalScreen.finalNextText || "";
    nextProductTitle.textContent = finalScreen.nextProductTitle || "";
    nextProductSubtitle.textContent = finalScreen.nextProductSubtitle || "";
    nextSiteBtn.href = finalScreen.nextSiteUrl || "#";
    nextTelegramBtn.href = finalScreen.nextTelegramUrl || "#";

    const shareUrl = finalScreen.shareUrl || "";
    const shareMessage = finalScreen.shareMessage || finalScreen.title || "";
    if (shareUrl && shareTelegram && shareWhatsapp && shareVk) {
        const encodedUrl = encodeURIComponent(shareUrl);
        const encodedText = encodeURIComponent(shareMessage);
        shareTelegram.href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        shareWhatsapp.href = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        shareVk.href = `https://vk.com/share.php?url=${encodedUrl}&title=${encodedText}`;
    }

    finalPanel.classList.add("is-visible");
    screenQuestion.classList.remove("is-active");
    screenResult.classList.add("is-active");
}

function getFinalScreen() {
    if (screens[currentIndex] && screens[currentIndex].type === "final") {
        return screens[currentIndex];
    }
    return screens.find((screen) => screen.type === "final");
}

async function copyToClipboard(text) {
    if (!text) return false;
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
    }
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    const success = document.execCommand("copy");
    document.body.removeChild(temp);
    return success;
}

shareMainBtn.addEventListener("click", async () => {
    const finalScreen = getFinalScreen();
    if (!finalScreen) return;
    const shareData = {
        title: "Abundance Checkup",
        text: finalScreen.shareMessage || finalScreen.title,
        url: finalScreen.shareUrl
    };
    try {
        if (navigator.share) {
            await navigator.share(shareData);
            if (shareHint) {
                shareHint.textContent = "Спасибо! Можно поделиться ещё раз.";
            }
            return;
        }
    } catch (error) {
        // Ignore share errors and fallback to copy.
    }
    const copied = await copyToClipboard(finalScreen.shareUrl);
    if (shareHint) {
        shareHint.textContent = copied ? finalScreen.shareHint : "Не удалось скопировать.";
    }
});

if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", async () => {
        const finalScreen = getFinalScreen();
        if (!finalScreen) return;
        const copied = await copyToClipboard(finalScreen.shareUrl);
        if (shareHint) {
            shareHint.textContent = copied ? finalScreen.shareHint : "Не удалось скопировать.";
        }
    });
}

function goNext() {
    currentIndex = Math.min(currentIndex + 1, screens.length - 1);
    nextBtn.textContent = "Далее";
    renderQuestionScreen();
}

startBtn.addEventListener("click", () => {
    goNext();
});

nextBtn.addEventListener("click", () => {
    if (currentIndex >= screens.length - 1) {
        currentIndex = 0;
        nextBtn.textContent = "Далее";
    } else {
        currentIndex += 1;
    }
    renderQuestionScreen();
});

renderQuestionScreen();
