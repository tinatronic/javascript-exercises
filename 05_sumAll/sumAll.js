const sumAll = function(numA, numB) {
    if(isNaN(numA) || isNaN(numB)) {
        return 'ERROR';
    }

    if (numA < 0 || numB < 0) {
        return 'ERROR';
    }

    return (Math.abs(numA - numB) + 1) * (numA + numB) / 2;
};

// Do not edit below this line
module.exports = sumAll;
