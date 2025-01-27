// Initialize parent/child stats
let stats = {
    parentStress: 0,
    childHappiness: 0,
    parentingConfidence: 0,
    childEducation: 0,
    finances: 0,
    familyHarmony: 0,
    workLifeBalance: 0,
    childSocialSkills: 0,
    parentMentalHealth: 0,
    childDevelopment: 0
};

let currentQuestionIndex = 0;
let availableQuestions = [];

function initializeGame() {
    // Reset stats
    for (let stat in stats) {
        stats[stat] = 0;
        // Initialize progress bars to 50% (middle position for 0 value)
        const progressBar = document.getElementById(`${stat}-bar`);
        if (progressBar) {
            progressBar.style.width = '50%';
        }
    }
    
    // Initialize available questions (excluding win/game over questions)
    availableQuestions = Array.from(
        { length: questions.length - 2 }, 
        (_, i) => i
    );
    
    // Shuffle available questions
    shuffleArray(availableQuestions);
    
    // Set first random question
    currentQuestionIndex = availableQuestions.pop();
    
    updateStats();
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    if (!question) {
        console.error('Invalid question index:', currentQuestionIndex);
        endGame();
        return;
    }
    
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    questionText.innerText = question.text;
    choicesContainer.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('choice-btn');
        button.addEventListener('click', () => selectChoice(index));
        choicesContainer.appendChild(button);
    });
}

function selectChoice(choiceIndex) {
    const question = questions[currentQuestionIndex];
    const consequences = question.consequences[choiceIndex];

    // Update stats based on consequences
    for (let stat in consequences) {
        stats[stat] += consequences[stat];
        // Keep stats within bounds (-100 to 100)
        stats[stat] = Math.max(-100, Math.min(100, stats[stat]));
    }

    updateStats();
    if (!checkGameEndConditions()) {
        // Move to next question if game hasn't ended
        if (availableQuestions.length > 0) {
            currentQuestionIndex = availableQuestions.pop();
            displayQuestion();
        } else {
            // If no more questions, check if win conditions are met
            if (checkWinConditions()) {
                currentQuestionIndex = questions.length - 2; // Win question
            } else {
                currentQuestionIndex = questions.length - 1; // Game Over question
            }
            displayQuestion();
        }
    }
}

function checkGameEndConditions() {
    // Game Over conditions
    if (stats.parentMentalHealth <= -80 || 
        stats.childHappiness <= -80 || 
        stats.parentStress >= 100) { // Adjusted to trigger game over at 100
        currentQuestionIndex = questions.length - 1; // Game Over question
        displayQuestion();
        return true;
    }

    // Win conditions
    if (checkWinConditions()) {
        currentQuestionIndex = questions.length - 2; // Win question
        displayQuestion();
        return true;
    }

    return false;
}

function checkWinConditions() {
    return stats.childDevelopment >= 60 && 
           stats.familyHarmony >= 50 && 
           stats.childHappiness >= 50 && 
           stats.parentingConfidence >= 50;
}

function isGameOver() {
    return currentQuestionIndex >= questions.length - 2;
}

function updateStats() {
    // Update all stat displays
    for (let stat in stats) {
        const element = document.getElementById(stat);
        if (element) {
            element.textContent = stats[stat];
            // Update progress bar
            const progressBar = document.getElementById(`${stat}-bar`);
            if (progressBar) {
                // Convert stat value (-100 to 100) to percentage (0 to 100)
                const percentage = ((stats[stat] + 100) / 2).toFixed(1);
                progressBar.style.width = `${percentage}%`;
            }
        }
    }
}

function endGame() {
    const questionText = document.getElementById('question-text');
    questionText.innerText = "Game Over! Thank you for playing.";
    document.getElementById('choices-container').innerHTML = '';
    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('hidden');
    nextButton.addEventListener('click', initializeGame); // Ensure the game can restart
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame); 