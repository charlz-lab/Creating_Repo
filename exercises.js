//3.1 flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((array1, array2) => array1.concat(array2)));
// → [1, 2, 3, 4, 5, 6]
//3-2. loop(value, test, update, body)
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//3-3. everyLoop(array, test)
//3-4. everySome(array, test)
function everyLoop(array, test) {
    // Your code here.
    for (let element of array) {
        if (test(element) === false) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    // Your code here.  
    return array.some(test);
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true