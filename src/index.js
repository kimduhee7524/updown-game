import { createRandomNumber, checkGuess } from "./gameUtils.js";
import { getUserInput } from "./inputUtils.js";


async function playGame() {

    let currentTries = 0;
    let previousGuesses = [];

    const answer = createRandomNumber();
    console.log("컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요.");

    const inputNum = await getUserInput();
    currentTries++;
    previousGuesses.push(inputNum);

    const result = checkGuess(inputNum, answer);
    console.log(result);
    if (result === "정답!")
        console.log(`축하합니다! ${currentTries}번 만에 숫자를 맞추셨습니다.`);
    else
        console.log(`이전 추측: ${previousGuesses.join(", ")}`);

}

playGame();