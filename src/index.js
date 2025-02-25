import { createRandomNumber, checkGuess } from "./gameUtils.js";
import { getUserInput, getMinMaxInput, getMaxTries, readLineAsync } from "./inputUtils.js";

async function askReplay() {
    while (true) {
        const RESPONSES = { "yes": true, "no": false };

        const input = await readLineAsync("게임을 다시 시작하시겠습니까? (yes/no): ");
        const answer = input.toLowerCase().trim();

        if (answer in RESPONSES) {
            return RESPONSES[answer];
        }
        console.log("올바른 입력이 아닙니다. 'yes' 또는 'no'를 입력하세요.");
    }
}

async function playGame() {
    const gameState = {
        MAX_TRIES: 0,
        min: 0,
        max: 0,
        currentTries: 0,
        previousGuesses: [],
        answer: 0
    };

    console.log("게임 시작을 위해 최소 값, 최대 값을 입력해주세요. (예: 1, 50) ");
    [gameState.min, gameState.max] = await getMinMaxInput();

    console.log("게임 시작을 위해 진행 가능 횟수를 입력해주세요.");
    gameState.MAX_TRIES = await getMaxTries();

    gameState.answer = createRandomNumber(gameState.min, gameState.max);
    console.log(`컴퓨터가 ${gameState.min}~${gameState.max} 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요.`);


    while (gameState.currentTries < gameState.MAX_TRIES) {
        const inputNum = await getUserInput();
        gameState.currentTries++;
        gameState.previousGuesses.push(inputNum);

        const result = checkGuess(inputNum, gameState.answer);
        console.log(result);

        if (result === "정답!") {
            console.log(`축하합니다! ${gameState.currentTries}번 만에 숫자를 맞추셨습니다.`);
            return;
        }
        console.log(`이전 추측: ${gameState.previousGuesses.join(", ")}`);
    }
    console.log(`5회 초과! 숫자를 맞추지 못했습니다. (정답: ${gameState.answer})`);
}

async function main() {
    do {
        await playGame();
    } while (await askReplay());

    console.log("게임을 종료합니다.");
}

main();
