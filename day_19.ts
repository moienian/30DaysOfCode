'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {

    let arr = []
    const num = parseInt(inputLines[0]);
    for(let i = 1; i<=num; i++){
        if(num % i === 0){
            arr.push(i)
        }
    }
    const sum = arr.reduce((total, acc) => total + acc)
    console.log('I implemented: AdvancedArithmetic')
    console.log(sum)

}
