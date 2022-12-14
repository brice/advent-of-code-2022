mocha.setup('tdd');

suite('Day Seven of Advent of Code', () => {

    const testData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

    test('The total size is completed', () => {
        chai.assert.equal(48381165, directorySize(testData));
    });

    test('The arbo size is completed', () => {
        var arbo = getArborescence(testData);
        chai.assert.equal(48381165, arbo['/']);
    });

    test('The total size is completed', () => {
        chai.assert.equal(95437, directorySize(testData, 100000));
    });

    test('The size of the smallest directory is found', ()=> {
        chai.assert.equal(24933642, getSizeOfDirectoryToDelete(testData));
    });
});
