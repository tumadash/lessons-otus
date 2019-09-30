function sum(num) {

    let currentSum = 0;
    if (!num) {
        return currentSum;
    }
    if (typeof num === 'number') {
        currentSum = num;
    } else {
        console.error('enter number');
        return;
    }

    function func(b) {
        if (!b) {
            return currentSum;
        }
        if (typeof b === 'number') {
            currentSum += b;
        } else {
            console.error('enter number');
            return;
        }
        return func;
    }

    func.toString = function () {
        return currentSum;
    };

    return func;
}