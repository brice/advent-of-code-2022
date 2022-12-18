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
function getScore(strategy) {
    var score = 0;
    return score;
}

function getWeaponValue(score, opponent) {
    return 1;
}

function getItemValue(item) {
    var value = 0;
    return value;
}

/**
 * Day 3
 */
function getRucksackSumOfPriorities(data) {
    var lines = data.split("\n");
    var sum = 0;

    lines.forEach(rucksack => {
        var currentCode = 0;
        rucksack = rucksack.trim();
        if (rucksack.length == 0) {
            return;
        }
        var middle = Math.floor(rucksack.length / 2);

        var compartment1 = rucksack.substr(0, middle).split('');
        var compartment2 = rucksack.substr(middle).split('');

        compartment1.forEach(item => {
            if (currentCode != 0) {
                return;
            }
            if (compartment2.includes(item)) {
                currentCode = getCurrentCode(item);
            }
        })
        sum += currentCode;
    });

    return sum;
}

function getBadgeSum(input) {
    var lines = input.split("\n");
    var sum = 0;

    for (i = 0; i < lines.length - 2; i += 3) {
        var currentCode = 0;
        var firstElf = lines[i].split('');
        var secondElf = lines[i + 1].split('');
        var thirdElf = lines[i + 2].split('');

        firstElf.forEach(item => {
            if (currentCode != 0) {
                return;
            }
            if (secondElf.includes(item) && thirdElf.includes(item)) {
                currentCode = getCurrentCode(item);
            }
        })
        sum += currentCode;
    }


    return sum;
}

function getCurrentCode(item) {
    var currentCode;
    var charcode = item.charCodeAt(0);
    var codeA = 'A'.charCodeAt(0);
    var codeZ = 'Z'.charCodeAt(0);

    var codea = 'a'.charCodeAt(0);
    var codez = 'z'.charCodeAt(0);

    if (charcode >= codeA && charcode <= codeZ) {
        currentCode = 26 + charcode - codeA + 1;
    } else if (charcode >= codea && charcode <= codez) {
        currentCode = charcode - codea + 1;
    }

    return currentCode;
}

/**
 * --- Day 4: Camp Cleanup ---
 */

function findNumberOfOverlap(input) {
    var lines = input.split("\n");
    var count = 0;
    lines.forEach(line => {
        line = line.trim();
        if (line == '') {
            return;
        }
        var firstAssignment = fillTheBlank(line.split(',')[0].split('-')[0], line.split(',')[0].split('-')[1]);
        var secondAssignment = fillTheBlank(line.split(',')[1].split('-')[0], line.split(',')[1].split('-')[1]);

        if (secondAssignment.indexOf(firstAssignment) != -1 ||firstAssignment.indexOf(secondAssignment) != -1) {
            count++;
        }
    });
    return count;
}

function findNumberOfFullOverlap(input) {
    var count = 0;
    var lines = input.split("\n");
    var count = 0;
    lines.forEach(line => {
        var expect = 0;
        line = line.trim();
        if (line == '') {
            return;
        }
        var firstArray = getArrayInterval(line.split(',')[0].split('-')[0], line.split(',')[0].split('-')[1]);
        var secondAssignment = fillTheBlank(line.split(',')[1].split('-')[0], line.split(',')[1].split('-')[1]);
        firstArray.forEach(element => {
            if (expect != 0) {
                return;
            }
            if (secondAssignment.indexOf('-'+element+'-') != -1) {
                expect = 1 ;
            }
        });
        count += expect;
    });
    return count;
}

function fillTheBlank(start, end) {
    result = '-';

    if (end == undefined) {
        return '-'+start.toString()+'-';
    }
    for (i = parseInt(start) ; i <= parseInt(end) ; i++) {
        result += i.toString()+'-';
    }
    return result;
}

function getArrayInterval(start, end) {
    var result = [];
    if (end == undefined) {
        return [start];
    }
    for (i = parseInt(start) ; i <= parseInt(end) ; i++) {
        result.push(i);
    }
    return result;
}


/**
 * --- Day 7 : Directory size ---
 */
function directorySize(fileList, sizeLowerThan = 0) {
    var result = 0;
    var fullDirectorySize = getArborescence(fileList);

    if (sizeLowerThan == 0) {
        return fullDirectorySize['/'];
    }
    Object.values(fullDirectorySize).forEach(element => {
        if(sizeLowerThan >= element) {
            result += element;
        }
    });
    return result;
}

