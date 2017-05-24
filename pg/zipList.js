class LinkedList {

    constructor() {
        this.start = null;
        this.end = null;
    }

    addAll(arr) {
        arr.forEach(val => {
            const node = {
                val,
                next: null
            };

            if(!this.start)
                this.start = node;

            if(this.end) {
                this.end.next = node;
            }

            this.end = node;
        })
    }

    log() {
        let node = this.start;

        while (node) {
            console.log(node.val);
            node = node.next;
        }

    }

}

const list = new LinkedList();

list.addAll([1,2,3,4,5,6,7,8,9]);

const zip = (list) => {
    let node = list.start;
    let beforeEnd;
    let end;

    while (node && node.next) {

        beforeEnd = node;
        end = node.next;
        while (end && end.next) {
            beforeEnd = end;
            end = end.next;
        }

        if(beforeEnd !== node) {
            end.next = node.next;
            node.next = end;
            beforeEnd.next = null;
        }

        node = end.next;
    }
};

zip(list);
list.log();