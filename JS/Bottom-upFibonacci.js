var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    
    var twoBehind = 0;
    var oneBehind = 1;
    var result = 0;
    for (var i = 1; i < n; i++) {
        result = twoBehind + oneBehind;
        twoBehind = oneBehind;
        oneBehind = result;
    }
    return result;
};

fib(5);
