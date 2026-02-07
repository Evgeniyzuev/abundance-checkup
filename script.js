const screens = [
    {
        id: 1,
        type: "intro",
        title: "Представь жизнь, где становится легче дышать",
        subtitle:
            "Это короткий чек-ап покажет, куда ты движешься  \n И как выбирать свой настоящий путь\n\n Здесь нет правильных или неправильных ответов.\n\nВыбирай то что тебе ближе. "
    },
    {
        id: 2,
        type: "question",
        title: "Откуда ты хочешь, чтобы приходили деньги?",
        subtitle: "Не как «правильно», а как ты чувствуешь",
        options: [
            "Карьерный рост в компании",
            "Стабильная работа + комфорт",
            "Любимое дело и работа на себя",
            "Публичность и известность",
            "Свой бизнес и проекты",
            "Свой путь (другое)"
        ],
        images: [
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=700&q=70",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=70",
            "https://i.pinimg.com/736x/1b/15/2a/1b152abede11ac8a15110ba044f55a2c.jpg",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=70",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=70",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=70"
        ],
        resultImages: [
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70",
            "https://i.pinimg.com/736x/1b/15/2a/1b152abede11ac8a15110ba044f55a2c.jpg",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=70"
        ],
        feedbacks: [
            "Этот выбор делают люди,\nкоторым важно чувствовать свой вес.\n\nТы хочешь, чтобы к твоему мнению\nприслушивались,\nа решения имели последствия.\n\nДля тебя деньги —\nэто не только доход,\nно и позиция.",
            "Этот выбор делают люди,\nкоторым важно чувствовать опору.\n\nТы ценишь ясные правила,\nпонятный ритм\nи ощущение «я справляюсь».\n\nЭто не про застой,\nа про умную устойчивость.",
            "Этот выбор делают люди,\nкоторые не хотят отделять\nжизнь от работы.\n\nТебе важно заниматься тем,\nчто отзывается внутри,\nи жить по своему ритму.\n\nСвобода для тебя —\nэто ресурс, а не хаос.",
            "Этот выбор делают люди,\nкоторым важно делиться собой.\n\nУ тебя есть мысли, образы\nили опыт,\nкоторые хочется показать миру.\n\nЭто не про эго,\nа про резонанс.",
            "Этот выбор делают люди,\nкоторые думают шире одного шага.\n\nТы хочешь создавать системы,\nкоторые работают без постоянного участия.\n\nДля тебя важно видеть,\nкак идеи превращаются в активы.",
            "Этот выбор делают люди,\nкоторым тесно в готовых сценариях.\n\nТы чувствуешь,\nчто твой путь может быть другим —\nи это нормально.\n\nИногда именно так\nначинается настоящее развитие."
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
            "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20Room.JPG?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Earthen%20Potter%20Hands.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Yoga%20wellness%20practice%20at%20sunset.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20landscape%20%2821827581301%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Couple%20holding%20hands%20%2828619046534%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Living%20Room.JPG?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Earthen%20Potter%20Hands.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Meditating%20In%20Nature%20%28Unsplash%29.jpg?width=1200"
        ],
        feedbacks: [
            "Этот выбор делают люди,\nкоторые чувствуют:\nбез энергии всё остальное даётся сложнее.\n\nТебе важно хорошо чувствовать себя в теле,\nбыть в форме\nи иметь запас сил для жизни.",
            "Этот выбор делают люди,\nкоторые не хотят «откладывать жизнь».\n\nТебе важно чувствовать вкус момента,\nпробовать новое\nи наполняться впечатлениями.\n\nЖизнь для тебя —\nэто опыт, а не ожидание.",
            "Этот выбор делают люди,\nкоторым важно быть не одними.\n\nТебе ценно чувствовать близость,\nдоверие\nи эмоциональную связь.\n\nДля тебя отношения —\nэто источник силы.",
            "Этот выбор делают люди,\nкоторые хотят спокойствия за будущее.\n\nТебе важно знать,\nчто базовые вопросы закрыты,\nа возможности открыты.\n\nДеньги здесь —\nне роскошь, а фундамент.",
            "Этот выбор делают люди,\nкоторые хотят чувствовать:\nя на своём месте.\n\nТебе важно заниматься тем,\nчто отражает тебя\nи приносит ощущение смысла.\n\nЭто путь к внутреннему удовлетворению.",
            "Этот выбор делают люди,\nкоторые чувствуют,\nчто важно собрать жизнь в целое.\n\nТебе важно,\nчтобы разные сферы\nне конфликтовали между собой.\n\nЭто про внутренний порядок."
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
        subtitle: "В первую очередь это...",
        options: [
            "Награда за сложную работу",
            "Выигрыш и удача",
            "Свобода и интерес",
            "Главная цель",
            "Стабильность и безопасность",
            "Деньги как инструмент возможностей"
        ],
        images: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Billionaires%20NY.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Casino%20Dice%20%2811275288753%29.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Path%20and%20mountains.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Light%20through%20open%20door.jpg?width=800"
        ],
        resultImages: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Billionaires%20NY.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Casino%20Dice%20%2811275288753%29.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Freedom%20%28242834275%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Path%20and%20mountains.jpg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Stairs%20%28260496903%29.jpeg?width=1200",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Light%20through%20open%20door.jpg?width=1200"
        ],
        feedbacks: [
            "Этот выбор делают люди,\nкоторым важно чувствовать справедливость.\n\nТы готов вкладываться,\nбрать ответственность\nи делать сложные вещи —\nесли результат этого стоит.\n\nДеньги для тебя —\nподтверждение ценности твоего вклада.",
            "Этот выбор делают люди,\nкоторые чувствуют потенциал большего.\n\nТебе близки моменты,\nкогда всё может измениться быстро.\n\nЭто не про азарт,\nа про ощущение:\n«я готов к скачку».",
            "Этот выбор делают люди,\nкоторые ценят внутреннюю свободу.\n\nТы не хочешь менять жизнь\nна цифры в отчётах.\n\nДеньги для тебя —\nсредство поддерживать жизнь,\nкоторая тебе нравится.",
            "Этот выбор делают люди,\nкоторым важно знать — зачем.\n\nТы готов идти далеко,\nесли путь имеет значение.\n\nДеньги могут быть —\nне целью,\nа ресурсом для движения.",
            "Этот выбор делают люди,\nкоторым важно чувствовать процесс.\n\nТы не ищешь чудо —\nты хочешь видеть,\nкак шаг за шагом становится больше.\n\nДля тебя ценна предсказуемость\nи ощущение контроля.",
            "Этот выбор делают люди,\nкоторые хотят расширять горизонты.\n\nДля тебя деньги —\nэто возможность выбирать:\nгде жить,\nс кем работать,\nчему учиться.\n\nЭто про гибкость и контроль над жизнью."
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
                hint: "Системы могут создавать\nбольше возможностей для таких переходов ➡️"
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
            "https://images.unsplash.com/photo-1764093369645-0b04338873f8?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1759240167756-3716fdb2494f?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1753872405845-f417e7e97b4f?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1696254797731-58b78d199dce?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1766685935914-8df748faca05?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1763856957026-a74ab4f05891?auto=format&fit=crop&w=800&q=70"
        ],
        resultImages: [
            "https://images.unsplash.com/photo-1764093369645-0b04338873f8?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1759240167756-3716fdb2494f?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1753872405845-f417e7e97b4f?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1696254797731-58b78d199dce?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1766685935914-8df748faca05?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1763856957026-a74ab4f05891?auto=format&fit=crop&w=1200&q=70"
        ],
        feedbacks: [
            "Этот выбор делают люди,\nкоторые чувствуют:\nмир неравен — и в нём нужно уметь играть.\n\nТы хочешь быть в позиции,\nгде меньше ограничений\nи больше возможностей.\n\nЭто про адаптацию и расчёт.",
            "Этот выбор делают люди,\nкоторые остро чувствуют перекосы.\n\nТы видишь,\nчто усилия распределяются неравно,\nа правила работают не для всех.\n\nЭто не про жалобы —\nэто про чувствительность к системе.",
            "Этот выбор делают люди,\nкоторые ценят внутренний покой.\n\nТы не хочешь постоянно доказывать,\nсоревноваться\nили подстраиваться.\n\nДля тебя важно\nсохранить себя и свой ритм.",
            "Этот выбор делают люди,\nкоторым важно,\nчтобы рост не был за счёт других.\n\nТы веришь,\nчто общество может быть устроено\nболее гармонично.\n\nЭто про ценности и долгий горизонт.",
            "Этот выбор делают люди,\nкоторые не хотят распыляться.\n\nТы понимаешь,\nчто мир сложен и неидеален,\nно предпочитаешь\nуправлять тем, что в твоей зоне влияния.\n\nЭто про ясность и личную ответственность.",
            "Этот выбор делают люди,\nкоторые чувствуют,\nчто старые модели себя исчерпали.\n\nТебе интересно быть частью\nчего-то нового,\nа не просто приспосабливаться.\n\nЭто про участие и влияние."
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
            "https://picsum.photos/seed/abundance-freedom/800/800",
            "https://picsum.photos/seed/abundance-honesty/800/800",
            "https://picsum.photos/seed/abundance-scale/800/800",
            "https://picsum.photos/seed/abundance-cozy/800/800",
            "https://picsum.photos/seed/abundance-friends/800/800",
            "https://picsum.photos/seed/abundance-energy/800/800"
        ],
        resultImages: [
            "https://picsum.photos/seed/abundance-freedom/1200/1200",
            "https://picsum.photos/seed/abundance-honesty/1200/1200",
            "https://picsum.photos/seed/abundance-scale/1200/1200",
            "https://picsum.photos/seed/abundance-cozy/1200/1200",
            "https://picsum.photos/seed/abundance-friends/1200/1200",
            "https://picsum.photos/seed/abundance-energy/1200/1200"
        ],
        feedbacks: [
            "Ощущение свободы делает жизнь шире.\nЭто притягивает и вдохновляет,\nдаёт воздух и желание идти своим путём.",
            "Честность и открытость создают ясность.\nЭто вызывает доверие и спокойствие,\nкогда всё прозрачно и без напряжения.",
            "Масштаб и возможности дают ощущение размаха.\nЭто заводит, пробуждает интерес\nи показывает, что границы можно сдвигать.",
            "Комфорт и позитив создают тёплый фон.\nЭто расслабляет, наполняет\nи делает повседневность легче.",
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
            "Что-то мешает осуществить планы",
            "Ожидание возможности",
            "Спокойствие и принятие",
            "Тревога о будущем"
        ],
        images: [
            "https://picsum.photos/seed/abundance-fatigue/800/800",
            "https://picsum.photos/seed/abundance-fog/800/800",
            "https://picsum.photos/seed/abundance-block/800/800",
            "https://picsum.photos/seed/abundance-wait/800/800",
            "https://picsum.photos/seed/abundance-calm/800/800",
            "https://picsum.photos/seed/abundance-worry/800/800"
        ],
        resultImages: [
            "https://picsum.photos/seed/abundance-fatigue/1200/1200",
            "https://picsum.photos/seed/abundance-fog/1200/1200",
            "https://picsum.photos/seed/abundance-block/1200/1200",
            "https://picsum.photos/seed/abundance-wait/1200/1200",
            "https://picsum.photos/seed/abundance-calm/1200/1200",
            "https://picsum.photos/seed/abundance-worry/1200/1200"
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
            "https://picsum.photos/seed/abundance-peace/800/800",
            "https://picsum.photos/seed/abundance-choice/800/800",
            "https://picsum.photos/seed/abundance-fullness/800/800",
            "https://picsum.photos/seed/abundance-calling/800/800",
            "https://picsum.photos/seed/abundance-horizon/800/800",
            "https://picsum.photos/seed/abundance-impact/800/800"
        ],
        resultImages: [
            "https://picsum.photos/seed/abundance-peace/1200/1200",
            "https://picsum.photos/seed/abundance-choice/1200/1200",
            "https://picsum.photos/seed/abundance-fullness/1200/1200",
            "https://picsum.photos/seed/abundance-calling/1200/1200",
            "https://picsum.photos/seed/abundance-horizon/1200/1200",
            "https://picsum.photos/seed/abundance-impact/1200/1200"
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
        id: 10,
        type: "final",
        title: "Картина начинает складываться",
        subtitle:
            "Ты хочешь больше, чем просто «нормально». И это не проблема. Многие желания конфликтуют не внутри человека — а внутри системы. В правильной системе они могут усиливать друг друга."
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
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const aiBadge = document.getElementById("aiBadge");
const miniChoice = document.getElementById("miniChoice");
const miniTitle = document.getElementById("miniTitle");
const miniOptions = document.getElementById("miniOptions");
const miniHint = document.getElementById("miniHint");
const inviteLink = document.getElementById("inviteLink");

let currentIndex = 0;
let pendingAdvance = null;

const imageSeeds = [
    "abundance-card-1",
    "abundance-card-2",
    "abundance-card-3",
    "abundance-card-4",
    "abundance-card-5",
    "abundance-card-6"
];

function renderQuestionScreen() {
    const screen = screens[currentIndex];
    progressBar.style.width = `${(screen.id / screens.length) * 100}%`;
    screenTitle.textContent = screen.title;
    screenSubtitle.textContent = screen.subtitle || "";

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
        const cardImage =
            (screen.images && screen.images[optionIndex]) ||
            `https://picsum.photos/seed/${imageSeeds[optionIndex]}/600/600.jpg`;
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

    resultImage.src =
        (screen.resultImages && screen.resultImages[optionIndex]) ||
        `https://picsum.photos/seed/${imageSeeds[optionIndex]}/900/1200.jpg`;
    resultImage.alt = title;
    resultImage.loading = "lazy";
    resultImage.decoding = "async";
    resultTitle.textContent = title;
    resultText.textContent = feedback;
    aiBadge.textContent = "Отклик AI";
    inviteLink.classList.remove("is-visible");

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

    screenQuestion.classList.remove("is-active");
    screenResult.classList.add("is-active");
}

function showFinal() {
    resultImage.src = "https://picsum.photos/seed/abundance-final/900/1200.jpg";
    resultImage.alt = "Финальный экран";
    resultImage.loading = "lazy";
    resultImage.decoding = "async";
    aiBadge.textContent = "Благодарю";
    miniChoice.classList.remove("is-visible");
    resultTitle.textContent = screens[currentIndex].title;
    resultText.textContent = screens[currentIndex].subtitle;
    nextBtn.textContent = "Ок";
    inviteLink.classList.add("is-visible");
    screenQuestion.classList.remove("is-active");
    screenResult.classList.add("is-active");
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
