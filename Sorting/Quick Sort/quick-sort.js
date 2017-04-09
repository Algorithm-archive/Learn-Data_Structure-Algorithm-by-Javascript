// Merge Sort Implementation
function quickSort(arr, left, right){
    var index;

    if(arr.length > 1){
        index = partition(arr, left, right);

        if(left < index - 1){
            quickSort(arr, left, index - 1);
        }

        if(index < right){
            quickSort(arr, index, right);
        }
    }

    return arr;
}

function partition(arr, left, right){

    var pivot = arr[Math.floor((right+left)/2)];
    var i = left, j = right;

    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }

        while(arr[j] > pivot){
            j--;
        }

        if(i <= j){
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;

            i++;
            j--;
        }
    }

    return i;
}

/******************* Testing Quick sort algorithm *********************/

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

arr = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
