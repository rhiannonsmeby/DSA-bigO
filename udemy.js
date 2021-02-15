//Anagram
//given 2 strings, write a function to determine it the second string is an anagram
//of the first, an anagram is a word, phrase, or name formed by rearranging the 
//letters of another
//all inputs will be single words
//all letters will be lowercase
//input: 'iceman', 'cinema'
//output: true
//('','') //true
//('aaz','zza') //false
//solve with frequency counter: use an object, construct it using a loop, and a
//second loop that's not nested to maintain O(n)

function anagram(str1, str2) {
    //check that str1 and str2 are the same length
    if (str1.length !== str2.length) {
        return false;
    }
    //make object
    const lookup = {};

    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }
    console.log(lookup)

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(anagram('sky', 'pie'));
console.log(anagram('cinema', 'iceman'));
//any time you need to compare two pieces of data
//anagram, if numbers contain the same digits, etc.

//MULTIPLE POINTERS
//write a function, sumZero(), which accepts a sorted array of integers. The
//function should find the first pair  where the sum is 0. Return an array
//that includes both values that sum to 0 or undefined if the pair does not 
//exist
//array is sorted
//sumZero([-1, -2, -3, 1, 2, 3]) // [-1, 1]
//Naive solution:
function sumZero(arr) {
    //get number from array
    for (let i = 0; i < arr.length; i++) {
        //for that number, look at the rest of the array (i + 1) looking for 
        //something that adds to it to make it zero
        for (let j = i +1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
//time complexity: O(N^2)
//space complexity: O(1)
//with multiple pointers... start with one pointer on each end
//if the sum of the 1st pointer and the 2nd pointer is larger than 0,
//move the second pointer to the right
//if the sum is smaller than 0, move the 1st pointer to the left
//this will be O(n)
function refactoredSumZero(arr) {
    let left = 0; 
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right --;
        }
        else {
            left++;
        }
    }
}

//countUniqueValues accepts a sorted array, and counts the unique values in the
//array. There can be negative numbers in the array, but it will always be sorted
function countUniqueValues(arr) {
    //start a pointer at index 0 and at index 1 
    //use the array itself to build up the list of unique values
    //return the index of i + 1
    if(arr.length === 0) {
        return 0;
    }
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i, j)
    }
    return (i + 1)

}

console.log(countUniqueValues([1,1,1,1,1,2])) //2
console.log(countUniqueValues([1,2,3,4,5])) //5
//O(n) time

//SLIDING WINDOW
//involves creating a window which can either be an array of number from one position
//to another. Depending on a certian condition, the window either increases or
//closes (and a new window is created)
//useful for keeping track of a subset of data in an array/string etc.
//e.g. find the longest substring of unique chars "hellothere" //ll

//maxSubarraySum accepts an array of integers and a number called n. The function
//should calculate the maximum sum of n consecutive elements in the array
function maxSubarraySum(arr, num) {
    //naive implementation
    if (num > arr.length) {
        return null;
    }
    //could start at zero if we were only dealing with positive numbers
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) //10
console.log(maxSubarraySum([1,2,5,2,8,1,5]), 4) //17

function maxSubArraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    //edge case
    if (arr.length < n) {
        return null;
    }
    //create our first sum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //start this loop 
    for (let i = n; i < arr.length; i++) {
        //subtracting one of the array values and adding one value in, sliding
        //window
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))

//DIVIDE AND CONQUER
//involves dividing a data set into smaller chunks and the repeating a 
//process with a subset of data

//given a sorted array of integers, write a function called search that accepts
//a value and returns the index where the value passed to the function is 
//located, if the value in not found return -1
function search(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return i
        }
    }
    return -1;
} //O(n)- linear search

//binary search O(log n)
function searcher(arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < n) {
            min = middle + 1;
        }
        else if (currentElement > n) {
            max = middle - 1;
        }
        else {
            return middle
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4)) //3
console.log(search([1,2,3,4,5,6], 6)) //5
console.log(search([1,2,3,4,5,6], 11)) //-1

//practice challenges
//1. write a function called sameFrequency. given two positive integers, find out if
//the two numbers have the same frequency of digits
//must be O(n)
function sameFrequency(num1, num2) {
    return 'working'
}

console.log(sameFrequency(182, 182)) //true
console.log(sameFrequency(34,14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false

//2. write a function areThereDuplicates which accepts a variable number of
//arguments and checks whether there are any duplicates among the args passed in
//solve using frequency counter pattern or the multiple pointers pattern
function areThereDuplicates(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) {
        return false;
    }
    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) {
            return false
        }
    }
    return true;
}

console.log(areThereDuplicates(1,2,3)); //false
console.log(areThereDuplicates(1,2,2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

//multiple pointers
//3. averagePair is given a sorted array of integers and a target average 
//determine if there is a pair of values in the array where the average equals
//the target avg. There may be more than one pair that matches the avg target
function sampleInput(arr, avg) {
    //whatever
}

console.log(sampleInput([1, 2, 3], 2.5)) //true
console.log(sampleInput([1,3,3,5,6,7,10,12,19], 8)) //true
console.log(sampleInput([-1, 0, 3, 4, 5, 6], 4.1)) //false
console.log([], 4) //false

//4. isSubsequence takes two strings and checks whether the chars in the first
//string form a subsequence of the chars in the second string. aka the function 
//should check whether the chars in the first appear somewhere in the second
//without their order changing
function isSubsequence(str1, str2) {
    
}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('sing', 'sting')) //true
console.log(isSubsequence('abc', 'abracadabra')) //true
console.log(isSubsequence('abc', 'acb')) //false-- order matters

//Sliding Window
//5. minSubArrayLen accepts 2 params- arr of positive ints and a pos int, returns
//the minimal length of a contiguous subarray of which the sum if greater than or
//equal to the int passed into the function. if there isn't one, return 0 instead
function minSubArrayLen(arr, n) {

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) //2
console.log(minSubArrayLen([2,1,6,5,4], 9)) //2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) //1 bc 62 is bigger than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) //0

//6. findLongestSubstring accepts a string and returns the length of the longest
//substring with all distinct chars
function findLongestSubstring(str) {

}

console.log(findLongestSubstring('')) //0
console.log(findLongestSubstring('rithmschool')) //7
console.log(findLongestSubstring('thisisawesome')) //6
console.log(findLongestSubstring('bbbbbb')) //1