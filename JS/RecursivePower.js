var isEven = function(n) {return n % 2 === 0;};
var isOdd = function(n) {return !isEven(n);};
var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    if (n === 0){return 1;} // base case
    else if (n < 0){return 1/power(x,-n);} // recursive case: n is negative 
    else if (isOdd(n)){return x*(power(x,n-1));} // recursive case: n is odd
    else if (isEven(n)){
        var z = power(x,n/2);
        return z*z
        ;} // recursive case: n is even
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
