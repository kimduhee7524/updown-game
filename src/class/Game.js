import GameUtils from "./gameUtils.js";
import InputUtils from "./InputUtils.js";

class Game{
    constructor() {
        this.resetGame(); 
    }
    resetGame() {
        this.min = 0;
        this.max = 0;
        this.answer = 0;
        this.maxTries = 0;
        this.currentTries = 0;
        this.previousGuesses = [];
    }
    async askReplay() {
        while (true) {
            const RESPONSES = { "yes": true, "no": false };
            const input = await InputUtils.readLineAsync("게임을 다시 시작하시겠습니까? (yes/no): ");
            const answer = input.toLowerCase().trim();

            if (answer in RESPONSES) {
                return RESPONSES[answer];
            }
            console.log("올바른 입력이 아닙니다. 'yes' 또는 'no'를 입력하세요.");
        }
    }

    async playGame() {

        console.log("게임 시작을 위해 최소 값, 최대 값을 입력해주세요. (예: 1, 50) ");
        [this.min, this.max] = await InputUtils.getMinMaxInput();
    
        console.log("게임 시작을 위해 진행 가능 횟수를 입력해주세요.");
        this.maxTries = await InputUtils.getMaxTries();
    
        this.answer = GameUtils.createRandomNumber(this.min, this.max);
        console.log(`컴퓨터가 ${this.min}~${this.max} 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요.`);
    
    
        while (this.currentTries < this.maxTries) {
            const inputNum = await InputUtils.getUserInput(this.min, this.max);
            this.currentTries++;
            this.previousGuesses.push(inputNum);
    
            const result = GameUtils.checkGuess(inputNum, this.answer);
            console.log(result);
    
            if (result === "정답!") {
                console.log(`축하합니다! ${this.currentTries}번 만에 숫자를 맞추셨습니다.`);
                return;
            }
            console.log(`이전 추측: ${this.previousGuesses.join(", ")}`);
        }
        console.log(`입력하신 ${this.maxTries}회 내에 숫자를 맞추지 못했습니다. (정답: ${this.answer})`);
    }
}

async function main() {
    const game = new Game(); 
    do {
        game.resetGame();
        await game.playGame();
    } while (await game.askReplay()); 

    console.log("게임을 종료합니다.");
}

main();