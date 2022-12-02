import { readFileSync } from 'fs';
import { join } from 'path';

const inputFileName = "input.txt";
const content = readFileSync(join(__dirname, inputFileName), 'utf-8');

const isEmptyLine = (value: string) => value == "";

const elves: number[] = [];

let caloriesAcum = 0;

content.split(/\r?\n/).forEach(line => {
    if (isEmptyLine(line)) {
        elves.push(caloriesAcum);
        caloriesAcum = 0;
    } else {
        const calories = Number.parseInt(line);
        caloriesAcum += calories;
    }
});

elves.sort((a, b) => (a > b ? -1 : 1));

console.log(`PART one: ${elves[0]}`)

const topThree = elves[0] + elves[1] + elves[2];
console.log(`PART two: ${topThree}`);
