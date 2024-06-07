const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const peopleCounts = Number(input[0]);
const takenTimes = input[1].split(" ").map(Number);

function solution(input) {
  const lines = takenTimes.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < peopleCounts; i++) {
    let sum = lines[i];

    for (let j = 0; j < i; j++) {
      sum += lines[j];
    }

    result += sum;
  }

  console.log(result);
}

solution(input);
