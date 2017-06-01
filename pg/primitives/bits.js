const addOnes = num => num | (num & ~ (num - 1) -1);

console.log('--- ADD ONES ---');
console.log(addOnes(-1)); // 1111.. => 1111..
console.log(addOnes(1)); // 1 => 1
console.log(addOnes(0)); // 0 => 0
console.log(addOnes(9)); // 1001 => 1001 (9)
console.log(addOnes(8)); // 1000 => 1111 (15)

// TODO неправильно, можно проще
const isCubeOfTwo = num => {
    let rightOne = num & ~ (num - 1);

    if(rightOne) {
        num = num ^ rightOne;
        return (num & ~ (num - 1)) === 0;
    }

    return false
};

console.log('--- IS CUBE ---');
console.log(isCubeOfTwo(4));
console.log(isCubeOfTwo(5));
console.log(isCubeOfTwo(8));
console.log(isCubeOfTwo(1));
console.log(isCubeOfTwo(0));

// TODO неправильно, можно проще
const moduloOfThePowerOfTwo = (num, divider) => {
    let mask = 0;
    let result;

    while(divider !== 1) {
        mask = (mask << 1) | 1;
        divider = divider >>> 1;
    }

    result = num < 0 ? (~num + 1) & mask : num & mask;

    return num < 0 ? (~result + 1) : result;
};

console.log('-- MODULO --');
console.log(moduloOfThePowerOfTwo(10, 8));
console.log(moduloOfThePowerOfTwo(11, 4));
console.log(moduloOfThePowerOfTwo(5, 1));
console.log(moduloOfThePowerOfTwo(12, 2));
console.log(moduloOfThePowerOfTwo(0, 16));
console.log(moduloOfThePowerOfTwo(-10, 8));
