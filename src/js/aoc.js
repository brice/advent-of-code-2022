/**
 * This contains every function of Advent of Code
 *
 *            *
 *           /.\
 *          /..'\
 *          /'.'\
 *         /.''.'\
 *         /.'.'.\
 *  "'""""/'.''.'.\""'"'"
 *        ^^^[_]^^^
 * MERRY == CHRISTMAS == PEOPLE
 */

/**
 * Day 1
 */

/**
 * Day 2
 */

/**
 * Day 3
 */
function getRucksackSumOfPriorities(data) {
    var lines = data.split("\n");
    var sum = 0;
    var codeA = 'A'.charCodeAt(0);
    var codeZ = 'Z'.charCodeAt(0);

    var codea = 'a'.charCodeAt(0);
    var codez = 'z'.charCodeAt(0);

    lines.forEach(rucksack => {
        var currentCode = 0;
        rucksack = rucksack.trim();
        if (rucksack.length == 0) {
            return;
        }
        var middle = Math.floor(rucksack.length / 2);

        var compartment1 = rucksack.substr(0, middle).split('');
        var compartment2 = rucksack.substr(middle).split('');

        compartment1.forEach(item =>  {
            if (currentCode != 0) {
                return;
            }
            if (compartment2.includes(item)) {
                var charcode = item.charCodeAt(0);
                if (charcode >= codeA && charcode <= codeZ) {
                    currentCode = 26 + charcode - codeA + 1;
                } else if (charcode >= codea && charcode <= codez) {
                    currentCode = charcode - codea + 1;
                }
            }
        })
        sum += currentCode;
    });

    return sum;
}
