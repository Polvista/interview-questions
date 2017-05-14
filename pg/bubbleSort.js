const sort = (list) => {
    let done = 0;

    const swap = (x, y) => {
        let temp = list[x];
        list[x] = list[y];
        list[y] = temp;
    };

    while(done < list.length) {

        for(let i = list.length - 1; i > done; i--) {
            if(list[i] < list[i - 1]) {
                swap(i, i - 1);
            }
        }

        done++;
    }

    return list;
};

const arr = [1,1,1,1,1,1,1,1,1,1,1].map(() => Math.floor(Math.random() * 100));
console.log(arr);
console.log(sort(arr));