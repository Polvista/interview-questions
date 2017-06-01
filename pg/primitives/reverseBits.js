const { swapBits } = require('./swapBits');

const LOOKUP_SIZE = 4;
const bitsLookup = [];

for(let i = 0; i < 16; i++) {
    bitsLookup[i] = swapBits(swapBits(i, 0, 3), 1, 2)
}

const getBitPosition = (num) => {
    let position = 0;
    let move = 16;

    while(move) {
        if(num >>> move !== 0) {
            position += move;
            num >>>= move;
        }

        move = Math.floor(move / 2);
    }

    return position;
};

const reverseBits = (num) => {
    /** brute-force */

    /*let res = 0;
    for(let i = 0; i < 32; i++) {
        res |= (num >>> i & 1) << (31 - i);
    }

    return res;*/

    /** half brute-force */
    /*let res = 0;
    for(let i = 0; i < 16; i++) {
        res |= (num >>> i & 1) << (31 - i);
        res |= (num >>> (31 - i) & 1) << i;
    }

    return res;*/

    /** half brute-force with swap */
    /*for(let i = 0; i < 16; i++) {
        num = swapBits(num, i, 31 - i);
    }

    return num;*/

    /** may be more optimal */
    /*let res = 0, lastBit, lastBitPosition;

    while(num) {
        lastBit = num & ~(num - 1);
        lastBitPosition = getBitPosition(lastBit);

        res |= 1 << (31 - lastBitPosition);
        num ^= lastBit;
    }

    return res;*/

    /** with lookup */
    let res = 0, lastBits;
    for(let i = 0; i < 32 / LOOKUP_SIZE; i++) {
        lastBits = (num >>> (i * LOOKUP_SIZE)) & 15;
        res |= bitsLookup[lastBits] << (28 - i * LOOKUP_SIZE);
    }

    return res;
};

/*console.log(getBitPosition(1));
console.log(getBitPosition(2));
console.log(getBitPosition(4));
console.log(getBitPosition(8));
console.log(getBitPosition(131584));*/

console.log(reverseBits(0));   // 0
console.log(reverseBits(-1)); // -1
console.log(reverseBits(1)); // -2147483648
