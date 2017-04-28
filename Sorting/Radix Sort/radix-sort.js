/* Radix Sort implementation in JavaScript */

function radixSort(arr) {
	var maxDigit = getMaxDigitLen(arr);

	//Looping for every digit index from leftmost digits to rightmost digits
	for (var i = 1; i <= maxDigit; i++) {

		// rebuild the digit buckets according to this digit
		var digitBuckets = [];
		for (var j = 0; j < arr.length; j++) {
			var digit = getDigit(arr[j], i); //get the i-th digit of the j-th element of the array

			digitBuckets[digit] = digitBuckets[digit] || []; //If empty initialize with empty array
			digitBuckets[digit].push(arr[j]); //Add the number in it's respective digits bucket
		}

		// rebuild the array according to this digit
		var index = 0;
		for (var k = 0; k < digitBuckets.length; k++) {
			if (digitBuckets[k] && digitBuckets[k].length > 0) {
				for (j = 0; j < digitBuckets[k].length; j++) {
					arr[index++] = digitBuckets[k][j];
				}
			}
		}
	}
	return arr;
}

// helper function to get the last n-th(position) digit of a number
var getDigit = function(num, position) {
	var num_length = num.toString().length;

	if (num_length < position)
		return 0;

	var radixPosition = Math.pow(10, position - 1); //number with the positions-th power of 10

	/*
    Logic: To find the 2nd digit of the number 123
	       we can divide it by 10, which is 12
	       and the using the modulus operator(%) we can find 12 % 10 = 2
    */
	var digit = (Math.floor(num / radixPosition)) % 10;

	return digit;
};

// helper function get the length of digits of the max value in this array
var getMaxDigitLen = function(arr) {
	var maxVal = Math.max.apply(Math, arr); //Finding max value from the array

	return Math.ceil(Math.log10(maxVal));
};

/******************* Testing Radix sort algorithm *********************/

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

arr = radixSort(arr);
console.log("Sorted array: ");
console.log(arr); //printing sorted array
