//Binary Search Implementation
function binarySearch(arr, item){
    var low = 0, high = arr.length - 1, mid, found = false;

    while(low <= high){
        mid = Math.floor((low+high)/2);

        if(arr[mid] === item){
            found = true;
            break;
        }
        else{
            if(item < arr[mid]){
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
    }

    return found;
}


/************ Testing Binary Search Implementation ***************/

// This list must be sorted. If it is not given as sorted, sort it first, then call the binarySearch method
var testList = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(binarySearch(testList, 3));
console.log(binarySearch(testList, 13));
