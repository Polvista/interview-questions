const sort = (list) => {
    let index = 0, minIndex;

    while(index < list.length) {
        minIndex = null;

        for(let i = index; i < list.length; i++) {
            if(minIndex === null || list[i] < list[minIndex]) {
                minIndex = i;
            }
        }

        if(minIndex !== index) {
            let temp = list[index];
            list[index] = list[minIndex];
            list[minIndex] = temp;
        }

        index++;
    }

    return list;
};

const arr = [1,1,1,1,1,1,1,1,1,1,1].map(() => Math.floor(Math.random() * 100));
console.log(arr);
console.log(sort(arr));