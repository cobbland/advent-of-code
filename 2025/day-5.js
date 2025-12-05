// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const database = fs
    .readFileSync(path.join(__dirname, 'data/day-5-input.txt'))
    .toString()
    .split('\n\n');

const rangesTable = database[0].split('\n');
const IDsTable = database[1].split('\n');

// console.log(`
//     ======
//     Ranges
//     ------
//     ${rangesTable}

//     ======
//     IDs
//     ------
//     ${IDsTable}
// `);

function findFresh(ranges = rangesTable, IDs = IDsTable) {
    let freshCount = 0;
    for (let ingredientIndex = 0; ingredientIndex < IDs.length; ingredientIndex++) {
        const ingredientID = IDs[ingredientIndex];
        for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
            const rangeArray = ranges[rangeIndex].split('-');
            if (
                Number(ingredientID) >= Number(rangeArray[0]) && 
                Number(ingredientID) <= Number(rangeArray[1])
            ) {
                freshCount++;
                rangeIndex = ranges.length;
            }
        }
    }
    return freshCount;
}

console.log(`
    ======
    Fresh Ingredient Count
    ------
    ${findFresh()}
`);