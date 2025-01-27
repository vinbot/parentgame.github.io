// Initialize all stats
let stats = {
    stress: 0,
    productivity: 0,
    advisorApproval: 0,
    knowledge: 0,
    funding: 0,
    publications: 0,
    workLifeBalance: 0,
    networkingScore: 0,
    mentalHealth: 0,
    researchProgress: 0
};

let currentQuestion = 0;
let availableQuestions = [];

function initializeGame() {
    // Reset stats
    for (let stat in stats) {
        stats[stat] = 0;
    }

    // Initialize available questions (excluding both win and game over questions)
    availableQuestions = Array.from({length: questions.length - 2}, (_, i) => i);
    // Shuffle available questions
    availableQuestions.sort(() => Math.random() - 0.5);
    
    // Set first random question
    currentQuestion = availableQuestions.pop();
    
    updateStats();
    displayQuestion();
}

function getNextQuestion() {
    if (availableQuestions.length === 0) {
        // Check win condition before defaulting to game over
        if (stats.publications >= 50 && stats.productivity >= 50 && stats.researchProgress >= 50) {
            return questions.length - 2; // Win question
        }
        return questions.length - 1; // Game Over question
    }
    return availableQuestions.pop();
}

function updateStats() {
    // Update all stat displays and progress bars
    for (let stat in stats) {
        document.getElementById(stat).textContent = stats[stat];
        // Convert stat value (-100 to 100) to percentage (0 to 100)
        const percentage = (stats[stat] + 100) / 2;
        document.getElementById(`${stat}-bar`).style.width = `${percentage}%`;
    }
}

function displayQuestion() {
    const question = questions[currentQuestion];
    if (!question) {
        console.error('Invalid question index:', currentQuestion);
        currentQuestion = questions.length - 1; // Go to game over
        question = questions[currentQuestion];
    }
    
    document.getElementById('question-text').textContent = question.text;
    const buttons = document.getElementsByClassName('choice-btn');
    buttons[0].textContent = question.choices[0];
    buttons[1].textContent = question.choices[1];
}

function makeChoice(choiceIndex) {
    const question = questions[currentQuestion];
    const consequence = question.consequences[choiceIndex];
    
    // Handle game over/win choice
    if (currentQuestion >= questions.length - 2) { // Check for either win or game over questions
        if (choiceIndex === 0) {
            initializeGame(); // Restart the game
        } else {
            window.close(); // Or some other end game behavior
        }
        return;
    }
    
    // Update all stats based on consequences
    for (let stat in consequence) {
        stats[stat] += consequence[stat];
        // Keep stats within reasonable bounds (-100 to 100)
        stats[stat] = Math.max(-100, Math.min(100, stats[stat]));
    }

    // Check for win/lose conditions
    if (stats.mentalHealth <= -100 || stats.stress >= 100) {
        currentQuestion = questions.length - 1; // Game Over question
    } else if (stats.publications >= 50 && stats.productivity >= 50 && stats.researchProgress >= 50) {
        currentQuestion = questions.length - 2; // Win question
    } else {
        currentQuestion = getNextQuestion();
    }

    updateStats();
    displayQuestion();
}

// Export makeChoice to make it globally available
window.makeChoice = makeChoice;

// Start the game when the module loads
initializeGame();

// export { initializeGame, makeChoice }; 