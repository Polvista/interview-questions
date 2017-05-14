const swap = (list, x, y) => {
    let temp = list[x];
    list[x] = list[y];
    list[y] = temp;
};

const selectPivot = list => list[0];

const sort = (list) => {
    if(list.length < 2)
        return list;

    if(list.length === 2) {
        if(list[0] > list[1]) swap(list, 0, 1);

        return list
    }

    const left = [];
    const right = [];
    const pivots = [];

    const pivot = selectPivot(list);

    list.forEach(elem => {
        if(elem === pivot) {
            pivots.push(elem);
            return;
        }

        if(elem > pivot)
            right.push(elem);
        else
            left.push(elem);
    });

    return [...sort(left), ...pivots, ...sort(right)];
};

// [ 58, 29, 12, 70, 61, 92, 10, 70, 13, 10, 67 ]; - pivots duplication
const arr = [1,1,1,1,1,1,1,1,1,1,1].map(() => Math.floor(Math.random() * 100));
console.log(arr);
console.log(sort(arr));