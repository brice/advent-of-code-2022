mocha.setup('tdd');

suite('Day One of Advent of Code', () => {
});

suite('Day Two of Advent of Code', () => {
});

suite('Day Three of Advent of Code', () => {
    var input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    test('the sum of priorities from the input will return 157', () => {
        chai.assert.equal(157, getRucksackSumOfPriorities(input));
    });

    test('Every kind of lowercase item', () => {
        for (i = 0; i <= 25; i++) {
            var chr = String.fromCharCode(97 + i);
            chai.assert.equal(i + 1, getRucksackSumOfPriorities(chr + chr));
            chai.assert.equal(i + 1, getCurrentCode(chr));
        }

    });

    test('Every kind of uppercase item', () => {
        for (i = 0; i <= 25; i++) {
            var chr = String.fromCharCode(65 + i);
            chai.assert.equal(27 + i, getRucksackSumOfPriorities(chr + chr));
            chai.assert.equal(27 + i, getCurrentCode(chr));
        }
    });

    test('the sum of badge\'s priorities from the input will return 70', () => {
        chai.assert.equal(70, getBadgeSum(input));
    });
});


suite('Day Four of Advent of Code', () => {
    var input = `2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`;

        test('the total overlap counted will be 2', () => {
            chai.assert.equal(2, findNumberOfOverlap(input));
        });

        test('the total overlap counted will be 4 with the new system', () => {
            chai.assert.equal(4, findNumberOfFullOverlap(input));
        });

        test('ho no there\s an overlap', () => {
            chai.assert.equal(1, findNumberOfOverlap('1-2,1-8'));
            chai.assert.equal(1, findNumberOfOverlap('7-8,1-8'));
        });

        test('ho no there\s an overlap on the new system', () => {
            chai.assert.equal(1, findNumberOfFullOverlap('1-2,2-8'));
            chai.assert.equal(1, findNumberOfFullOverlap('7-8,8-9'));
        });

        test('yeah there\s no overlap', () => {
            chai.assert.equal(0, findNumberOfOverlap('1-2,7-8'));
            chai.assert.equal(0, findNumberOfOverlap('7-8,1-2'));
            chai.assert.equal(0, findNumberOfOverlap('7-26,27-27'));
            chai.assert.equal(0, findNumberOfOverlap('36,60-70'));
        });

        test('yeah there\s no overlap on the new system', () => {
            chai.assert.equal(0, findNumberOfFullOverlap('1-2,7-8'));
            chai.assert.equal(0, findNumberOfFullOverlap('7-8,1-2'));
            chai.assert.equal(0, findNumberOfFullOverlap('7-26,27-27'));
            chai.assert.equal(0, findNumberOfFullOverlap('36,60-70'));
        });

        test('check if blank are correctly filled', () => {
            chai.assert.equal('-1-2-3-4-5-6-', fillTheBlank(1, 6));
            chai.assert.equal('-34-35-36-', fillTheBlank(34,36));
            chai.assert.equal('-42-', fillTheBlank(42));
        });

        test('check if the array meet what we need', () => {
            chai.assert.equal([1,2,3,4,5,6], getArrayInterval(1, 6));
            chai.assert.equal([34,35,36], getArrayInterval(34,36));
            chai.assert.equal([42], getArrayInterval(42));
        });
});