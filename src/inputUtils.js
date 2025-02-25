import readline from "readline";

export function readLineAsync(query) {
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

export async function getUserInput(min = 1, max = 50) {
    while (true) {
        const input = await readLineAsync("숫자 입력: ");
        const number = parseInt(input, 10);

        if (!isNaN(number) && number >= min && number <= max) {
            return number;
        }

        console.log("올바른 숫자를 입력하세요.");
    }
}

export async function getMinMaxInput() {
    while (true) {
        const input = await readLineAsync("숫자 입력: ");
        const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

        if (numbers.length == 2) {
            const [min, max] = numbers.sort((a, b) => a - b);
            return [min, max];
        }
        console.log("올바른 숫자를 입력하세요.");
    }
}

export async function getMaxTries() {
    while (true) {
        const input = await readLineAsync("숫자 입력: ");
        const number = parseInt(input, 10);

        if (!isNaN(number)) {
            return number;
        }
        console.log("올바른 숫자를 입력하세요.");
    }
}