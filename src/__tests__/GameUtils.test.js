import GameUtils from "../class/GameUtils"; 

describe("GameUtils 테스트", () => {
    test("랜덤 숫자가 범위 내에서 생성되는지 확인", () => {
        const min = 1, max = 10;
        for (let i = 0; i < 100; i++) {  
            const num = GameUtils.createRandomNumber(min, max);
            expect(num).toBeGreaterThanOrEqual(min);
            expect(num).toBeLessThanOrEqual(max);
        }
    });

    test("정답을 올바르게 판별하는지 확인", () => {
        expect(GameUtils.checkGuess(5, 10)).toBe("업");   
        expect(GameUtils.checkGuess(15, 10)).toBe("다운"); 
        expect(GameUtils.checkGuess(10, 10)).toBe("정답!"); 
    });
});
