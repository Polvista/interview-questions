class Rectangle {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}

const findTwoMiddle = (...args) => {
    return args.sort((n1, n2) => n1 - n2).splice(1, 2);
};

const findIntersection = (r1, r2) => {
    if(r1.x2 < r2.x1 || r1.x1 > r1.x2 || r1.y2 > r2.y1 || r1.y1 < r2.y2)
        return false;

    const xRes = findTwoMiddle(r1.x1, r2.x1, r1.x2, r2.x2);
    const yRes = findTwoMiddle(r1.y1, r2.y1, r1.y2, r2.y2);

    return new Rectangle(xRes[0], yRes[1], xRes[1], yRes[0]);
};

console.log(findIntersection( // { x1: 8, y1: 5, x2: 10, y2: 2 }
    new Rectangle(3, 10, 10, 2),
    new Rectangle(8, 5, 15, -3)
));

console.log(findIntersection( // { x1: 8, y1: 10, x2: 10, y2: 5 }
    new Rectangle(3, 10, 10, 2),
    new Rectangle(8, 30, 15, 5)
));