mocha.setup('tdd');

suite('Day nine of Advent of Code', () => {
    const testData = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

    test('The tail covered 13 positions', () => {
        chai.assert.equal(13, getNumberTailPositions(testData));
    });

    test('The positions after movement are correctly returned', () => {
        const dataProvider = [
            [[0,0], undefined, 'R 4', [[0,0],[0,1],[0,2],[0,3],[0,4]]],
            [[0,4], [0,3], 'U 4', [[1,4],[2,4],[3,4],[4,4]]],
            [[4,1], [4,2], 'D 1', [[3,1]]],
        ];

        dataProvider.forEach(data => {
            chai.assert.deepEqual(data[3], moveHeadAndGetTailPositions(data[0], data[1], data[2]));
        });
    });

    test('The tail and head are related', () => {
        const dataProvider = [
            [[4,1], [5,2]],
            [[4,2], [5,2]],
            [[4,3], [5,2]],
        ];

        dataProvider.forEach(data => {
            chai.assert.isFalse(iNeedToMoveTail(data[0], data[1]));
        });
    });


});
