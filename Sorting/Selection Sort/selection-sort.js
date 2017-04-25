/* Selection Sort implementation in JavaScript */
function selectionSort(arr) {
	var len = arr.length;

	/* advance the position through the entire array */
	/*   (could do i < n-1 because single element is also min element) */
	for (var i = 0; i < len - 1; i++) {
		// find the min element in the unsorted a[i .. n-1]

		var currentMin = i; // assume the min is the first element
		// test against elements after i to find the smallest
		for (var j = i + 1; j < len; j++) {
			// if this element is less, then it is the new minimum
			if (arr[j] < arr[currentMin]) //To sort in decreasing order just change the comparison operator to '>'
				currentMin = j; // found new minimum; remember its index
		}

		if (currentMin != i) //if the current_Min is equal to i, then it is in right position already
		{
			//Swap the values
			tmp = arr[i];
			arr[i] = arr[currentMin];
			arr[currentMin] = tmp;
		}
	}

	return arr;
}

/******************* Testing Selection sort algorithm *********************/

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

arr = selectionSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
