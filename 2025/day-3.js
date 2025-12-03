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
    for (const bank of banks) {
        // console.log(`Current bank: ${bank}`);
        // console.log("======================");
        // console.log('');
        const bankStr = bank.toString();
        let highestCombo = '0';
        for (let i = 0; i < bankStr.length; i++) {
            for (let n = i + 1; n < bankStr.length; n++) {
                const comboNum = Number(bankStr[i] + bankStr[n]);
                if (comboNum > Number(highestCombo)) {
                    // console.log(`Old highest combo: ${highestCombo}`);
                    highestCombo = bankStr[i] + bankStr[n];
                    // console.log(`New highest combo: ${highestCombo}`);
                    // console.log('');
                }
            }
        }
        batteryCombos.push(highestCombo);
        // console.log(batteryCombos);
        // console.log("");
        // console.log("/////////////////////");
        // console.log("");
    }
    let totalJolts = 0;
    for (const combo of batteryCombos) {
        totalJolts += Number(combo);
    }
    return totalJolts;
}

console.log(testBatteries());