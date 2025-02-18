import { createRandomNumber } from "./gameUtils.js";
import { getUserInput } from "./inputUtils.js";


async function playGame() {

    const answer = createRandomNumber();
    console.log("컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요.");

    const inputNum = await getUserInput();
}

playGame();