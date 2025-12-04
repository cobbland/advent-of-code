// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const allBanks = fs
    .readFileSync(path.join(__dirname, 'data/day-3-input.txt'))
    .toString()
    .split('\n');

function testBatteries(banks = allBanks) {
    const batteryCombos = [];
    for (let bank of banks) {
        batteryCombos.push(testBattery(bank));
    }
    let joltage = 0;
    for (let combo of batteryCombos) {
        joltage += Number(combo);
    }
    return joltage;
}

function testBattery(bank) {
    const bankArray = [];
    for (let digit of bank) {
        bankArray.push(digit);
    }
    while (bankArray.length > 12) {
        let i = 0;
        while (
            i + 1 < bankArray.length && 
            bankArray[i] >= bankArray[i + 1]
        ) {
            i++;
        }
        if (bankArray[i] < bankArray[i+1]) {
            bankArray.splice(i, 1);
        } else if (i + 1 == bankArray.length) {
            bankArray.splice(-1, 1);
        }
    }
    return bankArray.join("");
}

console.log(testBatteries());