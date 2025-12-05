// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const database = fs
    .readFileSync(path.join(__dirname, 'data/day-5-input.txt'))
    .toString()
    .split('\n\n');

const rangesTable = database[0].split('\n');

function findFreshIDs(ranges = rangesTable) {
    const rangesSplit = [];
    const newRanges = [];
    for (let range of ranges) {
        const newRange = range.split('-');
        rangesSplit.push(newRange);
    }
    rangesSplit.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < rangesSplit.length; i++) {
        const startID = rangesSplit[i][0];
        const endID = rangesSplit[i][1];
        if (rangesSplit[i - 1]) {
            const lastEndID = newRanges[newRanges.length - 1][1];
            if (BigInt(startID) <= BigInt(lastEndID)) {
                if (BigInt(lastEndID) <= BigInt(endID)) {
                    newRanges[newRanges.length - 1][1] = endID;
                }
            } else {
                newRanges.push([startID, endID]);
            }
        } else {
            newRanges.push([startID, endID]);
        }
    }
    let freshCount = BigInt(0);
    for (let range of newRanges) {
        freshCount += BigInt(range[1]) - BigInt(range[0]) + BigInt(1);
    }
    return freshCount;
}

console.log(`
    ======
    Fresh ID Count
    ------
    ${findFreshIDs()}
`);