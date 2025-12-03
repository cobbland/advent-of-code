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
    let hit = false;
    while (currentNum <= end) {
        const numberToString = currentNum.toString()
        while (currentPlace < numberToString.length && !hit) {
            if (currentNum.toString().length % currentPlace === 0) {
                if (findInvalidRepeating(numberToString, currentPlace)) {
                    hit = true;
                    hits += currentNum;
                }
            }
            currentPlace++;
        }
        hit = false;
        currentPlace = 0;
        currentNum++;
    }
    return hits;
}

function findInvalidRepeating(numberToString, size) {
    const numberCollection = [];
    for (let i = 0; i < numberToString.length; i += size) {
        numberCollection.push(numberToString.slice(i, i + size));
    }
    if (numberCollection.every(number => number === numberCollection[0])) {
        return true;
    } else {
        return false;
    }
}

function findAllInvalid(allRanges = ranges) {
    let allHits = 0;
    for (const range of allRanges) {
        allHits += findInvalid(range);
    }
    console.log(`Sum of invalid IDs: ${allHits}`);
}

findAllInvalid();