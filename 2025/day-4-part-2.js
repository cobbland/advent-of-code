// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const toiletPaper = fs
    .readFileSync(path.join(__dirname, 'data/day-4-input.txt'))
    .toString()
    .split('\n');

function checkRolls(wearHouse = toiletPaper) {
    const allRolls = wearHouse;
    let accessibleRolls = 0;
    const rows = allRolls.length;
    const columns = allRolls[0].length;
    let allRollsStrings = '';
    let moreRolls = true;
    let lastRolls = 0;
    let thisRolls = 0;
    while (moreRolls) {
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            const rowArray = allRolls[rowIndex].toString().split('');
            allRolls[rowIndex] = rowArray;
            for (let rollIndex = 0; rollIndex < columns; rollIndex++) {
                const adjacentRolls = [];
                let adjacentRollsCount = 0;
                if (rowIndex != 0) {
                    adjacentRolls.push(allRolls[rowIndex-1][rollIndex]);
                    if (rollIndex != 0) {
                        adjacentRolls.push(allRolls[rowIndex-1][rollIndex-1]);
                    }
                    if (rollIndex != columns - 1) {
                        adjacentRolls.push(allRolls[rowIndex-1][rollIndex+1])
                    }
                }
                if (rowIndex != rows - 1) {
                    adjacentRolls.push(allRolls[rowIndex+1][rollIndex]);
                    if (rollIndex != 0) {
                        adjacentRolls.push(allRolls[rowIndex+1][rollIndex-1]);
                    }
                    if (rollIndex != columns - 1) {
                        adjacentRolls.push(allRolls[rowIndex+1][rollIndex+1])
                    }
                }
                if (rollIndex != 0) {
                    adjacentRolls.push(allRolls[rowIndex][rollIndex-1]);
                }
                if (rollIndex != columns - 1) {
                    adjacentRolls.push(allRolls[rowIndex][rollIndex+1]);
                }
                for (let roll of adjacentRolls) {
                    if (roll === '@') {
                        adjacentRollsCount++;
                    }
                }
                if (adjacentRollsCount < 4 && allRolls[rowIndex][rollIndex] == "@") {
                    allRolls[rowIndex][rollIndex] = 'x';
                    accessibleRolls++;
                    thisRolls++;
                }
            }
            allRolls[rowIndex] = allRolls[rowIndex].join('');
        }
        thisRolls += lastRolls;
        if (lastRolls === thisRolls) {
            moreRolls = false;
        }
        lastRolls = thisRolls;
    }
    allRollsStrings = allRolls.join('\n');
    console.log(allRollsStrings);
    return accessibleRolls;
}

console.log(checkRolls());