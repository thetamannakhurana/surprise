// Countdown Timer
const targetTime = new Date();
targetTime.setHours(22, 0, 0, 0); // Countdown until 10 PM

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `Time left for your surprise: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
    }
}
setInterval(updateCountdown, 1000);

// Start the correct game based on time
function startGame() {
    const now = new Date();
    const hour = now.getHours();

    let gamePage = "game.html"; // Default
    if (hour >= 8 && hour < 11) gamePage = "memory-game.html";
    if (hour >= 11 && hour < 14) gamePage = "scramble-game.html";
    if (hour >= 14 && hour < 17) gamePage = "riddle-game.html";
    if (hour >= 17 && hour < 19.5) gamePage = "emoji-game.html";
    if (hour >= 19.5 && hour < 21) gamePage = "trivia-game.html";

    window.location.href = gamePage;
}