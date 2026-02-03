// Psychological test script
document.addEventListener('DOMContentLoaded', function() {
    // Test configuration
    const testConfig = {
        totalQuestions: 5,
        currentQuestion: 1,
        answers: [],
        questions: [
            {
                id: 1,
                text: "Какой дом тебе ближе?",
                images: [
                    { id: 1, label: "Современный особняк", description: "Амбициозный и целеустремленный" },
                    { id: 2, label: "Уютная хижина", description: "Спокойный и уравновешенный" },
                    { id: 3, label: "Городская квартира", description: "Практичный и адаптивный" },
                    { id: 4, label: "Загородный дом", description: "Семейный и устойчивый" }
                ]
            },
            {
                id: 2,
                text: "Какой стиль интерьера предпочитаешь?",
                images: [
                    { id: 5, label: "Минимализм", description: "Организованный и ясный" },
                    { id: 6, label: "Прованс", description: "Романтичный и творческий" },
                    { id: 7, label: "Хай-тек", description: "Технологичный и современный" },
                    { id: 8, label: "Классика", description: "Традиционный и надежный" }
                ]
            },
            {
                id: 3,
                text: "Какой ландшафт вокруг дома?",
                images: [
                    { id: 9, label: "Горы", description: "Целеустремленный и сильный" },
                    { id: 10, label: "Море", description: "Свободолюбивый и творческий" },
                    { id: 11, label: "Лес", description: "Гармоничный и спокойный" },
                    { id: 12, label: "Город", description: "Динамичный и амбициозный" }
                ]
            },
            {
                id: 4,
                text: "Какой цвет дома предпочитаешь?",
                images: [
                    { id: 13, label: "Белый", description: "Чистый и организованный" },
                    { id: 14, label: "Коричневый", description: "Надежный и устойчивый" },
                    { id: 15, label: "Серый", description: "Практичный и нейтральный" },
                    { id: 16, label: "Черный", description: "Сильный и уверенный" }
                ]
            },
            {
                id: 5,
                text: "Какой двор/территория?",
                images: [
                    { id: 17, label: "Большой сад", description: "Семейный и заботливый" },
                    { id: 18, label: "Бассейн", description: "Активный и общительный" },
                    { id: 19, label: "Терраса", description: "Романтичный и расслабленный" },
                    { id: 20, label: "Гараж", description: "Практичный и целеустремленный" }
                ]
            }
        ],
        results: {
            ambitious: "Вы амбициозный и целеустремленный человек. Ваш путь к успеху лежит через четкое планирование и постоянное саморазвитие. Не бойтесь ставить высокие цели - вы способны их достичь!",
            calm: "Вы спокойный и уравновешенный человек. Ваш путь к успеху - это гармония между работой и личной жизнью. Доверяйте своей интуиции и не спешите - все придет в свое время.",
            practical: "Вы практичный и адаптивный человек. Ваш путь к успеху - это гибкость и умение приспосабливаться к изменениям. Развивайте свои навыки и будьте открыты для новых возможностей.",
            family: "Вы семейный и устойчивый человек. Ваш путь к успеху - это создание крепкого фундамента и забота о близких. Успех для вас - это не только карьера, но и счастье в личной жизни.",
            creative: "Вы творческий и свободолюбивый человек. Ваш путь к успеху - это самовыражение и следование своим увлечениям. Не бойтесь быть не таким как все - ваша уникальность ваш главный актив!"
        }
    };

    // DOM elements
    const questionText = document.querySelector('.question-text');
    const imageGrid = document.getElementById('imageGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.querySelector('.progress-fill');
    const questionNumber = document.querySelector('.question-number');

    // State variables
    let selectedImage = null;

    // Initialize test
    initTest();

    // Event listeners
    prevBtn.addEventListener('click', handlePrevQuestion);
    nextBtn.addEventListener('click', handleNextQuestion);

    // Initialize test
    function initTest() {
        loadQuestion(testConfig.currentQuestion);
        updateProgress();
        setupKeyboardNavigation();
    }

    // Load question
    function loadQuestion(questionId) {
        const question = testConfig.questions.find(q => q.id === questionId);
        
        if (!question) return;

        // Update question text
        questionText.textContent = question.text;

        // Generate image cards
        imageGrid.innerHTML = '';
        question.images.forEach(image => {
            const card = createImageCard(image);
            imageGrid.appendChild(card);
        });

        // Restore selected answer if exists
        if (testConfig.answers[questionId - 1]) {
            const selectedCard = imageGrid.querySelector(`[data-image="${testConfig.answers[questionId - 1]}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
                selectedImage = selectedCard;
            }
        }

        // Update question number
        questionNumber.textContent = `Вопрос ${questionId} из ${testConfig.totalQuestions}`;
    }

    // Create image card
    function createImageCard(image) {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.dataset.image = image.id;

        // Add image
        const img = document.createElement('img');
        img.src = `https://picsum.photos/seed/house${image.id}/400/300.jpg`;
        img.alt = image.label;
        card.appendChild(img);

        // Add label
        const label = document.createElement('div');
        label.className = 'image-label';
        label.textContent = image.label;
        card.appendChild(label);

        // Add click handler
        card.addEventListener('click', function() {
            selectImage(this);
        });

        // Add touch feedback
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });

        return card;
    }

    // Select image
    function selectImage(card) {
        // Deselect previous image
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }

        // Select new image
        card.classList.add('selected');
        selectedImage = card;

        // Store answer
        testConfig.answers[testConfig.currentQuestion - 1] = parseInt(card.dataset.image);

        // Enable next button
        nextBtn.disabled = false;
    }

    // Handle previous question
    function handlePrevQuestion() {
        if (testConfig.currentQuestion > 1) {
            testConfig.currentQuestion--;
            loadQuestion(testConfig.currentQuestion);
            updateProgress();
            updateNavigationButtons();
        }
    }

    // Handle next question
    function handleNextQuestion() {
        if (selectedImage && testConfig.currentQuestion < testConfig.totalQuestions) {
            testConfig.currentQuestion++;
            loadQuestion(testConfig.currentQuestion);
            updateProgress();
            updateNavigationButtons();
            selectedImage = null;
            nextBtn.disabled = true;
        } else if (testConfig.currentQuestion === testConfig.totalQuestions) {
            showResults();
        }
    }

    // Update progress
    function updateProgress() {
        const progress = (testConfig.currentQuestion / testConfig.totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Update navigation buttons
    function updateNavigationButtons() {
        prevBtn.style.display = testConfig.currentQuestion > 1 ? 'block' : 'none';
        nextBtn.textContent = testConfig.currentQuestion < testConfig.totalQuestions ? 'Далее' : 'Показать результат';
    }

    // Show results
    function showResults() {
        // Calculate result
        const result = calculateResult();

        // Create result page
        const resultHTML = `
            <div class="result-container">
                <div class="result-header">
                    <h2>Ваш результат</h2>
                    <p>Поздравляем! Вы завершили тест.</p>
                </div>
                <div class="result-content">
                    <div class="result-characteristic">
                        <h3>Ваша характеристика:</h3>
                        <p>${result.description}</p>
                    </div>
                    <div class="result-advice">
                        <h3>Советы для успеха:</h3>
                        <ul>
                            <li>Доверяйте своей интуиции</li>
                            <li>Ставьте реалистичные цели</li>
                            <li>Развивайте свои сильные стороны</li>
                            <li>Не бойтесь неудач - они ваш опыт</li>
                        </ul>
                    </div>
                    <div class="result-summary">
                        <h3>Краткое резюме:</h3>
                        <p>${result.summary}</p>
                    </div>
                </div>
                <div class="result-actions">
                    <button class="btn" onclick="restartTest()">Пройти еще раз</button>
                    <button class="btn btn-secondary" onclick="shareResult()">Поделиться</button>
                </div>
            </div>
        `;

        // Replace content with result
        const questionContainer = document.querySelector('.question-container');
        questionContainer.innerHTML = resultHTML;
    }

    // Calculate result
    function calculateResult() {
        // Simple result calculation based on answers
        const answerDescriptions = testConfig.questions.flatMap(q => 
            q.images.filter(img => testConfig.answers.includes(img.id)).map(img => img.description)
        );

        // Determine main characteristic
        const characteristicCounts = {};
        answerDescriptions.forEach(desc => {
            characteristicCounts[desc] = (characteristicCounts[desc] || 0) + 1;
        });

        const mainCharacteristic = Object.keys(characteristicCounts).reduce((a, b) => 
            characteristicCounts[a] > characteristicCounts[b] ? a : b
        );

        // Get result template
        const resultTemplates = Object.values(testConfig.results);
        const result = resultTemplates.find(r => r.includes(mainCharacteristic));

        return {
            description: mainCharacteristic,
            summary: result || "Вы уникальный человек с разносторонними талантами!"
        };
    }

    // Setup keyboard navigation
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && testConfig.currentQuestion > 1) {
                handlePrevQuestion();
            } else if (e.key === 'ArrowRight' && testConfig.currentQuestion < testConfig.totalQuestions) {
                handleNextQuestion();
            } else if (e.key === 'Enter' && selectedImage) {
                handleNextQuestion();
            }
        });
    }

    // Restart test
    window.restartTest = function() {
        testConfig.currentQuestion = 1;
        testConfig.answers = [];
        selectedImage = null;
        initTest();
    };

    // Share result
    window.shareResult = function() {
        if (navigator.share) {
            navigator.share({
                title: 'Результат моего психологического теста',
                text: 'Я прошел интересный психологический тест о выборе дома!',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const shareURL = `https://twitter.com/intent/tweet?text=Я прошел интересный психологический тест о выборе дома! ${window.location.href}`;
            window.open(shareURL, '_blank');
        }
    };

    // Add touch feedback for mobile
    document.addEventListener('touchstart', function() {
        document.body.classList.add('touched');
    }, { once: true });
});