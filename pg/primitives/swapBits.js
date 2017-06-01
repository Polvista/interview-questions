const swapBits = (num, i, j) => {
    /*const bit1 = num >>> i & 1;
    const bit2 = num >>> j & 1;

    if(bit1 !== bit2)
        return num ^ (bit1 << i | bit2 << j) ^ (bit1 << j | bit2 << i);

    return num;*/

    if( (num >>> i & 1) !== (num >>> j & 1) )
        return num ^ (1 << i | 1 << j);

    return num;
};

console.log(swapBits(73, 1, 6)); // 11

module.exports = {
    swapBits
};