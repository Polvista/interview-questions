/** first attempt */

/*const isDividedEvenly = (num, divider) => {
    while (num > 0)
        num -= divider;

    return num === 0;
};

const findGCD = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    if(a === b)
        return a;

    if(a > b) {
        let t = a;
        a = b;
        b = t;
    }

    for(let i = Math.min(b - a, a); i > 1; i--) {
        if(isDividedEvenly(a, i) && isDividedEvenly(b, i))
            return i;
    }

    return 1;
};*/

const findGCD = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    if(a === b)
        return a;

    if((a & 1) === 0 && (b & 1) === 0)
        return findGCD(a >> 1, b >> 1) << 1;

    if((a & 1) === 0 && (b & 1) !== 0)
        return findGCD(a >> 1, b);

    if((a & 1) !== 0 && (b & 1) === 0)
        return findGCD(a, b >> 1);


    if(a > b) {
        let t = a;
        a = b;
        b = t;
    }

    return findGCD(b - a, a);
};

console.log(findGCD(15, 20)); //5
console.log(findGCD(12, 16)); //4
console.log(findGCD(18, 21)); //3
console.log(findGCD(15, 19)); //1
console.log(findGCD(24, 36)); //12
console.log(findGCD(-24, 36)); //12
