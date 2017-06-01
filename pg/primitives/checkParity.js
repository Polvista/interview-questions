const checkParity = (num) => {
    let isOdd = false;

    while(num) {
        isOdd = !isOdd;
        num &= num - 1;
    }

    return Number(isOdd);
};


console.log(checkParity(0));
console.log(checkParity(1));
console.log(checkParity(2));
console.log(checkParity(9));
console.log(checkParity(11));
console.log(checkParity(-1));