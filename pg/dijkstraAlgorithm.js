class GraphSearch {

    constructor() {
        this.data = [];
        this.index = {};
        this.nextNode = null;
    }

    setNodesIds(ids) {
        ids.forEach(id => {
            this.data.push({ id, time: Infinity, parent: null, isChecked: false });
            this.index[id] = this.data.length - 1;
        });
    }

    getNode(id) {
        return this.data[this.index[id]];
    }

    setChecked(id) {
        this.getNode(id).isChecked = true;
        this.calcNextNode();
    }

    calcNextNode() {
        this.nextNode = this.data.reduce((minNode, node) => {
            if(!node.isChecked && node.time !== Infinity && (!minNode || minNode.time > node.time))
                return node;

            return minNode;
        }, null);
    }

    getNextNode() {
        return this.nextNode;
    }

    log() {
        console.log(this.data);
    }
}

const search = (graph, start, finish) => {
    const graphSearch = new GraphSearch();

    graphSearch.setNodesIds(Object.keys(graph));

    graph[start].forEach(node => {
        const nodeResult = graphSearch.getNode(node.place);
        nodeResult.time = node.time;
        nodeResult.parent = start;
    });

    graphSearch.getNode(start).time = 0;
    graphSearch.setChecked(start);

    while(graphSearch.getNextNode() !== null) {
        const node = graphSearch.getNextNode();

        graph[node.id].forEach(graphNode => {
            const nodeResult = graphSearch.getNode(graphNode.place);
            const newTimeToNode = node.time + graphNode.time;

            if(nodeResult.time > newTimeToNode) {
                nodeResult.time = newTimeToNode;
                nodeResult.parent = node.id;
            }
        });

        graphSearch.setChecked(node.id);
    }

    graphSearch.log();

    let wayNode = graphSearch.getNode(finish);
    if(!wayNode.parent)
        return 'No way!';

    const way = [];

    while(wayNode) {
        way.unshift(wayNode.id);
        wayNode = graphSearch.getNode(wayNode.parent);
    }

    return { time: graphSearch.getNode(finish).time, way };
};

const graph = {
    moscow: [ { place: 'piter', time: 8 }, { place: 'tver', time: 2 } ],
    piter: [ { place: 'kazan', time: 10 } ],
    tver: [ { place: 'kazan', time: 4 }, { place: 'rostov', time: 9 }, { place: 'tyla', time: 6 } ],
    rostov: [ { place: 'cup', time: 2 } ],
    kazan: [ { place: 'tyla', time: 1} ],
    tyla: [ { place: 'ekat', time: 3 } ],
    ekat: [ { place: 'cup', time: 5 } ],
    noop: [],
    cup: []
};

console.log(search(graph, 'moscow', 'cup'));