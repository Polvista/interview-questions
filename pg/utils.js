class Queue {

    constructor() {
        this._queue = [];
    }

    put(elem) {
        this._queue.push(elem);
    }

    get() {
        return this._queue.shift();
    }

    isEmpty() {
        return this._queue.length === 0;
    }

}

module.exports = {
    Queue
};