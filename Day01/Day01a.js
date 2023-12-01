const fs = require('fs');
const numberRegex = new RegExp("[0-9]", "g");
const wordNumbers = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9,
    "ten":10,
    "eleven":11,
    "twelve":12,
    "thirteen":13,
    "fourteen":14,
    "fifteen":15,
    "sixteen":16,
    "seventeen":17,
    "eighteen":18,
    "nineteen":19,
    "twenty":20,
    "thirty":30,
    "forty":40,
    "fifty":50,
    "sixty":60,
    "seventy":70,
    "eighty":80,
    "ninety":90,
}
const powersOfTen = {
    "hundred":100,
    "thousand":1000,
    "million":1000000,
    "billion":1000000000,
    "trillion":1000000000000
}


const wordNumberRegex = new RegExp("[one][two][three][four][five][six][seven][eight][nine][ten]", "g");
const getTwoDigitNumber = (line) => {
    var resultingNumber = parseInt(line.charAt(0) + line.slice(-1));
    return resultingNumber;
}

const getFirstNumber = (line) => {
    let current_number = "";
    line.forEach(character => {
        if (character.match(numberRegex)) {
            return parseInt(character);
        }
    });
}

const parseFirstNumberFromLine = (line) => {
    const wordNumbersKeys = Object.keys(wordNumbers);
    const powersOfTenKeys = Object.keys(powersOfTen);
    let currentWord = "";
    Array.from(line).forEach(character => {
        currentWord += character;
        powersOfTenKeys.forEach(powerOfTen => {
            var result = currentWord.match(powerOfTen);
            if (result != null) {
                console.log("Matched " + powerOfTen)
                console.log(result);
            }
        });
        wordNumbersKeys.forEach(wordNumber => {
            var result = currentWord.match(wordNumber);
            if (result != null) {
                console.log(result);
            }
        });
    });
}

const allFileContents = fs.readFileSync('./Day01/inputa.txt', 'utf-8');
let reg=new RegExp("[A-Za-z]", "g")
let currentValue = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
    let justNumber = line.replaceAll(reg, "");
    var number = getTwoDigitNumber(justNumber);
    currentValue += number;
});

exports.parseFirstNumberFromLine = parseFirstNumberFromLine;