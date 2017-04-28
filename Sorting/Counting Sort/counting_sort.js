/* Couting Sort implementation in JavaScript */
function countingSort(arr) {
	var i,
		min = 0,
		index = 0,
		aux = [],
		sortedArray = [];

	var maxVal = Math.max.apply(null, arr); //If the max value of the array given, this line can be removed

	for (i = min; i <= maxVal; i++) { //initializing the auxiliary array with 0
		aux[i] = 0;
	}

	for (i = 0; i < arr.length; i++) { //Counting the frequency of the elements
		aux[arr[i]]++;
	}

	for (i = min; i <= maxVal; i++) { //based on the frequency, building the new sorted array
		while (aux[i]-- > 0) {
			sortedArray[index++] = i;
		}
	}

	return sortedArray;
}

/******************* Testing Counting sort algorithm *********************/

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

arr = countingSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
