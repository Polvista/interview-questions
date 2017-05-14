const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// лишние операции по созданию массивов

/*const search = (item, list) => {

    let numOfChecks = 0;

    while(list.length) {
        const indexToCheck = Math.floor(list.length / 2);
        const itemOnIndex = list[indexToCheck];
        numOfChecks++;

        /!*console.log(indexToCheck);
        console.log(itemOnIndex);
        console.log(list);*!/

        if(item === itemOnIndex) {
            console.log('checks', numOfChecks);
            return itemOnIndex;
        }

        if(itemOnIndex > item) {
            list = list.slice(0, indexToCheck);
        } else {
            list = list.slice(indexToCheck + 1, list.length);
        }
    }

    console.log('checks', numOfChecks);
    return null;
};*/


const search = (item, list) => {
    let numOfChecks = 0;
    let start = 0;
    let end = list.length - 1;

    while(true) {
        numOfChecks++;

        const indexToCheck = Math.floor((start + end) / 2);
        const itemOnIndex = list[indexToCheck];

        /*console.log('--stats--');
        console.log(start, end);
        console.log(indexToCheck);*/

        if(item === itemOnIndex) {
            console.log('checks', numOfChecks);
            return itemOnIndex;
        }

        if(start === end) {
            console.log('checks', numOfChecks);
            return null;
        }

        if(itemOnIndex > item) {
            end = indexToCheck - 1;
        } else {
            start = indexToCheck + 1;
        }
    }
};

//console.log(search(4, list));

for(let i = 0; i < list.length + 2; i++)
    console.log(`search ${i}`, search(i, list));
