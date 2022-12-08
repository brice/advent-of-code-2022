mocha.setup('tdd');

suite('Day eight of Advent of Code', () => {
    const testData = `30373
25512
65332
33549
35390`;

    test('There\'s 21 tree visible from outside the grid', () => {
        chai.assert.equal(21, getVisibleTrees(testData));
    });
});
