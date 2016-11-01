var expect = require("chai").expect;

const curried = curry((a, b, c) => a + b + c);

curried(1, 2, 3);  // 6
curried(1)(2)(3);  // 6
curried(1, 2)(3);  // 6

function curry(origFunc) {
}

expect(curried(1, 2, 3)).to.equal(6);
expect(curried(1)(2)(3)).to.equal(6);
expect(curried(1, 2)(3)).to.equal(6);