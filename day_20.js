"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  var totalSwaps = 0;

  for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;

    for (var j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(j, j + 1, a);
        numberOfSwaps++;
        totalSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + totalSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[n - 1]);
}

function swap(x, y, array) {
  var b = array[y];
  array[y] = array[x];
  array[x] = b;
}
