/* Linear Search implementation in JavaScript */

function linearSearch(arr, item) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		if (item === arr[i])
			return true; //You can also return the index from here
	}

	return false;
}


/************ Testing Linear Search implementation ****************/
var hayStack = ['book', 'pencil', 'pen', 'note book', 'sharpener', 'rubber']
var needle = 'note book';

console.log(linearSearch(hayStack, 'note book'));
console.log(linearSearch(hayStack, 'dog'));
