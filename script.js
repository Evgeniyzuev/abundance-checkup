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
        subtitle: "Не «правильно», а по ощущениям.\nМожно менять со временем.",
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
                hint: "Гибкие системы умеют подстраиваться под уникальные траектории →"
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
                hint: "Малые системные изменения\nмогут давать большой эффект →"
            },
            {
                question: "Что притягивает сильнее?",
                options: [
                    "Путешествия",
                    "Эмоции и события",
                    "Новые ощущения"
                ],
                hint: "Когда система убирает лишнее,\nвпечатлений становится больше →"
            },
            {
                question: "Что сейчас важнее?",
                options: [
                    "Партнёрство и любовь",
                    "Семья и дом",
                    "Глубокие связи"
                ],
                hint: "Когда появляется устойчивость,\nблизости становится больше →"
            },
            {
                question: "Что для тебя главное?",
                options: [
                    "Финансовая подушка",
                    "Свобода тратить без тревоги",
                    "Уровень жизни"
                ],
                hint: "Системный рост снижает тревогу →"
            },
            {
                question: "Что сейчас откликается?",
                options: [
                    "Найти своё направление",
                    "Развить потенциал",
                    "Оставить след"
                ],
                hint: "Когда путь ясен,\nэнергия перестаёт распыляться →"
            },
            {
                question: "Где сейчас дисбаланс?",
                options: [
                    "Работа и личная жизнь",
                    "Энергия и нагрузка",
                    "Хочу многое, но не знаю как"
                ],
                hint: "Целостные системы\nупрощают выбор →"
            }
        ]
    },
    // {
    //     id: 4,
    //     type: "question",
    //     title: "Как ты хочешь распоряжаться своим временем?",
    //     subtitle: "Что откликается сильнее всего?",
    //     options: [
    //         "Чёткий график и предсказуемость",
    //         "Гибкость и выбор",
    //         "Полная свобода",
    //         "Свой ритм, без жёстких рамок",
    //         "Баланс работы и жизни",
    //         "Пока не знаю"
    //     ],
    //     feedbacks: [
    //         "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
    //         "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
    //         "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
    //         "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
    //         "Ты ищешь гармонию, а не крайности — это сильная позиция.",
    //         "Нормально быть в поиске — это значит, что ты прислушиваешься к себе."
    //     ]
    // },
    {
        id: 5,
        type: "question",
        title: "Как ты относишься к неравенству в мире?",
        subtitle: "Выбери то, что ближе сейчас.",
        options: [
            "Главное — быть богаче большинства",
            "Хочу жить в более равном обществе",
            "Мне важно своё место, не сравнения",
            "Хочу расти, не чувствуя, что другие проигрывают",
            "Хочу справедливые правила",
            "Пока не знаю"
        ],
        feedbacks: [
            "Интересно: ты думаешь не только о себе, но и о том, как твой путь влияет на других. Это редкое качество.",
            "Интересно: ты думаешь не только о себе, но и о том, как твой путь влияет на других. Это редкое качество.",
            "Интересно: ты думаешь не только о себе, но и о том, как твой путь влияет на других. Это редкое качество.",
            "Интересно: ты думаешь не только о себе, но и о том, как твой путь влияет на других. Это редкое качество.",
            "Ты про ясные правила — это про зрелость и ответственность.",
            "Нормально быть в размышлениях — это честная позиция."
        ]
    },
    {
        id: 6,
        type: "question",
        title: "Что в других людях цепляет сильнее всего?",
        subtitle: "Что вызывает самый сильный отклик?",
        options: [
            "Свободные путешествия",
            "Работа без начальников",
            "Деньги, которые «работают сами»",
            "Поддержка и сильное окружение",
            "Уверенность и спокойствие",
            "Пока не знаю"
        ],
        feedbacks: [
            "Зависть часто не про слабость. Она подсказывает, в каком направлении тебе действительно хочется двигаться.",
            "Зависть часто не про слабость. Она подсказывает, в каком направлении тебе действительно хочется двигаться.",
            "Зависть часто не про слабость. Она подсказывает, в каком направлении тебе действительно хочется двигаться.",
            "Зависть часто не про слабость. Она подсказывает, в каком направлении тебе действительно хочется двигаться.",
            "Ты замечаешь состояние — это про глубину запроса.",
            "Нормально не фиксировать это сейчас — ты прислушиваешься к себе."
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
            "Интерес, но без ясного плана",
            "Готовность к изменениям",
            "Спокойствие и принятие",
            "Пока не знаю"
        ],
        feedbacks: [
            "Похоже, ты уже на этапе, где внутренне готов к большему, даже если пока не всё понятно.",
            "Похоже, ты уже на этапе, где внутренне готов к большему, даже если пока не всё понятно.",
            "Похоже, ты уже на этапе, где внутренне готов к большему, даже если пока не всё понятно.",
            "Похоже, ты уже на этапе, где внутренне готов к большему, даже если пока не всё понятно.",
            "Ты чувствуешь устойчивость — это важная опора.",
            "Нормально быть в поиске — это часть движения."
        ]
    },
    {
        id: 8,
        type: "question",
        title: "Что тебе сейчас важнее?",
        subtitle: "Выбери один вариант.",
        options: [
            "Надёжная система",
            "Возможность влиять",
            "Чувство безопасности",
            "Пространство для роста",
            "Свобода экспериментов",
            "Пока не знаю"
        ],
        feedbacks: [
            "Этот выбор часто делают люди, которые понимают: дело не только в усилиях, но и в системе вокруг.",
            "Этот выбор часто делают люди, которые понимают: дело не только в усилиях, но и в системе вокруг.",
            "Этот выбор часто делают люди, которые понимают: дело не только в усилиях, но и в системе вокруг.",
            "Этот выбор часто делают люди, которые понимают: дело не только в усилиях, но и в системе вокруг.",
            "Ты выбираешь пространство — это про развитие без лишнего давления.",
            "Нормально быть в размышлении — ты ищешь честный ответ."
        ]
    },
    {
        id: 9,
        type: "question",
        title: "Как ты хочешь чувствовать себя через несколько лет?",
        subtitle: "Что ближе к твоему внутреннему запросу?",
        options: [
            "Спокойно и уверенно",
            "Свободно",
            "Реализованно",
            "С ощущением, что всё не зря",
            "В гармонии с собой",
            "Пока не знаю"
        ],
        feedbacks: [
            "Ты выбираешь не быстрый результат, а состояние жизни. Это зрелый и сильный запрос.",
            "Ты выбираешь не быстрый результат, а состояние жизни. Это зрелый и сильный запрос.",
            "Ты выбираешь не быстрый результат, а состояние жизни. Это зрелый и сильный запрос.",
            "Ты выбираешь не быстрый результат, а состояние жизни. Это зрелый и сильный запрос.",
            "Ты идёшь к целостности — это очень сильный вектор.",
            "Нормально не фиксировать ответ — важнее честность к себе."
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
    aiBadge.textContent = "Итог";
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
