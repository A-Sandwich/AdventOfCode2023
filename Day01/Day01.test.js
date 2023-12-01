const Day01 = require('./Day01a.js');

test('Day01Tests', () => {
    var resultingNumber = Day01.parseFirstNumberFromLine("SixtyOneOne2Seven")
    expect(resultingNumber).toBe(61);
});