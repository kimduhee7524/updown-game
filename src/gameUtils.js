export function createRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

export function checkGuess(guess, answer) {
    if (guess > answer) return "다운";
    if (guess < answer) return "업";
    return "정답!";
}