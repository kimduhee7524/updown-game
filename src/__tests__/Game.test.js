import Game from "../class/Game.js";

describe("Game 클래스 테스트", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test("초기화 상태 확인", () => {
        expect(game.min).toBe(0);
        expect(game.max).toBe(0);
        expect(game.answer).toBe(0);
        expect(game.maxTries).toBe(0);
        expect(game.currentTries).toBe(0);
        expect(game.previousGuesses).toEqual([]);
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


});
