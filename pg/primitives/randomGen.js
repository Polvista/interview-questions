const getRand = () => {
    return Math.floor(Math.random() * 2);
};

const randomGen = (a, b) => {
    let i = 0, j = b - a;

    while (i < j) {
        let middle = (i + j) / 2;

        if((i + j) % 2) {
            if(getRand()) {
                i = Math.ceil(middle);
            } else {
                j = Math.floor(middle);
            }
        } else {
            let r1 = getRand(), r2 = getRand();

            if(r1) {
                i = middle + r2;
            } else {
                j = middle - r2;
            }
        }

    }

    return a + i;
};

const randomGen2 = (a, b) => {
    const arr = [];

};

const res = {};
for(let i = 0; i < 10000; i++) {
    let num = randomGen2(1, 3);
    if(!res[num])
        res[num] = 0;

    res[num]++;
}
console.log(res);