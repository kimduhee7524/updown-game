export function createRandomNumber(min = 1, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkGuess(guess, answer) {
    if (guess > answer) return "다운";
    if (guess < answer) return "업";
    return "정답!";
}