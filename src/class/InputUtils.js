import readline from "readline";

export default class InputUtils {
    static readLineAsync(query) {
        return new Promise((resolve, reject) => {
            if (typeof query !== "string") {
                reject(new Error("query must be a string"));
            }

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question(query, (input) => {
                rl.close();
                resolve(input);
            });
        });
    }

    static async getUserInput(min, max) {
        while (true) {
            const input = await this.readLineAsync("숫자 입력: ");
            const number = parseInt(input, 10);
            if (!isNaN(number) && number >= min && number <= max) {
                return number;
            }
            console.log("올바른 숫자를 입력하세요.");
        }
    }

    static async getMinMaxInput() {
        while (true) {
            const input = await this.readLineAsync("최소값, 최대값을 입력하세요: ");
            const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

            if (numbers.length == 2) {
                const [min, max] = numbers.sort((a, b) => a - b);
                return [min, max];
            }
            console.log("올바른 숫자를 입력하세요.");
        }
    }

    static async getMaxTries() {
        while (true) {
            const input = await this.readLineAsync("최대 시도 횟수를 입력하세요: ");
            const number = parseInt(input, 10);

            if (!isNaN(number)) {
                return number;
            }
            console.log("올바른 숫자를 입력하세요.");
        }
    }
}
