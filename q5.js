(function() {
    console.log(foo); //
    console.log(typeof bar === 'undefined'); //

    var foo = 0;

    function bar() {
        var foo = 1;
    }

    bar();

    console.log(foo); //

    if(!foo) {
        var foo = 2; //
        let foo2 = foo + 2;
    }

    console.log(foo); //
    console.log(foo2); //
})();