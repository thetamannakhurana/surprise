// Countdown Timer (Until 10 PM)
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

// Load Game Based on Time of Day
function startGame() {
    const now = new Date();
    const hour = now.getHours();
    let gameHtml = '';
    let gameMessage = '';

    if (hour >= 8 && hour < 11) {
        gameHtml = generateMemoryMatchGame();
        gameMessage = "Match the cute pairs! 🧡";
    } else if (hour >= 11 && hour < 14) {
        gameHtml = generateWordScrambleGame();
        gameMessage = "Unscramble this cute word! 💕";
    } else if (hour >= 14 && hour < 17) {
        gameHtml = generateRiddleGame();
        gameMessage = "Solve this love riddle! ❤️";
    } else if (hour >= 17 && hour < 19.5) {
        gameHtml = generateGuessEmojiGame();
        gameMessage = "Guess the cute emoji! 😍";
    } else if (hour >= 19.5 && hour < 21) {
        gameHtml = generateTriviaQuizGame();
        gameMessage = "Answer this sweet quiz! 🎀";
    }

    document.getElementById("game").innerHTML = gameHtml;
    document.getElementById("gameMessage").innerText = gameMessage;
}

// Memory Match Game (8AM - 11AM)
function generateMemoryMatchGame() {
    return `<p>Find the matching hearts! 💕</p>
            <button onclick="redirectToMessage()">I matched them all! 💖</button>`;
}

// Word Scramble Game (11AM - 2PM)
function generateWordScrambleGame() {
    return `<p>Scrambled word: "sseuiprr"</p>
            <input type="text" id="wordInput">
            <button onclick="checkWordScramble()">Check</button>`;
}

function checkWordScramble() {
    const input = document.getElementById('wordInput').value.toLowerCase();
    if (input === 'surprise') {
        redirectToMessage();
    } else {
        alert('Try again! 💕');
    }
}

// Riddle Game (2PM - 5PM)
function generateRiddleGame() {
    return `<p>I am tall when I am young, short when I am old. What am I?</p>
            <input type="text" id="riddleInput">
            <button onclick="checkRiddle()">Submit</button>`;
}

function checkRiddle() {
    const answer = document.getElementById('riddleInput').value.toLowerCase();
    if (answer === 'candle') {
        redirectToMessage();
    } else {
        alert('Try again! 💕');
    }
}

// Guess Emoji Game (5PM - 7:30PM)
function generateGuessEmojiGame() {
    return `<p>Guess the emoji: 🍎</p>
            <input type="text" id="emojiInput">
            <button onclick="checkEmoji()">Submit</button>`;
}

function checkEmoji() {
    if (document.getElementById('emojiInput').value.toLowerCase() === 'apple') {
        redirectToMessage();
    } else {
        alert('Try again! 💕');
    }
}

// Trivia Quiz (7:30PM - 9PM)
function generateTriviaQuizGame() {
    return `<p>What is the capital of France?</p>
            <button onclick="redirectToMessage()">Paris</button>
            <button onclick="alert('Try again! 💕')">London</button>`;
}

// Redirect to Message
function redirectToMessage() {
    window.location.href = "message.html";
}

// Start Game on Load
window.onload = startGame;