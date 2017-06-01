// TODO wrong, too complex
const findClosest = (arr, i, target, maxRightElem) => {
    let leftBoundary = i;
    let rightBoundary = maxRightElem;

    while(leftBoundary < rightBoundary) {
        let checkElem = Math.floor((leftBoundary + rightBoundary) / 2);
        let sum = arr[checkElem] + arr[i];

        if(sum === target)
            return checkElem;

        if(sum < target) {
            if(arr[checkElem + 1] + arr[i] > target)
                return checkElem;

            leftBoundary = checkElem + 1;
        }

        if(sum > target) {
            rightBoundary = checkElem - 1;
        }
    }

    let closest = Math.max(leftBoundary, rightBoundary);
    if(arr[closest] + arr[i] > target)
        return -1;

    return closest;
};

const isThereSumOfTwoElements = (arr, target) => {
    let maxRightElem = arr.length - 1;

    for(let i = 0; i <= maxRightElem; i++) {
        let closest = findClosest(arr, i, target, maxRightElem);

        if(closest === -1)
            return false;

        if(arr[i] + arr[closest] === target)
            return true;

        maxRightElem = closest;
    }

    return false;
};

console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 29));
console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 64));
console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 9));
console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 87));

console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 55));
console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 20));
console.log(isThereSumOfTwoElements([1,2,3,6,7,8,21,24,56,66], 0));