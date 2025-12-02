// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const ranges = fs
    .readFileSync(path.join(__dirname, 'data/day-2-input.txt'))
    .toString()
    .split(',');

function findInvalid(range) {
    const [start, end] = range.split('-').map(Number);
    let currentNum = start;
    let currentPlace = 0;
    let hits = 0;
    while (currentNum <= end) {
        while (currentPlace < currentNum.toString().length) {
            const currentNumStr = currentNum.toString();
            const currentNumStrFirst = currentNumStr.slice(0, currentPlace);
            const currentNumStrLast = currentNumStr.slice(currentPlace);
            if (currentNumStrFirst === currentNumStrLast) {
                hits++;
                console.log(`Hit: ${currentNumStr}`);
            }
            currentPlace++;
        }
        currentPlace = 0;
        currentNum++;
    }
    return hits;
}

function findAllInvalid(allRanges = ranges) {
    let allHits = 0;
    for (const range of allRanges) {
        allHits += findInvalid(range);
    }
    console.log(`Total hits: ${allHits}`);
}

findAllInvalid();