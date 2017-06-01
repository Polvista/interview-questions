const findMaxSubArray = (arr) => {
    const chartArr = [arr[0]];

    for(let i = 1; i < arr.length; i++)
        chartArr[i] = chartArr[i - 1] + arr[i];

    //console.log(chartArr);

    let bestMin, bestMax, bestScore, currentMin = 0;

    for(let i = 1; i < chartArr.length; i++) {
        if(chartArr[i] < chartArr[currentMin]) {
            currentMin = i;
            continue;
        }

        if(bestScore == null || chartArr[i] - chartArr[currentMin] > bestScore) {
            bestMin = currentMin;
            bestMax = i;
            bestScore = chartArr[i] - chartArr[currentMin];
        }
    }

    return [bestMin + 1, bestMax, bestScore];
};

console.log(findMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(findMaxSubArray([-2, -10, -3, -4, 8, 5, 4, -3, 2]));
console.log(findMaxSubArray([-2, -10, -3, -4, -8, -5, -4, -3, -7]));
//console.log(findMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.log(findMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));