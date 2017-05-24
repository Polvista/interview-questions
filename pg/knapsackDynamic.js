Array.prototype.last = function () {
    return this[this.length - 1];
};

const findOptimal = (items, space) => {
    const costs = [];
    const getEmpty = () => ({ value: 0, items: [] });

    items.forEach((item, row) => {
        costs[row] = [];

        for(let i = 0; i < space; i++) {
            const prevBestValue = row === 0 ?
                getEmpty() :
                costs[row - 1][i];

            const freeSpace = i + 1 - item.space;
            let thisBestValue;

            if(freeSpace < 0) {
                thisBestValue = getEmpty();
            } else {
                const bestValForFreeSpace = (freeSpace === 0 || row === 0) ?
                    getEmpty() :
                    costs[row - 1][freeSpace - 1];

                thisBestValue = {
                    value: item.cost + bestValForFreeSpace.value,
                    items: [...bestValForFreeSpace.items, item.name]
                };
            }

            costs[row][i] = prevBestValue.value >= thisBestValue.value ? prevBestValue : thisBestValue;
        }
    });

    return costs.last().last();
};

const items = [
    { name: 'guitar', cost: 1500, space: 1 },
    { name: 'stereo', cost: 3000, space: 4 },
    { name: 'laptop', cost: 2000, space: 3 },
    { name: 'iphone', cost: 2000, space: 1 },
];

console.log(findOptimal(items, 5));