// creating the memo variable
var memo = {};

var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else if (memo.hasOwnProperty(n)) {

      // checking if i have this in memo
        return memo[n];
    } else {
        var result = factorial(n - 1) * n;

      // updating the memo
        memo[n] = result;
        return result;
    }
};

factorial(2);
factorial(5);
