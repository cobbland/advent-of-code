// // Imports
// const fs = require('fs');
// const path = require('path');

// // Get the data
// const ranges = fs
//     .readFileSync(path.join(__dirname, 'data/day-2-input.txt'))
//     .toString()
//     .split(',');

// function findInvalid(range) {
//     const [start, end] = range.split('-').map(Number);
//     let currentNum = start;
//     let currentPlace = 0;
//     let hits = 0;
//     while (currentNum <= end) {
//         while (currentPlace < currentNum.toString().length) {
//             const currentNumStr = currentNum.toString();
//             const currentNumStrFirst = currentNumStr.slice(0, currentPlace);
//             const currentNumStrLast = currentNumStr.slice(currentPlace);
//             if (currentNumStrFirst === currentNumStrLast) {
//                 hits += currentNum;
//                 console.log(`Hit: ${currentNumStr}`);
//             }
//             currentPlace++;
//         }
//         currentPlace = 0;
//         currentNum++;
//     }
//     return hits;
// }

// function findAllInvalid(allRanges = ranges) {
//     let allHits = 0;
//     for (const range of allRanges) {
//         allHits += findInvalid(range);
//     }
//     console.log(`Total hits: ${allHits}`);
// }

// findAllInvalid();

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
            hits += findInvalidRepeating(currentNum, currentPlace);
            currentPlace++;
        }
        currentPlace = 0;
        currentNum++;
    }
    return hits;
}

function findInvalidRepeating(number, size) {
    const numberToString = number.toString();
    const numberSplit = [
        numberToString.slice(0, size), 
        numberToString.slice(size)
    ];
    if (numberSplit.every(number => number === numberSplit[0])) {
        return number;
    } else {
        return 0;
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