function getArborescence(fileList) {
    var directorySize = [];
    var arbo = [];
    fileList.split("\n").forEach(line => {
        if (line == "ls") {
            return;
        }

        var changeDir = line.match('cd (.*)');
        var isFile = line.match('^([0-9]*) (.*)');
        if (changeDir != null) {
            // We need to change dir
            if (changeDir[1] == '..') {
                previousIndice = arbo.join('-');
                arbo.pop();
                if (directorySize[arbo.join('-')] == undefined) {
                    directorySize[arbo.join('-')] = 0;
                }
                directorySize[arbo.join('-')] += directorySize[previousIndice];
                console.log(previousIndice + ' ' + directorySize[previousIndice]);
            } else {
                count = arbo.push(changeDir[1]);
            }
        }
        if (isFile != null) {
            size = parseInt(isFile[1]);
            indice = arbo.join('-');
            directorySize[indice] == undefined ? directorySize[indice] = size : directorySize[indice] += size;
        }
    });

    while (arbo.length != 0) {
        previousIndice = arbo.join('-');
        arbo.pop();
        if (directorySize[arbo.join('-')] == undefined) {
            directorySize[arbo.join('-')] = 0;
        }
        directorySize[arbo.join('-')] += directorySize[previousIndice];
    }
    return directorySize;
}

function getSizeOfDirectoryToDelete(testData) {
    var result = 0;

    return result;
}

/**
 * --- Day 8: Get Visible trees ---
 */
function getVisibleTrees(forest) {
    visibleTrees = 0;
    return visibleTrees
};

/**
 * --- Day 9: Get tail position ---
 */
function getNumberTailPositions(motionList) {
    var position = [0, 0];
    var tailPositions = [];
    var lastPositions = [];
    var tailPosition = undefined;
    var motions = motionList.split("\n");

    motions.forEach(motion => {
        lastPositions = moveHeadAndGetTailPositions(position, tailPosition, motion);
        position = lastPositions.pop();
        console.log(motion, lastPositions);
        if (lastPositions[lastPositions.length-1] != undefined) {
            tailPosition = lastPositions[lastPositions.length-1];
        }
        tailPositions = tailPositions.concat(lastPositions);
    });
    var resultArray = [];
    tailPositions.forEach(item => {
        if (! resultArray.includes(item[0]+'-'+item[1])) {
            resultArray.push(item[0]+'-'+item[1]);
        }

    });
    return resultArray.length;
}

function moveHeadAndGetTailPositions(positionHead, positionTail, motion) {
    var infos = motion.split(' ');
    var positions = [];
    var newPositionTail = [];
    var newPositionHead = positionHead;
    switch (infos[0]) {
        case 'R':
            for (i = 0 ; i < infos[1] ; i++) {
                newPositionHead = [positionHead[0],positionHead[1]+1];
                if (iNeedToMoveTail(newPositionHead, positionTail)) {
                    newPositionTail = positionHead;
                    positions.push(newPositionTail);
                    positionTail = newPositionTail;
                }
                positionHead = newPositionHead;
            }
            break;
        case 'U':
            for (i = 0 ; i < infos[1] ; i++) {
                newPositionHead = [positionHead[0]+1,positionHead[1]];
                if (iNeedToMoveTail(newPositionHead,positionTail)) {
                    newPositionTail = positionHead;
                    positions.push(newPositionTail);
                    positionTail = newPositionTail;
                }
                positionHead = newPositionHead;
            }
            break;
        case 'L':
            for (i = 0 ; i < infos[1] ; i++) {
                newPositionHead = [positionHead[0],positionHead[1]-1];
                if (iNeedToMoveTail(newPositionHead,positionTail)) {
                    newPositionTail = positionHead;
                    positions.push(newPositionTail);
                    positionTail = newPositionTail;
                }
                positionHead = newPositionHead;
            }
            break;
        case 'D':
            for (i = 0 ; i < infos[1] ; i++) {
                newPositionHead = [positionHead[0]-1,positionHead[1]];
                if (iNeedToMoveTail(newPositionHead,positionTail)) {
                    newPositionTail = positionHead;
                    positions.push(newPositionTail);
                    positionTail = newPositionTail;
                }
                positionHead = newPositionHead;
            }
            break;
    }
    positions.push([positionHead[0], positionHead[1]]);

    return positions;
}

function iNeedToMoveTail(positionHead, positionTail) {
    if (positionTail == undefined) {
        return true;
    }
    for (x = -1 ; x <= 1 ; x++) {
        for (y = -1 ; y <= 1 ; y++) {
            if (positionHead[0]+x == positionTail[0] && positionHead[1]+y == positionTail[1]) {
                return false;
            }
        }
    }
    return true;
}

function isRelated(positionHead, positionTail) {
    for (x = -1 ; x <= 1 ; x++) {
        for (y = -1 ; y <= 1 ; y++) {
            if (positionHead[0]+x == positionTail[0] && positionHead[1]+y == positionTail[1]) {
                return true;
            }
        }
    }
    return false;
}
