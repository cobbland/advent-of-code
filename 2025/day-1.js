// Imports
const fs = require('fs');
const path = require('path');

// Get the data
const combination = fs
    .readFileSync(path.join(__dirname, 'data/day-1-input.txt'))
    .toString()
    .split('\n');

// Starting (and updating) dial number
let dialNum = 50;

// Target number
let targetNumber = 0;

// Turn the dial turn times
// Return how many times the target was landed on
function turnDial(turn, target) {
    const direction = turn.slice(0, 1);
    const times = Number(turn.slice(1));
    let countdown = times;
    let hits = 0;
    while (countdown > 0) {
        if (direction === 'L') {
            dialNum = dialNum - 1;
            if (dialNum === -1) {
                dialNum = 99;
            }
        } else if (direction === 'R') {
            dialNum = dialNum + 1;
            if (dialNum === 100) {
                dialNum = 0;
            }
        }
        countdown = countdown - 1;
    }
    if (dialNum === targetNumber) {
            hits = hits + 1;
    }
    return hits;
}

// Turn the dial using a given array of combinations
// Returns how many times a given target number was landed on
function performCombinations(combinations = combination, target = targetNumber) {
    let timesHit = 0;
    for (const turns of combinations) {
        timesHit = timesHit + turnDial(turns, target);
    }
    return timesHit;
}

console.log(performCombinations());