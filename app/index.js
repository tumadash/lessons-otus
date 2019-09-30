function sum(num) {

    let currentSum = 0;
    if (num === undefined) {
        currentSum = 0;
    } else if (typeof num === 'number') {
        currentSum = num;
    } else {
        console.error('enter number');
        return;
    }

    function func(a) {
        if (a === undefined) {
            a = 0;
        }
        if (typeof a === 'number') {
            currentSum += a;
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