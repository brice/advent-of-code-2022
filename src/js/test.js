mocha.setup('tdd');

suite('Day one of Advent of Code', () => {
    var contentTestInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

    test('The elf with the most calories carry 24000 calories', () => {
        chai.expect(getSumOfTopElves(contentTestInput, 1)).to.eql(24000);
    });

    test('The sum of the Calories carried by the top three elves is 45000', () => {
        chai.expect(getSumOfTopElves(contentTestInput, 3)).to.eql(45000);
    });
});

suite('Day two of Advent of Code', () => {
    var strategy = `A Y
B X
C Z
`;

    test('the rock scissor paper score based on the strategy will return 15', () => {
        chai.assert.equal(12, getScore(strategy));
    });

    test('the detailed score should work', () => {
        chai.assert.equal(7, getScore('C Z'));
        chai.assert.equal(4, getScore('A Y'));
        chai.assert.equal(1, getScore('B X'));
        chai.assert.equal(3, getScore('A X'));
    });

    test('the rock is valued to 1', () => {
        chai.assert.equal(1, getItemValue('A'));
    });
    test('the paper is valued to 2', () => {
        chai.assert.equal(2, getItemValue('B'));
    });
    test('the scissor is valued to 3', () => {
        chai.assert.equal(3, getItemValue('C'));
    });

    test('ho no, i lose', () => {
        chai.assert.equal(0, getResultScore('X'));
    });
    test('this was close', () => {
        chai.assert.equal(3, getResultScore('Y'));
    });
    test('yeah I win', () => {
        chai.assert.equal(6, getResultScore('Z'));
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