const isNumberPalindrome = num => {
    if(num < 0)
        return false;

    let numLength = Math.floor(Math.log10(num)) + 1;

    while(numLength > 1) {
        if((num % 10) !== Math.floor(num / Math.pow(10, numLength - 1))) {
            return false;
        }

        num = Math.floor((num % Math.pow(10, numLength - 1)) / 10);
        numLength -= 2;
    }

    return true;
};

console.log(isNumberPalindrome(1));
console.log(isNumberPalindrome(11));
console.log(isNumberPalindrome(12321));
console.log(isNumberPalindrome(123321));
console.log(isNumberPalindrome(12321321));
console.log(isNumberPalindrome(-1));