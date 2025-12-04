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

function testBattery(bigNum = 0, startNum = 0, highestCombo = '0') {
    const bigNumStr = bigNum.toString();
    if (!bigNum || highestCombo.length === '12') {
        console.log(`BigNum = ${bigNum}`);
        return highestCombo;
    }
    for (let i = startNum; i < bigNumStr.length; i++) {
        for (let n = i + 1; n < bigNumStr.length; n++) {
            const newCombo = Number(bigNumStr[i] + bigNumStr[n]);
            if (newCombo >= Number(highestCombo)) {
                return "I don't know!"
            }
        }
    }
}

console.log(testBatteries());