// Merge Sort Implementation
function mergeSort(arr){
    var len = arr.length;

    if(len === 1) return arr;

    var mid = Math.floor(len/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, len);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [];
    var leftCount = 0, rightCount = 0;

    while(leftCount < left.length && rightCount < right.length){
        if(left[leftCount] < right[rightCount])
            result.push(left[leftCount++]);
        else
            result.push(right[rightCount++]);
    }

    while(leftCount < left.length){
        result.push(left[leftCount++]);
    }

    while(rightCount < right.length){
        result.push(right[rightCount++]);
    }

    return result;
}


/******************* Testing Merge sort algorithm *********************/

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [];

for(var i=0;i<10;i++){ //initialize a random integer unsorted array
    arr.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(arr); //printing unsorted array

arr = mergeSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
