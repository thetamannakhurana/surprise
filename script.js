// Countdown Timer (Till 10 PM)
const targetTime = new Date();
targetTime.setHours(22, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `Time left: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
    }
}
setInterval(updateCountdown, 1000);

// Games
function startGame() {
    const now = new Date();
    const hour = now.getHours();

    let gameHtml = '';
    let gameMessage = '';
    
    if (hour >= 8 && hour < 11) {
        gameHtml = generateMemoryMatchGame();
        gameMessage = "Memory Match: Match the pairs! 💞";
    } else if (hour >= 11 && hour < 14) {
        gameHtml = generateWordScrambleGame();
        gameMessage = "Word Scramble: Unscramble the word! 🧩";
    } else if (hour >= 14 && hour < 17) {
        gameHtml = generateRiddleGame();
        gameMessage = "Riddle Challenge: Solve this! 🧐";
    } else if (hour >= 17 && hour < 19.5) {
        gameHtml = generateGuessEmojiGame();
        gameMessage = "Guess the Emoji! 🤔";
    } else if (hour >= 19.5 && hour < 21) {
        gameHtml = generateTriviaQuizGame();
        gameMessage = "Trivia Quiz! 📚";
    }

    document.getElementById("game").innerHTML = gameHtml;
    document.getElementById("gameMessage").innerText = gameMessage;
}

// Redirect after correct answers
function goToMessagePage() {
    window.location.href = "message.html";
}

// Memory Match Game (Now Functional!)
let flippedCards = [];
function generateMemoryMatchGame() {
    const words = ['💖', '🌸', '💞', '🎀'];
    const shuffledWords = words.concat(words).sort(() => Math.random() - 0.5);

    let gameHtml = `<p>Match the hearts! 💕</p><div class="game-board">`;
    shuffledWords.forEach((word, index) => {
        gameHtml += `<div class="game-card" id="card${index}" onclick="flipCard(${index}, '${word}')">?</div>`;
    });
    gameHtml += `</div>`;
    return gameHtml;
}

function flipCard(index, word) {
    const card = document.getElementById(`card${index}`);
    if (flippedCards.length < 2 && !card.classList.contains("matched")) {
        card.innerText = word;
        flippedCards.push({ index, word });
    }
    
    if (flippedCards.length === 2) {
        setTimeout(checkMemoryMatch, 500);
    }
}

function checkMemoryMatch() {
    if (flippedCards[0].word === flippedCards[1].word) {
        document.getElementById(`card${flippedCards[0].index}`).classList.add("matched");
        document.getElementById(`card${flippedCards[1].index}`).classList.add("matched");
    } else {
        document.getElementById(`card${flippedCards[0].index}`).innerText = "?";
        document.getElementById(`card${flippedCards[1].index}`).innerText = "?";
    }
    flippedCards = [];
    
    if (document.querySelectorAll(".matched").length === 8) {
        goToMessagePage();
    }
}
window.onload = startGame;