/* Bubble Sort implementation in JavaScript */

//Simple Bubble Sort implementation
function bubbleSort(arr) {
	var len = arr.length;

	for (var i = 0; i < len - 1; i++) {
		// Last i elements are already in place, so the inner loops will run until it reaches the last i elements
		for (var j = 0; j < len - i - 1; j++) {
			//To Sort in decreasing order, change the comparison operator to '<'
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}

	return arr;
}

//Following is a slightly modified bubble sort implementation, which tracks the list with a flag to check if it is already sorted
function modifiedBubbleSort(arr) {
	var len = arr.length;

	for (var i = 0; i < len - 1; i++) {
		var flag = false; //Taking a flag variable

		// Last i elements are already in place, so the inner loops will run until it reaches the last i elements
		for (var j = 0; j < len - i - 1; j++) {
			//To Sort in decreasing order, change the comparison operator to '<'
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;

				flag = true; //Setting the flag, if swapping occurs
			}
		}

		//If not swapped, that means the list has already sorted
		if (!flag) break;
	}

	return arr;
}


/******************* Testing Bubble sort algorithm *********************/

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

arr = bubbleSort(arr);
// arr = modifiedBubbleSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
