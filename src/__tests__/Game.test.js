import { jest } from "@jest/globals";
import Game from "../class/Game.js";
import InputUtils from "../class/InputUtils.js";
import GameUtils from "../class/GameUtils.js";

InputUtils.getMinMaxInput = jest.fn();
InputUtils.getMaxTries = jest.fn();
InputUtils.getUserInput = jest.fn();
InputUtils.readLineAsync = jest.fn();
GameUtils.createRandomNumber = jest.fn();
GameUtils.checkGuess = jest.fn();
console.log = jest.fn();

describe("Game 클래스 테스트", () => {
    let game;

    beforeEach(() => {
        jest.clearAllMocks();
        game = new Game();
    });

    test("게임 초기화 테스트", () => {
        game.min = 5;
        game.max = 20;
        game.answer = 15;
        game.currentTries = 3;
        game.previousGuesses = [5, 10];

        game.resetGame();

        expect(game.min).toBe(0);
        expect(game.max).toBe(0);
        expect(game.answer).toBe(0);
        expect(game.currentTries).toBe(0);
        expect(game.previousGuesses).toEqual([]);
    });

    test("initializeGame을 실행하면 최소값, 최대값, 시도 횟수가 설정되어야 한다", async () => {
        InputUtils.getMinMaxInput.mockResolvedValue([1, 50]);
        InputUtils.getMaxTries.mockResolvedValue(5);
        GameUtils.createRandomNumber.mockReturnValue(42);

        await game.initializeGame();

        expect(game.min).toBe(1);
        expect(game.max).toBe(50);
        expect(game.maxTries).toBe(5);
        expect(GameUtils.createRandomNumber).toHaveBeenCalledWith(1, 50);
        expect(game.answer).toBe(42);
    });

    test("게임이 끝나면 사용자가 몇 회만에 맞췄는지 출력한다", async () => {
        InputUtils.getMinMaxInput.mockResolvedValue([1, 50]);
        InputUtils.getMaxTries.mockResolvedValue(5);
        GameUtils.createRandomNumber.mockReturnValue(42);
    
        InputUtils.getUserInput
            .mockResolvedValueOnce(30)  
            .mockResolvedValueOnce(47)  
            .mockResolvedValueOnce(42); 
    
        GameUtils.checkGuess
            .mockReturnValueOnce("업")
            .mockReturnValueOnce("다운")
            .mockReturnValueOnce("정답!");
    
        await game.initializeGame();
        await game.playGame();
    
        expect(console.log).toHaveBeenCalledWith("업");
        expect(console.log).toHaveBeenCalledWith("이전 추측: 30");
        expect(console.log).toHaveBeenCalledWith("다운");
        expect(console.log).toHaveBeenCalledWith("이전 추측: 30, 47");
        expect(console.log).toHaveBeenCalledWith("정답!");
        expect(console.log).toHaveBeenCalledWith("축하합니다! 3번 만에 숫자를 맞추셨습니다.");
    });

    test("게임을 재시작하거나 종료할 수 있는 옵션을 제공한다", async () => {
        InputUtils.readLineAsync.mockResolvedValueOnce("yes");
        let result = await game.askReplay();
        expect(result).toBe(true);

        InputUtils.readLineAsync.mockResolvedValueOnce("no");
        result = await game.askReplay();
        expect(result).toBe(false);
    });
});