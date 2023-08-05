var y1 = 20;
var y2 = 140;
var y3 = 300;
var x = 10;

var displayArray = function(array, x, y) {
    textFont('monospace', 12);  // font
    var str = array.join(' ');  // convert to string w spaces, not commas
    text(str, x, y); 
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var place = 0;
    for (var j=0;j<array.length;j++){
        place = indexOfMinimum(array,j);
        swap (array,j,place);
    }

};


var array1 = [22,11,99,88,9];
var place = 0;
for (var j=0; j<array1.length; j++){
    fill(0,0,0);
    displayArray(array1, x, y1+20*j);
    place = indexOfMinimum(array1, j);
    swap (array1, j, place);
}


var array2 = [1,2,3,5,4,6,7];
var place = 0;
for (var j=0; j<array2.length; j++){
    fill(0,0,0);
    displayArray(array2, x, y2+20*j);
    place = indexOfMinimum(array2, j);
    swap (array2, j, place);
}


var array3 = [2, 1];
var place = 0;
for (var j=0; j<array3.length; j++){
    fill(0,0,0);
    displayArray(array3, x, y3+20*j);
    place = indexOfMinimum(array3, j);
    swap (array3, j, place);
}

line(78, 21, 13, 30);
line(28, 41, 26, 50);
line(78, 61, 43, 70);
line(60, 81, 58, 90);

line(14, 141, 13, 150);
line(24, 161, 23, 170);
line(34, 181, 33, 190);
line(54, 201, 43, 210);
line(54, 221, 53, 230);
line(64, 241, 63, 250);

line(25, 301, 13, 310);

