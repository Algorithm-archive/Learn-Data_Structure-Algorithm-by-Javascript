/*Insertion sort implementation in JavaScript */
function insertionSort(arr) {
	var len = arr.length;

	for (var i = 1; i < len; i++) {
		currentValue = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		   greater than current_value, to one position ahead
		   of their current position */
		while (j >= 0 && arr[j] > currentValue) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = currentValue;
	}

	return arr;
}

/******************* Testing Insertion sort algorithm *********************/

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [];

for (var i = 0; i < 10; i++) { //initialize a random integer unsorted array
	arr.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(arr); //printing unsorted array

arr = insertionSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
