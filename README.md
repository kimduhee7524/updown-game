# 🎮 숫자 업앤다운 게임

콘솔에서 동작하는 숫자 업앤다운 게임입니다.

### 📌 게임 실행
```sh
pnpm start
```

### 🛠 기술 스택
- Node.js
- pnpm
- ESLint & Prettier 적용

### 📜 게임 규칙
- 컴퓨터가 1~50 사이의 랜덤 숫자를 선택합니다.
- 사용자는 숫자를 입력하여 정답을 맞혀야 합니다.
- 입력값이 정답보다 크면 "다운"을 출력합니다.
- 입력값이 정답보다 작으면 "업"을 출력합니다.
- 사용자는 최대 5번의 기회가 있으며, 5번 안에 맞추지 못하면 정답이 공개됩니다.
- 정답을 맞히면 몇 번 만에 맞췄는지 출력됩니다.
- 게임이 끝난 후 다시 시작하거나 종료할 수 있습니다.