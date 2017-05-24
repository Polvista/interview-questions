const { Queue } = require('./utils');

const search = (graph, start, item) => {
    const queue = new Queue();

    // Map seems to be faster to check than array
    const checkedNodes = {};

    queue.put({ item: start, way: [] });

    while(!queue.isEmpty()) {
        const queueElem = queue.get();

        if(queueElem.item === item)
            return [...queueElem.way, item];

        checkedNodes[queueElem.item] = true;

        const way = [...queueElem.way, queueElem.item];
        //console.log(queueElem, graph[queueElem.item]);
        graph[queueElem.item]
            .filter(nextItem => !checkedNodes[nextItem])
            .forEach(item => queue.put({ item, way }));
    }

    return 'no way!';
};

const graph = {
    1: [2, 3, 4],
    2: [4],
    3: [8],
    4: [7, 8],
    5: [9],
    6: [5],
    7: [],
    8: [9],
    9: [10],
    10: []
};

console.log(search(graph, 1, 9));