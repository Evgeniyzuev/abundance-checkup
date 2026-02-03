const screens = [
    {
        id: 1,
        type: "intro",
        title: "Хочешь другие результаты в жизни?",
        subtitle:
            "Перед тобой короткий чек-ап. Здесь нет правильных или неправильных ответов. Просто выбирай то, что откликается."
    },
    {
        id: 2,
        type: "question",
        title: "Какой путь тебя сейчас притягивает?",
        subtitle: "Не выбирай «как правильно». Выбирай — что откликается.",
        options: [
            "Высокая должность и статус",
            "Любимое дело, работа на себя",
            "Известность, влияние, публичность",
            "Свой бизнес, создание системы",
            "Смешанный путь",
            "Пока не знаю"
        ],
        feedbacks: [
            "Этот выбор часто делают люди, которым важно чувствовать, что их усилия имеют значение и не пропадают зря.",
            "Этот выбор часто делают люди, которым важно чувствовать, что их усилия имеют значение и не пропадают зря.",
            "Этот выбор часто делают люди, которым важно чувствовать, что их усилия имеют значение и не пропадают зря.",
            "Этот выбор часто делают люди, которым важно чувствовать, что их усилия имеют значение и не пропадают зря.",
            "Ты выбираешь гибкость — это про поиск своего формата, без лишнего давления.",
            "Нормально не знать сейчас. Это тоже точка старта и честный выбор."
        ]
    },
    {
        id: 3,
        type: "question",
        title: "Что для тебя сейчас важнее в деньгах?",
        subtitle: "Выбери тот вариант, который ближе.",
        options: [
            "Спокойная стабильность",
            "Быстрый рост",
            "Свобода и мобильность",
            "Большие цели и масштаб",
            "Баланс и комфорт",
            "Пока не знаю"
        ],
        feedbacks: [
            "Похоже, для тебя деньги — не просто цифры, а способ чувствовать уверенность и контроль над жизнью.",
            "Похоже, для тебя деньги — не просто цифры, а способ чувствовать уверенность и контроль над жизнью.",
            "Похоже, для тебя деньги — не просто цифры, а способ чувствовать уверенность и контроль над жизнью.",
            "Похоже, для тебя деньги — не просто цифры, а способ чувствовать уверенность и контроль над жизнью.",
            "Ты выбираешь устойчивость и качество — это зрелая настройка.",
            "Нормально не фиксировать ответ — ты даёшь себе пространство разобраться."
        ]
    },
    {
        id: 4,
        type: "question",
        title: "Как ты хочешь распоряжаться своим временем?",
        subtitle: "Что откликается сильнее всего?",
        options: [
            "Чёткий график и предсказуемость",
            "Гибкость и выбор",
            "Полная свобода",
            "Свой ритм, без жёстких рамок",
            "Баланс работы и жизни",
            "Пока не знаю"
        ],
        feedbacks: [
            "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
            "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
            "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
            "Этот выбор часто делают люди, которые ценят своё внутреннее состояние и не хотят жить в постоянном напряжении.",
            "Ты ищешь гармонию, а не крайности — это сильная позиция.",
            "Нормально быть в поиске — это значит, что ты прислушиваешься к себе."
        ]
    },
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
        card.innerHTML = `
            <img src="https://picsum.photos/seed/${imageSeeds[optionIndex]}/700/700.jpg" alt="${label}">
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

    resultImage.src = `https://picsum.photos/seed/${imageSeeds[optionIndex]}/800/1000.jpg`;
    resultImage.alt = title;
    resultTitle.textContent = title;
    resultText.textContent = feedback;
    inviteLink.classList.remove("is-visible");

    screenQuestion.classList.remove("is-active");
    screenResult.classList.add("is-active");
}

function showFinal() {
    resultImage.src = "https://picsum.photos/seed/abundance-final/900/1200.jpg";
    resultImage.alt = "Финальный экран";
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
