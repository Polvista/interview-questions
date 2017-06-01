// assignment, bit operators, equality checks and boolean operators, loops, your functions. no < or inc/dec;
// TODO not correct can't use -
const sum = (x, y) => {
    let bit;

    while(y) {
        bit = y & ~ (y - 1);
        y ^= bit;

        if((x & bit) === 0) {
            x |= bit;
        } else {
            x = sum(x ^ bit, bit << 1);
        }
    }

    return x;
};

const multiplyByBit = (x, bit) => {
    if(bit === 1)
        return x;

    let half = multiplyByBit(x, bit >>> 1);

    return sum(half, half);
};

const multiply = (x, y) => {
    let bit, res = 0;

    while(y) {
        bit = y & ~ (y - 1);
        y ^= bit;

        res = sum(res, multiplyByBit(x, bit));
    }

    return res;
};

// 001 010 = 010
// 010 010 = 100
// 010 011 = 110

/*console.log(sum(1,3));
console.log(sum(4,5));
console.log(sum(2,3));
console.log(sum(20,-3));*/

console.log(multiply(4,5));
console.log(multiply(3,5));
console.log(multiply(1,5));
console.log(multiply(20,0));
console.log(multiply(-2,10));
console.log(multiply(-3,-4));
