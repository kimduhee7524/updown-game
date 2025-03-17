export default class GameUtils {
    static createRandomNumber(min = 1, max = 50) {
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('최소값과 최대값은 숫자여야 합니다.');
        }

        if (min > max) {
            [min, max] = [max, min];
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static checkGuess(guess, answer) {
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('guess와 answer은 숫자여야 합니다.');
        }

        if (guess > answer) return "다운";
        if (guess < answer) return "업";
        return "정답!";
    }
}
