// only + - and shifting bits

const isNegative = num => num & (1 << 31);

const division = (x, y) => {
    let res = 0;

    while(!isNegative(x - y)) {
        res++;
        x -= y;
    }

    return res;
};

console.log(division(16, 3));
console.log(division(11, 7));
console.log(division(5, 8));
console.log(division(30, 3));