/* Quick Sort Implementation in JavaScript */

function quickSort(arr, left, right) {
	var index;

	//Partition the  array and recursively sort them
	if (arr.length > 1) {
		index = partition(arr, left, right);

		if (left < index - 1) {
			quickSort(arr, left, index - 1);
		}

		if (index < right) {
			quickSort(arr, index, right);
		}
	}

	return arr;
}

function partition(arr, left, right) {

	var pivot = arr[Math.floor((right + left) / 2)]; //Taking the middle element of the list as Pivot
	var i = left,
		j = right;

	while (i <= j) {
		while (arr[i] < pivot) {
			i++;
		}

		while (arr[j] > pivot) {
			j--;
		}

		//If the elements from the left and right are swappable (means right one is smaller than the pivot and left one is larger than the pivot) then swap them
		if (i <= j) {
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

for (var i = 0; i < 10; i++) { //initialize a random integer unsorted array
	arr.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(arr); //printing unsorted array

arr = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
