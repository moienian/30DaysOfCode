"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {

  const length = Number(inputLines[0]);
  const numbers = inputLines[1].split(" ").map((num) => Math.abs(Number(num)));

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  console.log(max - min);
}
