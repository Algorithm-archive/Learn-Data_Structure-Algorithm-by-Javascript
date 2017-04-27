/*  Merge Sort Implementation in JavaScript */

function mergeSort(arr) {
	var len = arr.length;

	if (len === 1) return arr; //Single element left, No need to further divide

	var mid = Math.floor(len / 2);
	var left = arr.slice(0, mid); //grab the left half of the current list
	var right = arr.slice(mid, len); //grab the right half of the current list

	return merge(mergeSort(left), mergeSort(right)); //recursively call with the list to divide and then merge them two together to get the sorted result
}

//merge the given two portions of a list
function merge(left, right) {
	var result = [];
	var leftCount = 0,
		rightCount = 0;

	//Compare taking two elements from two list each time and set the smallest one to the new list. continue doing the same until one list is empty
	while (leftCount < left.length && rightCount < right.length) {
		if (left[leftCount] < right[rightCount])
			result.push(left[leftCount++]);
		else
			result.push(right[rightCount++]);
	}

	/*If a single list is empty the previous loop will be ended. But we also need to get the leftover from the another list. Following two will just grab the leftovers(if any) from the given two lists.*/

	//take the leftovers from the left array(if any)
	//Following loop can also replaced by a single line code like: result.concat(left.slice(leftCount, left.length))
	while (leftCount < left.length) {
		result.push(left[leftCount++]);
	}

	//take the leftovers from the right array(if any)
	//Following loop can also replaced by a single line code like: result.concat(right.slice(rightCount, right.length))
	while (rightCount < right.length) {
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

for (var i = 0; i < 10; i++) { //initialize a random integer unsorted array
	arr.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(arr); //printing unsorted array

arr = mergeSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
