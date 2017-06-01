const findClosest = (num) => {
    let smallestBit = num & ~(num - 1);

    if(num & 1) {
        while(num & (smallestBit << 1)) {
            smallestBit <<= 1;
        }

        return (num ^ smallestBit) | (smallestBit << 1);
    } else {
        return (num ^ smallestBit) | (smallestBit >>> 1);
    }
};

console.log(findClosest(3)); // 3->5 11 -> 101

console.log(findClosest(5)); // 5->6 101 -> 110

console.log(findClosest(7)); // 7->11 111 -> 1011
console.log(findClosest(11)); // 11->13 1011 -> 1101

console.log(findClosest(8)); // 8->4 1000 -> 100
console.log(findClosest(10)); // 10->9 1010 -> 1001
console.log(findClosest(12)); // 12->10 1100 -> 1010
console.log(findClosest(6)); // 6->5 110 -> 101