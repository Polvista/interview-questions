const arr = [1,1,1,1,1,1,1,1,1,1,1].map(() => Math.floor(Math.random() * 100));

const smallSort = (list, index) => {
    const pivot = list[index];

    let temp;
    let elem;

    const swap = (i,j) => {
        temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    };

    for(let i = 0; i < list.length; i++) {
        elem = list[i];

        if(elem > pivot && i < index) {
            swap(index, i);
            index = i;
        }

        if(elem < pivot && i > index) {
            swap(index, index + 1);
            if(i !== index + 1)
                swap(index, i);

            index += 1;
        }

        if(elem === pivot) {}
    }

    return list;
};

console.log(arr);
console.log(smallSort(arr, 4));

/*
const topLevelSort = (list) => {
    return sort(list, [], []);
};

const sort = (list, left, right) => {
    if(list.length < 2)
        return list;

    if(list.length === 2) {
        if(list[0] > list[1]) {
            const temp = list[0];
            list[0] = list[1];
            list[1] = temp;
        }

        return list;
    }

    const pivot = list[Math.floor(Math.random() * list.length)];
    const pivots = [];

    left = [];
    right = [];

    for(let i = 0; i < list.length; i++) {
        const elem = list[i];

        if(elem === pivot){
            pivots.push(elem);
        } else if(elem < pivot) {
            left.push(elem);
        } else {
            right.push(elem);
        }
    }

    return [
        ...sort(left, list),
        ...pivots,
        ...sort(right, list, left)
    ];
};

console.log(arr);
console.log(sort(arr));*/
