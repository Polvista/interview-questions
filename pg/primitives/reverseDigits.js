const reverse = num => {
    let res = 0, digit, isNegative = num < 0;

    while(num) {
        digit = num % 10;
        res *= 10;
        res += digit;
        num = isNegative ? Math.ceil(num / 10) : Math.floor(num / 10);
    }

    return res;
};

console.log(reverse(24));
console.log(reverse(123));
console.log(reverse(123456));
console.log(reverse(-4567));