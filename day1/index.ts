import { readFileSync } from 'fs';
import { join } from 'path';

const inputFileName = "input.txt";
const content = readFileSync(join(__dirname, inputFileName), 'utf-8');

const isEmptyLine = (value: string) => value == "";

let maxCalories = 0;
let caloriesAcum = 0;

content.split(/\r?\n/).forEach(line => {
    if (isEmptyLine(line)) {
        if (caloriesAcum > maxCalories) maxCalories = caloriesAcum;
        caloriesAcum = 0;
    } else {
        const calories = Number.parseInt(line);
        caloriesAcum += calories;
    }
});

console.log(`Max calories found is: ${maxCalories}`)