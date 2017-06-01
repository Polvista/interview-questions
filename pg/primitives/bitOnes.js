/*const findNumberOfOnes = (num) => {
    let ones = 0;

    while(num !== 0 ) {
        if(num & 1)
            ones++;
        num = num >>> 1;
    }

    return ones;
};

const findOnesBits = (num) => {
    let ones = 0;
    let oneBit = num & ~ (num - 1);

    while(oneBit !== 0) {
        ones++;
        num = num ^ oneBit;
        oneBit = num & ~ (num - 1);
    }

    return ones;
};*/


/*console.log(findNumberOfOnes(0), findOnesBits(0));
console.log(findNumberOfOnes(1), findOnesBits(1));
console.log(findNumberOfOnes(2), findOnesBits(2));
console.log(findNumberOfOnes(9), findOnesBits(9));
console.log(findNumberOfOnes(11), findOnesBits(11));
console.log(findNumberOfOnes(-1), findOnesBits(-1));*/

// TODO could be improved
const findNumberOfOnes = (num) => {

    let ones = 0;

    while(num) {
        ones++;
        num = num ^ (num & ~(num - 1));
    }

    return ones;
};


console.log(findNumberOfOnes(0));
 console.log(findNumberOfOnes(1));
 console.log(findNumberOfOnes(2));
 console.log(findNumberOfOnes(9));
 console.log(findNumberOfOnes(11));
 console.log(findNumberOfOnes(-1));
























